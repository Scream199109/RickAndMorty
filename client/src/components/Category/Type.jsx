import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FilterBtn from '../Filter/FilterBtn';
const Type = ({ setType, setPageNumber }) => {
  const typeList = [
    { type: 'Microverse inhabitant', id: 1 },
    { type: 'Parasite', id: 2 },
    { type: 'Zigerion', id: 3 },
    { type: 'Alphabetrian', id: 4 },
    { type: 'Octopus-Person', id: 5 },
    { type: 'Blue ape alien', id: 6 },
  ]
  return (
    <Accordion >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel3a-content"
        id="panel3a-header"
      >
        <Typography>Type</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography component={'span'}>
          {typeList.map(elem => <FilterBtn
            data={elem.type}
            name='type'
            key={elem.id}
            task={setType}
            setPageNumber={setPageNumber}
          />)}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default Type;
