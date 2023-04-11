import Header from '../../components/Header';
import Info from '../../components/Info';
import AddFinance from '../../components/AddFinance';
import List from '../../components/List';
import React, { useState } from 'react';
import './style.css';

const Main = () => {

  let finances = []


  if(!localStorage.hasOwnProperty('finances')){
    localStorage.setItem("finances", JSON.stringify(finances))
  }

  const [finance, setFinance] = useState(JSON.parse(localStorage.getItem('finances')))
  console.log('Finance', typeof finance)
  console.log('Finances', typeof finances)


  if(!localStorage.hasOwnProperty('name')){
      localStorage.setItem("name", "Fulano")
  }

  const date = new Date()
  let name = localStorage.getItem("name")

  const onAddFinance = (desc, value, type) => {
    setFinance([
      {
        id: new Date().getTime(),
        date: `${String(date.getDate()).length === 1 ? '0'+Number(date.getDate()) : Number(date.getDate()+1)}/${String(date.getMonth()+1).length === 1 ? '0'+Number(date.getMonth()+1) : Number(date.getMonth()+1)}/${date.getFullYear()}`,
        desc: desc,
        value: Number(value),
        earn: type
      },
      ...finance
    ])
    finances = [{
      id: new Date().getTime(),
      date: `${String(date.getDate()).length === 1 ? '0'+Number(date.getDate()) : Number(date.getDate()+1)}/${String(date.getMonth()+1).length === 1 ? '0'+Number(date.getMonth()+1) : Number(date.getMonth()+1)}/${date.getFullYear()}`,
      desc: desc,
      value: Number(value),
      earn: type
    }]
    var concatFinances = finances.concat(finance)

    console.log('Array finaces >>>', concatFinances)

    localStorage.setItem("finances", JSON.stringify(concatFinances))
  }
  const onRemove = (item) => {
    var confirmBox = window.confirm(`${name}, você tem certeza que deseja apagar?\nItem: ${item.desc}\nData: ${item.date}\nValor: R$ ${(item.value).toFixed(2)}`)
    if(!confirmBox){
      return
    } else {
      var notRemove = []
      for(let i = 0; i < finance.length; i++){
        if(finance[i].id !== item.id){
          notRemove.push(finance[i])
        } else{
          // Remove
          continue
        }
      }
      setFinance(notRemove)
      localStorage.setItem("finances", JSON.stringify(notRemove))
    }
  }
  const onChangeName = (newName) => {
    localStorage.setItem("name", newName)
    name = newName
    window.location.reload();
  }

  return (
    <main>
      <Header onChangeName={onChangeName} name={name} />
      <Info finance={finance}/>
      <AddFinance onAddFinance={onAddFinance}/>
      <List finance={finance} onRemove={onRemove}/>
    </main>
  );
};

export default Main;
