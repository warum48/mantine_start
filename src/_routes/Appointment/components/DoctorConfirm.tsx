import { Avatar, Box, Center, Checkbox, Group, Space, Stack, useMantineTheme } from '@mantine/core';
import * as React from 'react';
import { Card_pretitle, Card_title, TextInfo, TitleLabel } from '../../../_styles/headers';
import { FloatingLabelInput } from '../../../components/Inputs/FloatingLabelInput';
import { FloatingLabelInputMask } from '../../../components/Inputs/FloatingLabelInputMask';
import { StyledButton } from '../../../components/Buttons/StyledButton';

type TProps = {
  form?: any;
};
type UserInfoIconsProps = {
  avatar: string;
  name: string;
  title: string;
  phone: string;
  email: string;
};

export const DoctorConfirm = ({
  avatar,
  name,
  title,
  phone,
  email,
  form,
}: UserInfoIconsProps & TProps) => {
  const theme = useMantineTheme();
  return (
    <>
      <Box
        //maw={400}
        //mx="auto"
        mx={'0.25rem'}
        w={'100%'}
        mt="xl"
        p="md"
        // bga={theme.colors.oceanBlue[0]}
        sx={{ backgroundColor: theme.colors.oceanBlue[0] }}
      >
        {/*<TitleLabel>Информация о приеме:</TitleLabel> */}
        <Stack>
          <Group noWrap>
            <Avatar src={avatar} size={80} radius="md" />
            <Box>
              {' '}
              <Card_pretitle>Хирург</Card_pretitle>
              <Card_title>Иван Иванович Ивановский</Card_title>
            </Box>
          </Group>
          <Group>
            <TitleLabel>Направление:</TitleLabel> <TextInfo>Консультация педиатра</TextInfo>
          </Group>
          <Group>
            <TitleLabel>Адрес:</TitleLabel>{' '}
            <TextInfo>ДМЦ «Мамарада», Большевиков пр.,д.7, корп.3</TextInfo>
          </Group>
          <Group>
            <TitleLabel>Время и дата:</TitleLabel> <TextInfo>10:30, 4 августа, пятница</TextInfo>
          </Group>
          <Group>
            <TitleLabel>Стоимость:</TitleLabel> <TextInfo>2300 ₽</TextInfo>
          </Group>
        </Stack>
        <div></div>
      </Box>

      <Box
        mx={'0.25rem'}
        w={'100%'}
        mb="xl"
       // p="md"
        // bga={theme.colors.oceanBlue[0]}
        //sx={{backgroundColor:theme.colors.oceanBlue[0]}}
      >
         <Space h='md'/>
        <Checkbox
      label="Согласен на обработку персональных данных"
    />
    <Space h='xl'/>
        <Center>
          <StyledButton appearence="main_second">Оплатить</StyledButton>
        </Center>
      </Box>
    </>
  );
};
