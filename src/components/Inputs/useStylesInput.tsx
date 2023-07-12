import { createStyles, rem } from "@mantine/core";

export const useStylesInput = createStyles((theme, { floating }: { floating: boolean }) => ({
    root: {
      position: 'relative',
    },
  
    input: {
      height: rem(54),
      paddingTop: rem(18),
    },
  
    /*label: {
        position: 'absolute',
        pointerEvents: 'none',
        fontSize: theme.fontSizes.xs,
        paddingLeft: theme.spacing.sm,
        paddingTop: `calc(${theme.spacing.sm} / 2)`,
        zIndex: 1,
      },*/
    label: {
      position: 'absolute',
      zIndex: 2,
      top: rem(10), //rem(7),
      left: theme.spacing.sm,
      pointerEvents: 'none',
      color: floating
        ? theme.colorScheme === 'dark'
          ? theme.white
          : theme.black
        : theme.colorScheme === 'dark'
        ? theme.colors.dark[3]
        : theme.colors.gray[5],
      transition: 'transform 150ms ease, color 150ms ease, font-size 150ms ease',
      transform: floating ? `translate(0, ${rem(-7)})` : 'none', // -${theme.spacing.sm},  ${rem(-28)})` : 'none',
      fontSize: floating ? theme.fontSizes.xs : theme.fontSizes.sm,
      fontWeight: floating ? 500 : 400,
    },
  
    required: {
      transition: 'opacity 150ms ease',
      opacity: 1//floating ? 1 : 0, // make asterisk appear only on focus
    },
  }));