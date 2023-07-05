import { TextInput } from "@mantine/core";
import * as React from "react";
import makeVarPersisted from "../../../utils/ApolloMakeVarPersisted";
import { useReactiveVar } from "@apollo/client";
import { nameVar } from "../../../_apollo/state/Registration";

export const InputApolloPersist = () => {

    const persistedNameVar = makeVarPersisted<string | undefined>(undefined, 'nameVar');
    const nameVar_re = useReactiveVar(nameVar);

    const updateName = (e: React.ChangeEvent<HTMLInputElement>): void => {
        persistedNameVar(e.currentTarget.value);
        nameVar(e.currentTarget.value);
      };
    
    return(
        <TextInput
     // rightSection={rightSection}
      label="Запоминаемое поле"
      placeholder="Запоминаемое поле"
      withAsterisk
      onChange={updateName}
    />
    )
}