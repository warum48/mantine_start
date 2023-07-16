import React, { useEffect, useState } from 'react';
//------MUI-----
//import { useTheme } from "@mui/material/styles";
/*import {
  Box,
  Divider,
  Stack,
  Tooltip,
  Typography,
  Button,
} from "@mui/material"; */
//------COMPONENTS----

import { useSearchParams } from 'react-router-dom';

//!!import { GlobalContext } from "_context/ContextGlobal";
import { ErrorBoundary } from 'react-error-boundary';

//import { Calendar, momentLocalizer } from "react-big-calendar";
//import moment from "moment";
//import "moment/locale/ru";
import { formatDate } from '@fullcalendar/core';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid'; // TODO check if I need it
import timeGridPlugin from '@fullcalendar/timegrid'; // TODO check if I need it
//import interactionPlugin from '@fullcalendar/interaction'
import { INITIAL_EVENTS, createEventId } from './utils/event-utils';

import './fullcalendar.css';
import ruLocale from '@fullcalendar/core/locales/ru';
import { gql, useQuery, useReactiveVar } from '@apollo/client';
//import { CalendarFilters } from "_components/Filters/CalendarFilters";

import { renderInnerContent } from './FullCalendar/renderInnerContent';
import { rendermoreLinkContent } from './FullCalendar/rendermoreLinkContent';
//import "react-big-calendar/lib/css/react-big-calendar.css";
//import 'react-big-calendar/lib/addons/dragAndDrop/styles'; // if using DnD

/*
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

*/

//import Checkbox from "@mui/material/Checkbox";
import { EventInfo } from './FullCalendar/EventInfo';
//import { zIndexMap } from "_zIndexMap";
import { Helmet } from 'react-helmet';
import { Box, Button, Grid, Group, Space, Stack, Tooltip } from '@mantine/core';
import { Title1_main, Title2_second, Title4_second } from '../../_styles/headers';
import { useCookies } from 'react-cookie';
import { InnerPageContainer } from '../../components/Containers/InnerPageContainer';
import { AppointmentItem } from './components/AppointmentItem';
//import { GET_CALENDAR } from "_apollo/queries/calendar/calendar";

