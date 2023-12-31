import styled from 'styled-components'

// Todos
export const Container = styled.div`
width: 550px; margin:30px auto;
h1 {
    text-align: center; padding: 30px 0; background: beige;
    font-size: 25px;
}
.TodoForm {
    text-align: center; padding: 40px 0; background:pink;
    input {
        width:400px; height:45px;
        padding:0 20px; box-sizing: border-box;
        vertical-align: top;
    }
    button {
        width:100px; height:45px;
    }
}
.TodoList {
    li {
        padding: 15px 30px;
        border-bottom: 1px solid #dcdcdc;
        background: tomato;
        span {
            margin-right: 20px; font-size: 16px; color:#fff ; cursor: pointer;
        }
        em {
            color:#fff; cursor: pointer;
        }
        button {
            float: right; width: 80px;
        }
        &.on {
            span { color:yellow }
            em { color:yellow ; text-decoration: line-through; }
        }
    }
}
`