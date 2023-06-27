import React, { useState } from 'react';
import Image from 'next/image';
import { LANGS } from './langs';
import { type } from 'os';

type LangProps = {
  lang: string;
  onChangeLang: void;
};

function Language({ lang, onChangeLang }: LangProps): JSX.Element {
  const [langIsOpened, setLangIsdOpened] = useState<boolean>(false);

  const handleLangChange = (lang: string) => {
    onChangeLang(lang);
    setLangIsdOpened(false);
  };

  

  return (
    <>
      <div className="flex flex-col ml-5 bg-white">
        <div
          onClick={() => {
            langIsOpened ? setLangIsdOpened(false) : setLangIsdOpened(true);
          }}
          className={`flex px-2 border-2 border-transparent rounded-sm w-fit focus:border-blue-100 hover:bg-blue-50 hover:border-blue-100 focus:bg-blue-50 cursor-pointer items-center ${
            langIsOpened ? 'bg-blue-50 border-blue-100' : ''
          }`}
          tabIndex={0}
        >
          <Image
            src={`/flags/icon-${lang}.svg`}
            width={24}
            height={24}
            alt="Current language."
            className="mr-2"
          />
          <span className="capitalize mr-1 text-[1.375rem]/[2rem] font-medium">{`${lang}`}</span>

          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path
                id="Vector 31 (Stroke)"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1.64648 5.35354L2.35359 4.64643L8.00004 10.2929L13.6465 4.64643L14.3536 5.35354L8.00004 11.7071L1.64648 5.35354Z"
                fill="#849BAF"
              />
            </g>
          </svg>
        </div>
        <div
          className={`flex-col absolute top-12 shadows z-100 bg-white min-w-[160px] w-fit py-[0.375rem] ${
            langIsOpened ? 'flex' : 'hidden'
          }`}
        >
          <p className="font-semibold px-[15px] py-2 leading-6">Страна</p>
          <ul className="">
            {LANGS.map((item) => (
              <li
                onClick={() => handleLangChange(item.lang)}
                key={item.lang}
                className="cursor-pointer flex gap-[0.625rem] px-[15px] py-2 leading-6 hover:bg-blue-50 items-center"
              >
                <Image
                  src={`/flags/icon-${item.lang}.svg`}
                  width={16}
                  height={16}
                  alt="Current language."
                />
                <p>{item.translate}</p>
                {item.lang === lang ? (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="icon_16x16_M_Tick">
                      <path
                        id="Vector 31 (Stroke)"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M2.64648 7.35348L3.35359 6.64637L7.00004 10.2928L13 4.29289L13.7071 5L7.00004 11.707L2.64648 7.35348Z"
                        fill="#1D7DED"
                      />
                    </g>
                  </svg>
                ) : (
                  ''
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Language;
