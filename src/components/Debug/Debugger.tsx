import React from "react";
//------------------------context----------------
import { GlobalContext } from "_context";
import { Box } from "@mantine/core";
import styled from "@emotion/styled";

interface DebuggerProps {
  children?: React.ReactNode;
  theme?: any;
  [x: string]: any;
}

const DebugBox: React.FC<DebuggerProps> = styled(Box)`
  /*display: flex;*/
  background-color: rgb(229, 228, 228);
  /*height: 70px;*/
  margin-top: 20px;
  align-items: center;
  justify-content: flex-start;
  border-radius: 10px;
  padding: 10px 20px;
  font-size: 12px;
`;



export const Debugger = ({ children, theme, ...props }: DebuggerProps) => {
  const { isDebug } = React.useContext(GlobalContext);
  return <>{isDebug && <DebugBox {...props}>{children}</DebugBox>}</>;
};
