import { createStyles, Avatar, Text, Group, Box, Paper, Button, Grid, Stack, Divider, rem, useMantineTheme } from '@mantine/core';

import { Calendar } from '@mantine/dates';
import { DatePicker } from '@mantine/dates';
import { IconPhoneCall, IconAt } from '@tabler/icons-react';
import { useState } from 'react';
import 'dayjs/locale/ru';
import { TitleLabel, useHeadersStyles } from '../../../_styles/headers';
import { Table } from '@mantine/core';
import { innerPageMaxWidth } from '../../../CONSTS';




interface TProps {

}

export function PayHistory({ }: TProps) {
const theme = useMantineTheme();
    const elements = [
        { position: '01.01.2023',  mass: 'Оплачено', symbol: '5000', name: 'Общий анализ крови ', position2: '01.01.2023',  mass2: 'Оплачено', symbol2: '5000', name2: 'Общий анализ крови - Общий анализ крови' },
        { position: '01.02.2023',  mass: 'Оплачено', symbol: '5000', name: 'Общий анализ крови ', position2: '01.01.2023',  mass2: 'Оплачено', symbol2: '5000', name2: 'Общий анализ крови - Общий анализ крови' },
        { position: '01.03.2023',  mass: 'Оплачено', symbol: '5000', name: 'Полный анализ крови', position2: '01.01.2023',  mass2: 'Оплачено', symbol2: '5000', name2: 'Общий анализ крови - Общий анализ крови' },
        { position: '01.04.2023',  mass: 'Оплачено', symbol: '5000', name: 'Общий анализ крови ', position2: '01.01.2023',  mass2: 'Оплачено', symbol2: '5000', name2: 'Общий анализ крови - Общий анализ крови' },
        { position: '01.05.2023',  mass: 'Оплачено', symbol: '5000', name: 'Общий анализ крови ', position2: '01.01.2023',  mass2: 'Оплачено', symbol2: '5000', name2: 'Общий анализ крови - Общий анализ крови' },
      ];

    const rows = elements.map((element) => (
        <tr key={element.name}>
          <td>{element.position}</td>
          <td>{element.name}</td>
          <td>{element.symbol}</td>
          <td>{element.mass}</td>

          <td>{element.position2}</td>
          <td>{element.name2}</td>
          <td>{element.symbol2}</td>
          <td>{element.mass2}</td>
        </tr>
      ));

  const {classes : headerClasses } = useHeadersStyles();
  const [expanded, setExpanded] = useState(false);
  return (
    <Box maw={innerPageMaxWidth} sx={{overflow:'auto', border:'1px lightgray solid', boxSizing:'border-box', }}>
    <Table 
    //withBorder 
    miw={1200} sx={{borderBottom: '1px lightgray solid'}}>
      <thead>
        <tr>
          <th>Дата</th>
          <th>Назначение</th>
          <th>Сумма</th>
          <th>Статус</th>

          <th>Дата</th>
          <th>Назначение</th>
          <th>Сумма</th>
          <th>Статус</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
    <Group p='xs'>
    <TitleLabel>Всего оплачено: </TitleLabel>  <TitleLabel color='pink' sx={{color:theme.colors.virilisPink[0]}}>25000 ₽</TitleLabel> 
    </Group>
    </Box>
  );
}
