import { Box, Center } from '@mantine/core';
import * as React from 'react';
import { TitleLabel } from '../../_styles/headers';
import { FloatingLabelInput } from '../../components/Inputs/FloatingLabelInput';
import { FloatingLabelInputMask } from '../../components/Inputs/FloatingLabelInputMask';

type TProps = {
    form: any;
}

export const AppointmentForm = ({form}:any) => {

    return (
        <Box 
        //maw={400} 
        //mx="auto"
        mx={'0.25rem'}
         w={'100%'} mt="xl">
                
                    {/*
                  <Box 
                  //maw={200} 
                 // mx="auto" 
                  w={'100%'}
                  mt="xl"
    > */}
                    <TitleLabel>Данные пациента</TitleLabel>
                    {/*<TextInput placeholder="Имя" label="Имя" {...form.getInputProps('name')} classNames={inputClasses}/> */}
                    {/*  <TextInput placeholder="Имя" label="Имя" {...form.getInputProps('firstName_our')} />
                     <TextInput placeholder="Фамилия" label="Фамилия" {...form.getInputProps('lastName')} />
                   <FloatingLabelInput
                    name="firstName"
                    id="firstName"
                      label="Имя"
                      //{...form.getInputProps('username')}
                      form={form}
                      formField="firstName"
                      required
                      sx={{ marginTop: '0.5rem !important' }}
                      mask="aaaaa"
                    /> */}
                    <FloatingLabelInput label="Имя" form={form} formField="firstName" required />
                    <FloatingLabelInput label="Фамилия" form={form} formField="lastName" required />
                    <FloatingLabelInput label="Отчество" form={form} formField="middleName" />
                    <FloatingLabelInput label="Email" form={form} formField="email" required />
                    {/* <FloatingLabelInput label="Отчество" form={form} formField="middleName" />
                    } <TextInput
                      label="Аккаунт пользователя"
                      placeholder="Аккаунт"
                      {...form.getInputProps('username')}
                    />*/}
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
                    <FloatingLabelInputMask
                      label="Дата рождения"
                      form={form}
                      formField="birthday"
                      required
                      mask="99.99.9999"
                      //type="tel"
                    />

                    {/*   <PasswordInput
                      mt="md"
                      label="Пароль"
                      placeholder="Пароль"
                      {...form.getInputProps('password')}
                    />
                   <TextInput label="Имя" placeholder="Имя" {...form.getInputProps('name')} />
                    <TextInput
                      mt="md"
                      label="Email"
                      placeholder="Email"
                      {...form.getInputProps('email')}
                  /> */}
                 {/* </Box> */}
                
              </Box>
    )
}