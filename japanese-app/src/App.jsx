import { useState } from 'react';
import Card from './components/Card';
import Header from './components/Header';
import Data from './data/kanji';

const App = () => {
  const [item, setItem] = useState(Data);
  const [kanjiCount, setkanjiCount] = useState(Data.length);

  const filterItem = (curcat) => {
    const newItem = Data.filter((newVal) => {
      return newVal.jlpt_new === curcat;
    });
    setItem(newItem);
    setkanjiCount(newItem.length);
  };

  return (
    <>
      <div className='bg-slate-100'>
        <Header filterItem={filterItem} setItem={setItem} count={kanjiCount} />
        <div className='flex flex-wrap justify-center pt-10'>
          {item.map((character, index) => (
            <Card
              key={index}
              id={index}
              kanji={character.kanji}
              jlpt={character.jlpt_new}
              strokes={character.strokes}
              grade={character.grade}
              on_reading={
                (index < character.readings_on - 1 ? ', ' : '') +
                character.readings_on
              }
              kun_reading={
                (index < character.readings_kun - 1 ? ', ' : '') +
                character.readings_kun
              }
              radical={
                (index < character.wk_radicals - 1 ? ', ' : '') +
                character.wk_radicals
              }
              meanings={
                (index < character.wk_meanings - 1 ? ', ' : '') +
                character.wk_meanings
              }
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
