import { useEffect, useState } from 'react';
import Amount from './components/Amount';
import Card from './components/Card';
import Cards from './components/Cards';
import Terms from './components/Terms';
import './bootstrap';
import axios from 'axios';

function App() {
  const [cardData, setCardData] = useState({
    number: '',
    year: '',
    month: '',
    cvv: ''
  })
  const [amountIsValid, setAmountIsValid] = useState(true);
  const [termsIsValid, setTermsIsValid] = useState(true);
  const [cardIsValid, setCardIsValid] = useState({
    number: true,
    year: true,
    month: true,
    cvv: true
  });

  function handleSubmit(e){
    e.preventDefault();
    let is_valid = true
    Object.values(cardIsValid).forEach(value=>{
      is_valid = is_valid && value;
    })
    if(is_valid){
      axios.post('/api/card', cardData)
      .then((response)=>{
        clear();
        alert("Success!")
      })
      .catch(err=>{
        let errorString = "";
        Object.values(err.response.data.errors).forEach((value)=>{
          errorString += value+"\n";
        })
        alert(errorString)
      })
    }
  }

  function clear(){
    setCardData({
      number: '',
      year: '',
      month: '',
      cvv: ''
    });
  }
  
  return (
    <>
      <form className='card' onSubmit={handleSubmit}>
        <h1>Пополнить банковской картой</h1>

        <div className='card__body'>
          <Amount isValid={amountIsValid} setIsValid={setAmountIsValid}></Amount>
          <Cards setCardData={setCardData} clear={clear}></Cards>
          <Card isValid={cardIsValid} setIsValid={setCardIsValid} setCardData={setCardData} cardData={cardData}></Card>
          <Terms isValid={termsIsValid} setIsValid={setTermsIsValid}></Terms>
        </div>

        <input className='card__submit' type="submit" value={"Оплатить"} />

      </form>
    </>
  )
}

export default App
