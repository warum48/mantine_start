/*import { ThemeProvider } from './ThemeProvider';
import { Welcome } from './Welcome/Welcome';

export default function App() {
  return (
    <ThemeProvider>
      <Welcome />
    </ThemeProvider>
  );
}
*/

import { useState } from 'react';
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Aside,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  Image
} from '@mantine/core';
import {FastCommentsCommentWidget} from 'fastcomments-react'

import React from 'react';
import { Group, ActionIcon, useMantineColorScheme, Box, rem } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons-react';
import { NavbarNested } from './components/NavBar/NavbarNested';
import { Outlet } from 'react-router-dom';
//import { Logo } from './_logo';

export function App() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      styles={{
        main: {
         // background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
         background: theme.colorScheme === 'dark' ? theme.colors.dark[9] : 'white',
         paddingLeft: 'calc(var(--mantine-navbar-width, 0) )' //+ 1rem
        },
      }}
      //padding='0'
      
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={
        //<Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>

        //</Navbar>
        <NavbarNested 

        px="lg" //md
        hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 280, lg: 350 }} />
      }
      /*aside={
        <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
          <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
            <Text>Application sidebar</Text>
          </Aside>
        </MediaQuery>
      }*/
     /* footer={
        <Footer height={60} p="md" fixed={false}>
          Лицензия и все прочее
        </Footer>
      }*/
      header={
        <Header 
        fixed={false}
        height={{ base: 80, md: 90 }} 
       // height="auto"
        p="md">
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              height: '100%',
              justifyContent: 'space-between',
            }}
          >
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>
            
            <Image 
            sx={{ height:'100%', maxWidth:'400px', marginRight: '1.5rem'}} 
            fit="contain"
            src="https://virilisgroup.ru/wp-content/themes/virilisgroup_grad/assets/img/logo_30.png"/>
            <Box
            // sx={{marginLeft:'100%'}}
            >
              <ActionIcon variant="default" onClick={() => toggleColorScheme()} size={30}>
                {colorScheme === 'dark' ? <IconSun size="1rem" /> : <IconMoonStars size="1rem" />}
              </ActionIcon>
            </Box>
          </Box>
        </Header>
      }
    >
      <Box 
      mx="xl"   
      my="-0.125rem"
      pb="xl"
      sx={{
     // background: theme.colorScheme === 'dark' ? theme.colors.dark[9] : 'white',
      }}
      >
      <Outlet/>
      </Box>
      <Box 
     // mx="xl"   
     ml="-1px"
     pl='1px'
      my="-0.125rem"
      sx={{
        background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        boxShadow:      'inset 0px 4px 3px rgba(50, 50, 50, 0.25)',
        borderTop: '1px solid #202020'
      }}
      >
        <Box p='md' pt='xl'><i>Здесь вы можете комментировать процесс разработки страницы:</i></Box>
       
      <FastCommentsCommentWidget tenantId="2Nf0TURX_Hp" key={"comm"+theme.colorScheme}/>
      </Box>
    </AppShell>
  );
}

//https://stackoverflow.com/questions/72429205/git-rebase-vs-checkout //

