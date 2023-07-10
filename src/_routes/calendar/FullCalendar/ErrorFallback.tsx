import { Typography } from "@mui/material";

type TError = {
    error: any;
    resetErrorBoundary: any;
  };
  
  
  
  function ErrorFallback({ error, resetErrorBoundary }: TError) {
    return (
      <div role="alert">
        <>
          <Typography variant="body2">Ошибка в модуле "календарь"</Typography>
          {/*!!<StyledButton onClick={resetErrorBoundary}>Попробовать снова</StyledButton>*/}
        </>
      </div>
    );
  }
  
  