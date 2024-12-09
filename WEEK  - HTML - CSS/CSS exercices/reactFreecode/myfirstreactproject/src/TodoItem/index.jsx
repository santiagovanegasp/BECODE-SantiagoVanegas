import { FaCheck } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";
import { AiFillPushpin } from "react-icons/ai";

function TodoItem(props){
  return (
    <li className="todo-item">
      <span className={`check ${props.completed && "check--active"}`}
     onClick={props.onCompleted}
      > 
        <FaCheck /> </span>
        <p className={`todo-text  ${props.completed && "strikethrough-text"}`}> {props.text} </p>
      <span className="uncheck"
      onClick={props.onDelete}
      >
        <AiFillPushpin /></span>
    </li>
  )
};



export {TodoItem};