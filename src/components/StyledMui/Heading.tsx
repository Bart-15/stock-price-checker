import { styled, Typography } from '@mui/material';

export const H1Heading = styled(Typography)(({ theme }) => ({
  fontSize: '2rem', // Default font size for smaller screens
  fontWeight: 500,
  [theme.breakpoints.up('sm')]: {
    fontSize: '2.5rem', // Font size for small screens >= 600px
  },

  [theme.breakpoints.up('md')]: {
    fontSize: '3rem', // Font size for medium screens >= 960px
  },

  [theme.breakpoints.up('lg')]: {
    fontSize: '3.75rem', // Font size for large screens >= 1280px
  },

  [theme.breakpoints.up('xl')]: {
    fontSize: '4.5rem', // Font size for extra-large screens >= 1920px
  },
}));
