import {
  Anchor,
  Box,
  Group,
  Input,
  InputProps,
  TextInput,
  TextInputProps,
  Textarea,
  TextareaProps,
  useMantineTheme,
} from '@mantine/core';
import { IconEdit } from '@tabler/icons-react';
import { ChangeEvent, InputHTMLAttributes, useState } from 'react';
import { TextInfo } from '../../_styles/headers';

type TProps = {
  text: string | undefined; // | null;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement> & React.ChangeEvent<HTMLTextAreaElement>
  ) => void; //any;
  autosize?: boolean;
};

export const EditableText = ({
  text,
  onChange,
  autosize,
  ...props
}: TProps & TextInputProps & TextareaProps) => {
  //& InputHTMLAttributes<HTMLInputElement>
  const [edit, setEdit] = useState(false);
  const theme = useMantineTheme();

  return (
    <>
      <Group grow>
        {!edit ? (
          <>
            <TextInfo>{text ? text : '-'}</TextInfo>
            <Box sx={{ cursor: 'pointer' }} onClick={() => setEdit(true)}>
              <IconEdit size={16} color={theme.colors.gray[6]} />
            </Box>
          </>
        ) : (
          <>
            {autosize ? (
              <Textarea
               // placeholder="Autosize with no rows limit"
               // label="Autosize with no rows limit"
                autosize
                minRows={2}
                miw={320}
                onChange={onChange} 
                value={text}
              />
            ) : (
              <TextInput value={text} onChange={onChange} miw={320} />
            )}
            <Anchor onClick={() => setEdit(false)} color="gray" size={12}>
              Готово
            </Anchor>
          </>
        )}
      </Group>
    </>
  );
};
