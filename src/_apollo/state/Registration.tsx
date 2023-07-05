import { ReactiveVar, makeVar } from "@apollo/client";


export const RegistrationFields = {
  name: {
    read() {
      return nameVar();
    },
  },

  
};

//---INIT VALUES---
export const nameInitValue = 'default name';

  //getYesterday()); //"2222-09-01";

//---VARS---
/**
 * график на главной
 */
export const nameVar: ReactiveVar<string> = makeVar<string>(
  nameInitValue
);

