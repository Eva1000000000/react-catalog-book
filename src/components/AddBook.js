import React from 'react'

const AddBook = ({active, setActive, children}) => {
    return (
        <div className={active ? 'book__modal active' : 'book__modal'} onClick={()=> setActive(false)}>
            <div className={active ? 'book__modal-content active' : 'book__modal-content'} onClick={e=> e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default AddBook