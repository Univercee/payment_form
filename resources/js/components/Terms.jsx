import { useState } from 'react';

function Terms() {
  const [terms, setTerms] = useState("");
  const [userInput, setUserInput] = useState(false)

  function updateTerms(value){
    if(!userInput) setUserInput(true);
    setTerms(value)
  }

  return (
    <>
      <div className='card__terms'>
        <input
          className={'terms terms_input ' + (!terms&&userInput?"error":"") }
          type="checkbox"
          name="terms"
          value={terms}
          onChange={(e) => updateTerms(e.target.checked)}
          id=""
          required
        />
        <div className='terms terms_text'>
          <p>
          Запомнить эту карту. Это безопасно.
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M0.833313 10.1387C0.833313 5.07607 4.93737 0.972015 9.99998 0.972015C15.0626 0.972015 19.1666 5.07607 19.1666 10.1387C19.1666 15.2013 15.0626 19.3053 9.99998 19.3053C4.93737 19.3053 0.833313 15.2013 0.833313 10.1387ZM9.99998 2.63868C5.85784 2.63868 2.49998 5.99655 2.49998 10.1387C2.49998 14.2808 5.85784 17.6387 9.99998 17.6387C14.1421 17.6387 17.5 14.2808 17.5 10.1387C17.5 5.99655 14.1421 2.63868 9.99998 2.63868Z" fill="#C7C9D9"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M9.99998 5.97201C10.4602 5.97201 10.8333 6.34511 10.8333 6.80535V10.1387C10.8333 10.5989 10.4602 10.972 9.99998 10.972C9.53974 10.972 9.16665 10.5989 9.16665 10.1387V6.80535C9.16665 6.34511 9.53974 5.97201 9.99998 5.97201Z" fill="#C7C9D9"/>
            <path d="M10.8333 13.472C10.8333 13.9323 10.4602 14.3053 9.99998 14.3053C9.53974 14.3053 9.16665 13.9323 9.16665 13.472C9.16665 13.0118 9.53974 12.6387 9.99998 12.6387C10.4602 12.6387 10.8333 13.0118 10.8333 13.472Z" fill="#C7C9D9"/>
          </svg>
          </p>
          <p className='link'>Сохраняя карту, вы соглашаетесь с&nbsp;<a href="#"> условиями привязки карты.</a></p>
        </div>
      </div>
    </>
  )
}

export default Terms
