import React from "react";
import Task from "./Task";

function display(cards) {
  cards.forEach(card => {
    <Task text={card}/>
  });
}

export default () => {
  const todoCollection = [
    "hello world 1",
    "hello world 2",
    "hello world 3"
  ]
  return <div>
    {todoCollection.map((value, index) => {
        return <Task key={index} text={value}/>
      })}
  </div>
}