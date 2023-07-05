import { useState } from 'react';
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
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { FastCommentsCommentWidget } from 'fastcomments-react';

export function Appointment() {
  const [active, setActive] = useState(0);
  const theme = useMantineTheme();

  const form = useForm({
    initialValues: {
      username: '',
      password: '',
      name: '',
      email: '',
      website: '',
      github: '',
    },

    validate: (values) => {
      if (active === 0) {
        return {
          username:
            values.username.trim().length < 2 ? 'Имя должно содержать хотя бы 2 буквы' : null,
          password: values.password.length < 6 ? 'Пароль должен содержать хотя бы 6 знаков' : null,
        };
      }

      if (active === 1) {
        return {
          name: values.name.trim().length < 2 ? 'Имя должно содержать хотя бы 2 буквы' : null,
          email: /^\S+@\S+$/.test(values.email) ? null : 'Некорректный email',
        };
      }

      return {};
    },
  });

  const nextStep = () =>
    setActive((current) => {
      if (form.validate().hasErrors) {
        return current;
      }
      return current < 3 ? current + 1 : current;
    });

  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <>
    <Box maw={1300} mx="auto" w={'100%'} mt="xl">
      <h4> Записаться на прием </h4>
      <Stepper active={active} breakpoint="sm">
        <Stepper.Step label="Шаг 1" description="Профайл">
          <Center>
            <Box maw={400} mx="auto" w={'100%'} mt="xl">
              <TextInput
                label="Аккаунт пользователя"
                placeholder="Аккаунт"
                {...form.getInputProps('username')}
              />
              <PasswordInput
                mt="md"
                label="Пароль"
                placeholder="Пароль"
                {...form.getInputProps('password')}
              />
            </Box>
          </Center>
        </Stepper.Step>

        <Stepper.Step label="Шаг 2" description="Персональная информация">
        <Box maw={400} mx="auto" w={'100%'} mt="xl">
          <TextInput label="Имя" placeholder="Имя" {...form.getInputProps('name')} />
          <TextInput mt="md" label="Email" placeholder="Email" {...form.getInputProps('email')} />
          </Box>
        </Stepper.Step>

        <Stepper.Step label="Завершение" description="Данные приема">
        <Box maw={400} mx="auto" w={'100%'} mt="xl">
          <TextInput label="..." placeholder="..." {...form.getInputProps('website')} />
          <TextInput mt="md" label="..." placeholder="..." {...form.getInputProps('github')} />
          </Box>
        </Stepper.Step>
        <Stepper.Completed>
          Готово! Данные формы:
          <Code block mt="xl">
            {JSON.stringify(form.values, null, 2)}
          </Code>
        </Stepper.Completed>
      </Stepper>

      <Group position="center" mt="xl">
        {active !== 0 && (
          //<Button variant="default" onClick={prevStep}>
          <Button
              variant="gradient"
              gradient={{ from: "#01868a", to: "#0dab5f" }}
              size="md"
             // size="xl"
              //className={classes.control}
             // mt={40}
              sx={{ borderRadius: '100px' }}
              onClick={prevStep}
            >
            Назад
          </Button>
        )}
        {active !== 3 && 
        <Button  variant="gradient"
        gradient={{ from: 'pink', to: "#ff3ebb" }}
        size="md"
        //className={classes.control}
        //mt={40}
        sx={{ borderRadius: '100px' }}onClick={nextStep}>Дальше</Button>}
      </Group>

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
      </Box>
    </>
  );
}
