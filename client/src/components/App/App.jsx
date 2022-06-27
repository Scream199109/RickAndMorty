import Card from '../Card/Card';
import { useState, useEffect, useReducer } from 'react'
import context from '../../Context/context';
import { reducer } from '../../Reducer/reducer';
import PaginationComp from '../Pagination/PaginationComp';
import Filter from '../Filter/Filter';
import SearchByName from '../Category/SearchByName'
import TransitionAlerts from '../Alert/Alert';

const App = () => {
  const [state, dispatch] = useReducer(reducer, { content: [] })
  const [search, setSearch] = useState('')
  const [status, setStatus] = useState('')
  const [species, setSpecies] = useState('')
  const [type, setType] = useState('')
  const [gender, setGender] = useState('')
  const [pageNumber, setPageNumber] = useState(1)

  let url = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&species=${species}&type=${type}&gender=${gender}`
  useEffect(() => {
    const character = fetch(url)
      .then(res => res.json())
      .then(data => dispatch({ type: "ADD_CONTENT", payload: data }))
  }, [url])
  return (
    <>
      <context.Provider value={{ state, dispatch }}>
        <h1 className='title'>Rick And Morty</h1>
        <SearchByName setSearch={setSearch} setPageNumber={setPageNumber} />
        <div className="wrapper">
          <Filter setPageNumber={setPageNumber} setStatus={setStatus} setSpecies={setSpecies} setType={setType} setGender={setGender} />
          {state?.content?.results?.length
            ?
            <div className='card-wrapper'>
              {state.content.results?.map(elem => < Card key={elem.id} person={elem} />)}
            </div>
            :
            <TransitionAlerts />
          }
        </div>
        <PaginationComp setPageNumber={setPageNumber} pageNumber={pageNumber} />
      </context.Provider>
    </>
  );
};

export default App;
