import { useState, useEffect } from 'react';
import { Switch } from '@mantine/core';
import { CookiesProvider, useCookies } from 'react-cookie';

export function DemoGuestSwitcher() {
  const [checked, setChecked] = useState(false);
  const [cookieToken, setCookieToken, removeCookieToken] = useCookies(['mednekot']);
  // const [cookies, setCookie] = useCookies(["mednekot"]);

  useEffect(() => {
    if (checked) {
      var d = new Date();
      d.setFullYear(d.getFullYear() + 100);
      setCookieToken('mednekot', '666', { path: '/', expires: d });
      // setCookieToken("mednekot", data.login?.token, { path: "/", expires: d });
    } else {
      removeCookieToken('mednekot', { path: '/' });
    }
  }, [checked]);

  return <Switch checked={checked} onChange={(event) => setChecked(event.currentTarget.checked)} />;
}
