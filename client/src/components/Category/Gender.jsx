import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FilterBtn from '../Filter/FilterBtn';

const Gender = ({ setGender, setPageNumber }) => {
  const genderList = [
    { gender: 'Female', id: 1 },
    { gender: 'Male', id: 2 },
    { gender: 'Genderless', id: 3 },
    { gender: 'unknown', id: 4 }
  ];
  return (
    <Accordion >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel3a-content"
        id="panel3a-header"
      >
        <Typography>Gender</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography component={'span'}>
          {genderList.map(elem => <FilterBtn
            data={elem.gender}
            name='gender'
            key={elem.id}
            task={setGender}
            setPageNumber={setPageNumber}
          />)}
        </Typography>
      </AccordionDetails>

    </Accordion>
  );
};

export default Gender;
