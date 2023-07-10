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
  Tabs,
  Paper,
  Divider,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { FastCommentsCommentWidget } from 'fastcomments-react';
import { IconArrowLeft, IconArrowRight, IconSearch } from '@tabler/icons-react';

import { Title1_main, TitleLabel, useHeadersStyles } from '../../_styles/headers';
import { InnerPageContainer } from '../../components/Containers/InnerPageContainer';
import { StyledButton } from '../../components/Buttons/StyledButton';
import { DatePicker } from '@mantine/dates';

export function Documents() {
  const [active, setActive] = useState(0);
  const [highestStepVisited, setHighestStepVisited] = useState(active);
  //const theme = useMantineTheme();
  const { classes, theme } = useHeadersStyles();
  // const { classes : inputClasses  } = useHeadersStylesInput();

  const [valueType, setValueType] = useState('react');
  const [valueAge, setValueAge] = useState('age3');
  const [valueAdress, setValueAdress] = useState<string[]>([]);

  const [value, setValue] = useState<Date | null>(null);

  const docsAr = [
    'Копия карты',
    'Справка для оформления налогового вычета',
    'Выписка (после операции)',
    'Результаты анализов ',
    'Результаты исследований ',
  ];

  const form = useForm({
    initialValues: {
      doc: '',
    }
})



  

  return (
    <InnerPageContainer>
      <Box
        maw={1200}
        mx="auto"
        w={'100%'}
        //mt="xl"
      >
        <Box mih={'80vh'}>
          {/*<h4> Записаться на прием </h4>*/}
          <Title1_main>Документы</Title1_main>
          <Text c='dimmed'>В этом разделе личного кабинета вы можете отправить запрос на документы</Text>
          <Space h="xl" />

          <Tabs defaultValue="type1">
            <Tabs.List>
              <Tabs.Tab
                value="type1"
                //icon={<IconPhoto size="0.8rem" />}
              >
                ТИП 1
              </Tabs.Tab>
              <Tabs.Tab
                value="type2"
                // icon={<IconMessageCircle size="0.8rem" />}
              >
                ТИП 2
              </Tabs.Tab>
              <Tabs.Tab
                value="type3"
                // icon={<IconSettings size="0.8rem" />}
              >
                ТИП 3
              </Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="type1" pt="xs">
            <Space h="xl" />
            <Group align='top' spacing='xl'>
            <Radio.Group
                    name="age"
                    label="Выберите документ:"
                    {...form.getInputProps('doc')}
                    //value={valueAge}
                    //onChange={setValueAge}
                    // description="This is anonymous"
                    // withAsterisk
                  >
                    <Stack mt="md">
                        {docsAr.map((item, index)=>(
                            <Radio value={'doc'+index} label={item} />
                        ))}
                      
                      
                    </Stack>
                  </Radio.Group>
                  <Paper shadow='md' p='md' withBorder 
                  //bg={'white'}
                  >
                  <Group align='top' spacing='xl'>
           
                  <DatePicker 
                  //value={value} onChange={setValue} 
                  hideWeekdays locale="ru" />
                  <Divider orientation="vertical"/>
                  <DatePicker 
                  //value={value} onChange={setValue} 
                  hideWeekdays locale="ru" />
                  </Group>
                  </Paper>
                  </Group>
                  <Space h="xl" />
                            <StyledButton appearence='main_second'>Скачать</StyledButton>
            </Tabs.Panel>

            <Tabs.Panel value="type2" pt="xs">
              Документы тип 2
            </Tabs.Panel>

            <Tabs.Panel value="type3" pt="xs">
              Документы тип 3
            </Tabs.Panel>
          </Tabs>
        </Box>
      </Box>
    </InnerPageContainer>
  );
}
