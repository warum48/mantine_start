import * as React from 'react';
import { FastCommentsCommentWidget } from 'fastcomments-react';
import { Box, Button, Group, Stepper, TextInput, useMantineTheme } from '@mantine/core';
import { useState } from 'react';
import { nameVar } from '../../_apollo/state/Registration';
import makeVarPersisted from '../../utils/ApolloMakeVarPersisted';
import { useReactiveVar } from '@apollo/client';
import { Debugger } from '../../components/Debug/Debugger';
import { FormStep1 } from './components/FormStep1';
import { InputApolloPersist } from './components/InputApolloPersist';

export const Appointment = () => {
  const theme = useMantineTheme();

  const [active, setActive] = useState(0);
  const [highestStepVisited, setHighestStepVisited] = useState(active);

  const persistedNameVar = makeVarPersisted<string | undefined>(undefined, 'nameVar');
  const nameVar_re = useReactiveVar(nameVar);

  const handleStepChange = (nextStep: number) => {
    const isOutOfBounds = nextStep > 3 || nextStep < 0;

    if (isOutOfBounds) {
      return;
    }

    setActive(nextStep);
    setHighestStepVisited((hSC: any) => Math.max(hSC, nextStep));
  };

  const updateName = (e: React.ChangeEvent<HTMLInputElement>): void => {
    persistedNameVar(e.currentTarget.value);
    nameVar(e.currentTarget.value);
  };

  // Allow the user to freely go back and forth between visited steps.
  const shouldAllowSelectStep = (step: number) => highestStepVisited >= step && active !== step;
  return (
    <>
      <h4> Записаться на прием </h4>

      <Stepper active={active} onStepClick={setActive} breakpoint="sm">
        <Stepper.Step
          label="Шаг 1"
          description="Выбор "
          allowStepSelect={shouldAllowSelectStep(0)}
        >
          <Box>Шаг 1: Выбор </Box>
          {/*    <TextInput
     // rightSection={rightSection}
      label="Введите ваше настоящее имя"
      placeholder="Ваше имя"
      withAsterisk
      onChange={updateName}
    />
  */}

          <FormStep1 />
        </Stepper.Step>
        <Stepper.Step
          label="Шаг 2"
          description="Выбор 2"
          allowStepSelect={shouldAllowSelectStep(1)}
        >
          Шаг 2: Выбор 2
         {/* <InputApolloPersist/> */}
        </Stepper.Step>
        <Stepper.Step label="Шаг 3" description="Готово" allowStepSelect={shouldAllowSelectStep(2)}>
          Шаг 3: Выбор 3
        </Stepper.Step>

        <Stepper.Completed>Готово</Stepper.Completed>
      </Stepper>

      <Group position="center" mt="xl">
        <Button variant="default" onClick={() => handleStepChange(active - 1)}>
          Назад
        </Button>
        <Button onClick={() => handleStepChange(active + 1)}>Далее</Button>
      </Group>

      <Debugger>
        <Box>nameVar: {nameVar()}</Box>
        <Box>persistedNameVar: {persistedNameVar()}</Box>
        <Box>nameVar_re: {nameVar_re}</Box>
      </Debugger>

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
};

/*
Евгений, доброго дня! 
Хочу поднять важный вопрос. 
Надо повысить мою продуктивность выраженную в денежном эквиваленте) 
Как можно доиндексировать зарплату до того славного эквивалента, когда я устраивался на работу и курс был 66 а потом и выше расти?
Я планировал досеньориться до 3000$ в краткосрочной перспективе, но пока что все идет в обратную сторону.
Вопрос сопровождается предложениями). 

У нас сейчас идет обсуждение медицинского кабинета, давайте увеличим мое участие в этом процессе.
Я бы мог учавствовать в прототипировании этого портала, потом заниматься дизайном, 
я числился арт-директором несколько лет в одном из мест работы и этот навык бесследно не должен был исчезнуть.
Можно все планировать/рисовать в фигме, но у меня есть ИННОВАЦИОННАЯ идея)
Пользуясь библиотекой готовых компонентов (она еще шире, чем MUI) https://mantine.dev/ совместить процессы обсуждения/прототипирования/дизайна.
Это будет удобный и наглядный подход, который позволит ислючить повторения работы, упростить цепь 
"обсуждение - докфайл который гуляет по почтам, - ТЗ дизайнеру - диизайнер с фигмой - ТЗ фронту - сам фронтэнд"

Я накидал образец такой схемы https://mantine-start.vercel.app/
Идея такая - мы переносим все, что есть пока что в док файле в такой эскиз сайта 
(возможно, стоит перенести на наш хост и посомтреть еще альтернативы движку комментариев), где все уже будет разбито по будующим страницам, 
сначала содержимое каждого раздела прописываем просто списком, потом постепенно я визуализирую его мок-компонентами, дальше уже прописывать взаимодействие с вервером
А внизу под уже работающим интерфейсом секция комментов. 
При этом все могут комментировать что надо изменить, вести обсуждение и все это в одном месте.

Структура будет видна всем нагляднее, логика будет прорисовываться четче, общее позитвное ощущение от процесса, мне кажется, возрастет.
Это может касаться и любого другого старта

https://vc.ru/design/181226-poisk-dlya-internet-magazina-24-obyazatelnyh-elementa-kotorye-pomogut-pokupatelyam-nayti-nuzhnoe-i-uvelichat-konversiyu
https://quantumart.ru/products/qp8-search
https://quantumart.ru/products/qp8-search

ру
https://multisearch.io/pricing
https://searchbooster.io/ru/
https://1ps.ru/blog/dirs/2021/umnyij-poisk-na-sajte-preimushhestva-vozmozhnosti-i-sposobyi-nastrojki/
https://promosearch.ru/
https://kealabs.ru/


https://cusdis.com/doc#/
*/
