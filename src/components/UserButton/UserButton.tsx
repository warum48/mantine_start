import {
    UnstyledButton,
    UnstyledButtonProps,
    Group,
    Avatar,
    Text,
    createStyles,
  } from '@mantine/core';
  import { IconChevronRight } from '@tabler/icons-react';
  
  const useStyles = createStyles((theme) => ({
    user: {
      display: 'block',
      width: '100%',
      padding: theme.spacing.md,
      color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
      background: 'linear-gradient(132deg, #d8fdfc 0%, rgba(255,255,255,1) 50%)',
  
      '&:hover': {
        background:'white'
        //backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : 'white'// theme.colors.gray[0],
      },
    },
  }));
  
  interface UserButtonProps extends UnstyledButtonProps {
    image: string;
    name: string;
    email: string;
    icon?: React.ReactNode;
  }
  
  export function UserButton({ image, name, email, icon, ...others }: UserButtonProps) {
    const { classes } = useStyles();
  
    return (
      <UnstyledButton className={classes.user} {...others}>
        <Group>
          <Avatar src={image} radius="xl" />
  
          <div style={{ flex: 1 }}>
            <Text size="sm" weight={500}>
              {name}
            </Text>
  
            <Text color="dimmed" size="xs">
              {email}
            </Text>
          </div>
  
          {icon || <IconChevronRight size="0.9rem" stroke={1.5} />}
        </Group>
      </UnstyledButton>
    );
  }