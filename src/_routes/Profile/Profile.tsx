import * as React from 'react';

import { Anchor, Box, Divider, Group, PasswordInput, Space, Stack, Tabs, Text } from '@mantine/core';

import { TextInfo, Title1_main, TitleLabel, useHeadersStyles } from '../../_styles/headers';
import { InnerPageContainer } from '../../components/Containers/InnerPageContainer';
import { NavLink } from 'react-router-dom';
import { RoutesTypes } from 'ROUTES';
import { StyledButton } from '../../components/Buttons/StyledButton';
import { EditableText } from '../../components/Inputs/EditableText';
import { useState, useCallback } from 'react';
import {produce} from "immer";

export function Profile() {
  //const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {console.log(e)}
  /*const changeInfo = (text:string, fieldId: string) => {
    console.log(text, fieldId);
    //return e;
  }

  const handleToggle = useCallback((id) => {
    setTodos(
      produce((draft) => {
        const todo = draft.find((todo) => todo.id === id);
        todo.done = !todo.done;
      })
    );
  }, []); */

  const changeInfo= useCallback((text:string, fieldId: string) => {
    setUserInfo(
      produce((draft) => {
        const item = draft.find((item) => item.field === fieldId);
        if(item){
        item.newValue = text;
        }
      })
    );
  }, []);

  const resetChanges = () => {
    setUserInfo(
      produce((draft) => {
        draft.forEach((item) => {
          item.newValue = '';
        });
      })
    );
  };

  const [someValue, setSomeValue] = useState('');
  const [userInfo, setUserInfo] = useState([
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
      autosize: true
    },
    { field: 'inn', name: 'ИНН', mock: '', required: false, newValue: '', value: '', mask: '' },
    { field: 'snils', name: 'Снилс', mock: '', required: false, newValue: '', value: '', mask: '' },
  ]);
  return (
    <InnerPageContainer>
      <Box
        // maw={1200}
        mx="auto"
        w={'100%'}
        //mt="xl"
      >
        <Box 
       // mih={'80vh'}
       pb='xl'
        >
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
              <Stack 
              //w='100%'
              >
                {userInfo.map((item, index) => (
                  <Group 
                  //grow
                  >
                    <TitleLabel>{item.name}:</TitleLabel>
                   {/* <TextInfo>{item.mock ? item.mock : '-'}</TextInfo> */}
                   <EditableText autosize={item.autosize} text={item.newValue || item.mock} onChange={(e:React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => changeInfo(e.currentTarget.value, item.field)}/>
                  </Group>
                ))}

               
                <Group>
                  { userInfo.filter((item:any)=>item.newValue !='').length > 0 &&
                  <>
                   <StyledButton appearence={'main_cancel'} maw={150} onClick={resetChanges}>Отмена</StyledButton>
                <StyledButton appearence={'main_second'} maw={150}>Сохранить</StyledButton>
                </>
}
                </Group>
                
                <Divider/>
                

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
            <Tabs.Panel value="type2" pt="xs"> <Stack maw={320}>
            <PasswordInput label="Старый пароль" placeholder="Ваш пароль" required mt={'-.25rem'} />
            <PasswordInput label="Новый пароль (минимум 8 символов)" placeholder="Новый пароль" required mt="md" />
          <PasswordInput  placeholder="Повторите новый пароль" required 
         // mt="md" 
          />
          <StyledButton appearence={'main_second'} maw={150}>Сохранить</StyledButton>
              </Stack> </Tabs.Panel>
          </Tabs>
        </Box>
      </Box>
    </InnerPageContainer>
  );
}
