import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';


const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#blue',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'yellow',
    color: '#fff'
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#c3c6ce',
      color: '#fff'
    },
    '&:hover fieldset': {
      borderColor: '#c3c6ce',
      color: '#fff'
    },
    '&.Mui-focused fieldset': {
      borderColor: '#c3c6ce',
      color: '#fff'
    },
  },
});
const SearchByName = ({ setSearch, setPageNumber }) => {
  return (
    <>
      <div className="search__wrapper" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Box
          component="form"
          noValidate
          sx={{
            display: 'flex',
            mt: '20px',
            mb: '20px',
            mr: '20px',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <CssTextField onChange={(e) => {
            setPageNumber(1)
            setSearch(e.target.value)
          }
          }
            label="Search for Characters"
            id="custom-css-outlined-input"
          />
        </Box>
      </div>
    </>
  );
};
export default SearchByName;
