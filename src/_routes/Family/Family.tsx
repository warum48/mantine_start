import * as React from 'react';

import { Box } from '@mantine/core';

import { Title1_main, TitleLabel, useHeadersStyles } from '../../_styles/headers';
import { InnerPageContainer } from '../../components/Containers/InnerPageContainer';

export function Family() {
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
          <Title1_main>Моя семья</Title1_main>
        </Box>
      </Box>
    </InnerPageContainer>
  );
}
