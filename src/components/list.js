import React from "react";

export default props => {
  return (
    <div className="todoList">
      <ul>
        {props.todolist.map((item, index) => (
          <li
            key={index}
            onClick={() => {
              props.delete(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
