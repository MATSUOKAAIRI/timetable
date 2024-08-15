'use client';

import { useState } from 'react';

export default function Home() {
  const [isFormVisible, setIsFormVisible] = useState(true);
  const [isForms, setIsForms] = useState(false);
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [bag, setBag] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isMeat, setIsMeat] = useState(false);

  const handleButtonClick = () => {
    setIsFormVisible(false);
  };

  const handleButton = () => {
  setIsForms(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setIsFormVisible(false);
  };

  const handbell = (e) => {
    e.preventDefault();
    setIsMeat(true);
    setIsForms(false);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '5px' }}>
      {!isForms && !isMeat && (
        <button onClick={handleButton} type="submit" className='btn-60' on><span>Button</span></button>       
        )}
      {isForms && (
    <form className='discountForm' onSubmit={handbell}>            
      <span className="DiscountHeading">編集</span>
        <div className="inputContainer">
          <input 
          placeholder="科目:" 
          type="text" 
          onChange={(e) => setName(e.target.value)}
          value={name}
          required
          />
          <input 
          placeholder="場所:" 
          type="text" 
          onChange={(e) => setComment(e.target.value)}
          value={comment}
          required
          />
          <input 
          placeholder="持ち物:" 
          type="text" 
          onChange={(e) => setBag(e.target.value)}
          value={bag}
          required
          />
          <button type="submit" className="submitButton">Get it!</button>
        </div>
        {setIsForms &&(
          <button className="exitBtn" onClick={handbell}>×</button>
        )}
    </form>
      )}
      {isMeat && (
        <div>
          <p>{name}</p>
          <p>{comment}</p>
          <p>{bag}</p>
        </div>
      )}
     
    </div>
  );
}
