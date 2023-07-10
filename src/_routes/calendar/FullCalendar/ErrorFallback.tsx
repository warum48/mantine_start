//import { Typography } from "@mui/material";
import {Text} from '@mantine/core'

type TError = {
    error: any;
    resetErrorBoundary: any;
  };
  
  
  
  function ErrorFallback({ error, resetErrorBoundary }: TError) {
    return (
      <div role="alert">
        <>
          <Text c='dimmed'>Ошибка в модуле "календарь"</Text>
          {/*!!<StyledButton onClick={resetErrorBoundary}>Попробовать снова</StyledButton>*/}
        </>
      </div>
    );
  }
  
  