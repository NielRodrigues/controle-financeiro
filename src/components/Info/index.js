import React from 'react';
import { useState } from 'react';
import {MdArrowCircleUp, MdArrowCircleDown, MdAttachMoney} from 'react-icons/md'

import './style.css'

const Info = ({finance}) => {


  let earningValue = 0
  let expenseValue = 0

  const income = () => {
    for(let i = 0; i < finance.length; i++){
      console.log(finance[i].value)
      if(finance[i].earn){
        earningValue = earningValue + finance[i].value
      } else {
        expenseValue = expenseValue + finance[i].value
      }
    }
  }
  income()


  console.log('As Finanças >>>>>>', finance)
  const saldo = earningValue - expenseValue

  return (
    <section className='info-money'>
      <div className='info-layout'>
        <div className='text'>
          <h1>Entrada</h1>
          <MdArrowCircleUp color='#1f1e21' size={24}/>
        </div>
        <h2 className='money'>R$ {earningValue.toFixed(2)}</h2>
      </div>
      <div className='info-layout'>
      <div className='text'>
          <h1>Saída</h1>
          <MdArrowCircleDown color='#1f1e21' size={24}/>
        </div>
        <h2 className='money'>R$ {expenseValue.toFixed(2)}</h2>
      </div>
      <div className='info-layout'>
        <div className='text'>
          <h1>Saldo</h1>
          <MdAttachMoney color='#1f1e21' size={24}/>
        </div>
        <h2 className='money'>R$ {saldo.toFixed(2)}</h2>

      </div>
    </section>
  );
};

export default Info;
