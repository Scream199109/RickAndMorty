import * as React from 'react';
import Status from '../Category/Status';
import Species from '../Category/Species';
import Type from '../Category/Type';
import Gender from '../Category/Gender';
import { Button } from '@mui/material';

export default function Filter({ setStatus, setPageNumber, setSpecies, setType, setGender }) {
  const resetFilter = () => {
    setStatus('')
    setSpecies('')
    setType('')
    setGender('')
  }
  return (
    <div className='filter__container'>
      <h2>Filter</h2>
      <Status setStatus={setStatus} setPageNumber={setPageNumber} />
      <hr className='hr-var1' />
      <Species setPageNumber={setPageNumber} setSpecies={setSpecies} />
      <hr className='hr-var1' />
      <Type setPageNumber={setPageNumber} setType={setType} />
      <hr className='hr-var1' />
      <Gender setPageNumber={setPageNumber} setGender={setGender} />
      <hr className='hr-var1' />
      <Button variant='contained'
        onClick={resetFilter}

      >
        Reset Filter
      </Button>
    </div>
  );
}
