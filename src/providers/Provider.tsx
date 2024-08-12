'use client';

import { queryClient } from '@/config/queryClient';
import ThemeRegistry from '@/theme/ThemeRegistry';
import { QueryClientProvider } from '@tanstack/react-query';

function Provider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeRegistry>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ThemeRegistry>
  );
}

export default Provider;
