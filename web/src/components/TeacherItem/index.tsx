import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem() {
  return (
    <div>
      <article className="teacher-item">
          <header>
            <img src="https://avatars2.githubusercontent.com/u/42349534?s=460&u=fc9f541e047549cb150c4736e3c0da7377dae89c&v=4" alt="Fernando Batista"/>
            <div>
              <strong>Fernando Batista</strong>
              <span>Math</span>
            </div>
          </header>

          <p>
            Buscando oportunidades em desenvolvimento
          </p>

          <footer>
            <p>
              Preço/Hora
              <strong>R$ 60,00</strong>
            </p>

            <button type="button">
              <img src={whatsappIcon} alt="whatsapp"/>
              Entrar em contato
            </button>
          </footer>
        </article>
    </div>
  )
}

export default TeacherItem
