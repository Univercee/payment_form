import { useEffect, useState } from 'react';
import Amount from './components/Amount';
import Card from './components/Card';
import Cards from './components/Cards';
import SaveCardForm from './components/SaveCardForm';
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
  const [amountValueUsd, setAmountValueUsd] = useState('');
  const [saveCard, setSaveCard] = useState(false);
  const [refreshData, setRefreshData] = useState(false);
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
    if(is_valid && amountIsValid){
      axios.post('/api/card', {
        card: cardData,
        save: saveCard
      })
      .then((response)=>{
        clear();
        setRefreshData(true);
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
    setSaveCard(false);
    setAmountValueUsd('');
    setCardData({
      number: '',
      year: '',
      month: '',
      cvv: ''
    });
  }

  function clearCard(){
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
          <Amount amountValueUsd={amountValueUsd} setAmountValueUsd={setAmountValueUsd} isValid={amountIsValid} setIsValid={setAmountIsValid}></Amount>
          <Cards setCardData={setCardData} clear={clearCard} refresh={refreshData}></Cards>
          <Card isValid={cardIsValid} setIsValid={setCardIsValid} setCardData={setCardData} cardData={cardData}></Card>
          <SaveCardForm saveCard={saveCard} setSaveCard={setSaveCard}></SaveCardForm>
        </div>

        <input className='card__submit' type="submit" value={"Оплатить"} />

      </form>
    </>
  )
}

export default App
