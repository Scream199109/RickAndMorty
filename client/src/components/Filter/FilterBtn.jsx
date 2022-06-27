import * as React from 'react';

export default function FilterBtn({ data, name, task, setPageNumber }) {
  return (
    <>
      <div className="radio__wrapper">

        <input type="radio"
          name={name}
          value={data}
          onClick={() => {
            setPageNumber(1)
            task(data)
          }}
        />
        <label className='filter__label' htmlFor={name}>{data}</label>
      </div>
      <hr className='hr-var2' />
    </>
  );
}

