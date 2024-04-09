import { useEffect, useState } from 'react';

function Card({isValid, setIsValid}) {
  const date = new Date()
  const [number, setNumber] = useState("");
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [cvv, setCvv] = useState("");
  const [userNumberInput, setUserNumberInput] = useState(false);
  const [userCvvInput, setUserCvvInput] = useState(false);
  const [userYearInput, setUserYearInput] = useState(false);
  const [userMonthInput, setUserMonthInput] = useState(false);

  useEffect(()=>{
    if(!userNumberInput) return;
    setIsValid({
      number: isNumeric(number) && number.length == 16,
      year: isValid.year,
      month: isValid.month,
      cvv: isValid.cvv
    })
  }, [number])

  useEffect(()=>{
    if(!userMonthInput || !userYearInput) return;
    let card_date = new Date(parseInt(year)+2000, month)
    setIsValid({
      number: isValid.number,
      year: isNumeric(year) && year >= date.getFullYear()-2000 && date<card_date,
      month: isNumeric(month) && month >= 1 && month <= 12 && date<card_date,
      cvv: isValid.cvv
    })
  }, [month, year])

  useEffect(()=>{
    if(!userCvvInput) return;
    setIsValid({
      number: isValid.number,
      year: isValid.year,
      month: isValid.month,
      cvv: isNumeric(cvv) && cvv.length == 3
    })
  }, [cvv])

  function checkCvv(e){
    let value = e.target.value;
    if(value.length > 0){
      let lastChar = value.substr(value.length - 1)
      if(!isNumeric(lastChar)){
        e.preventDefault();
      }
      else{
        if(!userCvvInput) setUserCvvInput(true);
        setCvv(value)
      }
    }
    else {
      if(!userCvvInput) setUserCvvInput(true);
      setCvv(value)
    }
  }

  function checkYear(e){
    let value = e.target.value;
    if(value.length > 0){
      let lastChar = value.substr(value.length - 1)
      if(!isNumeric(lastChar)){
        e.preventDefault();
      }
      else{
        if(!userYearInput) setUserYearInput(true);
        setYear(value)
      }
    }
    else {
      if(!userYearInput) setUserYearInput(true);
      setYear(value)
    }
  }

  function checkMonth(e){
    let value = e.target.value;
    if(value.length > 0){
      let lastChar = value.substr(value.length - 1)
      if(!isNumeric(lastChar) || value < 1 || value > 12){
        e.preventDefault();
      }
      else{
        if(!userMonthInput) setUserMonthInput(true);
        setMonth(value)
      }
    }
    else {
      if(!userMonthInput) setUserMonthInput(true);
      setMonth(value)
    }
  }

  function checkNumber(e){
    let value = e.target.value;
    if(value.length > 0){
      let lastChar = value.substr(value.length - 1)
      if(!isNumeric(lastChar) || value.length > 16){
        e.preventDefault();
      }
      else{
        if(!userNumberInput) setUserNumberInput(true);
        setNumber(value)
      }
    }
    else {
      if(!userNumberInput) setUserNumberInput(true);
      setNumber(value)
    }
  }

  function isNumeric(value) {
    return /^\d+$/.test(value);
  }

  return (
    <>
      <div className='card__new'>
        <div className='new new_front'>
          <div className='form-group'>
            <label>Номер карты</label>
            <input
              className={isValid.number?"":"error"}
              type="text"
              name='number'
              value={number}
              maxLength={16}
              onChange={(e) => checkNumber(e)}
              placeholder='Номер карты'
              required
            />
          </div>
          <div className='form-group'>
            <label>Действует до</label>
            <div className='form-group form-group_multiple'>
              <input
                className={isValid.month?"":"error"}
                type="text"
                name='month'
                value={month}
                maxLength={2}
                onChange={(e) => checkMonth(e)}
                placeholder='ММ'
                required
              />
              <span>/</span>
              <input
                className={isValid.year?"":"error"}
                type="text"
                name='year'
                value={year}
                maxLength={2}
                onChange={(e) => checkYear(e)}
                placeholder='ГГ'
                required
              />
            </div>
          </div>
        </div>
        <div className='new new_back'>
          <div className='line'>

          </div>
          <div className='form-group'>
            <div>
              <label>CVV/CVC</label>
              <input
                className={isValid.cvv?"":"error"}
                type="password"
                name='cvv'
                autoComplete="false"
                maxLength={3}
                value={cvv}
                onChange={(e) => checkCvv(e)}
                placeholder='000'
                required
              />
            </div>
            <span className='info'>
              три цифры
              <br/>с обратной стороны
              <br/>карты
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card
