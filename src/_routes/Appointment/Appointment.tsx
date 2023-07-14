import * as React from 'react';
import { useEffect, useState } from 'react';
import InputMask from 'react-input-mask';
import {
  Stepper,
  Button,
  Group,
  TextInput,
  PasswordInput,
  Code,
  Box,
  useMantineTheme,
  Center,
  Title,
  Text,
  createStyles,
  rem,
  Radio,
  Stack,
  ActionIcon,
  Space,
  Select,
  Grid,
  Checkbox,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { FastCommentsCommentWidget } from 'fastcomments-react';
import { IconArrowLeft, IconArrowRight, IconSearch } from '@tabler/icons-react';
import { UserInfoIcons } from './components/userInfoIcons';
import { FloatingLabelInput } from '../../components/Inputs/FloatingLabelInput';
import { FloatingLabelInputMask } from '../../components/Inputs/FloatingLabelInputMask';
import {
  TextInfo,
  Title1_main,
  Title2_second,
  TitleLabel,
  useHeadersStyles,
} from '../../_styles/headers';
import { InnerPageContainer } from '../../components/Containers/InnerPageContainer';

export function Appointment() {
  const [active, setActive] = useState(0);
  const [highestStepVisited, setHighestStepVisited] = useState(active);
  //const theme = useMantineTheme();
  const { classes, theme } = useHeadersStyles();
  // const { classes : inputClasses  } = useHeadersStylesInput();

  const [valueType, setValueType] = useState('react');
  const [valueAge, setValueAge] = useState('age3');
  const [valueAdress, setValueAdress] = useState<string[]>([]);

  const addressAr = [
    {name: "ДМЦ «Мамарада»", address:"Большевиков пр.,д.7,корп.3, Санкт-Петербург"},
{name: "ДМЦ «Аква-Доктор»", address:"СПб, Богатырский пр. д. 26 к.1"},
{name: "«Аква-Доктор Плавание»", address:"СПб, Богатырский пр. д. 22 к.1"},
{name: "ДМЦ «Вирилис»", address:"СПб, Ленинский пр. д. 108 к.1"},
{name: "ДМЦ «ОННИ»", address:"СПб, пр. Просвещения, д.ЗЗ к.2"},
{name: "ДМЦ «ЧудоДети»", address:"СПб, Бухарестская ул. дом 80"},
{name: "МЦ «Камала»", address:"СПб, Морская набережная, дом 21"},
  ];

  const profAr = [
    'Терапевт',
    'Педиатр',
    'Семейный врач',
    'Оториноларинголог',
    'Хирург',
    'Травматолог-ортопед',
    'Стоматолог',
    'Стоматолог-терапевт',
  ];
  const uslAr = [
    'ЛФК',
    'Вакцинация',
    'УЗИ',
    'ЭКГ',
    'Массаж',
    'Перевязка',
    'Анализы',
    'Прогревание',
    'Введение лекарственных препаратов',
    'ЛФК',
    'Вакцинация',
    'УЗИ',
    'ЭКГ',
    'Массаж',
    'Перевязка',
    'Анализы',
    'Прогревание',
    'Введение лекарственных препаратов',
    'ЛФК',
    'Вакцинация',
    'УЗИ',
    'ЭКГ',
    'Массаж',
    'Перевязка',
    'Анализы',
    'Прогревание',
    'Введение лекарственных препаратов',
    //"укол",
    /*  'Измерение массы тела ',
    'Измерение роста ',
    'Измерение частоты дыхания ',
    'Измерение частоты сердцебиения ',
    'Исследование пульса ',
    'Измерение артериального давления на периферических артериях',
    'Измерение центрального венозного давления ',
    'Термометрия общая ',
    'Подкожное введение лекарственных препаратов ',
    'Внутримышечное введение лекарственных препаратов ', */
    /* 'Диагностическая аспирация сустава ',
    'Внутрисуставное введение лекарственных препаратов ',
    'Получение материала из верхних дыхательных путей ',
    'Получение мокроты ',
    'Катетеризация кубитальной и других периферических вен',
    'Внутривенное введение лекарственных препаратов', */
  ];

  const mockDoctor = {
    avatar:
      'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80',
    title: 'Хирург',
    name: 'Иван Иванович Ивановский',
    email: 'robert@glassbreaker.io',
    phone: '+11 (876) 890 56 23',
  };

  const form = useForm({
    initialValues: {
      firstName: '',
      middleName: '',
      lastName: '',
      phone: '',
      comment: '',
      password: '',
      firstName_our: '',
      birthday: '',

      email: '',
      search: '',
      age: '', //age0-age3
      appointmentType: 'apt0', //apt0-3
      address: [''],
      // search: '',

      name: '',
      username: '',
      website: '',
      github: '',
    },

    validate: (values) => {
      if (active === 0) {
        return {
          // username:
          //   values.username.trim().length < 2 ? 'Имя должно содержать хотя бы 2 буквы' : null,
          // password: values.password.length < 6 ? 'Пароль должен содержать хотя бы 6 знаков' : null,
        };
      }

      if (active === 2) {
        return {
          firstName:
            values.firstName.trim().length < 2 ? 'Имя должно содержать хотя бы 2 буквы' : null,
          lastName:
            values.lastName.trim().length < 2 ? 'Фамилия должна содержать хотя бы 2 буквы' : null,
          // name: values.name.trim().length < 2 ? 'Имя должно содержать хотя бы 2 буквы' : null,
          email: /^\S+@\S+$/.test(values.email) ? null : 'Некорректный email',
          // username:values.username.trim().length < 2 ? 'Имя должно содержать хотя бы 2 буквы' : null,
          //password: values.password.length < 6 ? 'Пароль должен содержать хотя бы 6 знаков' : null,
          age:
            values.age.trim().length < 8 || values.age.trim().includes('_')
              ? 'Это поле обязательно'
              : null,
        };
      }

      return {};
    },
  });

  const nextStep = () =>
    setActive((current) => {
      if (form.validate().hasErrors) {
        console.log('!ERROR IN VALID');
        return current;
      }
      setHighestStepVisited((hSC) => Math.max(hSC, current < 5 ? current + 1 : current));
      return current < 5 ? current + 1 : current;
    });

  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  const shouldAllowSelectStep = (step: number) => highestStepVisited >= step && active !== step;

  useEffect(() => {
    const storedValue = window.localStorage.getItem('user-form') as string;
    if (storedValue) {
      try {
        form.setValues(JSON.parse(storedValue)); //window.localStorage.getItem('user-form')));
      } catch (e) {
        console.log('Failed to parse stored value');
      }
    }
  }, []);

  useEffect(() => {
    //window.localStorage.setItem('user-form', JSON.stringify(form.values));
    //!! assign the key password to the variable _ indicating it will be unused
    const { password: _, ...newObj } = form.values;
    window.localStorage.setItem('user-form', JSON.stringify(newObj));
  }, [form.values]);

  return (
    <InnerPageContainer className="appointment">
      <Box
        maw={1200}
        mx="auto"
        w={'100%'}
        //mt="xl"
      >
        <Box mih={'80vh'}>
          {/*<h4> Записаться на прием </h4>*/}
          <Title1_main>Записаться на прием</Title1_main>
          <Space h="xl" />

          <Stepper active={active} breakpoint="sm" onStepClick={setActive}>
            <Stepper.Step
              label="Шаг 1"
              description="Вводные данные"
              allowStepSelect={shouldAllowSelectStep(0)}
            >
              {/*} <Title mt="xl">
                <Text
                  className={classes.title2}
                  component="span"
                  inherit
                >
                  Вводные данные
                </Text>
  </Title> */}
              <Space h="xl" />
              <Title2_second>Вводные данные</Title2_second>
              <Box mb="xl">
                <Stack mt="xl" mb="xl">
                  <Radio.Group
                    name="appointment"
                    label="Тип приема"
                    {...form.getInputProps('appointmentType')}
                    //value={valueType}
                    //onChange={setValueType}
                    // description="This is anonymous"
                    // withAsterisk
                  >
                    <Group mt="xs">
                      <Radio value="apt0" label="В медцентре" />
                      <Radio disabled value="apt1" label="Телемедицина" />
                      <Radio disabled value="apt2" label="Вызов врача на дом" />
                      <Radio disabled value="apt3" label="Забор анализов" />
                    </Group>
                  </Radio.Group>

                  <Space h="xxs" />

                  <Radio.Group
                    name="age"
                    label="Возраст пациента"
                    {...form.getInputProps('age')}
                    //value={valueAge}
                    //onChange={setValueAge}
                    // description="This is anonymous"
                    // withAsterisk
                  >
                    <Group mt="xs">
                      <Radio value="age1" label="0-3" />
                      <Radio value="age2" label="6-16" />
                      <Radio value="age3" label="16-60" />
                      <Radio value="age4" label="60+" />
                    </Group>
                  </Radio.Group>

                  {/*  <Select
                    maw={400}
                    label="Удобный вам центр"
                    placeholder="ближайший"
                    searchable
                    nothingFound="No options"
                    data={['Адрес 1', '2ой адрес', 'Адрес 3', '4ый адрес']}
/> */}
                  <Space h="xxs" />
                  <Text className={classes.title3} component="span" inherit>
                    Выберите медцентр:
                  </Text>
                  <Checkbox.Group
                    //value={valueAdress} onChange={setValueAdress}
                    {...form.getInputProps('address')}
                  >
                    <Group spacing="xl">
                      <Stack spacing="xs">
                        {addressAr.slice(0, 3).map((item, index) => (
                          <Checkbox
                            value={'ad' + index}
                            //label={item}
                            label={
                              <>
                                <TitleLabel>{item.name}</TitleLabel>
                                <Space h='xs'/>
                                <TextInfo>{item.address}</TextInfo>
                                <Space h='xs'/>
                              </>
                            }
                          />
                        ))}
                      </Stack>
                      <Stack spacing="xs">
                        {addressAr.slice(3, 6).map((item, index) => (
                          <Checkbox value={'ad' + (index + 3)} label={
                            <>
                              <TitleLabel>{item.name}</TitleLabel>
                              <Space h='xs'/>
                              <TextInfo>{item.address}</TextInfo>
                              <Space h='xs'/>
                            </>
                          } />
                        ))}
                      </Stack>
                    </Group>
                  </Checkbox.Group>
                </Stack>
              </Box>
            </Stepper.Step>

            <Stepper.Step
              label="Шаг 2"
              description="Данные о приеме"
              allowStepSelect={shouldAllowSelectStep(1)}
            >
              <Box>
                <Space h="xl" />
                <Title>
                  <Text className={classes.title2} component="span" inherit>
                    Выбор специалиста / услуги
                  </Text>
                </Title>
                <Stack mt="xl">
                  <TextInput
                    icon={<IconSearch size="1.1rem" stroke={1.5} />}
                    radius="xl"
                    size="md"
                    width="400px"
                    rightSection={
                      <ActionIcon size={32} radius="xl" color={theme.primaryColor} variant="filled">
                        {theme.dir === 'ltr' ? (
                          <IconArrowRight size="1.1rem" stroke={1.5} />
                        ) : (
                          <IconArrowLeft size="1.1rem" stroke={1.5} />
                        )}
                      </ActionIcon>
                    }
                    placeholder="Поиск услуг и врачей"
                    rightSectionWidth={42}
                    sx={{ border: theme.colors.oceanBlue[8], width: '500px' }}
                    {...form.getInputProps('search')}
                    // {...props}
                  />
                  <Space h="xxs" />
                  <Title>
                    <Text className={classes.title3} component="span" inherit>
                      По специальности ( <u>популярные</u> / <u>все</u> )
                    </Text>
                  </Title>

                  <Group>
                    {profAr.map((item: string, index: number) => (
                      <Button variant="outline">{item}</Button>
                    ))}
                  </Group>
                  <Space h="xxs" />
                  <Title>
                    <Text className={classes.title3} component="span" inherit>
                      По услугам ( <u>популярные</u> / <u>все</u> )
                    </Text>
                  </Title>

                  <Group spacing="xs">
                    {uslAr.map((item: string, index: number) => (
                      <Button variant="default" compact sx={{ fontWeight: 300 }}>
                        {item}
                      </Button>
                    ))}
                  </Group>
                  <Space h="xxs" />
                  <Title>
                    <Text className={classes.title3} component="span" inherit>
                      Наши врачи ( <u>популярные</u> / <u>все</u> )
                    </Text>
                  </Title>
                  <Grid>
                    {Array.from(Array(15)).map((item: any, index: number) => (
                      <UserInfoIcons {...mockDoctor} />
                    ))}
                  </Grid>
                </Stack>
              </Box>
            </Stepper.Step>

            <Stepper.Step
              label="Шаг 3"
              description="Персональная информация"
              allowStepSelect={shouldAllowSelectStep(2)}
            >
              <Box maw={400} mx="auto" w={'100%'} mt="xl">
                <Center>
                  <Box maw={400} mx="auto" w={'100%'} mt="xl">
                    <TitleLabel>ФИО пациента</TitleLabel>
                    {/*<TextInput placeholder="Имя" label="Имя" {...form.getInputProps('name')} classNames={inputClasses}/> */}
                    {/*  <TextInput placeholder="Имя" label="Имя" {...form.getInputProps('firstName_our')} />
                     <TextInput placeholder="Фамилия" label="Фамилия" {...form.getInputProps('lastName')} />
                   <FloatingLabelInput
                    name="firstName"
                    id="firstName"
                      label="Имя"
                      //{...form.getInputProps('username')}
                      form={form}
                      formField="firstName"
                      required
                      sx={{ marginTop: '0.5rem !important' }}
                      mask="aaaaa"
                    /> */}
                    <FloatingLabelInput label="Имя" form={form} formField="firstName" required />
                    <FloatingLabelInput label="Фамилия" form={form} formField="lastName" required />
                    <FloatingLabelInput label="Отчество" form={form} formField="middleName" />
                    <FloatingLabelInput label="Email" form={form} formField="email" required />
                    {/* <FloatingLabelInput label="Отчество" form={form} formField="middleName" />
                    } <TextInput
                      label="Аккаунт пользователя"
                      placeholder="Аккаунт"
                      {...form.getInputProps('username')}
                    />*/}
                    <FloatingLabelInputMask
                      label="Телефон"
                      form={form}
                      formField="phone"
                      required
                      mask="+7 (999) 999-99-99"
                      type="tel"
                      //name="phone"
                      //id="phone"
                    />
                    <FloatingLabelInputMask
                      label="Дата рождения"
                      form={form}
                      formField="birthday"
                      required
                      mask="99.99.9999"
                      //type="tel"
                    />

                    {/*   <PasswordInput
                      mt="md"
                      label="Пароль"
                      placeholder="Пароль"
                      {...form.getInputProps('password')}
                    />
                   <TextInput label="Имя" placeholder="Имя" {...form.getInputProps('name')} />
                    <TextInput
                      mt="md"
                      label="Email"
                      placeholder="Email"
                      {...form.getInputProps('email')}
                  /> */}
                  </Box>
                </Center>
              </Box>
            </Stepper.Step>

            {/*   <Stepper.Step
              label="Завершение"
              description="Данные приема"
              allowStepSelect={shouldAllowSelectStep(3)}
            >
              <Box maw={400} mx="auto" w={'100%'} mt="xl">
                <TextInput label="..." placeholder="..." {...form.getInputProps('website')} />
                <TextInput
                  mt="md"
                  label="..."
                  placeholder="..."
                  {...form.getInputProps('github')}
                />
              </Box>
                  </Stepper.Step> */}
            <Stepper.Completed>
              Готово! Данные формы:
              <Code block mt="xl">
                {JSON.stringify(form.values, null, 2)}
              </Code>
            </Stepper.Completed>
          </Stepper>

          <Group position="center" mt="xl">
            {active !== 0 && (
              //<Button variant="default" onClick={prevStep}>
              <Button
                variant="gradient"
                gradient={{ from: '#01868a', to: '#0dab5f' }}
                size="md"
                // size="xl"
                //className={classes.control}
                // mt={40}
                sx={{ borderRadius: '100px' }}
                onClick={prevStep}
              >
                Назад
              </Button>
            )}
            {active !== 3 && (
              <Button
                variant="gradient"
                gradient={{ from: 'pink', to: '#ff3ebb' }}
                size="md"
                //className={classes.control}
                //mt={40}
                sx={{ borderRadius: '100px' }}
                onClick={nextStep}
              >
                Дальше
              </Button>
            )}
          </Group>
        </Box>
        <Box
          // mx="xl"
          ml="-1px"
          pl="1px"
          mt="xl"
          sx={{
            background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
            boxShadow: 'inset 0px 4px 3px rgba(50, 50, 50, 0.25)',
            borderTop: '1px solid #202020',
          }}
        >
          <Box px="xl" pt="xl">
            <i>Здесь вы можете комментировать процесс разработки страницы:</i>

            <FastCommentsCommentWidget tenantId="2Nf0TURX_Hp" key={'comm' + theme.colorScheme} />
          </Box>
        </Box>
      </Box>
    </InnerPageContainer>
  );
}
