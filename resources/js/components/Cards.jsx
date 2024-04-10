import axios from "axios";
import { useEffect, useState } from "react"

function Cards({setCardData, clear, refresh}) {
  const [cards, setCards] = useState([]);

  useEffect(()=>{
    axios.get('/api/cards').then((response)=>{
      setCards(response.data)
    })
  }, []);

  useEffect(()=>{
    if(refresh){
      axios.get('/api/cards').then((response)=>{
        setCards(response.data)
      })
    }
  }, [refresh]);

  function setData(number){
    let data = cards.filter((card)=>{
      return card.number == number
    })[0];
    setCardData(data);
  }

  return (
    <>
      <div className='card__saved'>
        {
          cards.map((card)=>{
          let month = card.month.toString();
          return (
            <div className='saved saved_existed' key={card.number} onClick={()=>{setData(card.number)}}>
              <p><span>• • • •</span> {card.number.substr(card.number.length - 4)}</p>
              <p><span>{month.length==1?"0"+month:card.month}</span> / <span>{card.year - 2000}</span></p>
            </div>
          )
          })
        }
        <div className='saved saved_new'>
          <div onClick={clear}>
            <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 5.97201V22.3053" stroke="#7B8794" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M5.83331 14.1387H22.1666" stroke="#7B8794" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <p>Новая карта</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cards
