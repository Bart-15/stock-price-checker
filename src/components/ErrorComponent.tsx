import { Stack, Typography } from '@mui/material';
import { DangerButton } from './StyledMui/Buttons';

interface ErrorComponentProps {
  message: string;
  callback: () => void;
}

const ErrorComponent = ({ message, callback }: ErrorComponentProps) => (
  <Stack
    direction='column'
    justifyContent='center'
    alignItems='center'
    sx={{
      width: 1,
      height: '100vh',
    }}
  >
    <Typography variant='body1' gutterBottom>
      {message}
    </Typography>
    <DangerButton disableRipple onClick={() => callback()}>
      Reload Page
    </DangerButton>
  </Stack>
);

export default ErrorComponent;
