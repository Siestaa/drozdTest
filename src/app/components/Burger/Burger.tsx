import React, { useState } from 'react';

type BurgerProps = {
  isOpened: boolean,
  onChangeOpen: void
}

export default function Burger({isOpened, onChangeOpen}:BurgerProps): JSX.Element {
  return (
    <>
      <button
        onClick={() => {
          isOpened ? onChangeOpen(false) : onChangeOpen(true);
        }}
        className="mr-[0.62rem] flex justify-center items-center hover:scale-110 duration-500"
      >
        {isOpened ? (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="close">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.9394 12.0001L2.46973 3.53039L3.53039 2.46973L12.0001 10.9394L20.4697 2.46973L21.5304 3.53039L13.0607 12.0001L21.5304 20.4697L20.4697 21.5304L12.0001 13.0607L3.53039 21.5304L2.46973 20.4697L10.9394 12.0001Z"
                fill="#151617"
              />
            </g>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            width="24px"
            height="24px"
          >
            <path d="M 4 7 L 4 9 L 28 9 L 28 7 Z M 4 15 L 4 17 L 28 17 L 28 15 Z M 4 23 L 4 25 L 28 25 L 28 23 Z" />
          </svg>
        )}
      </button>
    </>
  );
}
