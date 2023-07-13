/*import ReactDOM from 'react-dom/client';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);*/

import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from './ThemeProvider';
import "./styles_override.css";
//import "_mui/mui.css";
////import "_styles/reactselect.css";
import {App } from './App';
//import { RoutesTypes } from "./ROUTES";

import { RoutesTypes } from 'ROUTES';

//import { Execution } from "_routes/export/Execution";
//import { ExportPictures } from "_routes/export/Pictures";
//import { Auth } from "_routes/Auth";
//import { LightMode } from "_components/Settings/LightMode";
//-----------------------TYPES-------------------------
//import { RoutesTypes } from "ROUTES";

import { BrowserRouter, Routes, Route } from 'react-router-dom';
//
import { GlobalProvider } from '_context'; ///ContextGlobal
import { ApolloSettingsProvider } from '_apollo'; ///context
import { Home } from './_routes/Home/Home';
import { Appointment } from './_routes/Appointment/Appointment';
import { Auth } from './_routes/Auth/Auth';
import { CalendarPage } from './_routes/calendar/CalendarPage';
import { Documents } from './_routes/Documents/Documents';
import { Empty } from './_routes/Empty/Empty';
import { Registration } from './_routes/Auth/Registration';

import {
  IconNotes,
  IconCalendarStats,
  IconGauge,
  IconPresentationAnalytics,
  IconFileAnalytics,
  IconAdjustments,
  IconLock,
} from '@tabler/icons-react';
import { Payments } from './_routes/Payments/Payments';
import { Profile } from './_routes/Profile/Profile';
import { Family } from './_routes/Family/Family';
//
//import { Home } from "_routes/home/Home";
//import { Reports } from "_routes/reports/Reports";
//import ReportDetails from "_routes/reports/details/ReportDetails";

//import { LeafletPure } from "_componentslib";
//import { CookiesProvider, useCookies } from "react-cookie";
//import { MUIThemingProvider } from "_mui/MUIThemingContext";
//
//import {DebugExternalComponents} from "_components/debug/DebugExternalComponents"
//import { CalendarPage } from "_routes/calendar/CalendarPage";
//import { Orders } from "_routes/orders/Orders";
//import OrderDetails from "_routes/orders/details/OrderDetails";
////import { ExportPictures_debug } from "_routes/export/Pictures_debug";
//import { ExportPictures_progress } from "_routes/export/Pictures_progress";
//import { NotFound } from "_routes/404";
//import { Reasons } from "_routes/export/Reasons";
//import { ExportOrders } from "_routes/export/Orders";
//import OrderDetails from "_routes/orders/details/OrderDetails";

export const pages = [
  { label: 'Главная', icon: IconGauge, link: '/' },
  {
    label: 'Записаться на прием',
    icon: IconCalendarStats,
    link: RoutesTypes.Appointment
   /* links: [
      { label: 'Upcoming releases', link: '/' },
      { label: 'Previous releases', link: '/' },
      { label: 'Releases schedule', link: '/' },
    ],*/
  },

  {
    label: 'Личный кабинет / регистрация',
    icon: IconAdjustments,
    link: RoutesTypes.Auth
  }
  ,

  {
    label: 'Календарь посещений',
    icon: IconAdjustments,
    link: RoutesTypes.Calendar
  }
  ,

  {
    label: 'Документы',
    icon: IconAdjustments,
    link: RoutesTypes.Documents
  },

  {
    label: 'Платежи',
    icon: IconAdjustments,
    link: RoutesTypes.Payments
  },

  {
    label: 'Профиль',
    icon: IconAdjustments,
    link: RoutesTypes.Profile
  },

  {
    label: 'Моя семья',
    icon: IconAdjustments,
    link: RoutesTypes.Family
  },
/*
  {
    label: 'Результаты исследований',
    icon: IconAdjustments,
    link: RoutesTypes.Empty
  },

  {
    label: 'Члены семьи',
    icon: IconAdjustments,
    link: RoutesTypes.Empty
  },

  {
    label: 'История',
    icon: IconAdjustments,
    link: RoutesTypes.Empty
  },
  */

  /*
  {
    label: 'Раздел с подразделами',
    icon: IconNotes,
    initiallyOpened: false,
    links: [
      { label: 'Один', link: '/' },
      { label: 'Два', link: '/' },
      { label: 'Три', link: '/' },
      { label: 'Четыре', link: '/' },
    ],
  },*/

  /*
  { label: 'Analytics', icon: IconPresentationAnalytics },
  { label: 'Contracts', icon: IconFileAnalytics },
  { label: 'Settings', icon: IconAdjustments },
  {
    label: 'Security',
    icon: IconLock,
    links: [
      { label: 'Enable 2FA', link: '/' },
      { label: 'Change password', link: '/' },
      { label: 'Recovery codes', link: '/' },
    ],
  },
  */
];

const RootWrapper = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  // const [cookies, setCookie] = useCookies(["mednekot"]);
  //console.log('0704');
  //useEffect(() => {
  //console.log("cookies", cookies.mednekot);
  //}, [cookies]);

  return (
    <>
      {false ? ( //!cookies.mednekot ? ( // !isLoggedIn  //cookies.mednekot
        <>
          не авторизован
          {/*
          <Toolbar>
            <Grid container spacing={1} alignItems="center">
              <Grid item xs />

              <Grid item>
                <Box sx={{ display: "flex" }}>
                  
                  <LightMode />
                </Box>
              </Grid>
            </Grid>
          </Toolbar>
          <Auth setIsLoggedIn={setIsLoggedIn} />

  */}
        </>
      ) : (
        <Routes>
          <Route path="/" element={<App />}>
            <Route
              path={RoutesTypes.Home}
               element={<Home />}
            />
            <Route
              path={RoutesTypes.Appointment}
               element={<Appointment />}
            />
            <Route
              path={RoutesTypes.Calendar}
               element={<CalendarPage />}
            />
            <Route
              path={RoutesTypes.Documents}
               element={<Documents />}
            />
            <Route
              path={RoutesTypes.Empty}
               element={<Empty />}
            />
            <Route
              path={RoutesTypes.Auth}
               element={<Auth/>}
            />
            <Route
              path={RoutesTypes.Registration}
               element={<Registration/>}
            />
            <Route
              path={RoutesTypes.Payments}
               element={<Payments/>}
            />
            <Route
              path={RoutesTypes.Profile}
               element={<Profile/>}
            />
            <Route
              path={RoutesTypes.Family}
               element={<Family/>}
            />
          </Route>
        </Routes>
      )}
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <>
  <ThemeProvider>
    <BrowserRouter
    //basename="/aerovadim/surveer"
    >
      <ApolloSettingsProvider>
        <GlobalProvider>
          <RootWrapper />
        </GlobalProvider>
      </ApolloSettingsProvider>
    </BrowserRouter>
    </ThemeProvider>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();

//
//
