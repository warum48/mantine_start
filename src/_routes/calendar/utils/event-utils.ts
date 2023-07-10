let eventGuid = 0
let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today

export const INITIAL_EVENTS = [
 /* {
    id: createEventId(),
    title: 'Событие на целый день',
    start: todayStr
  },*/
  {
    id: createEventId(),
    title: 'Блок на 2 дня',
    start: todayStr,
    end: todayStr + 'T48:00:00',
    display:'block',
    overlap:true
  },
  {
    id: createEventId(),
    title: ' Событие во времени',
    start: todayStr + 'T13:00:00',
    end: todayStr + 'T16:00:00',
    display:'block',
    overlap:true,
color: 'purple'
  },
  {
    id: createEventId(),
    title: ' Событие по времени',
    start: todayStr + 'T14:00:00',
    display:'list-item',
    overlap:true,
  } ,




  {
    id: createEventId(),
    title: 'Блок на длинный срок',
    start: '2023-04-15' ,
    end: '2023-04-23' ,
    display:'block',
    overlap:true
  },
  {
    id: createEventId(),
    title: ' Событие во времени',
    start:  '2023-04-15'  + 'T13:00:00',
    display:'block',
    overlap:true,
color: 'purple'
  },
  {
    id: createEventId(),
    title: ' Событие по времени',
    start:  '2023-04-15'  + 'T14:00:00',
    display:'list-item',
    overlap:true,
  } ,
  {
    id: createEventId(),
    title: ' Событие по времени',
    start:  '2023-04-15'  + 'T15:00:00',
    display:'list-item',
    overlap:true,
  } 
]

export function createEventId() {
  return String(eventGuid++)
}
