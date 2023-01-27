/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */

import React, { useEffect, useState, useRef } from 'react'
import './accordion.css'

const AccordionItem = ({ faq }) => {
  const [clicked, setClicked] = useState(false)
  const contentEl = useRef()

  const { question, answer, icon, iconActive } = faq

  const handleToggle = () => {
    setClicked(prev => !prev)
  }

  return (
    <li className={`accordion_item ${clicked ? 'active' : ''}`}>
      <button className="button" onClick={handleToggle}>
        <div className="accordion_q_holder">
          <div className="accordian__icon">
            <img src={clicked ? iconActive : icon} />
          </div>
          {question}
        </div>
        <span className="control">{clicked ? '—' : '+'} </span>
      </button>

      <div
        ref={contentEl}
        className="answer_wrapper"
        style={clicked ? { height: contentEl.current.scrollHeight } : { height: '0px' }}
      >
        <div className="answer">{answer}</div>
      </div>
    </li>
  )
}

export default AccordionItem
