import React, { useEffect, useState } from 'react';
import { PAGES } from './pages';

type NavProps = {
  isOpened: boolean;
  lang: string;
};

const numLang = {
  ru: 0,
  us: 1,
  nl: 2,
  by: 3,
  kz: 4,
  tr: 5,
};

interface IMenu {
  id: string;
  page: string;
  innerPages?: IMenu[];
  description?: string;
}

function Navigation({ isOpened, lang }: NavProps) {
  const [currentMenu, setCurrentMenu] = useState(PAGES[numLang[lang]].pages);
  const [firstLevel, setFirstLevel] = useState<IMenu>(currentMenu);
  const [secondLevel, setSecondLevel] = useState<IMenu>(
    firstLevel[0].innerPages
  );
  const [thirdLevel, setThirdLevel] = useState<IMenu>(
    secondLevel[0].innerPages
  );
  const [secondLevelHead, setSecondLevelHead] = useState<string>(
    firstLevel[0].page
  );
  const [thirdLevelHead, setThirdLevelHead] = useState<string>(
    secondLevel[0].page
  );

  useEffect(() => {
    setCurrentMenu(PAGES[numLang[lang]].pages);
  }, [lang]);

  useEffect(() => {
    setFirstLevel(currentMenu);
  }, [currentMenu]);

  useEffect(() => {
    setSecondLevel(firstLevel[0].innerPages);
  }, [firstLevel]);

  useEffect(() => {
    setThirdLevel(secondLevel[0].innerPages);
  }, [secondLevel]);

  const handleChangeSecondMenu = (id) => {
    const currentIndex = firstLevel.findIndex((item) => {
      return item.id === id;
    });
    setSecondLevel(firstLevel[currentIndex].innerPages);
    setSecondLevelHead(firstLevel[currentIndex].page);
    document.querySelector('#nav')?.classList.add('levelTwo');
    document.querySelector('#nav')?.classList.remove('levelOne');
  };

  const handleChangeThirdMenu = (id) => {
    const currentIndex = secondLevel.findIndex((item) => {
      return item.id === id;
    });
    setThirdLevel(secondLevel[currentIndex].innerPages);
    setThirdLevelHead(secondLevel[currentIndex].page);
    document.querySelector('#nav')?.classList.add('levelThree');
    document.querySelector('#nav')?.classList.remove('levelTwo');
  };

  const onLevelOne = () => {
    document.querySelector('#nav')?.classList.add('levelOne');
    document.querySelector('#nav')?.classList.remove('levelTwo');
  };

  const onLevelTwo = () => {
    document.querySelector('#nav')?.classList.add('levelTwo');
    document.querySelector('#nav')?.classList.remove('levelThree');
  };

  return (
    <>
      <div className={`${
            isOpened ? 'translate-y-[0%] duration-300' : 'translate-y-[-100%] duration-300'
          } w-[360px] h-screen block`}>
        <nav
          id="nav"
          className={`flex w-[360px] levelOne bg-white h-screen`}
        >
          <div className="min-w-[360px] flex flex-col px-[1.88rem] pt-[4.81rem] ">
            <ul className="w-full h-full flex flex-col gap-5 overflow-y-scroll scrollbar-thin">
              {firstLevel.map((item) => (
                <li key={item.id} className="relative">
                  <button
                    onClick={() => handleChangeSecondMenu(item.id)}
                    className="w-full text-left text-[1.375rem]/[2rem] font-medium flex items-center justify-between group"
                  >
                    {item.page}
                    <svg
                      className="fill-blue-300 group-hover:fill-blue-600 duration-200"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g>
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M6.35348 1.64648L5.64637 2.35359L11.2928 8.00004L5.64637 13.6465L6.35348 14.3536L12.707 8.00004L6.35348 1.64648Z"
                        />
                      </g>
                    </svg>
                  </button>
                  {item.description && <p>{item.description}</p>}
                </li>
              ))}
              <li
                key="contacts"
                className="w-full text-left text-[1.375rem]/[2rem] font-medium mt-auto"
              >
                <a href="#">Контакты</a>
              </li>
              <li
                key="search"
                className="w-full text-left text-[1.375rem]/[2rem] font-medium mb-[1.88rem]"
              >
                <a href="#">Поиск</a>
              </li>
            </ul>
          </div>
          <div className="min-w-[360px] flex flex-col gap-5 px-[1.88rem] pt-[4.81rem]">
            <button
              onClick={() => onLevelOne()}
              className="w-full text-left text-[1.375rem]/[2rem] font-medium flex items-center justify-start relative group"
            >
              <svg
              
                width="16"
                height="16"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-blue-300 absolute left-[-1.2rem] group-hover:scale-150 duration-200"
              >
                <g>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.64652 1.64648L10.3536 2.35359L4.70718 8.00004L10.3536 13.6465L9.64652 14.3536L3.29297 8.00004L9.64652 1.64648Z"
                  />
                </g>
              </svg>
              {secondLevelHead}
            </button>
            <ul className="w-full h-full flex flex-col gap-5 overflow-y-scroll scrollbar-thin">
              {secondLevel &&
                secondLevel.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => handleChangeThirdMenu(item.id)}
                      className="w-full text-left text-[1.125rem]/[1.875rem] font-medium flex items-center justify-between group"
                    >
                      {item.page}
                      <svg
                        className="fill-blue-300 group-hover:scale-150 duration-200"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M6.35348 1.64648L5.64637 2.35359L11.2928 8.00004L5.64637 13.6465L6.35348 14.3536L12.707 8.00004L6.35348 1.64648Z"
                          />
                        </g>
                      </svg>
                    </button>
                    {item.description && <p>{item.description}</p>}
                  </li>
                ))}
            </ul>
          </div>
          <div className="min-w-[360px] flex flex-col gap-5 px-[1.88rem] pt-[4.81rem]">
            <button
              onClick={() => onLevelTwo()}
              className="w-full text-left text-[1.375rem]/[2rem] font-medium flex items-center justify-start relative group"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-blue-300 absolute left-[-1.2rem] group-hover:scale-150 duration-200"
              >
                <g id="icon_16x16_M_Arrow-left">
                  <path
                    id="Vector 30 (Stroke)"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.64652 1.64648L10.3536 2.35359L4.70718 8.00004L10.3536 13.6465L9.64652 14.3536L3.29297 8.00004L9.64652 1.64648Z"
                  />
                </g>
              </svg>
              {thirdLevelHead}
            </button>
            <ul className="w-full h-full flex flex-col gap-5 overflow-y-scroll my-scroll-bar">
              {thirdLevel &&
                thirdLevel.map((item) => (
                  <li key={item.id}>
                    <a href="#" className="text-base">
                      {item.page}
                    </a>
                    {item.description && (
                      <p className="text-color-description text-[0.75rem]/[1.25rem] mt-[0.31rem]">
                        {item.description}
                      </p>
                    )}
                  </li>
                ))}
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navigation;
