import {
  Box,
  List,
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
  Title,
  Container,
  Grid,
  SimpleGrid,
  Skeleton,
  useMantineTheme,
  rem,
  createStyles,
  BackgroundImage,
  Center,
} from '@mantine/core';
import * as React from 'react';
import { FastCommentsCommentWidget } from 'fastcomments-react';

const useStyles = createStyles((theme) => ({
  title: {
    color: theme.colors.gray[6], //theme.white,

    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 300,
    lineHeight: 1.05,
    maxWidth: rem(500),
    fontSize: rem(36),
   // zIndex:100,
   position:'relative',
    display:'block',

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      fontSize: rem(20),
      lineHeight: 1.15,
    },
  },

  title2: {
    color: theme.colors.gray[7], //theme.white,

    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 400,
    lineHeight: 1.05,
    maxWidth: rem(500),
    fontSize: rem(20),

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      fontSize: rem(14),
      lineHeight: 1.15,
    },
  },

  description: {
    color: theme.colors.gray[7],
    opacity: 0.75,
    maxWidth: rem(400),

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
    },
  },

  control: {
    paddingLeft: rem(50),
    paddingRight: rem(50),
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(22),

    [theme.fn.smallerThan('md')]: {
      width: '100%',
    },
  },
}));

export const Home = () => {
  const { classes, theme } = useStyles();
  /*  const items = stats.map((stat) => (
        <div key={stat.label}>
          <Text className={classes.label}>{stat.value}</Text>
          <Text size="xs" color="dimmed">
            {stat.label}
          </Text>
        </div>
      ));
*/
  const PRIMARY_COL_HEIGHT = rem(300);

  //const theme = useMantineTheme();
  const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - ${theme.spacing.md} / 2)`;
  return (
    <>
      <Box>
        {/*} <Title order={3} my="xl">
          Добро пожаловать в Вирилис
  </Title> */}
        <Container my="md" p="0" sx={{ maxWidth: '100%' }}>
          <BackgroundImage
            src="http://dev.nahab.info/aerovadim/_files/virilis/mainbg_bright.jpg"
            //src="https://images.unsplash.com/photo-1638202993928-7267aad84c31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3087&q=80"
            // src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            radius="md"
            sx={{
              height: 420, //SECONDARY_COL_HEIGHT,
              marginBottom: '1rem',
              padding: '5rem',
              paddingTop: '4rem',
              //opacity:'.3' ,transform: 'scaleX(-1)', backgroundBlendMode: 'saturation', linearGradient:'(black, black)', filter: 'grayscale(100%);'
            }}
            //height={SECONDARY_COL_HEIGHT}
          >
            <Box sx={{position:'absolute', top:0, left:0, bottom:0, right:0, 
            //zIndex:1,
            background:'linear-gradient(114deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.60) 42%, rgba(255,255,255,0) 50%, rgba(255,255,255,0) 100%)'//'white'
            }}></Box>
            <Title className={classes.title}>
              {' '}
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: 'DeepPink', to: 'pink' }}
              >
                Вирилис -
              </Text>{' '}
              широкий спектр медицинских услуг
            </Title>

            <Text className={classes.description} mt={30}>
              Осуществляем наблюдение, диагностику, лечение заболеваний у детей и взрослых. Обеспечиваем профилактику и оздоровительную медицину.
            </Text>

            <Button
              variant="gradient"
              gradient={{ from: 'pink', to: 'DeepPink' }}
              size="xl"
              className={classes.control}
              mt={40}
              sx={{ borderRadius: '100px' }}
            >
              Записаться на прием
            </Button>
          </BackgroundImage>
          <SimpleGrid cols={2} spacing="md" breakpoints={[{ maxWidth: 'lg', cols: 1 }]}>
            {/*<Skeleton height={PRIMARY_COL_HEIGHT} radius="md" animate={false} />*/}
            {/*
            <Card shadow="sm" padding="lg" radius="md" withBorder sx={{ maxHeight: '500px' }}>
              <Card.Section>
                <Image
                  src="https://images.unsplash.com/photo-1638202993928-7267aad84c31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3087&q=80"
                  // src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                  //height={400}
                  height={300}
                  alt="Norway"
                />
              </Card.Section>

              <Group position="apart" mt="md" mb="xs">
                <Text weight={500}>Norway Fjord Adventures</Text>
                <Badge color="pink" variant="light">
                  On Sale
                </Badge>
              </Group>

              <Text size="sm" color="dimmed">
                With Fjord Tours you can explore more of the magical fjord landscapes with tours and
                activities on and around the fjords of Norway
              </Text>

              <Button
                variant="light"
                //color="blue"
                fullWidth
                mt="md"
                radius="md"
              >
                Book classic tour now
              </Button>
        </Card>*/}
            <Card
              withBorder
              radius="md"
              p={0}
              //className={classes.card}
            >
              <SimpleGrid cols={2} spacing="0" breakpoints={[{ maxWidth: 'lg', cols: 1 }]}>
                <Image
                  src="https://images.unsplash.com/photo-1488998527040-85054a85150e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  height={300}
                  // width={'50%'}
                />
                <Box
                  //className={classes.body}
                  p="xl"
                  pt="sm"
                >
                  <Text className={classes.title2} mt="xs" mb="md">
                    ОНЛАЙН<br/>КОНСУЛЬТАЦИЯ
                  </Text>
                  <Text size="sm" color="dimmed">
                  Круглосуточная служба клиентской поддержки, просто позвоните в любое время, и мы окажем необходимую помощь.
                  </Text>

                  <Button
              variant="gradient"
              gradient={{ from: "#008275", to: "#0dab5f" }}
              size="md"
              //className={classes.control}
              mt={40}
              sx={{ borderRadius: '100px' }}
            >
              Записаться 
            </Button>
                </Box>
              </SimpleGrid>
            </Card>
            <Grid gutter="md">
              <Grid.Col>
              <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} opacity={.5}/>
                
                {/*   
                <Box sx={{ height: SECONDARY_COL_HEIGHT }}> mmm</Box>
               <Card withBorder 
               // p="xl" 
                radius="md" className={classes.card}>
                  <div className={classes.inner}>
                    <div>
                      <Text fz="xl" className={classes.label}>
                        ОНлайн
                      </Text>
                      
                    </div>

                    <div className={classes.ring}>
                        <Image src="https://images.unsplash.com/photo-1488998527040-85054a85150e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"/>
                    </div>
                  </div>
  </Card> */}
              </Grid.Col>
              <Grid.Col span={6}>
                <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} opacity={.5}/>
              </Grid.Col>
              <Grid.Col span={6}>
                <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} opacity={.5}/>
              </Grid.Col>
            </Grid>
          </SimpleGrid>
        </Container>
      </Box>
      <Box sx={{ borderTop: '1px solid #202020' }} mt="135px">
        <h4>Информационная область Главной страницы содержит:</h4>
        <List size="sm">
          <List.Item>Записаться на прием/исследования/ОТМЕНИТЬ ЗАПИСЬ</List.Item>
          <List.Item>Планируемые посещения</List.Item>
          <List.Item>Запросы на документы</List.Item>
          <List.Item> Балансы/внести оплату или аванс</List.Item>
          <List.Item>ПОЛУЧИТЬ ОН ЛАЙН КОНСУЛЬТАЦИЮ </List.Item>
        </List>
      </Box>
    </>
  );
};
