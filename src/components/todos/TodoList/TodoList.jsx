import TodoItem from './TodoItem';

const TodoList = ({data, onDel, onChk, onEdit}) => {
    return (
        <ul className='TodoList'>
            {
                data.map( item => <TodoItem key={item.id}  item={item} onDel={onDel} onChk={onChk} onEdit={onEdit} />)
            }
        </ul>
    );
};

export default TodoList;