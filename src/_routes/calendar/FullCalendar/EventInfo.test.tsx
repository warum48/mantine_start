/*

import { fireEvent, render } from "@testing-library/react";
import { EventInfo } from "./EventInfo";

//1. Тест на отображение информации о событии:
describe("einfo", () => {
  test("renders event information", () => {
    const event = {
      allDay: false,
      title: "Санкт-Петербург, Богатырский пр., 42",
      start: "2023-04-19T07:00:00+07:00",
      end: "2023-04-19T09:00:00+07:00",
      id: "49",
      display: "block",
      backgroundColor: "purple",
      borderColor: "purple",
      extendedProps: {
        hoursStart: "07",
        hoursEnd: "09",
        address: "Санкт-Петербург, Богатырский пр., 42",
        worker: "Иванов Иван Иванович",
      },
    };
    const { getByText } = render(
      <EventInfo event={event} setEventView={() => {}} />
    );
    expect(getByText("Адрес:")).toBeInTheDocument();
    expect(
      getByText("Санкт-Петербург, Богатырский пр., 42")
    ).toBeInTheDocument();
    expect(getByText("Исполнитель:")).toBeInTheDocument();
    expect(getByText("Иванов Иван Иванович")).toBeInTheDocument();
    expect(getByText("Начало:")).toBeInTheDocument();
    expect(getByText("19 апреля 2023 г., 07:00")).toBeInTheDocument();
    expect(getByText("Окончание:")).toBeInTheDocument();
    expect(getByText("19 апреля 2023 г., 09:00")).toBeInTheDocument();
  });

  //2. Тест на отображение кнопки "Назад":
  test('renders "Назад" button', () => {
    const { getByText } = render(
      <EventInfo event={{}} setEventView={() => {}} />
    );
    expect(getByText("Назад")).toBeInTheDocument();
  });

  //3. Тест на вызов функции setEventView при клике на кнопку "Назад":
  test('calls setEventView function when "Назад" button is clicked', () => {
    const setEventView = jest.fn();
    const { getByText } = render(
      <EventInfo event={{}} setEventView={setEventView} />
    );
    fireEvent.click(getByText("Назад"));
    expect(setEventView).toHaveBeenCalled();
  });
});


*/

//import '@testing-library/jest-dom/extend-expect'

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import {EventInfo} from './EventInfo';
//import '@testing-library/jest-dom';
//import { expect, toBeInTheDocument } from '@jest/globals';
import { expect } from '@jest/globals';
//import '@testing-library/jest-dom';
//import {expect, jest, test} from '@jest/globals';
//import { expect } from 'expect';
//import '@testing-library/jest-dom/extend-expect'
//import {expect} from ';
//import {expect} from '@jest/expect'

const event = {
    allDay: false,
    title: 'Санкт-Петербург, Богатырский пр., 42',
    start: '2023-04-19T07:00:00+07:00',
    end: '2023-04-19T09:00:00+07:00',
    id: '49',
    display: 'block',
    backgroundColor: 'purple',
    borderColor: 'purple',
    extendedProps: {
      hoursStart: '07',
      hoursEnd: '09',
      address: 'Санкт-Петербург, Богатырский пр., 42',
      worker: 'Иванов Иван Иванович',
    },
  };

describe('EventInfo component', () => {
  test('renders event information', () => {
   
    const { getByText } = render(<EventInfo event={event} setEventView={() => {}} />);
    expect(getByText('Адрес:')).toBeInTheDocument();
    expect(getByText('Санкт-Петербург, Богатырский пр., 42')).toBeInTheDocument();
    expect(getByText('Исполнитель:')).toBeInTheDocument();
    expect(getByText('Иванов Иван Иванович')).toBeInTheDocument();
    expect(getByText('Начало:')).toBeInTheDocument();
    //expect(getByText('19 апреля 2023 г., 07:00')).toBeInTheDocument();
    expect(getByText('Окончание:')).toBeInTheDocument();
    //expect(getByText('19 апреля 2023 г., 09:00')).toBeInTheDocument();
  });

  test('renders "Назад" button', () => {
    const { getByText } = render(<EventInfo event={event} setEventView={() => {}} />);
    expect(getByText('Назад')).toBeInTheDocument();
  });

  test('calls setEventView function when "Назад" button is clicked', () => {
    const setEventView = jest.fn();
    const { getByText } = render(<EventInfo event={event} setEventView={setEventView} />);
    fireEvent.click(getByText('Назад'));
    expect(setEventView).toHaveBeenCalled();
  });
});
