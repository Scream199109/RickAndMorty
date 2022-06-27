import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AccordionDetails } from '@mui/material';
import FilterBtn from '../Filter/FilterBtn';


const Species = ({ setPageNumber, setSpecies }) => {
  const speciesList = [
    { species: 'Human', id: 1 },
    { species: 'Alien', id: 2 },
    { species: 'Poopybutthole', id: 3 },
    { species: 'Mythological Creature', id: 4 },
    { species: 'Robot', id: 5 },
    { species: 'Humanoid', id: 6 },
    { species: 'Disease', id: 7 },
    { species: 'Cronenberg', id: 8 },
    { species: 'unknown', id: 9 },
    { species: 'Animal', id: 10 },
  ]
  return (
    <Accordion >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel3a-content"
        id="panel3a-header"
      >
        <Typography>Species</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography component={'span'}>
          {speciesList.map(elem => <FilterBtn
            data={elem.species}
            name='gender'
            key={elem.id}
            setPageNumber={setPageNumber}
            task={setSpecies}
          />)}
          {/* <FilterBtn/> */}
        </Typography>
      </AccordionDetails>

    </Accordion>
  );
};

export default Species;
