import { keys } from '@/config/querykeys';
import { searchStock } from '@/services/stock.service';
import { StockData } from '@/types/data.types';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

export function useSearchStock(query: string) {
  const [errMessage, setErrMessage] = useState('');

  const [stockData, setStockData] = useState<StockData | null>(null);
  const {
    data: response,
    isLoading,
    isError,
    failureReason,
    isFetching,
  } = useQuery({
    queryKey: [keys.queryStock, query],
    queryFn: () => searchStock(query),
    enabled: !!query,
  });

  useEffect(() => {
    if (response) {
      setErrMessage('');
      if (response.resultsCount === 0 || response.status === 'ERROR') {
        setErrMessage(
          response.error ||
            'Stock symbol not found. Please check the symbol and try again.',
        );
        setStockData(null);

        return;
      }

      setStockData(response.results[0]);
    }
  }, [response]);

  return {
    response,
    stockData,
    errMessage,
    setErrMessage,
    isLoading,
    isFetching,
    isError,
    failureReason,
    setStockData,
  };
}
