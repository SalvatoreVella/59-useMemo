import React, { useState } from "react";
import Container from "./Container";
import { LanguageContext } from "./LanguageContext";
import TodoList from "./TodoList";
import Welcome from "./Welcome";
import Sum from "./Sum";
import ClickCounter from "./ClickCounter";
import Counter from "./Counter";
import GithubUserList from "./GithubUserList";
import CarDetails from "./CarDetails";
import DisplayLanguage from "./DisplayLanguage";
import FilteredList from "./FilteredList";

function App() {
  const [language, handleLanguage] = useState("en")

  const handleContext = (event) => {
    handleLanguage(() => event.target.value)
  }

  return (
    <div>
      <Welcome
        name="Salvatore"
        age={29} />
      <Sum numbers={[2, 3, 5, 1, 6]} />
      <Counter
        initialValue={10}
        increment={2}
        interval={1500}
      />
      <ClickCounter value={1} />
      <Container />
      <GithubUserList names={["SalvatoreVella", "ChiaraArrivas", "MarcoIncardona"]} />
      <CarDetails 
            model="Pandino"
            year="1900qualcosa"
            color="Verde Acqua"
      />
      <select value={language} onChange={handleContext}>
        <option value={"en"}>EN</option>
        <option value={"it"}>IT</option>
      </select>
      <LanguageContext.Provider value={language}>
        <DisplayLanguage />
        <TodoList render={(items, handleDeleteTodo) => {
          return (
            <ul>
              {items.map((item) => {
                return (
                  <li key={item.key}>{item.description} <span>{item.done ? "Completato" : ""}</span>
                   <button id={item.key} onClick={handleDeleteTodo}>Delete Todo</button></li>
                )
              })}
            </ul>)
        }} />
      </LanguageContext.Provider>
      <FilteredList list={[
      {name:"Paolo", age: 15, id:0},
      {name:"Andrea", age: 26, id:1},
      {name:"Roberta", age: 17, id:2},
      {name:"Mario", age:21, id:3},
      {name:"Giovanni", age: 23, id:4},
      {name:"Adriana", age: 34, id:5},
      {name:"Nazzareno", age:12, id:6},
      {name:"Carla", age:20, id:7},
      ]}/>
    </div>
  );
}

export default App;
