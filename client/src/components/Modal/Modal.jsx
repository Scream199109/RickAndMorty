import CardDetails from '../CardDetails/CardDetails';

const Modal = ({ active, setActive, cardInfo }) => {
  return (
    <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
      <div className={active ? 'modal__content active' : 'modal__content'} onClick={(e) => e.stopPropagation()}>
        <CardDetails cardInfo={cardInfo} />
      </div>
    </div>
  );
};

export default Modal;
