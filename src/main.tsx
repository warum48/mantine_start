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

export type Foo = {
  /** some bar property **/
  bar: string;
};

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
