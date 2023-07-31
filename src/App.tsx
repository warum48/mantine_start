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
  IconPhone
} from '@tabler/icons-react';
import { NavbarNested } from './components/NavBar/NavbarNested';
import { Outlet } from 'react-router-dom';
import { DemoGuestSwitcher } from './components/Debug/GuestSwitch';
import { useCookies } from 'react-cookie';
import { DemoLogIn } from './components/Debug/LogIn';
import { AsideComp } from './_routes/Home/components/Aside';
//import { Logo } from './_logo';

export function App() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const [cookieToken, setCookieToken, removeCookieToken] = useCookies(['mednekot']);
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      styles={{
        main: {
          // background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
          //background: theme.colorScheme === 'dark' ? theme.colors.dark[9] : 'white',
          //background: theme.colorScheme === 'dark' ? theme.colors.dark[9] : 'linear-gradient(232deg, rgba(242,255,240,1) 0%, rgba(255,255,255,1) 20%)',
        //  to bright background: theme.colorScheme === 'dark' ? theme.colors.dark[9] : 'linear-gradient(232deg, rgba(242,255,240,1) 0%, #c9f5fa 20%)',
        // !! good - background: theme.colorScheme === 'dark' ? theme.colors.dark[9] : 'linear-gradient(232deg, rgba(242,255,240,1) 0%, #e8fdff 20%)',
        //background: theme.colorScheme === 'dark' ? theme.colors.dark[9] : 'linear-gradient(232deg, rgba(242,255,240,1) 0%,  #e8fdff 20% ,  #e8fdff 50% , #ede8ff 100% ) ',
     //!! top  background: theme.colorScheme === 'dark' ? theme.colors.dark[9] : 'linear-gradient(232deg, rgba(242,255,240,1) 0%,  #e8fdff 20% ,  #effeff 50% , #ede8ff 100% ) ',
     // background: theme.colorScheme === 'dark' ? theme.colors.dark[9] : 'linear-gradient(232deg, #f1f7e6 0%,  #e8fdff 20% ,  #effeff 50% , #ede8ff 100% ) ',
     background: theme.colorScheme === 'dark' ? theme.colors.dark[9] : 'linear-gradient(232deg, rgba(242,255,240,1) 0%,  #e8fdff 20% ,  #effeff 50% , #f1e8ff 100% ) ',

          paddingLeft: 'calc(var(--mantine-navbar-width, 0) )', //+ 1rem
          paddingTop: 'calc(var(--mantine-header-height, 0)  + 0.5rem)', //
         // paddingRight: {{ sm: 200, lg: 300 }},
        },
      }}
      //padding='0'

      navbarOffsetBreakpoint="0" //sm
      asideOffsetBreakpoint='0'//"sm"
      navbar={
        //<Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>

        //</Navbar>
        cookieToken.mednekot ? (
          <NavbarNested
            px="md" //"xl" //md
            hiddenBreakpoint="sm"
            hidden={!opened}
            width={{ sm: 280, lg: 350 }}
           // sx={{background: 'linear-gradient(38deg, #fccbf0 0%, #ffffff 37%)'}}
           // sx={{background: 'linear-gradient(18deg, #ffddf6 0%, #ffffff 27%)'}}
           sx={{background: 'linear-gradient(28deg, #ddfdff 0%, #ffffff 37%)'}} // !!blue 
          // !! pink  sx={{background: 'linear-gradient(28deg, #f7ddff 0%, #ffffff 30%)'}}
          />
        ) : undefined
      }
      aside={ true ? undefined : 
        <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
          {/*<Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
            <Text>Application sidebar</Text>
      </Aside>*/}
      <AsideComp/>
        </MediaQuery>
      }
      /* footer={
        <Footer height={60} p="md" fixed={false}>
          Лицензия и все прочее
        </Footer>
      }*/
      header={
        <Header
          fixed={false}
          height={{ base: 80, md: 100 }}
          // height="auto"
          p="xl"
          sx={{overflow:'hidden', padding:'1.25rem', 
          background: 'linear-gradient(164deg, #d3f8ff,  rgba(255,255,255,1) 70%);'
        }} //  // #fce7f8  //green #d5f9ec 30%, //pink #fce6fa  //pink2 #f8c7f4, 
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              height: '100%',
             // justifyContent: 'space-between',
            }}
          >
            <Box 
            className='left' 
            ></Box>
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>

<Box sx={{backgroundColor:'white', borderRadius:'100px', padding:'75px', paddingLeft:0, paddingRight:'40px'}}> 
            <Image
              sx={{ height: '100%', maxWidth: '400px', marginRight: '1.5rem' }}
              fit="contain"
              src="https://virilisgroup.ru/wp-content/themes/virilisgroup_grad/assets/img/logo_30.png"
            />
            </Box>



            <MediaQuery smallerThan="lg" styles={{ display: 'none' }}>
            <Group spacing={0} sx={{flexGrow:1, marginLeft:'70px', background:'white', borderRadius:'100px', padding:'4px', }}><Box sx={{background:'white', borderRadius:'100px', padding:'4px', width:'50px', height:'50px'}}><IconPhone size={40} color='#e64980' /></Box>
              <Box>
                
                <Title order={4} color="pink">
                  +7(812)424-64-74
                </Title>
                <Text fw={500} color="pink" fz="xs" sx={{ marginLeft: '0.33rem' }}>
                  Контактный центр 24 часа
                </Text>
              </Box>
              </Group>
            </MediaQuery>

            <DemoLogIn/>

{/*
            <Box>
              <u>Вход</u> / <u>Регистрация</u>
            </Box>

            <DemoGuestSwitcher />
          */}
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
       // mx={{lg:"3rem", md:'xl'}}
        //my="-0.125rem"
        my="xl"
        pb="xl"
        mih='80vh'
       // sx={{background: 'linear-gradient(189deg, rgba(169,242,155,0.43323266806722693) 0%, rgba(255,255,255,0) 100%);}'}}
      >
        <Outlet />
      </Box>
    </AppShell>
  );
}

//https://stackoverflow.com/questions/72429205/git-rebase-vs-checkout //
