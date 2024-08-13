import { type UseQueryResult } from '@tanstack/react-query';

type StockCardProps = {
  data: UseQueryResult<any, Error>;
};

const StockCard = ({ data }: StockCardProps) => {
  const { data: stockData, isLoading, isError } = data;

  if (isError && !isLoading) {
    return <p>Ooops, something went wrong. Please try again later</p>;
  }
  return <p>Hello card</p>;
};

export default StockCard;
