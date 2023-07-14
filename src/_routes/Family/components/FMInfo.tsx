import * as React from 'react';

import {
  Anchor,
  Box,
  Divider,
  Group,
  PasswordInput,
  Space,
  Stack,
  Tabs,
  Text,
} from '@mantine/core';

import {
  Card_pretitle,
  Card_title,
  TextInfo,
  Title1_main,
  TitleLabel,
  useHeadersStyles,
} from '../../../_styles/headers';
import { InnerPageContainer } from '../../../components/Containers/InnerPageContainer';
import { NavLink } from 'react-router-dom';
import { RoutesTypes } from 'ROUTES';
import { StyledButton } from '../../../components/Buttons/StyledButton';
import { EditableText } from '../../../components/Inputs/EditableText';
import { useState, useCallback } from 'react';
import { produce } from 'immer';

type TProps = {
  expanded: boolean;
};
export function FMInfo({ expanded }: TProps) {
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

  const changeInfo = useCallback((text: string, fieldId: string) => {
    setUserInfo(
      produce((draft) => {
        const item = draft.find((item) => item.field === fieldId);
        if (item) {
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
    {
      field: 'firstName',
      name: 'Имя',
      mock: 'Анна',
      required: true,
      newValue: '',
      value: '',
      autosize: false,
    },
    {
      field: 'middleName',
      name: 'Отчество',
      mock: 'Антоновка',
      required: false,
      newValue: '',
      value: '',
    },

    /*   {
      field: 'email',
      name: 'Email',
      mock: 'mail@gmail.com',
      required: true,
      newValue: '',
      value: '',
      mask: '',
    }, */
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
      field: 'sex',
      name: 'Пол',
      mock: 'Женский',
      required: false,
      newValue: '',
      value: '',
      autosize: false,
    },
    {
      field: 'type',
      name: 'Родство',
      mock: 'Дочь',
      required: true,
      newValue: '',
      value: '',
      autosize: false,
    },
    {
      field: 'phone',
      name: 'Телефон родственника',
      mock: '+71234567890',
      required: true,
      newValue: '',
      value: '',
      mask: '',
    },

    {
      field: 'phone',
      name: 'Использовать как пользователя по умолчанию?',
      mock: 'Нет',
      required: true,
      newValue: '',
      value: '',
      mask: '',
    },
    /*
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
    }, */
    // { field: 'inn', name: 'ИНН', mock: '', required: false, newValue: '', value: '', mask: '' },
    // { field: 'snils', name: 'Снилс', mock: '', required: false, newValue: '', value: '', mask: '' },
  ]);
  return (
    <>
      <Card_pretitle>
        {userInfo.find((obj) => obj.field == 'type')?.newValue ||
          userInfo.find((obj) => obj.field == 'type')?.mock}
      </Card_pretitle>

      <Card_title>
        {userInfo.find((obj) => obj.field == 'lseconName')?.newValue ||
          userInfo.find((obj) => obj.field == 'secondName')?.mock}
        &nbsp;
        {userInfo.find((obj) => obj.field == 'firstName')?.newValue ||
          userInfo.find((obj) => obj.field == 'firstName')?.mock}
        &nbsp;
        {userInfo.find((obj) => obj.field == 'middleName')?.newValue ||
          userInfo.find((obj) => obj.field == 'middleName')?.mock}
      </Card_title>
      {expanded && (
        <>
          <Divider mt="xl"  mb="sm" />
          <Stack
          //w='100%'
          >
            {userInfo.map((item, index) => (
              <Group
              //grow
              key={'fi'+index}
              >
                <TitleLabel>{item.name}:</TitleLabel>
                {/* <TextInfo>{item.mock ? item.mock : '-'}</TextInfo> */}
                <EditableText
                  autosize={item.autosize}
                  text={item.newValue || item.mock}
                  onChange={(
                    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
                  ) => changeInfo(e.currentTarget.value, item.field)}
                />
              </Group>
            ))}

            <Group>
              {userInfo.filter((item: any) => item.newValue != '').length > 0 && (
                <>
                  <StyledButton appearence={'main_cancel'} maw={150} onClick={resetChanges}>
                    Отмена
                  </StyledButton>
                  <StyledButton appearence={'main_second'} maw={150}>
                    Сохранить
                  </StyledButton>
                </>
              )}
            </Group>
          </Stack>
        </>
      )}
    </>
  );
}
