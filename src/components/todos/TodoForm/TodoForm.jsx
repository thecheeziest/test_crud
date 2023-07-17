import  { useEffect, useRef, useState } from 'react';

const TodoForm = ({ onAdd, todo, onUpdate, isEdit }) => {
    const [text, setText] = useState(todo.text || '')
    const textRef = useRef()

    useEffect(() => {
        setText(todo.text || '')
    }, [todo.text]);

    const changeInput = e => {
        const { value } = e.target
        setText( value )
    }

    const onSubmit = (e)  => {
        e.preventDefault();
        if( !text ) return

        isEdit ? onUpdate( { ...todo, text } ) : onAdd( text );
        setText('')
        textRef.current.focus()
    }

    return (
        <form className='TodoForm' onSubmit={ onSubmit }>
            <input type="text" ref={textRef}  value={text} onChange={ changeInput }/>
            <button type="submit">
                {
                    isEdit ? "수정" : "추가"
                }
            </button>
        </form>
    );
};

export default TodoForm;