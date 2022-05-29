import Books from "./components/Books";
import {useState} from 'react'
import './app.css'
import AddBook from './components/AddBook'
import CreateBook from "./components/CreateBook";

function App() {
  const [modalActive, setModalActive] = useState();
  return (
    <div className="book__container">
      <h1 className="book__title">Каталог книг</h1>
      <div className="book__button">
      <button className='book__button-add' onClick={()=>setModalActive(true)}>+ Добавить книгу</button>
      </div>
      <AddBook active={modalActive} setActive={setModalActive}><CreateBook/></AddBook>
      <Books/>
    </div>
  );
}

export default App;


