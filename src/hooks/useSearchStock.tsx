import { keys } from '@/config/querykeys';
import { searchStock } from '@/services/stock.service';
import { Stock } from '@/types/data.types';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

export function useSearchStock(query: string) {
  const [errMessage, setErrMessage] = useState('');
  const [transFormedData, setTransformedData] = useState<Stock | null>(null);
  const checkErrorKey = 'Error Message';

  const data = useQuery({
    queryKey: [keys.queryStock, query],
    queryFn: () => searchStock(query),
    enabled: !!query,
  });

  const { data: stockData, isError, isLoading, isFetched, isFetching } = data;

  useEffect(() => {
    if (stockData) {
      setErrMessage('');
      const error = stockData.hasOwnProperty(checkErrorKey);

      if (stockData.hasOwnProperty('Information')) {
        alert(stockData.Information);
        setErrMessage('');
        return;
      }

      if (error) {
        setErrMessage(
          'Stock symbol not found. Please check the symbol and try again.',
        );
        setTransformedData(null);

        return;
      }

      const metaData = stockData['Meta Data'];
      const stockLatestData = stockData['Time Series (Daily)'];

      const firstDate = Object.keys(stockLatestData)[0];
      const firstEntry = stockLatestData[firstDate];

      setTransformedData({
        metaData,
        stockData: firstEntry,
      });
    }
  }, [stockData]);

  return {
    isError,
    isLoading,
    isFetched,
    isFetching,
    errMessage,
    setErrMessage,
    transFormedData,
  };
}
