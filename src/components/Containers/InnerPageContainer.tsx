import { Title, Text, createStyles, rem , Box} from '@mantine/core';


export type TChildren = { children: React.ReactNode };
export const InnerPageContainer = ({ children, className }: TChildren & {className?:string}) => {
 
  return (
    <Box className={className + " innerCont"}
         mx={{lg:"1rem", md:0}}>
        {children}
      </Box>
  );
};

