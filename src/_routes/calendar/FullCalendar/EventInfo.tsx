import { Box, Grid, Link, Paper } from "@mui/material";
import { Link as RouterLink, useSearchParams } from "react-router-dom";
import {
  ContainerPaperWithPadding,
  ItemInfo,
  ItemName,
  SectionHeader,
  StyledButton,
} from "_componentslib";
import { formatDate } from "_utilslib";
import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import { BackButton } from "_shared/_components/Buttons/BackButton";

interface IProps {
  event: any;
  setEventView: React.Dispatch<React.SetStateAction<boolean>>;
  [key: string]: any;
}

export const EventInfo = ({ event, setEventView }: IProps) => {
  const theme = useTheme();
  return (
    <>
    {/*
    <BackButton onClick={() => setEventView(false)} sx={{mt:2}}/>
      <StyledButton onClick={() => setEventView(false)} sx={{mt:2}}>Назад</StyledButton>
     <Box>{JSON.stringify(event)}</Box> */}

      <Paper sx= {{pt:0, mb:0}}>
        <Grid
          container
          spacing={2}
          sx={{ 
            //minWidth: 600, 
            my: 0, 
            pb: 2 
          }}
          //key={"gri" + rerenderNum}
        >
            <Grid item xs={12} sx={{my:-4}}>
              <Box sx={{backgroundColor:event.backgroundColor, width:'100%', height:'4px', my:2}}></Box>
            </Grid>
            {/*
            <Grid item xs={12} sx={{mt:-2}}>
              <SectionHeader >Информация о событии:</SectionHeader>
            </Grid>
            * -------- */}
          <Grid item xs={3}>
            <ItemName>Название:</ItemName>
          </Grid>
          <Grid item xs={9}>
            <ItemInfo>{event.extendedProps.taskname}</ItemInfo>
          </Grid>
          {/** -------- */}
          <Grid item xs={3}>
            <ItemName>ID:</ItemName>
          </Grid>
          <Grid item xs={9}>
            <ItemInfo>{event.extendedProps.taskID}</ItemInfo>
          </Grid>
          {/** -------- */}
          <Grid item xs={3}>
            <ItemName>Адрес:</ItemName>
          </Grid>
          <Grid item xs={9}>
            <ItemInfo>{event.extendedProps.address}</ItemInfo>
          </Grid>
          {/** -------- */}
          <Grid item xs={3}>
            <ItemName>Исполнитель:</ItemName>
          </Grid>
          <Grid item xs={9}>
            <ItemInfo>{event.extendedProps.worker}</ItemInfo>
          </Grid>
          {/** -------- */}
          <Grid item xs={3}>
            <ItemName>Начало (план):</ItemName>
          </Grid>
          <Grid item xs={9}>
            <ItemInfo>{formatDate(event.start)}</ItemInfo>
          </Grid>
          {/** -------- */}
          <Grid item xs={3}>
            <ItemName>Окончание (план):</ItemName>
          </Grid>
          <Grid item xs={9}>
            <ItemInfo>{formatDate(event.end)}</ItemInfo>
          </Grid>
           {/** -------- */}
           <Grid item xs={3}>
            <ItemName>Начало (факт):</ItemName>
          </Grid>
          <Grid item xs={9}>
            <ItemInfo>{formatDate(event.extendedProps.startTE)}</ItemInfo>
          </Grid>
          {/** -------- */}
          <Grid item xs={3}>
            <ItemName>Окончание (факт):</ItemName>
          </Grid>
          <Grid item xs={9}>
            <ItemInfo>{formatDate(event.extendedProps.endTE)}</ItemInfo>
          </Grid>
          {/** -------- */}
          <Grid item xs={3}>
            <ItemName>Категория:</ItemName>
          </Grid>
          <Grid item xs={9}>
            <ItemInfo>{event.extendedProps.goodCategoryName}</ItemInfo>
          </Grid>
          {/** -------- */}
          <Grid item xs={3}>
            <ItemName>Производитель:</ItemName>
          </Grid>
          <Grid item xs={9}>
            <ItemInfo>{event.extendedProps.goodManufacturerName}</ItemInfo>
          </Grid>
          {/** -------- */}
          
          {event.extendedProps.teID && 
          <Grid item xs={12}>
            <Box sx={{pl:2}}>
            <ItemInfo>
              <Link
            component={RouterLink}
            to={"/reports/" + event.extendedProps.teID}
            target="_blank"
            sx={{
              color: theme.palette.text.primary,
              textDecorationColor: theme.palette.text.primary,
            }}
          >
            Больше информации о задаче
          </Link>
          </ItemInfo>
          </Box>
          </Grid>
}
          {/** -------- */}
        </Grid>
      </Paper>
    </>
  );
};

/*
{"allDay":false,"title":"Санкт-Петербург, Богатырский пр., 42","start":"2023-04-19T07:00:00+07:00","end":"2023-04-19T09:00:00+07:00","id":"49","display":"block","backgroundColor":"purple","borderColor":"purple","extendedProps":{"hoursStart":"07","hoursEnd":"09"}}
*/
