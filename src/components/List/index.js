import React from 'react';
import {MdArrowCircleUp, MdArrowCircleDown, MdAttachMoney, MdDelete} from 'react-icons/md'

import './style.css'

const List = ({finance, onRemove}) => {
  return (
    <section className='list'>
      <div className='header'>
        <h2 className='date'>Data</h2>
        <h2 className='desc'>Descrição</h2>
        <h2 className='value'>Valor</h2>
        <h2 className='type'>Tipo</h2>
      </div>
      <ul>
        {

          finance.map((item) => (
            item.earn === true ?
            (<li>
              <h2 className='date'>{item.date}</h2>
              <h2 className='desc'>{item.desc}</h2>
              <h2 className='value'>R$ {(item.value).toFixed(2)}</h2>
              <MdArrowCircleUp className='type' color='green' size={24}/>
              <button type='button' onClick={() => onRemove && onRemove(item)}>
                <MdDelete size={24}/>
              </button>
            </li>)

            :

            (<li>
              <h2 className='date'>{item.date}</h2>
              <h2 className='desc'>{item.desc}</h2>
              <h2 className='value'>R$ {(item.value).toFixed(2)}</h2>
              <MdArrowCircleDown className='type' color='red' size={24}/>
              <button type='button' onClick={() => onRemove && onRemove(item)}>
                <MdDelete size={24}/>
              </button>
            </li>)
          ))
        }
      </ul>
    </section>
  );
};

export default List;
