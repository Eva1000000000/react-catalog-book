import React from 'react'
import {useState} from 'react'
import {collection, addDoc} from 'firebase/firestore'
import { db } from "../firebase-config";
import { useForm } from 'react-hook-form';

const CreateBook = () => {
    const booksCollectionRef = collection(db, "books" )
    const [newName, setNewName] = useState("");
    const [newAutor, setNewAutor] = useState("");
    const [newYear, setNewYear] = useState('');
    const [newRating, setNewRating] = useState(0);
    const [newISBN, setNewISBN] = useState("");
    const {
        register,
        formState:{
            errors,
            isValid
        },
        handleSubmit,
        reset,
    } = useForm({
        mode: "onBlur"
    })
    const onSubmit = (d) =>{
        reset()
    }
     const createBook = async () =>{
         await addDoc(booksCollectionRef, {name: newName, autor: newAutor, year: newYear, rating: Number(newRating), isbn: newISBN});
         window.location.reload()
     }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div >{errors?.name && <p>{errors?.name?.message}</p>}</div>
            <input  className="book__input"
            {...register('name', {
                required: 'Поле обязательно к заполнению',
                maxLength: {
                    value: 100,
                    message: 'Максимум 100 символов'
                } 
            })}
            placeholder="Название книги" 
            onChange={event=>{setNewName(event.target.value)}}
            />
            <div >{errors?.autor && <p>{errors?.autor?.message}</p>}</div>
            <input className="book__input"
            placeholder="Автор"
            {...register('autor', {
                required: 'Поле обязательно к заполнению',
            })} 
            onChange={event=>{setNewAutor(event.target.value)}}/>
            <div >{errors?.year&& <p>{errors?.year?.message}</p>}</div>
            <input className="book__input"
            placeholder="Год публикации" 
            type="number" 
            {...register("year", 
            { min: {
                value: 1800,
                message: 'Не раньше 1800'},
            max:{
                value: 2022,
                message: 'Не позже 2022'}})}
            onChange={event=>{setNewYear(event.target.value)}}/>
            <div >{errors?.rating && <p>{errors?.rating?.message}</p>}</div>
            <input className="book__input"
            placeholder="Рейтинг" 
            type="number" 
            {...register("rating", 
            { min: {
                value: 0,
                message: 'Введите значение от 0 до 10'},
            max:{
                value: 10,
                message: 'Введите значение от 0 до 10'}})}
            onChange={event=>{setNewRating(event.target.value)}}/>
            <input className="book__input" placeholder="ISBN" onChange={event=>{setNewISBN(event.target.value)}}/>
            <button className="book__input-button" type="submit" disabled={!isValid} onClick={createBook}>Добавить</button>
        </form>
    )
}

export default CreateBook


//onClick={createBook}