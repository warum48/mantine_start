import { createStyles, Avatar, Text, Group, Box, Paper, Button, Grid, Stack, Divider, rem } from '@mantine/core';

import { Calendar } from '@mantine/dates';
import { DatePicker } from '@mantine/dates';
import { IconPhoneCall, IconAt } from '@tabler/icons-react';
import { useState } from 'react';
import 'dayjs/locale/ru';
import { StyledButton } from '../../../components/Buttons/StyledButton';
import { innerPageMaxWidth } from '../../../CONSTS';

const useStyles = createStyles((theme) => ({
  icon: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[5],
  },

  name: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },

  title: {
    color: theme.colors.virilisPink[0], // theme.colors.gray[6], //theme.white,

    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 400,
    lineHeight: 1.05,
    maxWidth: rem(500),
    fontSize: rem(18),
    // zIndex:100,
    position: 'relative',
    display: 'block',

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      fontSize: rem(14),
      lineHeight: 1.15,
    },
  },
}));

interface UserInfoIconsProps {
  avatar: string;
  name: string;
  title: string;
  //phone: string;
  //email: string;
  timeStart: string;
}

export function AppointmentItem({ avatar, name, title, timeStart }: UserInfoIconsProps) {
  const { classes } = useStyles();
  const [expanded, setExpanded] = useState(false);
  return (
    
      <Paper
        //maw={700}
        sx={{ position: 'relative' }}
        shadow="xs"
        p={ expanded?  'xl' :"xs"}
        withBorder
        miw={expanded ? '100%' : ((innerPageMaxWidth  / 2 ) -32) }//448}

        //w={expanded ? '100%':'50%'}
        //miw={expanded ? '100%':300}
        //mih={expanded ? 400 : 0}
        //ml='xs'
      >
        <Button
          compact
          variant="light"
          sx={{ position: 'absolute', top: '4px', right: '4px' }}
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? '✕' : '➔'}
        </Button>
       
          <Group noWrap>
            <Avatar src={avatar} size={expanded? 150:80} radius="md" />
            <div>
              <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
                {title}
              </Text>

              <Text fz="lg" fw={500} className={classes.name}>
                {name}
              </Text>

              <Text fz="xs" fw={500} className={classes.name}>
               Время приема: {timeStart}
              </Text>

              

               
              {/*
          <Group noWrap spacing={10} mt={3}>
            <IconAt stroke={1.5} size="1rem" className={classes.icon} />
            <Text fz="xs" c="dimmed">
              {email}
            </Text>
          </Group>

          <Group noWrap spacing={10} mt={5}>
            <IconPhoneCall stroke={1.5} size="1rem" className={classes.icon} />
            <Text fz="xs" c="dimmed">
              {phone}
            </Text>
  </Group> */}
            </div>
            
          </Group>
          {expanded && <>
          <Divider mt="xl" />
            Услуги на приеме
            <Divider my="xl" />
            <StyledButton appearence='main_second'>Отменить запись</StyledButton>
            </>}
          
         
       
      </Paper>
    
  );
}
