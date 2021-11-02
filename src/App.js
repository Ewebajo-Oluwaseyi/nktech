import React from 'react';
import Top from './components/Top/Top';
import Payment from './components/Payment/Payment';
import Cost from './components/Cost/Cost';
import Style from './App.module.css'

function App() {
  return (
    <div className={Style.App}>
      <div className={Style.Container}>
        <Top/>
        <Payment/>
        <Cost/>
      </div>
    </div>
  );
}

export default App;
