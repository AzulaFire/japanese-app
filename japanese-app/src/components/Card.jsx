/* eslint-disable react/prop-types */
import './css/Card.css';
import { useState } from 'react';

const Card = ({
  kanji,
  strokes,
  grade,
  on_reading,
  kun_reading,
  radical,
  meanings,
  jlpt,
}) => {
  const [isShown, setIsShown] = useState(true);

  const handleButtonClick = () => {
    setIsShown((prevState) => !prevState);
    console.log(isShown);
  };

  return (
    <>
      {isShown && (
        <div className='card-container mb-10 mx-6'>
          {jlpt && <span className='jlpt'>{jlpt}</span>}
          {kanji && <h1 className='card-title'>{kanji}</h1>}

          <div className='flex flex-wrap justify-between px-8 py-2'>
            <div className='text-xs'>Strokes: {strokes}</div>
            <div className='text-xs'>Grade: {grade}</div>
          </div>
          <p className='px-3 pt-1'>
            On Reading: <span className='text-xs'>{on_reading}</span>
          </p>
          <p className='px-3 pt-1'>
            Kun Reading: <span className='text-xs'>{kun_reading}</span>
          </p>
          <p className='px-3 pt-1 mb-2'>
            Radical: <span className='text-sm'>{radical}</span>
          </p>
          <button onClick={handleButtonClick} className='card-btn mx-auto'>
            Meaning
          </button>
        </div>
      )}
      {!isShown && (
        <div className='card-container-flip mb-10 mx-6'>
          <ul>
            {meanings.split(',').map((str, index) => (
              <li key={index}>{str}</li>
            ))}
          </ul>
          <button onClick={handleButtonClick} className='card-btn mx-auto'>
            Meaning
          </button>
        </div>
      )}
    </>
  );
};
export default Card;
