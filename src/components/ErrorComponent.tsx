import { Typography } from '@mui/material';

interface ErrorComponentProps {
  message: string;
}

const ErrorComponent = ({ message }: ErrorComponentProps) => (
  <Typography>{message}</Typography>
);

export default ErrorComponent;
