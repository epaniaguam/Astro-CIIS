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
      fill='#fff'
      d='M10 4h12v24H10z'
    />
    <path
      fill='#c82c2b'
      d='M5 4h6v24H5c-2.208 0-4-1.792-4-4V8c0-2.208 1.792-4 4-4ZM27 28h-6V4h6c2.208 0 4 1.792 4 4v16c0 2.208-1.792 4-4 4Z'
    />
    <path
      d='M27 4H5a4 4 0 0 0-4 4v16a4 4 0 0 0 4 4h22a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4Zm3 20c0 1.654-1.346 3-3 3H5c-1.654 0-3-1.346-3-3V8c0-1.654 1.346-3 3-3h22c1.654 0 3 1.346 3 3v16Z'
      opacity={0.15}
    />
    <path
      fill='#fff'
      d='M27 5H5a3 3 0 0 0-3 3v1a3 3 0 0 1 3-3h22a3 3 0 0 1 3 3V8a3 3 0 0 0-3-3Z'
      opacity={0.2}
    />
  </svg>
);
export default SvgComponent;
