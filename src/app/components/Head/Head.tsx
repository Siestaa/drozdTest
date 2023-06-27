import React from 'react';
import Language from '../Language/Language';
import Burger from '../Burger/Burger';

type HeadProps = {
  lang: string,
  isOpened: boolean,
  onChangeLang: void,
  onChangeOpen: void
  
};

function Head({ lang, isOpened, onChangeLang, onChangeOpen}: HeadProps) {
  return (
    <>
      <div className="flex justify-between items-center w-[360px] z-10 bg-white absolute top-[0.62rem] left-0">
        <Language lang={lang} onChangeLang={onChangeLang}/>
        <Burger isOpened={isOpened} onChangeOpen={onChangeOpen} />
      </div>
    </>
  );
}

export default Head;
