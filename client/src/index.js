import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './components/App';
import Blocks from './components/Blocks';
import ConductTransaction from './components/ConductTransaction';
import TransactionPool from './components/TransactionPool';
import './index.css';

const Root = (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/blocks" element={<Blocks />} />
      <Route path="/conduct-transaction" element={<ConductTransaction />} />
      <Route path="/transaction-pool" element={<TransactionPool />} />
    </Routes>
  </BrowserRouter>
);

render(Root, document.getElementById('root'));
