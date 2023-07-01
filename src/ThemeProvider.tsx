import { useTheme } from '@emotion/react';
import { ColorScheme, ColorSchemeProvider, MantineProvider, MantineThemeOverride, useMantineColorScheme } from '@mantine/core';
import { useState } from 'react';

/*
export const theme: MantineThemeOverride = {
  colorScheme: 'dark',
};*/

const myTheme: MantineThemeOverride = {
  //colorScheme: 'light',
  colors: {
    oceanBlue: ['#7AD1DD', '#5FCCDB', '#44CADC', '#2AC9DE', '#1AC2D9', '#11B7CD', '#09ADC3', '#0E99AC', '#128797', '#147885'],
    'bright-pink': ['#F0BBDD', '#ED9BCF', '#EC7CC3', '#ED5DB8', '#F13EAF', '#F71FA7', '#FF00A1', '#E00890', '#C50E82', '#AD1374'],
  },
 // primaryColor: "ocean-blue"//"teal"//'orange',
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
    theme={{ colorScheme, 
      colors: {
        oceanBlue: ['#cef1f6', '#9ce5ee', '#7bf0ea', '#6defe6', '#30dcdf', '#028375', '#028375', '#028375', '#028375', '#028375'],
      },
      primaryColor: 'oceanBlue'
      //primaryColor: myTheme.colors?.oceanBlue//'ocean-blue'
     // myTheme.primaryColor 
    }}
    >
      {children}
    </MantineProvider>
    </ColorSchemeProvider>
  );
}
