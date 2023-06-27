'use client';
import React, { useState } from 'react';
import Head from '../Head/Head';
import Navigation from '../Navigation/Navigation';

export default function Menu(): JSX.Element {  
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const [lang, setLang] = useState<string>('ru');

  const handleChangeLang = (lang:string):void => {
    setLang(lang)
  }

  const handleChangeOpen = (isOpened: boolean):void => {
    setIsOpened(isOpened);
    setTimeout(() => {
      document.querySelector('#nav')?.classList.add('levelOne');
      document.querySelector('#nav')?.classList.remove('levelTwo');
      document.querySelector('#nav')?.classList.remove('levelThree');
    }, 300)    
  }

  return (
    <>
    <main className="max-w-[360px] w-[360px] fixed h-screen flex flex-col overflow-x-hidden scrollbar-thin">
      <Head lang={lang} isOpened={isOpened} onChangeLang={handleChangeLang} onChangeOpen={handleChangeOpen}/>
      <Navigation isOpened={isOpened} lang={lang}/>
    </main>
    </>
  );
}
