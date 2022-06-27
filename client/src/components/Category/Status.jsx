import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FilterBtn from '../Filter/FilterBtn';
const Status = ({ setStatus, setPageNumber }) => {
  const statusList = [
    { status: 'Alive', id: 1 },
    { status: 'Dead', id: 2 },
    { status: 'unknown', id: 3 }
  ]
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2a-content"
        id="panel2a-header"
      >
        <Typography>Status</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography component={'span'}>
          {statusList.map(elem => <FilterBtn
            data={elem.status}
            name='status'
            key={elem.id}
            task={setStatus}
            setPageNumber={setPageNumber}
          />)}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default Status;
