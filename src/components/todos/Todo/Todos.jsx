import { useRef, useState } from 'react';
import TodoForm from '../TodoForm/TodoForm';
import TodoList from '../TodoList/TodoList';
import { Container } from '../../styled/TodosStyle';

const Todos = () => {
    const no = useRef(1);
    const [ data, setData ] = useState([]);

    // 추가
    const onAdd = ( text )  => {
        setData([
            ...data ,
            {
                id:no.current++,
                text,
                isChk: false 
            }
        ])
    }

    // 삭제
    const onDel = ( id )  => {
        setData( data.filter( item => item.id !== id ))
    }


    const [todo, setTodo] = useState({});
    const [isEdit, setIsEdit] = useState(false);

    // 수정
    const onEdit = ( id ) => {
        setTodo(data.find(item => item.id === id))
        setIsEdit(true);
    }

    // 갱신
    const onUpdate = (todos) => {
        setData(data.map(item => item.id === todos.id ? todos : item));
        setIsEdit(false);
    }

    // 읽기 체크
    const onChk = (id)  => {
        setData( data.map( item => item.id === id ? {...item, isChk: !item.isChk }:item ))
    }

    return (
        <Container className='Todos'>
            <h1>Todos</h1>
            <TodoForm onAdd={onAdd} todo={todo} onUpdate={onUpdate} isEdit={isEdit} />
            <TodoList data={data} onDel={onDel} onChk={onChk} onEdit={onEdit} />
        </Container>
    );
};

export default Todos;