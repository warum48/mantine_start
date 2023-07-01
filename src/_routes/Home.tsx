import { List } from '@mantine/core';
import * as React from 'react';
import {FastCommentsCommentWidget} from 'fastcomments-react'

export const Home = () => {
  return (
    <>
      <h4>Информационная область Главной страницы содержит:</h4>
      <List size="sm">
        <List.Item>Записаться на прием/исследования/ОТМЕНИТЬ ЗАПИСЬ</List.Item>
        <List.Item>Планируемые посещения</List.Item>
        <List.Item>Запросы на документы</List.Item>
        <List.Item> Балансы/внести оплату или аванс</List.Item>
        <List.Item>ПОЛУЧИТЬ ОН ЛАЙН КОНСУЛЬТАЦИЮ </List.Item>
      </List>
 
    </>
  );
};
