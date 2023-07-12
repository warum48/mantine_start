import * as React from 'react';
import { FastCommentsCommentWidget } from 'fastcomments-react';
import { Box, useMantineTheme } from '@mantine/core';

export function FastCommentBlock() {
  //enticationTitle
  const theme = useMantineTheme();

  return (
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
  );
}
