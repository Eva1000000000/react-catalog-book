import { async } from "@firebase/util";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "../firebase-config";


function Books() {
  const [books, setBooks] = useState([])
  const booksCollectionRef = collection(db, "books" )
  const deleteBook = async(id) => {
    const bookDoc = doc(db, 'books', id);
    await deleteDoc(bookDoc);
    window.location.reload()
  }
   const year = 'Год публикации:'
   const rating = 'Рейтинг:'
   const isbn = 'ISBN:'

  const recomended = (books)=>{
    
     if(books.year<2019 ){      
       arr.push(Number(books.rating))      
     }
     
  }
  const arr = []
  const sortRec = ()=>{
    books.map(recomended)
    const a = arr.sort((a,b)=> b-a)
    return a[0]
   }
     
  useEffect(()=> {
    const getBooks = async()=>{
      const data = await getDocs(booksCollectionRef)
      setBooks(data.docs.map((doc)=>({...doc.data(), id: doc.id})))
    }
    getBooks()
  }, [])
  function arrayRandElement(arr) {
    const rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
}
const arrayElementsRec =[]

const result = books.map((i)=>{return(i.rating === sortRec() && i.year<2019?arrayElementsRec.push(i.name):'')})
const resultRec = arrayRandElement(arrayElementsRec)

  return (
    <div  >
      <div  className="book__items-rec">
        <div>
        <p className="book__title-rec">Рекомендуем к прочтению</p>
       <div className="book__recommendation">{books.map((i)=>{return(i.name === resultRec?(
       <div>
         <p className="book__item">{i.name}</p>
       <p className="book__item">Автор:{i.autor}</p>
       <p className="book__item">{i.year? year + i.year : ''}</p>
       <p className="book__item">{i.rating? rating + Number(i.rating) : ''}</p>
       <p className="book__item">{i.isbn? isbn + i.isbn : ''}</p>
       </div>
       )
       :'')})}</div>
        </div>
      
      </div>
      {books.sort((a,b)=>b.year - a.year).map((book)=>{
      return (<div  className="book__items">
      <p className="book__item">{book.year? book.year : 'Книга без указания года'}</p> 
      <p className="book__item">{book.name}</p>
      <p className="book__item">Автор:{book.autor}</p>
      <p className="book__item">{book.year? year + book.year : ''}</p>
      <p className="book__item">{book.rating? rating + Number(book.rating) : ''}</p>
      <p className="book__item">{book.isbn? isbn + book.isbn : ''}</p>
      <button className="book__delite-btn" onClick={()=>{deleteBook(book.id)}}>Удалить книгу</button>

      </div>)})}
    </div>
  );
}

export default Books; 