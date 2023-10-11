import React from 'react';
import { useState } from 'react';
import arrowDown from '../../../images/icon-arrow-down.svg';

export default function Accordion({ q, a }) {
  const [isToggle, setIsToggle] = useState(false);
  return (
    <>
      <li className='accordian-item' onClick={() => setIsToggle(!isToggle)}>
        <div className='accordian-item-content'>
          <p className={'accordian-item-question ' + (isToggle ? 'bold' : '')}>
            {q}
          </p>
          {isToggle && <p className='accordian-item-answer'>{a}</p>}
        </div>
        <button>
          <img
            src={arrowDown}
            alt='icon arrow down'
            className={isToggle ? 'reverted' : ''}
          />
        </button>
      </li>
      <div className='divider'></div>
    </>
  );
}
