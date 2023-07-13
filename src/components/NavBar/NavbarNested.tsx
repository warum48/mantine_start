import { Navbar, Group, Code, ScrollArea, createStyles, rem } from '@mantine/core';

import { UserButton } from '../UserButton/UserButton';
//import { LinksGroup } from '../NavbarLinksGroup/NavbarLinksGroup';
//import { Logo } from './Logo';
import { LinksGroup } from '../NavbarLinksGroup/NavbarLinksGroup';
import { Logo } from '../Logo/Logo';
import { RoutesTypes } from 'ROUTES';
import { pages } from '../../main';



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
    //backgroundColor:'white'
    //
  },
}));

export function NavbarNested({...props}) {
  const { classes } = useStyles();
  const links = pages.map((item) => <LinksGroup {...item}  key={item.label} />);

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