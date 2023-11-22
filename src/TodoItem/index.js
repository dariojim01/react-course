import './TodoItem.css';
import {  FiXCircle, FiCheckSquare } from "react-icons/fi";

function TodoItem(props) {
    return (
      <li className="TodoItem">
        <span 
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
        onClick={props.onComplete}   
           
        >
            <FiCheckSquare />
            
            </span>
        <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}
        
        >
             {props.text}
             </p>
        <span 
        className="Icon Icon-delete"
        onClick={props.onDelete}  
       
        
        >
             <FiXCircle />
            
            </span>
      </li>
  
    );
  }

  export { TodoItem };