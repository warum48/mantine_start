import * as React from 'react';
import { FastCommentsCommentWidget } from 'fastcomments-react';
import { useForm } from '@mantine/form';

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
import { Title1_main, TitleLabel } from '../../_styles/headers';
import { FloatingLabelInputMask } from '../../components/Inputs/FloatingLabelInputMask';
import { FastCommentBlock } from '../../components/FastComment/FastCommentBlock';
import { FloatingLabelInput } from '../../components/Inputs/FloatingLabelInput';

export function Registration() {
  //enticationTitle
  const theme = useMantineTheme();

  const form = useForm({
    initialValues: {
      phone: '',
      password: '',

      
        firstName: '',
        middleName: '',
        lastName: '',
        
        email: '',
        birthday: '',
  
      /*  
      comment: '',
       
        firstName_our: '',
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
      <Container size={500} mb={'xl'}>
        {/* <Title
          align="center"
          variant="h4"
          sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}
        >
          Добро пожаловать!
    </Title> */}
        <Title1_main align="center">Регистрация</Title1_main>
        

        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          {/*<TextInput label="Телефон" placeholder="you@yourmail.ru" required />*/}
          <TitleLabel>Ваши данные</TitleLabel>
          <FloatingLabelInput label="Имя " form={form} formField="firstName" required />
                    <FloatingLabelInput label="Фамилия " form={form} formField="lastName" required />
                    <FloatingLabelInput label="Отчество" form={form} formField="middleName" />
                    <FloatingLabelInput label="Email " form={form} formField="email" required />
                    {/* <FloatingLabelInput label="Отчество" form={form} formField="middleName" />
                    } <TextInput
                      label="Аккаунт пользователя"
                      placeholder="Аккаунт"
                      {...form.getInputProps('username')}
                    />*/}
                    <FloatingLabelInputMask
                      label="Телефон "
                      form={form}
                      formField="phone"
                      required
                      mask="+7 (999) 999-99-99"
                      type="tel"
                      //name="phone"
                      //id="phone"
                    />
                    <FloatingLabelInputMask
                      label="Дата рождения "
                      form={form}
                      formField="birthday"
                      required
                      mask="99.99.9999"
                      //type="tel"
                      
                    />
          <PasswordInput label="Пароль (минимум 8 символов)" placeholder="Ваш пароль" required mt="md" />
          <PasswordInput  placeholder="Повторите пароль" required mt="md" />
          
          <Button fullWidth mt="xl">
            Зарегистрироваться
          </Button>
        </Paper>
       
      </Container>
      <FastCommentBlock/>
    </>
  );
}
