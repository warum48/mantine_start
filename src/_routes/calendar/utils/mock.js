const ar = {
  data: {
    getStKalendar: {
      resultsList: [
        {
          daysOfWeek: "1,3",
          hoursStart: null,
          hoursEnd: null,
          day: "2023-03-01",
          store: {
            address:
              "\u0421\u0430\u043d\u043a\u0442-\u041f\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433, \u041f\u0443\u0448\u043a\u0438\u043d, \u0413\u0443\u0441\u0430\u0440\u0441\u043a\u0430\u044f \u0443\u043b\u0438\u0446\u0430, 4\u043a5",
            categoryId: 18,
            clientId: 11,
            __typename: "Store",
          },
          task: {
            id: 163,
            isPerekrestok: null,
            name: "\u041c\u0435\u0440\u0447\u0435\u043d\u0434\u0430\u0439\u0437\u0438\u043d\u0433 \u0427\u0438\u0441\u0442\u0430\u044f \u043b\u0438\u043d\u0438\u044f",
            __typename: "Task",
          },
          te: { id: 5012600, __typename: "TaskExecution" },
          __typename: "StoresTasksDateTimeSchedule",
        },
        {
          daysOfWeek: "1,3",
          hoursStart: null,
          hoursEnd: null,
          day: "2023-03-01",
          store: {
            address:
              "\u0421\u0430\u043d\u043a\u0442-\u041f\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433, \u041f\u0443\u0448\u043a\u0438\u043d, \u0413\u0443\u0441\u0430\u0440\u0441\u043a\u0430\u044f \u0443\u043b\u0438\u0446\u0430, 4\u043a5",
            categoryId: 18,
            clientId: 11,
            __typename: "Store",
          },
          task: {
            id: 163,
            isPerekrestok: null,
            name: "\u041c\u0435\u0440\u0447\u0435\u043d\u0434\u0430\u0439\u0437\u0438\u043d\u0433 \u0427\u0438\u0441\u0442\u0430\u044f \u043b\u0438\u043d\u0438\u044f",
            __typename: "Task",
          },
          te: { id: 5012600, __typename: "TaskExecution" },
          __typename: "StoresTasksDateTimeSchedule",
        },
      ],
    },
  },
};

export const INITIAL_EVENTS = [
     {
       id: 'id'+n,
       title: data.getStKalendar.resultsList[n].store.adress,
       start: data.getStKalendar.resultsList[n].day,
       display:'list-item',
     },
     {
        id: 'id'+n,
        title: data.getStKalendar.resultsList[n].store.adress,
        start: data.getStKalendar.resultsList[n].day,
        display:'list-item',
      },
    ]
