import { useEffect, useState } from 'react';
import Amount from './components/Amount';
import Card from './components/Card';
import Cards from './components/Cards';
import Terms from './components/Terms';
import './bootstrap';

function App() {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const [termsIsValid, setTermsIsValid] = useState(true);
  const [cardIsValid, setCardIsValid] = useState({
    number: true,
    year: true,
    month: true,
    cvv: true
  });
  function handleSubmit(){
    
  }
  return (
    <>
      <form className='card' onSubmit={handleSubmit}>
        <h1>Пополнить банковской картой</h1>

        <div className='card__body'>
          <Amount isValid={amountIsValid} setIsValid={setAmountIsValid}></Amount>
          <Cards></Cards>
          <Card isValid={cardIsValid} setIsValid={setCardIsValid}></Card>
          <Terms isValid={termsIsValid} setIsValid={setTermsIsValid}></Terms>
        </div>

        <input className='card__submit' type="submit" value={"Оплатить"} />

      </form>
    </>
  )
}

export default App
