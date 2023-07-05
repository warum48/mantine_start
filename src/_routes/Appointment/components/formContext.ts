import { createFormContext } from '@mantine/form';

interface UserFormValues {
  age: number;
  name: string;
  email:string;
}

// You can give context variables any name
export const [UserFormProvider, useUserFormContext, useUserForm] =
  createFormContext<UserFormValues>();