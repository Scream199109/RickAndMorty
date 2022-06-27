import React from 'react';
import App from './components/App/App';
import * as ReactDOMClient from 'react-dom/client';
import './components/Card/card.css'
import './null.css'
import './components/Modal/Modal.css'
import './components/Pagination/paginationComp.css'
import './components/Filter/filter.css'


const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);

root.render(<App />);
