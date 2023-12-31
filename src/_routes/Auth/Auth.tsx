import * as React from 'react';
import { FastCommentsCommentWidget } from 'fastcomments-react';
import { useForm } from '@mantine/form';
import { NavLink as RouterLink, useSearchParams } from 'react-router-dom';

import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
  Box,
  useMantineTheme,
} from '@mantine/core';
import { Title1_main } from '../../_styles/headers';
import { FloatingLabelInputMask } from '../../components/Inputs/FloatingLabelInputMask';
import { FastCommentBlock } from '../../components/FastComment/FastCommentBlock';
import { RoutesTypes } from 'ROUTES';

export function Auth() {
  //enticationTitle
  const theme = useMantineTheme();

  const form = useForm({
    initialValues: {
      phone: '',
      password: '',

      /*
        firstName: '',
        middleName: '',
        lastName: '',
        
        comment: '',
        
        firstName_our: '',
        birthday: '',
  
        email: '',
        search: '',
        age: '', //age0-age3
        appointmentType: 'apt0', //apt0-3
        address: [''],
        // search: '',
  
        name: '',
        username: '',
        website: '',
        github: '',*/
    },

    validate: (values) => {
      return {
        /*firstName:
              values.firstName.trim().length < 2 ? 'Имя должно содержать хотя бы 2 буквы' : null,
            lastName:
              values.lastName.trim().length < 2 ? 'Фамилия должна содержать хотя бы 2 буквы' : null,
            // name: values.name.trim().length < 2 ? 'Имя должно содержать хотя бы 2 буквы' : null,
            email: /^\S+@\S+$/.test(values.email) ? null : 'Некорректный email',
            // username:values.username.trim().length < 2 ? 'Имя должно содержать хотя бы 2 буквы' : null,
            //password: values.password.length < 6 ? 'Пароль должен содержать хотя бы 6 знаков' : null,
            age:
              values.age.trim().length < 8 || values.age.trim().includes('_')
                ? 'Это поле обязательно'
                : null,
                */
      };
    },
  });

  return (
    <>
      <Container size={420} my={40}>
        {/* <Title
          align="center"
          variant="h4"
          sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}
        >
          Добро пожаловать!
    </Title> */}
        <Title1_main align="center">Добро пожаловать!</Title1_main>
        <Text color="dimmed" size="sm" align="center" mt={5}>
          Нет аккаунта?{' '}
          <RouterLink to={RoutesTypes.Registration}>
          <Anchor size="sm" component="button">
             Зарегистрироваться
          </Anchor>
          </RouterLink>
        </Text>

        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          {/*<TextInput label="Телефон" placeholder="you@yourmail.ru" required />*/}
          <FloatingLabelInputMask
            label="Телефон"
            form={form}
            formField="phone"
            required
            mask="+7 (999) 999-99-99"
            type="tel"
            //name="phone"
            //id="phone"
          />
          <PasswordInput label="Пароль" placeholder="Ваш пароль" required mt="md" />
          <Group position="apart" mt="lg">
            {/* <Checkbox label="Запомнить меня" /> */}
            <Anchor component="button" size="sm">
              Забыли пароль?
            </Anchor>
          </Group>
          <Button fullWidth mt="xl">
            Войти
          </Button>
        </Paper>
       
      </Container>
      <FastCommentBlock/>
    </>
  );
}
