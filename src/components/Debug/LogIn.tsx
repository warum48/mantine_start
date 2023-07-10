import { useState, useEffect } from 'react';
import { Button, Switch } from '@mantine/core';
import { CookiesProvider, useCookies } from 'react-cookie';

export function DemoLogIn() {
  
  const [cookieToken, setCookieToken, removeCookieToken] = useCookies(['mednekot']);
 // const [checked, setChecked] = useState(cookieToken ? true : false);//false);
  // const [cookies, setCookie] = useCookies(["mednekot"]);

const switchLogIn = () => {
    console.log('cookieToken', cookieToken.mednekot);
    if (!cookieToken.mednekot) {
      var d = new Date();
      d.setFullYear(d.getFullYear() + 100);
      setCookieToken('mednekot', '666', { path: '/', expires: d });
      // setCookieToken("mednekot", data.login?.token, { path: "/", expires: d });
    } else {
      removeCookieToken('mednekot', { path: '/' });
    }
  }

  return <Button compact 
 // variant="gradient" gradient={{ from: '#038d92', to: 'lime', deg: 105 }}
  onClick={switchLogIn}>{cookieToken.mednekot ? "Выход" : "Вход"}</Button> ;
}
