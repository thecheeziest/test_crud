

const TodoItem = ({item, onDel, onChk, onEdit }) => {
    const { id , text , isChk  } = item

    return (
        <li className={ isChk ? "on" : "" }>
           <span onClick={ () => onChk(id) }>✓</span>  
           <em>{text}</em>
           <button onClick={ () => onEdit(id) }>수정</button>
           <button onClick={ () => onDel(id) }>삭제</button>
        </li>
    );
};

export default TodoItem;