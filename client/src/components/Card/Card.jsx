import React, { useState } from 'react';
import Modal from '../Modal/Modal';

const Card = ({ person }) => {
  const [modalActive, setModalActive] = useState(false)
  const [cardInfo, setCardInfo] = useState({ person })
  const id = person.id
  const sendId = async () => {
    const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
    const character = await res.json()
    setCardInfo(character)
    setModalActive(true)
  }

  const statusSpan = (person) => {
    switch (person.status) {
      case 'Dead':
        return 'status-span-red'
      case 'Alive':
        return 'status-span'
      default:
        return 'status-span-grey'
    }
  }

  return (
    <>
      <div className="card">
        <div className="card-image">
          <img src={person.image} alt="" />
        </div>
        <div className="card-details">
          <div className="section">
            <p className="text-title">{person.name}</p>
            <p className="text-body">
              <span className={statusSpan(person)}>♥</span>
              <span className={statusSpan(person)}>{person.status} </span></p>
          </div>
          <div className="section">
            <span className='text-gray'>Species:</span>
            <p className="text-body">{person.species}</p>
          </div>
          <div className="section">
            <span className='text-gray'>Gender:</span>
            <p className="text-body">{person?.gender}</p>
          </div>

        </div>
        <button className="card-button" id={person.id} onClick={sendId}>More info</button>
      </div>
      <Modal active={modalActive} setActive={setModalActive} cardInfo={cardInfo} />
    </>
  );
};

export default Card;
