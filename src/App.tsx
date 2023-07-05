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
  Image,
  TextInput,
  Title,
} from '@mantine/core';
import { FastCommentsCommentWidget } from 'fastcomments-react';

import React from 'react';
import { Group, ActionIcon, useMantineColorScheme, Box, rem } from '@mantine/core';
import {
  IconSun,
  IconMoonStars,
  IconSearch,
  IconArrowRight,
  IconArrowLeft,
} from '@tabler/icons-react';
import { NavbarNested } from './components/NavBar/NavbarNested';
import { Outlet } from 'react-router-dom';
import { DemoGuestSwitcher } from './components/Debug/GuestSwitch';
import { useCookies } from 'react-cookie';
//import { Logo } from './_logo';

export function App() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const [cookieToken, setCookieToken, removeCookieToken] = useCookies(['nekot']);
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      styles={{
        main: {
          // background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
          background: theme.colorScheme === 'dark' ? theme.colors.dark[9] : 'white',
          paddingLeft: 'calc(var(--mantine-navbar-width, 0) )', //+ 1rem
          paddingTop: 'calc(var(--mantine-header-height, 0)  + 0.5rem)', //
        },
      }}
      //padding='0'

      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={
        //<Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>

        //</Navbar>
         cookieToken.nekot  ?

       ( <NavbarNested
          px="md" //"xl" //md
          hiddenBreakpoint="sm"
          hidden={!opened}
          width={{ sm: 280, lg: 350 }}
        />) : undefined
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
          p="xl"
        >
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
              sx={{ height: '100%', maxWidth: '400px', marginRight: '1.5rem' }}
              fit="contain"
              src="https://virilisgroup.ru/wp-content/themes/virilisgroup_grad/assets/img/logo_30.png"
            />

            <TextInput
              icon={<IconSearch size="1.1rem" stroke={1.5} />}
              radius="xl"
              size="md"
              width="400px"
              rightSection={
                <ActionIcon size={32} radius="xl" color={theme.primaryColor} variant="filled">
                  {theme.dir === 'ltr' ? (
                    <IconArrowRight size="1.1rem" stroke={1.5} />
                  ) : (
                    <IconArrowLeft size="1.1rem" stroke={1.5} />
                  )}
                </ActionIcon>
              }
              placeholder="Поиск услуг и врачей"
              rightSectionWidth={42}
              sx={{ border: theme.colors.oceanBlue[8], width: '500px' }}
              // {...props}
            />

            <Box>
              <Title order={3} color="pink">
                +7(812)424-64-74
              </Title>
              <Text fw={500} color="pink" fz="sm" sx={{ marginLeft: '0.33rem' }}>
                Контактный центр 24 часа
              </Text>
            </Box>

            <DemoGuestSwitcher/>
{/*
            <Box
            // sx={{marginLeft:'100%'}}
            >
              <ActionIcon variant="default" onClick={() => toggleColorScheme()} size={30}>
                {colorScheme === 'dark' ? <IconSun size="1rem" /> : <IconMoonStars size="1rem" />}
              </ActionIcon>
            </Box> */}
          </Box>
        </Header>
      }
    >
      <Box
        mx="xl"
        my="-0.125rem"
        pb="xl"
        
      >
        <Outlet />
      </Box>
      
    </AppShell>
  );
}

//https://stackoverflow.com/questions/72429205/git-rebase-vs-checkout //