export const CalendarPage = () => {
  const [cookieToken, setCookieToken, removeCookieToken] = useCookies(['mednekot']);
  //const theme = useTheme();
  //const localizer = momentLocalizer(moment);
  const [filtersCollapsed, setFiltersCollapsed] = useState(true);
  //!!const { SearchParamsService } = React.useContext(GlobalContext);
  const [calKey, setCalKey] = useState(0);
  const [events, setEvents] = useState([
    { title: 'Терапевт', date: '2023-07-12', start: '2023-07-12 12:20', end: '2023-07-12 12:40' },
    { title: 'Массаж', date: '2023-07-12', start: '2023-07-12 12:40', end: '2023-07-12 13:10' },
    {
      title: 'Детский Массаж',
      date: '2023-07-12',
      start: '2023-07-12 12:40',
      end: '2023-07-12 13:10',
    },
    {
      title: 'Хирург Хирург',
      date: '2023-07-14',
      start: '2023-07-14 15:00',
      end: '2023-07-14 15:30',
    },
  ]);

  const [eventView, setEventView] = useState(false);
  const [curEvent, setCurEvent] = useState(null);

  const userHasAppointments = true;

  const mockDoctor = {
    avatar:
      'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80',
    title: 'Хирург',
    name: 'Иван Иванович Ивановский',
    email: 'robert@glassbreaker.io',
    phone: '+11 (876) 890 56 23',
  };

  /*


  useEffect(() => {
    if (SearchParamsService.getSearchSearchParam() != "") {
      searchInputVar(SearchParamsService.getSearchSearchParam());
    }
  }, []);
 */
  const handleEventClick = (clickInfo: any) => {
    setEventView(true);
    setCurEvent(clickInfo.event);
  };

  /*
  const { loading, error, data, refetch, networkStatus } = useQuery(
    GET_CALENDAR,
    {
      // variables: { id: currentTEIDVar() },
      variables: {
        // page: page,
        filters: calendarFiltersVar_re, //filtersVar(), //, ...{storesIdes: 29297}
        // filters: {...filtersVar_re, ...{storesIdes: []}}
        //!! isPerekrestokFilterVar: isPerekrestokFilterVar_re,
      },
      notifyOnNetworkStatusChange: true,
    }
  );

  
  useEffect(() => {
    //console.log("+++calendarFiltersVar_re", calendarFiltersVar_re);
    if (data) {
      // console.log('data.getStKalendar.resultsList', data?.getStKalendar?.resultsList);

      const { resultsList } = data.getStKalendar;

      const INITIAL_EVENTS = resultsList.map((event: any, n: number) => ({
        //id: `id${n}`,
        id: n,
        taskID: event.task.id,
        teID: event.te?.id,
        title: event.te
          ? event.te?.user.name + " " + event.te?.user.surname
          : event.onlyUser
          ? event.onlyUser.name +
            " " +
            event.onlyUser.surname +
            
            "; " +
            event.task.goodManufacturerName
          : // event.store.address
            event.task.goodManufacturerName, //event.store.address,
        start:
          event.day +
          (event.hoursStart
            ? "T" + make2digit(event.hoursStart) + ":00:00"
            : ""),
        end:
          event.day +
          (event.hoursEnd ? "T" + make2digit(event.hoursEnd) + ":00:00" : ""),
        //display: 'list-item',
        display: "block",
        color: event.te ? "rebeccapurple" : "steelblue",
        hoursStart: make2digit(event.hoursStart), // ? make2digit(event.hoursStart) : null,
        hoursEnd: make2digit(event.hoursEnd), // ? make2digit(event.hoursEnd) : '',
        address: event.store.address,
        goodCategoryName: event.task.goodCategoryName,
        goodManufacturerName: event.task.goodManufacturerName,
        taskname: event.task.name,
        worker: event.te
          ? event.te?.user.name + " " + event.te?.user.surname
          : event.onlyUser
          ? event.onlyUser.name + " " + event.onlyUser.surname
          : " - ",
        startTE: event.te?.dateStart,
        endTE: event.te?.dateEnd,
      }));

      //console.log("-=======!!!==========INITIAL_EVENTS", INITIAL_EVENTS);
      setEvents(INITIAL_EVENTS);
      setCalKey(calKey + 1);
    } else {
      setEvents([]);
    }
  }, [data, calendarFiltersVar_re, isPerekrestokFilterVar_re]);

  */

  return (
    <InnerPageContainer>
      <Helmet>
        <title>Календарь</title>
      </Helmet>

      {/*
      <Dialog
        open={eventView}
        onClose={() => setEventView(false)}
        //scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">
          Информация о событии:
        </DialogTitle>
        <DialogContent
          sx={{ pb: "2px" }}
          //dividers={scroll === 'paper'}
        >
          <DialogContentText
            id="scroll-dialog-description"
            // ref={descriptionElementRef}
            tabIndex={-1}
          >
            <EventInfo event={curEvent} setEventView={setEventView} />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setEventView(false)}>Закрыть</Button>
        </DialogActions>
      </Dialog>
  */}

      <Box
        //maw={1200}
        mx="auto"
        w={'100%'}
        //mt="xl"
      >
        <Title1_main>Календарь посещений</Title1_main>
        <Space h='xl'/>
        <Grid gutter={'2.5rem'} >
          <Grid.Col span={12}>
          <Title4_second>Ближайшие записи:</Title4_second>
          <Space h='xl'></Space>
            <Group grow>
              
              {Array.from(Array(3)).map((item: any, index: number) => (
                <AppointmentItem timeStart={events[index].start} {...mockDoctor} />
              ))}
            </Group>
          </Grid.Col>
          <Grid.Col span={12}>
           <Space h='xl'/>
              <Box
                key={'index' + cookieToken}
                className="calendar_page_calendar"
                maw={1200}
                mt={'-1.1rem'}
                //sx={{
                //mt: { xs: 4, md: 0 },
                //  mt: 0
                //}}
              >
                {userHasAppointments ? (
                  <Box>
                    {events.length > 0 && (
                      <FullCalendar
                        fixedWeekCount={false}
                        //moreLinkContent={rendermoreLinkContent}
                        key={'ke' + calKey}
                        plugins={[
                          dayGridPlugin,
                          timeGridPlugin,
                          //interactionPlugin
                        ]}
                        headerToolbar={{
                          left: 'prev,next today',
                          center: 'title',
                          right: 'dayGridMonth,timeGridDay', //timeGridWeek,
                        }}
                        initialView="dayGridMonth"
                        // editable={true}
                        selectable={true}
                        selectMirror={true}
                        dayMaxEvents={true}
                        firstDay={1}
                        locale={ruLocale}
                        //initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
                        initialEvents={events} //{data.getStKalendar.resultsList}
                        eventClick={handleEventClick}
                        /*eventContent={(arg) => {
                      return (
                        <Tooltip
                         // placement="top"
                          label={
                            arg.event.title
                          }
                          zIndex={9999}
                         // sx={{zIndex:9999 + '!important'}}
                          //arrow
                          //style={{zIndex:9999 + '!important'}}
                        >
                          {renderInnerContent(arg)}
                        </Tooltip>
                      );
                    }} */
                      />
                    )}
                    {/*
                <TableAPIStatus
                  loading={loading}
                  data={data}
                  error={error}
                  //refetch={refetch}
                  //networkStatus={networkStatus}
                  //customError="Выбраны не все фильтры"
                  tableArray={events}
                  emptyArrayText="Не найдено событий, удовлетворяющих условиям фильтров"
                  />*/}
                  </Box>
                ) : (
                  <Box>Нет записей</Box>
                )}
              </Box>
              
          </Grid.Col>
        </Grid>
      </Box>
      {/*JSON.stringify(calendarFiltersVar_re)*/}
      {/*
    </> 
                )*/}
    </InnerPageContainer>
  );
};

//https://stackoverflow.com/questions/57194259/react-fullcalendar-v4-tooltip
