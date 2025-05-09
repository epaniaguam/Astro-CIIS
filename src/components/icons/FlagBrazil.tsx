import * as React from "react";
import { type SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={32}
    height={32}
    {...props}
  >
    <rect
      width={30}
      height={24}
      x={1}
      y={4}
      fill='#459a45'
      rx={4}
      ry={4}
    />
    <path
      d='M27 4H5a4 4 0 0 0-4 4v16a4 4 0 0 0 4 4h22a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4Zm3 20c0 1.654-1.346 3-3 3H5c-1.654 0-3-1.346-3-3V8c0-1.654 1.346-3 3-3h22c1.654 0 3 1.346 3 3v16Z'
      opacity={0.15}
    />
    <path
      fill='#fedf00'
      d='M3.472 16 16 24l12.528-8L16 8 3.472 16Z'
    />
    <circle
      cx={16}
      cy={16}
      r={5}
      fill='#0a2172'
    />
    <path
      fill='#fff'
      d='M14 14.5c-.997 0-1.958.149-2.873.409-.078.35-.126.71-.127 1.083a9.456 9.456 0 0 1 2.999-.493c2.524 0 4.816.996 6.519 2.608a4.98 4.98 0 0 0 .356-1.026 10.443 10.443 0 0 0-6.875-2.583Z'
    />
    <path
      fill='#fff'
      d='M27 5H5a3 3 0 0 0-3 3v1a3 3 0 0 1 3-3h22a3 3 0 0 1 3 3V8a3 3 0 0 0-3-3Z'
      opacity={0.2}
    />
  </svg>
);
export default SvgComponent;
