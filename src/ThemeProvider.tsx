import { ColorScheme, ColorSchemeProvider, MantineProvider, MantineThemeOverride, useMantineColorScheme } from '@mantine/core';
import { useState } from 'react';

/*
export const theme: MantineThemeOverride = {
  colorScheme: 'dark',
};*/


interface ThemeProviderProps {
  children: React.ReactNode;
}

//const { colorScheme, toggleColorScheme } = useMantineColorScheme();

export function ThemeProvider({ children }: ThemeProviderProps) {


  const [colorScheme, setColorScheme] = useState<ColorScheme>('dark');

  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme = value || (colorScheme === 'dark' ? 'light' : 'dark');
    setColorScheme(nextColorScheme);
   // setCookie('mantine-color-scheme', nextColorScheme, { maxAge: 60 * 60 * 24 * 30 });
  };

  return (
    <ColorSchemeProvider 
    colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}
    >

    <MantineProvider withGlobalStyles withNormalizeCSS 
    //theme={theme}
    theme={{ colorScheme }}
    >
      {children}
    </MantineProvider>
    </ColorSchemeProvider>
  );
}
