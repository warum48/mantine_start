import { createStyles, Avatar, Text, Group, Box, Paper, Button, Grid, Stack, Divider, rem } from '@mantine/core';

import { Calendar } from '@mantine/dates';
import { DatePicker } from '@mantine/dates';
import { IconPhoneCall, IconAt } from '@tabler/icons-react';
import { useState } from 'react';
import 'dayjs/locale/ru';
import { useHeadersStyles } from '../../../_styles/headers';
import { Table } from '@mantine/core';




interface TProps {

}

export function PayHistory({ }: TProps) {

    const elements = [
        { position: '01.01.2023',  mass: 'Оплачено', symbol: '5000', name: 'Общий анализ крови' },
        { position: '01.02.2023',  mass: 'Оплачено', symbol: '5000', name: 'Общий анализ крови' },
        { position: '01.03.2023',  mass: 'Оплачено', symbol: '5000', name: 'Полный анализ крови' },
        { position: '01.04.2023',  mass: 'Оплачено', symbol: '5000', name: 'Общий анализ крови' },
        { position: '01.05.2023',  mass: 'Оплачено', symbol: '5000', name: 'Общий анализ крови' },
      ];

    const rows = elements.map((element) => (
        <tr key={element.name}>
          <td>{element.position}</td>
          <td>{element.name}</td>
          <td>{element.symbol}</td>
          <td>{element.mass}</td>
        </tr>
      ));

  const {classes : headerClasses } = useHeadersStyles();
  const [expanded, setExpanded] = useState(false);
  return (
    <Table withBorder>
      <thead>
        <tr>
          <th>Дата</th>
          <th>Назначение</th>
          <th>Сумма</th>
          <th>Статус</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
}
