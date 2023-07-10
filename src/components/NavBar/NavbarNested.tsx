import { Navbar, Group, Code, ScrollArea, createStyles, rem } from '@mantine/core';
import {
  IconNotes,
  IconCalendarStats,
  IconGauge,
  IconPresentationAnalytics,
  IconFileAnalytics,
  IconAdjustments,
  IconLock,
} from '@tabler/icons-react';
import { UserButton } from '../UserButton/UserButton';
//import { LinksGroup } from '../NavbarLinksGroup/NavbarLinksGroup';
//import { Logo } from './Logo';
import { LinksGroup } from '../NavbarLinksGroup/NavbarLinksGroup';
import { Logo } from '../Logo/Logo';
import { RoutesTypes } from 'ROUTES';

const mockdata = [
  { label: 'Главная', icon: IconGauge, link: '/' },
  {
    label: 'Записаться на прием',
    icon: IconCalendarStats,
    link: RoutesTypes.Appointment
   /* links: [
      { label: 'Upcoming releases', link: '/' },
      { label: 'Previous releases', link: '/' },
      { label: 'Releases schedule', link: '/' },
    ],*/
  },

  {
    label: 'Личный кабинет / регистрация',
    icon: IconAdjustments,
    link: RoutesTypes.Auth
  }
  ,

  {
    label: 'Календарь посещений',
    icon: IconAdjustments,
    link: RoutesTypes.Calendar
  }
  ,

  {
    label: 'Документы',
    icon: IconAdjustments,
    link: RoutesTypes.Documents
  },
/*
  {
    label: 'Результаты исследований',
    icon: IconAdjustments,
    link: RoutesTypes.Empty
  },

  {
    label: 'Члены семьи',
    icon: IconAdjustments,
    link: RoutesTypes.Empty
  },

  {
    label: 'История',
    icon: IconAdjustments,
    link: RoutesTypes.Empty
  },
  */

  /*
  {
    label: 'Раздел с подразделами',
    icon: IconNotes,
    initiallyOpened: false,
    links: [
      { label: 'Один', link: '/' },
      { label: 'Два', link: '/' },
      { label: 'Три', link: '/' },
      { label: 'Четыре', link: '/' },
    ],
  },*/

  /*
  { label: 'Analytics', icon: IconPresentationAnalytics },
  { label: 'Contracts', icon: IconFileAnalytics },
  { label: 'Settings', icon: IconAdjustments },
  {
    label: 'Security',
    icon: IconLock,
    links: [
      { label: 'Enable 2FA', link: '/' },
      { label: 'Change password', link: '/' },
      { label: 'Recovery codes', link: '/' },
    ],
  },
  */
];

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    paddingBottom: 0,
  },

  header: {
    padding: theme.spacing.md,
    paddingTop: 0,
    marginLeft: `calc(${theme.spacing.md} * -1)`,
    marginRight: `calc(${theme.spacing.md} * -1)`,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  links: {
    marginLeft: `calc(${theme.spacing.md} * -1)`,
    marginRight: `calc(${theme.spacing.md} * -1)`,
  },

  linksInner: {
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
  },

  footer: {
    marginLeft: `calc(${theme.spacing.md} * -1)`,
    marginRight: `calc(${theme.spacing.md} * -1)`,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },
}));

export function NavbarNested({...props}) {
  const { classes } = useStyles();
  const links = mockdata.map((item) => <LinksGroup {...item}  key={item.label} />);

  return (
    <Navbar 
    //position={{ top: 0, left: 0 }}
    //fixed={false}
    //height={800} width={{ sm: 300 }} p="md" className={classes.navbar}
    {...props}
   //sx={{paddingTop:0}}
    >
     {/*} <Navbar.Section className={classes.header}>
        <Group position="apart">
          <Logo width={rem(120)} />
         
        </Group>
      </Navbar.Section> */}

      <Navbar.Section sx={{margingTop:50}}
      grow 
      className={classes.links} component={ScrollArea}>
        <div className={classes.linksInner}>{links}</div>
      </Navbar.Section>

      <Navbar.Section className={classes.footer}>
        <UserButton
          image="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
          name="Анна Антонова"
          email="anna_antonove@mail.ru"
        />
      </Navbar.Section>
    </Navbar>
  );
}