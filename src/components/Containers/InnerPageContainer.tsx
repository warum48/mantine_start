import { Title, Text, createStyles, rem , Box, Paper} from '@mantine/core';
import { innerPageMaxWidth } from '../../CONSTS';


export type TChildren = { children: React.ReactNode };
export const InnerPageContainer = ({ children, className }: TChildren & {className?:string}) => {
 
  const inPaper = true;

  if (inPaper) {
    return (

    <Box className={className + " innerCont"}
         mx={{lg:"1rem", md:0}}>
          <Paper 
          mx="auto"
          shadow='sm'
           p='xl'
           pt='md' 
           maw={innerPageMaxWidth} mt='-md' sx={{
          //  width: 'fit-content',
//blockSize: 'fit-content'
}}>
        {children}
        </Paper>
      </Box>
  );

    }

  return (

    <Box className={className + " innerCont"}
         mx={{lg:"1rem", md:0}}>
        {children}
      </Box>
  );
};

