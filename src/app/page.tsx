'use client';

import { H1Heading } from '@/components/StyledMui/Heading';
import { StyledTextInput } from '@/components/StyledMui/TextInput';
import { useDebounce } from '@/hooks/useDebounce';
import { useDidMountEffect } from '@/hooks/useDidMountEffect';
import { useSearchStock } from '@/hooks/useSearchStock';
import { CircularProgress, Container, InputAdornment } from '@mui/material';
import { useState } from 'react';

export default function Home() {
  const [search, setSearch] = useState('');

  const debouncedQuery = useDebounce<string>(search);

  const {
    transFormedData: stock,
    errMessage,
    setErrMessage,
    isError,
  } = useSearchStock(debouncedQuery);

  useDidMountEffect(() => {
    if (!search) {
      setErrMessage('');
      return;
    }
  }, [search]);

  return (
    <Container>
      <H1Heading align='center' variant='h2' gutterBottom>
        Stock Price Checker
      </H1Heading>

      {/* Text Field */}
      <StyledTextInput
        type='text'
        fullWidth
        placeholder='Search stocks ...'
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        helperText={errMessage ? errMessage : ''}
        error={errMessage ? true : false}
        InputProps={{
          endAdornment: (
            <InputAdornment position='end'>
              {search ? <CircularProgress color='success' size='2rem' /> : ''}
            </InputAdornment>
          ),
        }}
      />
    </Container>
  );
}
