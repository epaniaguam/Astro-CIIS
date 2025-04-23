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
      fill='#0c258b'
      d='M5 4h22c2.208 0 4 1.792 4 4v2H1V8c0-2.208 1.792-4 4-4ZM27 28H5c-2.208 0-4-1.792-4-4v-2h30v2c0 2.208-1.792 4-4 4Z'
    />
    <path
      fill='#fff'
      d='M1 18h30v5H1zM1 9h30v5H1z'
    />
    <path
      fill='#0c258b'
      d='M1 13.5h30v5H1z'
    />
    <path
      fill='#bc2b20'
      d='M2.316 26.947 16 16 2.316 5.053A3.976 3.976 0 0 0 1 8v16c0 1.172.513 2.216 1.316 2.947Z'
    />
    <path
      d='M27 4H5a4 4 0 0 0-4 4v16a4 4 0 0 0 4 4h22a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4Zm3 20c0 1.654-1.346 3-3 3H5c-1.654 0-3-1.346-3-3V8c0-1.654 1.346-3 3-3h22c1.654 0 3 1.346 3 3v16Z'
      opacity={0.15}
    />
    <path
      fill='#fff'
      d='m8.016 16.628 2.302-1.672H7.473l-.879-2.706-.879 2.706H2.87l2.301 1.672-.879 2.705 2.302-1.672 2.301 1.672-.879-2.705z'
    />
    <path
      fill='#fff'
      d='M27 5H5a3 3 0 0 0-3 3v1a3 3 0 0 1 3-3h22a3 3 0 0 1 3 3V8a3 3 0 0 0-3-3Z'
      opacity={0.2}
    />
  </svg>
);
export default SvgComponent;
