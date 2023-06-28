import React, { createContext, useState, useEffect } from "react";
/*import {useSearchParamsService} from "_utilslib";
import type { TSearchParamsService } from "_utilslib";
import { useQuery } from "@apollo/client";
import { GET_SOURCES_PERMITION_OF_USER } from "_apollo/queries/getSourcesPermitionOfUser";
import { useUpdatingQuery } from "_serviceslib";
import { GET_LINK_ZIP_FILE } from "_apollo/queries/export/getLinkZipfile";
import { exportImagesZipFileNameVar } from "_apollo/state/Export_Images";
import { exportImagesZipLinkVar } from "_apollo/state/Export_Images";*/

interface IContext {

  token: string; //авторизация
  setToken: React.Dispatch<React.SetStateAction<string>>;
  pathtoserver:string;
/*  SearchParamsService: TSearchParamsService;  //много функций
  
  UpdatingQueryService: any;
  isDebug: boolean;
  setIsDebug: React.Dispatch<React.SetStateAction<boolean>>;*/
}

export const GlobalContext = createContext({} as IContext);

type Props = {
  children?: React.ReactNode;
};

//--------------component-----------

export const GlobalProvider = ({ children }: Props) => {
  const [token, setToken] = React.useState("");
 /* const [isDebug, setIsDebug] = useState<boolean>(false);
  const  {SearchParamsService} = useSearchParamsService();
  const  {UpdatingQueryService} = useUpdatingQuery(GET_LINK_ZIP_FILE, exportImagesZipFileNameVar, exportImagesZipLinkVar );
*/
 
  //let pathtoserver = "https://dev.shop-survey.ru:8002/";
  let pathtoserver = window.location.origin+"/";
  try{
    //console.log('try');
    if(  import.meta.env.VITE_PATH_TO_SERVER){
    pathtoserver = import.meta.env.VITE_PATH_TO_SERVER;
    }
  }catch(e){
    console.log(e);
  }




  const value = {
    token,
    setToken,
    pathtoserver,
   /* isDebug,
    setIsDebug,
    
    SearchParamsService,
    
    UpdatingQueryService*/
  };

  return (
      <GlobalContext.Provider value={value}>
          {children}
      </GlobalContext.Provider>
  );
};
