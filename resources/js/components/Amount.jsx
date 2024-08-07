import { useEffect, useState } from 'react';

function Amount({isValid, setIsValid, amountValueUsd, setAmountValueUsd }) {
  const [amountUsd, setAmountUsd] = useState("");
  const [amountRub, setAmountRub] = useState("");
  const [userInput, setUserInput] = useState(false);

  useEffect(()=>{
    setAmountByUsd(amountValueUsd);
    setUserInput(false);
  }, [amountValueUsd])

  useEffect(()=>{
    if(!userInput) return;
    setIsValid(amountUsd > 0 && amountRub > 0)
  }, [amountUsd, amountRub])

  function setAmountByRub(rub){
    setAmountRub(rub);
    let usd = rub?(rub/15).toFixed(2):"";
    setAmountUsd(usd);
    setAmountValueUsd(usd);
    if(!userInput) setUserInput(true);
  }

  function setAmountByUsd(usd){
    setAmountUsd(usd);
    setAmountValueUsd(usd);
    let rub = usd?(usd*15).toFixed(2):"";
    setAmountRub(rub);
    if(!userInput) setUserInput(true);
  }

  return (
    <>
      <div className='card__amount'>
        <p>Укажите сумму</p>
        <div>
          <div className={'amount amount_usd ' + (isValid?"":"error")}>
            <input
              type="number"
              name='amount_usd'
              min={0}
              step={0.01}
              value={amountUsd}
              onChange={(e) => setAmountByUsd(e.target.value)}
              placeholder='0000.00'
              required
            />
            <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.2301 14.2189V17.472H5.72564V14.2189H5.485C4.0055 14.2189 2.72802 13.7703 1.65256 12.8731C0.583038 11.9699 0.0482788 10.8499 0.0482788 9.51301C0.0482788 9.33476 0.0542206 9.13868 0.0661041 8.92477C0.0779877 8.70493 0.095813 8.51182 0.11958 8.34545L2.62404 8.64848L2.58839 9.04955C2.5765 9.18621 2.57056 9.3199 2.57056 9.45062C2.57056 10.2468 2.86765 10.9153 3.46183 11.456C4.06194 11.9907 4.81655 12.2581 5.72564 12.2581V6.40249C4.35309 6.40249 3.30437 6.16482 2.57947 5.68948C1.85458 5.2082 1.49213 4.5338 1.49213 3.66631C1.49213 2.75127 1.85755 2.04717 2.58839 1.55401C3.31922 1.0549 4.36498 0.805344 5.72564 0.805344H8.2301V4.40606C10.0067 4.40606 11.403 4.86654 12.419 5.78752C13.4351 6.70849 13.9431 7.96815 13.9431 9.56648C13.9431 10.9985 13.4291 12.1333 12.4012 12.9711C11.3792 13.803 9.98886 14.2189 8.2301 14.2189ZM5.72564 2.63244C5.04234 2.63244 4.54917 2.71265 4.24614 2.87308C3.94905 3.02757 3.80051 3.26227 3.80051 3.57718C3.80051 3.88021 3.96094 4.09411 4.28179 4.21889C4.60859 4.34367 5.08987 4.40606 5.72564 4.40606V2.63244ZM8.2301 6.42032V12.2581C9.21643 12.2581 9.98886 12.0115 10.5474 11.5184C11.1059 11.0252 11.3852 10.3627 11.3852 9.53083C11.3852 8.48508 11.1297 7.70671 10.6187 7.19572C10.1136 6.67878 9.31744 6.42032 8.2301 6.42032Z" fill="#8F90A6"/>
            </svg>
          </div>
          <div className={'amount amount_rub ' + (isValid?"":"error")}>
            <input
              type="number"
              name='amount_rub'
              min={0}
              step={0.01}
              value={amountRub}
              onChange={(e) => setAmountByRub(e.target.value)}
              placeholder='0000.00'
              required
            />
            <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.46006 10.6462C12.0405 10.6462 13.7051 8.47915 13.7051 5.87235C13.7051 3.26555 12.0405 1.09846 8.46006 1.09846H2.83817V8.91885H0.294184V10.6462H2.83817V12.1538H0.294184V13.8812H2.83817V17.1789H4.78541V13.8812H8.33443V12.1538H4.78541V10.6462H8.46006ZM4.78541 8.91885V2.82585H8.46006C10.7214 2.82585 11.7892 4.11355 11.7892 5.87235C11.7892 7.63116 10.7214 8.91885 8.46006 8.91885H4.78541Z" fill="#8F90A6"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M2.54581 0.805336H8.46079C10.3114 0.805336 11.7037 1.36685 12.6337 2.30105C13.5621 3.23373 13.9989 4.507 13.9989 5.87232C13.9989 7.23764 13.5621 8.51091 12.6337 9.44359C11.7037 10.3778 10.3114 10.9393 8.46079 10.9393H5.07924V11.8607H8.62825V14.1742H5.07924V17.472H2.54581V14.1742H0.00183105V11.8607H2.54581V10.9393H0.00183105V8.62573H2.54581V0.805336ZM2.83817 1.09846H8.46006C12.0405 1.09846 13.7051 3.26555 13.7051 5.87235C13.7051 8.47915 12.0405 10.6462 8.46006 10.6462H4.78541V12.1538H8.33443V13.8812H4.78541V17.1789H2.83817V13.8812H0.294184V12.1538H2.83817V10.6462H0.294184V8.91885H2.83817V1.09846ZM5.07924 3.11891V8.62573H8.46079C9.53612 8.62573 10.2865 8.3206 10.7676 7.84639C11.2489 7.372 11.4969 6.69272 11.4969 5.87232C11.4969 5.05192 11.2489 4.37264 10.7676 3.89825C10.2865 3.42404 9.53612 3.11891 8.46079 3.11891H5.07924ZM4.78541 8.91885H8.46006C10.7214 8.91885 11.7892 7.63116 11.7892 5.87235C11.7892 4.11355 10.7214 2.82585 8.46006 2.82585H4.78541V8.91885Z" fill="#8F90A6"/>
            </svg>  
          </div>
        </div>
      </div>
    </>
  )
}

export default Amount
