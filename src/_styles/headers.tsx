import { Title, Text, createStyles, rem } from '@mantine/core';
import { TChildren } from '../_types/Types';

export const useHeadersStyles = createStyles((theme) => ({
  title: {
    color: theme.colors.gray[6], //theme.white,

    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 300,
    lineHeight: 1.05,
    maxWidth: rem(500),
    fontSize: rem(30),
    // zIndex:100,
    position: 'relative',
    display: 'block',

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      fontSize: rem(20),
      lineHeight: 1.15,
    },
  },

  title2: {
    color: theme.colors.virilisPink[0], // theme.colors.gray[6], //theme.white,

    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 400,
    lineHeight: 1.05,
    maxWidth: rem(500),
    fontSize: rem(24),
    // zIndex:100,
    position: 'relative',
    display: 'block',

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      fontSize: rem(20),
      lineHeight: 1.15,
    },
  },

  title3: {
    color: theme.colors.gray[8], //theme.white,

    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 600,
    lineHeight: 1.05,
    maxWidth: rem(600),
    fontSize: '0.875rem', //rem(24),
    // zIndex:100,
    position: 'relative',
    display: 'block',

    [theme.fn.smallerThan('md')]: {
      // maxWidth: '100%',
      // fontSize: rem(20),
      // lineHeight: 1.15,
    },
  },
}));


export const TitleLabel = ({ children }: TChildren) => {
  const { classes, theme } = useHeadersStyles();

  return (
    <Title
    // sx={{ marginBottom: '-0.5rem' }}//'.25rem' }}
    >
      <Text className={classes.title3} component="span" inherit>
        {children}
      </Text>
    </Title>
  );
};

export const Title1_main = ({ children }: TChildren) => {
  const { classes, theme } = useHeadersStyles();
  return (
    <Title mb="xl">
      <Text
        className={classes.title}
        component="span"
        inherit
        variant="gradient"
        //gradient={{ from: 'DeepPink', to: 'pink' }}
        gradient={{ from: '#01868a', to: '#0ee57d' }}
      >
        {children}
      </Text>
    </Title>
  );
};
