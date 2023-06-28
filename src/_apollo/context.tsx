import React, { createContext } from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
} from "@apollo/client";
//!!import { useCookies } from "react-cookie";


/*
const path = 
process.env.REACT_APP_PATH_TO_SERVER || 
"https://dev.shop-survey.ru:8002/";//"http://195.19.97.196:8002/"

let apolloServer = path + "graphql"; //http://195.19.97.196:8002/ //process.env.REACT_APP_PATH_TO_SERVER 
*/

//----------types------------
interface IContext {}

export const ApolloSettingsContext = createContext({} as IContext);

type Props = {
  children?: React.ReactNode;
};

//--------------component-----------
export const ApolloSettingsProvider = ({ children }: Props) => {
  //!!const [cookies, setCookie] = useCookies(["nekot"]);

  //!!const { pathtoserver } = React.useContext(GlobalContext);
  // ^ this causes filters refetching (and, highly likely, may be not just filters)
  //const { pathtoserver } =  React.useMemo(() => React.useContext(GlobalContext), [GlobalContext]); //свят свят свят, слава тебе господи это не сработало
  //let apolloServer = React.useMemo(() => pathtoserver + "graphql", [pathtoserver]);
  let pathtoserver = window.location.origin + "/";
  try {

    //if (import.meta.env.VITE_PATH_TO_SERVER) {
    //  pathtoserver = import.meta.env.VITE_PATH_TO_SERVER;
    //}

    //https://stackoverflow.com/questions/72128718/test-suite-failed-to-run-import-meta-env-vite
  } catch (e) {
    console.log(e);
  }
  // let apolloServer = "https://dev.shop-survey.ru/"  + "graphql";
  let apolloServer = pathtoserver + "graphql";

  const client = new ApolloClient({
    link: new HttpLink({
      uri: apolloServer,
      fetchOptions: {
        mode: "cors", // no-cors, *cors, same-origin //'*cors'//
      },
      headers: {
        Authorization: "Bearer ", //+ cookies.nekot, //token,
        "Access-Control-Allow-Origin": "*",
      }, //localStorage.getItem('token'),*/
    }),
    cache: new InMemoryCache(),
  });

  const value = {};

  return (
    <ApolloProvider client={client}>
      <ApolloSettingsContext.Provider value={value}>
        {children}
      </ApolloSettingsContext.Provider>
    </ApolloProvider>
  );
};
