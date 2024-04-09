function Cards() {
  return (
    <>
      <div className='card__saved'>
        <div className='saved saved_existed'>
          <p><span>• • • •</span> 3282</p>
          <p><span>12</span> / <span>23</span></p>
        </div>
        <div className='saved saved_existed'>
          <p><span>• • • •</span> 3282</p>
          <p><span>12</span> / <span>23</span></p>
        </div>
        <div className='saved saved_existed'>
          <p><span>• • • •</span> 3282</p>
          <p><span>12</span> / <span>23</span></p>
        </div>
        <div className='saved saved_existed'>
          <p><span>• • • •</span> 3282</p>
          <p><span>12</span> / <span>23</span></p>
        </div>
        <div className='saved saved_new'>
          <div>
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
