import { createTheme, ThemeOptions, ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { NextAppDirEmotionCacheProvider } from 'tss-react/next/appDir';

const themeOptions: ThemeOptions = {
  typography: {
    fontFamily: 'inherit',
    fontSize: 12,
  },
};

const theme = createTheme(themeOptions);

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NextAppDirEmotionCacheProvider options={{ key: 'mui' }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  );
}
