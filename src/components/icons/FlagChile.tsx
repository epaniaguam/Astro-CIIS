import * as React from "react";
import { type SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={32}
    height={32}
    {...props}
  >
    <path
      fill='#c73a29'
      d='M1 24a4 4 0 0 0 4 4h22a4 4 0 0 0 4-4v-9H1v9Z'
    />
    <path
      fill='#fff'
      d='M27 4H5a4 4 0 0 0-4 4v8h30V8a4 4 0 0 0-4-4Z'
    />
    <path
      fill='#1435a1'
      d='M5 4h8v12H1V8c0-2.208 1.792-4 4-4Z'
    />
    <path
      d='M27 4H5a4 4 0 0 0-4 4v16a4 4 0 0 0 4 4h22a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4Zm3 20c0 1.654-1.346 3-3 3H5c-1.654 0-3-1.346-3-3V8c0-1.654 1.346-3 3-3h22c1.654 0 3 1.346 3 3v16Z'
      opacity={0.15}
    />
    <path
      fill='#fff'
      d='m8.146 10.674 1.855-1.348H7.708L7 7.146l-.708 2.18H3.999l1.855 1.348-.709 2.18L7 11.507l1.855 1.347-.709-2.18z'
    />
    <path
      fill='#fff'
      d='M27 5H5a3 3 0 0 0-3 3v1a3 3 0 0 1 3-3h22a3 3 0 0 1 3 3V8a3 3 0 0 0-3-3Z'
      opacity={0.2}
    />
  </svg>
);
export default SvgComponent;
