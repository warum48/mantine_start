import * as React from 'react';

import { Aside, Box, Space, Stack, Title, Text, useMantineTheme } from '@mantine/core';

import { Title1_main, Title2_second, Title4_main, TitleLabel, useHeadersStyles } from '../../../_styles/headers';

export function AsideComp() {

   const theme = useMantineTheme(); 
  return (
    
    <Aside p="md" pt={36} hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }} >
        <Stack >
          {/*<h4> Записаться на прием </h4> <Space h='xs'/> */}
          <Title2_second>Самое важное</Title2_second>

          <Title4_main>Предстоящие посещения:</Title4_main>

          <Title4_main>Результаты анализов:</Title4_main>

          <Title4_main>Мой баланс:</Title4_main>
          
          <Title mt='-md' color={theme.colors.virilisPink[0]}><Text>4800р </Text></Title>
        </Stack>
      </Aside>
   
  );
}
