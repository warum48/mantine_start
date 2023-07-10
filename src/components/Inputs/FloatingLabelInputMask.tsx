// @tеs-nocheck
// input mask children type conflict

import * as React from 'react';
import { useEffect, useState } from 'react';
import InputMask from 'react-input-mask';
import {
  Stepper,
  Button,
  Group,
  TextInput,
  PasswordInput,
  Code,
  Box,
  useMantineTheme,
  Center,
  Title,
  Text,
  createStyles,
  rem,
  Radio,
  Stack,
  ActionIcon,
  Space,
  Select,
  Grid,
  Checkbox,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { FastCommentsCommentWidget } from 'fastcomments-react';
import { IconArrowLeft, IconArrowRight, IconSearch } from '@tabler/icons-react';

const useStylesInput = createStyles((theme, { floating }: { floating: boolean }) => ({
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
    top: rem(17), //rem(7),
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
    transform: floating ? `translate(0, ${rem(-14)})` : 'none', // -${theme.spacing.sm},  ${rem(-28)})` : 'none',
    fontSize: floating ? theme.fontSizes.xs : theme.fontSizes.sm,
    fontWeight: floating ? 500 : 400,
  },

  required: {
    transition: 'opacity 150ms ease',
    opacity: floating ? 1 : 0,
  },
}));

type TFloatingInputProps = {
  label: string;
  form: any;
  formField: string;
  mask?: string;
  [key: string]: any;
};
export function FloatingLabelInputMask({ label, form, formField,mask, ...props }: TFloatingInputProps) {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState('');
  const { classes } = useStylesInput({
    floating: ( form?.getInputProps(formField)?.value != undefined && form?.getInputProps(formField)?.value?.trim().length !== 0) || focused,
  });

  return (
    <InputMask
      //mask="99/99/9999"
mask={mask}
      {...form.getInputProps(formField)}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      // onChange={form.onChange}
    >
      {(inputProps: any) => (
        <TextInput
          label={label}
          // placeholder="OMG, it also has a placeholder"
          //required
          classNames={classes}
          //{...form.getInputProps(formField)}
          // value={value}
          //  onChange={(event) => setValue(event.currentTarget.value)}
          // onFocus={() => setFocused(true)}
          // onBlur={() => setFocused(false)}
          mt="md"
          autoComplete="on"//"off"//"no" //nope
          {...props}
          {...inputProps}
          //{...form.getInputProps('firstName')}
        />
      )}
    </InputMask>
  );
}
