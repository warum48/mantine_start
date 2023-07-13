import { Button } from '@mantine/core';
import { TChildren } from '../Containers/InnerPageContainer';

type TProps = {
  appearence?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>; //() => void;
  sx?: any;
};

export const StyledButton = ({ appearence, onClick, sx = {}, children }: TProps & TChildren) => {
  if (appearence == 'main_second') {
    return (
      <Button
        variant="gradient"
       // gradient={{ from: 'pink', to: '#ff3ebb' }}
        gradient={{ from: 'pink', to: '#fd55d0' }}
        size="md"
        //className={classes.control}
        //mt={40}
        sx={{ borderRadius: '100px', ...sx }}
        onClick={onClick}
      >
        {children}
      </Button>
    );
  }
  if (appearence == 'main_first') {
    return (
      <Button
        variant="gradient"
        gradient={{ from: '#01868a', to: '#0dab5f' }}
        size="md"
        // size="xl"
        //className={classes.control}
        // mt={40}
        sx={{ borderRadius: '100px', ...sx }}
        onClick={onClick}
      >
        {children}
      </Button>
    );
  }
  return <Button>{children}</Button>;
};