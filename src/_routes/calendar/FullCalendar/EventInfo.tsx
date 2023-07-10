//import { Box, Grid, Link, Paper } from "@mui/material";
//import { Link as RouterLink, useSearchParams } from "react-router-dom";
/*import {
  ContainerPaperWithPadding,
  ItemInfo,
  ItemName,
  SectionHeader,
  StyledButton,
} from "_componentslib";
import { formatDate } from "_utilslib";
import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";*/

import { Paper } from "@mantine/core";


interface IProps {
  event: any;
  setEventView: React.Dispatch<React.SetStateAction<boolean>>;
  [key: string]: any;
}

export const EventInfo = ({ event, setEventView }: IProps) => {
 // const theme = useTheme();
  return (
    <>
    {/*
    <BackButton onClick={() => setEventView(false)} sx={{mt:2}}/>
      <StyledButton onClick={() => setEventView(false)} sx={{mt:2}}>Назад</StyledButton>
     <Box>{JSON.stringify(event)}</Box> */}

      <Paper sx= {{pt:0, mb:0}}>
       
      </Paper>
    </>
  );
};

/*
{"allDay":false,"title":"Санкт-Петербург, Богатырский пр., 42","start":"2023-04-19T07:00:00+07:00","end":"2023-04-19T09:00:00+07:00","id":"49","display":"block","backgroundColor":"purple","borderColor":"purple","extendedProps":{"hoursStart":"07","hoursEnd":"09"}}
*/
