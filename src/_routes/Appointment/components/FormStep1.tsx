import { useForm } from '@mantine/form';
import { NumberInput, TextInput, Button, Box } from '@mantine/core';

export function FormStep1() {
  const form = useForm({
    initialValues: { name: '', email: '', age: 0 },

    // functions will be used to validate values at corresponding key
    validate: {
      name: (value:string) => (value.length < 2 ? 'Имя должно содержать хотя бы 2 буквы' : null),
      email: (value:string) => (/^\S+@\S+$/.test(value) ? null : 'Неверный email'),
      age: (value:number) => (value > 120 ? 'Вы не ошиблись?' : null),
    },
  });

  return (
    <Box maw={320} mx="auto">
      <form onSubmit={form.onSubmit(console.log)}>
        <TextInput label="Введите ваше настоящее имя" placeholder="Ваше имя" {...form.getInputProps('name')} />
        <TextInput mt="sm" label="Email" placeholder="Email" {...form.getInputProps('email')} />
        <NumberInput
          mt="sm"
          label="Возраст"
          placeholder="Возраст"
          min={0}
          max={99}
          {...form.getInputProps('age')}
        />
        <Button type="submit" mt="sm">
          Далее
        </Button>
      </form>
    </Box>
  );
}