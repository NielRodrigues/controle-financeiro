import React from 'react';
import {FiEdit} from 'react-icons/fi'
import './style.css'

const Header = ({onChangeName, name}) => {



  const changeName = () => {
    const newName = prompt('Digite um nome:')
    onChangeName(newName)
  }

  return (
    <header>
      <div className='name'>
        <h1>Olá, {name}</h1>
        <button
          type='button'
          onClick={changeName}
        >
          <FiEdit size={20}/>
        </button>
      </div>
      <p>Seja bem-vindo(a)</p>
    </header>
  );
};

export default Header;
