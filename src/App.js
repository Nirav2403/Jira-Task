import { useState } from 'react';
import './App.css';
import ListView from './component/ListView';
import Modal from './component/Modal';

function App() {
  const [showModal, setShowModal] = useState(false);
  
  return (
    <div className="app-container">
      <ListView setShowModal={setShowModal}/>
      {showModal ? <Modal setShowModal={setShowModal}/> : null}
    </div>
  );
}

export default App;
