import * as React from 'react';

import { Box, Space } from '@mantine/core';

import { Title1_main, Title2_second, TitleLabel, useHeadersStyles } from '../../_styles/headers';
import { InnerPageContainer } from '../../components/Containers/InnerPageContainer';
import { PayHistory } from './components/History';
import { innerPageMaxWidth } from '../../CONSTS';

export function Payments() {
  return (
    <InnerPageContainer>
      <Box
        maw={innerPageMaxWidth}
       // mx="auto"
        w={'100%'}
        //mt="xl"
      >
        <Box 
        //mih={'80vh'}
        >
          {/*<h4> Записаться на прием </h4>*/}
          <Title1_main>Платежи</Title1_main>
<Space h='xl'/>
          <Title2_second>История платежей</Title2_second>
          <Space h='xs'/>
          <PayHistory/>
        </Box>
      </Box>
    </InnerPageContainer>
  );
}
