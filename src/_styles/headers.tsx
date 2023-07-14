import { Title, Text, createStyles, rem, TitleProps } from '@mantine/core';
import { TAnyFields, TChildren } from '../_types/Types';

type TCustTitle = typeof Title;

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
  title4: {
    color: theme.colors.virilisPink[0], // theme.colors.gray[6], //theme.white,

    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 400,
    lineHeight: 1.05,
    maxWidth: rem(500),
    fontSize: rem(18),
    // zIndex:100,
    position: 'relative',
    display: 'block',

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      fontSize: rem(14),
      lineHeight: 1.15,
    },
  },
  title5: {
    color: theme.colors.oceanBlue[8], // theme.colors.gray[6], //theme.white,

    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 400,
    lineHeight: 1.05,
    maxWidth: rem(500),
    fontSize: rem(18),
    // zIndex:100,
    position: 'relative',
    display: 'block',

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      fontSize: rem(14),
      lineHeight: 1.15,
    },
  },
  basicInfo: {
    color: theme.colors.gray[8], //theme.white,

    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 300,
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

  name: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },
}));


export const Card_pretitle = ({ children }: TChildren) => {
  const { classes, theme } = useHeadersStyles();

  return (
<Text fz="xs" tt="uppercase" fw={700} c="dimmed">
                {children}
              </Text>

              
  )
}

export const Card_title = ({ children }: TChildren) => {
  const { classes, theme } = useHeadersStyles();

  return (
<Text fz="lg" fw={500} className={classes.name}>
                {children}
              </Text>)
}


export const TitleLabel = ({ children }: TChildren & TAnyFields) => {
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

export const TextInfo = ({ children }: TChildren & TAnyFields) => {
  const { classes, theme } = useHeadersStyles();

  return (
    <Title
    // sx={{ marginBottom: '-0.5rem' }}//'.25rem' }}
    >
      <Text className={classes.basicInfo} component="span" inherit>
        {children}
      </Text>
    </Title>
  );
};

export const Title2_second = ({ children }: TChildren) => {
    const { classes, theme } = useHeadersStyles();
  
    return (
        <Title>
        <Text className={classes.title2} component="span" inherit>
        {children}
        </Text>
      </Title>
    );
  };



export const Title4_second = ({ children }: TChildren) => {
    const { classes, theme } = useHeadersStyles();
  
    return (
      <Title
      // sx={{ marginBottom: '-0.5rem' }}//'.25rem' }}
      >
        <Text className={classes.title4} component="span" inherit>
          {children}
        </Text>
      </Title>
    );
  };

  export const Title4_main = ({ children }: TChildren) => {
    const { classes, theme } = useHeadersStyles();
  
    return (
      <Title
      // sx={{ marginBottom: '-0.5rem' }}//'.25rem' }}
      >
        <Text className={classes.title5} component="span" inherit>
          {children}
        </Text>
      </Title>
    );
  };

export const Title1_main = ({ children, ...props }: TitleProps ) => {//TChildren & TAnyFields) => {
  const { classes, theme } = useHeadersStyles();
  return (
    <Title {...props}>
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
