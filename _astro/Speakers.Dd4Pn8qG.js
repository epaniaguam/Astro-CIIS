import{j as e}from"./jsx-runtime.2X-s0L5T.js";import{r as n}from"./index.DeEakWXg.js";/* empty css                       */function m(){const[r,i]=n.useState([]),[o,s]=n.useState(!0),[a,l]=n.useState(null);return n.useEffect(()=>{fetch("https://ciistacna.com/reports/16/speakers.json").then(t=>{if(!t.ok)throw new Error("Error al obtener los ponentes");return t.json()}).then(t=>{i(t),s(!1)}).catch(t=>{l(t.message),s(!1)})},[]),a?e.jsx("p",{className:"text-center text-red-500",children:a}):!o&&r.length===0?e.jsx("p",{className:"text-center",children:"No hay ponentes disponibles."}):e.jsxs("section",{id:"speakers",className:"pt-10 sm:py-20",children:[e.jsx("div",{className:"m-auto max-w-5xl pb-16"}),e.jsxs("div",{className:"mt-14 text-center mb-56",children:[e.jsxs("p",{className:"text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight leading-tight notice-pulse",children:[e.jsx("span",{className:"block",children:"¡MUY PRONTO"}),e.jsx("span",{className:"block",children:"REVELAREMOS LOS PONENTES!"})]}),e.jsx("div",{className:"mt-4 h-1 w-48 mx-auto rounded-full underline-pan"})]}),e.jsx("style",{children:`
            @media (prefers-reduced-motion: reduce) {
              .notice-pulse, .underline-pan { animation: none !important; }
            }
            @keyframes noticePulse {
              0%, 100% { transform: translateY(0); opacity: 0.96; }
              50% { transform: translateY(-1px); opacity: 1; }
            }
            @keyframes underlinePan {
              0% { background-position: 100% 50%; }
              100% { background-position: 0% 50%; }
            }
            .notice-pulse { animation: noticePulse 3s ease-in-out infinite; }
            .underline-pan {
              background: linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(99,102,241,0.7) 50%, rgba(0,0,0,0) 100%);
              background-size: 200% 100%;
              background-position: 100% 50%;
              animation: underlinePan 6s linear infinite alternate;
            }
          `})]})}export{m as default};
