import * as React from 'react';
import {FastCommentsCommentWidget} from 'fastcomments-react'



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
  
  export function Auth() { //enticationTitle
    const theme = useMantineTheme();
    return (
        <>
      <Container size={420} my={40}>
        <Title
          align="center"
          sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}
        >
          Добро пожаловать!
        </Title>
        <Text color="dimmed" size="sm" align="center" mt={5}>
          Нет аккаунта?{' '}
          <Anchor size="sm" component="button">
            Создать аккаунт
          </Anchor>
        </Text>
  
        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <TextInput label="Email" placeholder="you@yourmail.ru" required />
          <PasswordInput label="Пароль" placeholder="Ваш пароль" required mt="md" />
          <Group position="apart" mt="lg">
            <Checkbox label="Запомнить меня" />
            <Anchor component="button" size="sm">
              Забыли пароль?
            </Anchor>
          </Group>
          <Button fullWidth mt="xl">
            Войти
          </Button>
        </Paper>
      </Container>
      <Box
        // mx="xl"
        ml="-1px"
        pl="1px"
        mt="xl"
        sx={{
          background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
          boxShadow: 'inset 0px 4px 3px rgba(50, 50, 50, 0.25)',
          borderTop: '1px solid #202020',
        }}
      >
        <Box px="xl" pt="xl">
          <i>Здесь вы можете комментировать процесс разработки страницы:</i>

          <FastCommentsCommentWidget tenantId="2Nf0TURX_Hp" key={'comm' + theme.colorScheme} />
        </Box>
      </Box>
      </>
    );
  }