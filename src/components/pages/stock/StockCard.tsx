import { Heading3 } from '@/components/StyledMui/Heading';
import { StyledPaper } from '@/components/StyledMui/StyledPaper';
import { formatCurrency } from '@/helpers/const';
import { StockData } from '@/types/data.types';
import { Box, Divider, Typography } from '@mui/material';

type StockCardProps = {
  stockData: StockData | null;
};

const StockCard = ({ stockData }: StockCardProps) => {
  return (
    <StyledPaper sx={{ marginTop: '15px' }}>
      <Heading3 gutterBottom>
        <strong>{stockData?.T}</strong>
      </Heading3>
      <Typography variant='body1' gutterBottom>
        Date: {new Date(stockData?.t as number).toUTCString()}
      </Typography>
      <Divider />
      <Box
        sx={{
          padding: '10px',
        }}
      >
        <Typography variant='body1' gutterBottom>
          Opening Price: {formatCurrency(stockData?.o as number)}
        </Typography>
        <Typography variant='body1' gutterBottom>
          Closing Price: {formatCurrency(stockData?.c as number)}
        </Typography>
        <Typography variant='body1' gutterBottom>
          Highest Price: {formatCurrency(stockData?.h as number)}
        </Typography>
        <Typography variant='body1' gutterBottom>
          Volume Traded: {formatCurrency(stockData?.v as number)}
        </Typography>
        <Typography variant='body1' gutterBottom>
          Volume-Weighted Average Price (VWAP):{' '}
          {formatCurrency(stockData?.vw as number)}
        </Typography>
        <Typography variant='body1' gutterBottom>
          Number of Trades: {formatCurrency(stockData?.vw as number)}
        </Typography>
      </Box>
    </StyledPaper>
  );
};

export default StockCard;
