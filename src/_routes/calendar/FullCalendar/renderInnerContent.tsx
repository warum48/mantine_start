
import { Box } from '@mantine/core';
import * as React from 'react';
export function renderInnerContent(innerProps: any) {
  //console.log('innerProps.event.extendedProps.hoursEnd', innerProps.event.extendedProps.hoursEnd);
  //console.log('innerProps.event.extendedProps.hoursEnd==null', innerProps.event.extendedProps.hoursEnd == null)
  //console.log('innerProps.event.extendedProps.hoursEnd==null', innerProps.event.extendedProps.hoursEnd == 'null')
    return (
      <Box className="fc-event-main-frame" sx={{cursor:"pointer"}}>
        {/*innerProps.timeText && (
          <div className="fc-event-time">{innerProps.timeText}</div>
        )*/}
        <div className="fc-event-title-container">
          <div className="fc-event-title fc-sticky">
            <b>
            {innerProps.event.extendedProps.hoursStart? innerProps.event.extendedProps.hoursStart: ''}
            {(innerProps.event.extendedProps.hoursEnd != null && innerProps.event.extendedProps.hoursEnd !='null' && innerProps.event.extendedProps.hoursEnd !='') ? '-' +innerProps.event.extendedProps.hoursEnd: ''} </b>
            {innerProps.event.title || <React.Fragment>&nbsp;</React.Fragment>}
          </div>
        </div>
      </Box>
    );
  }