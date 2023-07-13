import * as React from 'react';

import { Anchor, Box, Group, Space, Stack, Tabs, Text } from '@mantine/core';

import { TextInfo, Title1_main, TitleLabel, useHeadersStyles } from '../../_styles/headers';
import { InnerPageContainer } from '../../components/Containers/InnerPageContainer';
import { NavLink } from 'react-router-dom';
import { RoutesTypes } from 'ROUTES';

export function Profile() {
  const userInfo = [
    {
      field: 'secondName',
      name: 'Фамилия',
      mock: 'Антонова',
      required: true,
      newValue: '',
      value: '',
    },
    { field: 'firstdName', name: 'Имя', mock: 'Анна', required: true, newValue: '', value: '' },
    {
      field: 'middleName',
      name: 'Отчество',
      mock: 'Антоновка',
      required: false,
      newValue: '',
      value: '',
    },
    {
      field: 'phone',
      name: 'Телефон',
      mock: '+71234567890',
      required: true,
      newValue: '',
      value: '',
      mask: '',
    },
    {
      field: 'email',
      name: 'Email',
      mock: 'mail@gmail.com',
      required: true,
      newValue: '',
      value: '',
      mask: '',
    },
    {
      field: 'birthday',
      name: 'Дата рождения',
      mock: '01.01.2001',
      required: true,
      newValue: '',
      value: '',
      mask: '',
    },
    {
      field: 'city',
      name: 'Город',
      mock: 'Санкт-Петербург',
      required: true,
      newValue: '',
      value: '',
      mask: '',
    },
    {
      field: 'address',
      name: 'Адрес',
      mock: 'Цветочный бульварб д.8 кв.88',
      required: true,
      newValue: '',
      value: '',
      mask: '',
    },
    { field: 'inn', name: 'ИНН', mock: '', required: false, newValue: '', value: '', mask: '' },
    { field: 'snils', name: 'Снилс', mock: '', required: false, newValue: '', value: '', mask: '' },
  ];
  return (
    <InnerPageContainer>
      <Box
        // maw={1200}
        mx="auto"
        w={'100%'}
        //mt="xl"
      >
        <Box mih={'80vh'}>
          {/*<h4> Записаться на прием </h4>*/}
          <Title1_main>Профиль</Title1_main>
          <Space h="xl" />
          <Tabs defaultValue="type1"
          styles={(theme) => ({
            tab: {
              ...theme.fn.focusStyles(),

              '&[data-active]': {
                backgroundColor: theme.colors.oceanBlue[0] //green[0]//theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
                //backgroundColor: theme.colors.blue[7],
                //borderColor: theme.colors.blue[7],
                //color: theme.white,
              },
              
            }})}
          >
            <Tabs.List>
              <Tabs.Tab
                value="type1"
                //icon={<IconPhoto size="0.8rem" />}
              >
                ИНФОРМАЦИЯ
              </Tabs.Tab>
              <Tabs.Tab
                value="type2"
                // icon={<IconMessageCircle size="0.8rem" />}
              >
                СМЕНИТЬ ПАРОЛЬ
              </Tabs.Tab>
            </Tabs.List>
            <Space h="xl" />
            <Tabs.Panel value="type1" pt="xs">
              <Stack>
                {userInfo.map((item, index) => (
                  <Group>
                    <TitleLabel>{item.name}:</TitleLabel>
                    <TextInfo>{item.mock ? item.mock : '-'}</TextInfo>
                  </Group>
                ))}

                <Space h="xl" />

                <NavLink to={RoutesTypes.Family}>
                  <Anchor size="sm" component="button">
                    Назначить главного Пациента
                  </Anchor>
                </NavLink>

                <NavLink to={RoutesTypes.Family}>
                  <Anchor size="sm" component="button">
                    Добавить родственника
                  </Anchor>
                </NavLink>
              </Stack>
            </Tabs.Panel>
            <Tabs.Panel value="type2" pt="xs"> сменить пароль </Tabs.Panel>
          </Tabs>
        </Box>
      </Box>
    </InnerPageContainer>
  );
}
