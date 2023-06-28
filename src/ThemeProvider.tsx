import { useTheme } from '@emotion/react';
import { ColorScheme, ColorSchemeProvider, MantineProvider, MantineThemeOverride, useMantineColorScheme } from '@mantine/core';
import { useState } from 'react';

/*
export const theme: MantineThemeOverride = {
  colorScheme: 'dark',
};*/

const myTheme: MantineThemeOverride = {
  //colorScheme: 'light',
  primaryColor: "teal"//'orange',
 // defaultRadius: 0,
};


interface ThemeProviderProps {
  children: React.ReactNode;
}

//const { colorScheme, toggleColorScheme } = useMantineColorScheme();

export function ThemeProvider({ children }: ThemeProviderProps) {

//const theme = //useTheme()
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
    theme={{ colorScheme, primaryColor: myTheme.primaryColor }}
    >
      {children}
    </MantineProvider>
    </ColorSchemeProvider>
  );
}
