const CardDetails = ({ cardInfo }) => {
  return (
    <div className="card-details">
      <div className="section">
        <span className='text-gray'>Location:</span>
        <p className="text-body">{cardInfo?.location?.name}</p>
      </div>
      <div className="section">
        <span className='text-gray'>Origin:</span>
        <p className="text-body">{cardInfo?.origin?.name}</p>
      </div>
      <div className="section">
        <span className='text-gray'>Type:</span>
        {cardInfo.type ? <p className="text-body">{cardInfo?.type}</p> : <p className="text-body">Unknown</p>}
      </div>
      <div className="section">
        <span className='text-gray'>Amount episode:</span>
        {<p className="text-body">{cardInfo?.episode?.length}</p>}
      </div>
    </div>
  );
};

export default CardDetails;
