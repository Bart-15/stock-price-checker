import { StyledTextInput } from '@/components/StyledMui/TextInput';
import { useFocusField } from '@/hooks/useFocusField';
import { CircularProgress, InputAdornment } from '@mui/material';
import { Dispatch, SetStateAction } from 'react';

interface SearchTextFieldProps {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  errMessage: string;
  isLoading: boolean;
}

const SearchTextField = ({
  search,
  setSearch,
  errMessage,
  isLoading,
}: SearchTextFieldProps) => {
  const refFocusField = useFocusField();

  return (
    <StyledTextInput
      type='text'
      fullWidth
      placeholder='Search stock symbol ...'
      inputRef={refFocusField}
      onChange={(e) => setSearch(e.target.value)}
      value={search}
      helperText={errMessage ? errMessage : ''}
      error={errMessage ? true : false}
      InputProps={{
        endAdornment: (
          <InputAdornment position='end'>
            {isLoading ? <CircularProgress color='success' size='1rem' /> : ''}
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchTextField;
