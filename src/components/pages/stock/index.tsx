'use client';

import ErrorComponent from '@/components/ErrorComponent';
import { useSearchStock } from '@/components/pages/stock/useSearchStock';
import { H1Heading } from '@/components/StyledMui/Heading';
import { useDebounce } from '@/hooks/useDebounce';
import { useDidMountEffect } from '@/hooks/useDidMountEffect';
import { Container } from '@mui/material';
import { useState } from 'react';
import SearchTextField from './SearchTextField';
import StockCard from './StockCard';

const Stocks = () => {
  const [search, setSearch] = useState('');

  const debouncedQuery = useDebounce<string>(search);

  const { setErrMessage, stockData, response, isError, isLoading, errMessage } =
    useSearchStock(debouncedQuery);

  useDidMountEffect(() => {
    if (!search) {
      setErrMessage('');
      return;
    }
  }, [search]);

  if (isError && !isLoading) {
    return (
      <ErrorComponent
        message='Ooops, something went wrong, please try again later'
        callback={() => window.location.reload()}
      />
    );
  }

  return (
    <Container>
      <H1Heading align='center' variant='h2' mt={10} gutterBottom>
        Stock Price Checker
      </H1Heading>

      <SearchTextField
        search={search}
        setSearch={setSearch}
        errMessage={errMessage}
        isLoading={isLoading}
      />

      {response?.resultsCount === 1 && <StockCard stockData={stockData} />}
    </Container>
  );
};

export default Stocks;
