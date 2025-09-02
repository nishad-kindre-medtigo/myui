import{r as p}from"./index-f46741a2.js";var m={exports:{}},f={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c=p,l=Symbol.for("react.element"),x=Symbol.for("react.fragment"),b=Object.prototype.hasOwnProperty,h=c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function d(o,r,a){var e,t={},n=null,i=null;a!==void 0&&(n=""+a),r.key!==void 0&&(n=""+r.key),r.ref!==void 0&&(i=r.ref);for(e in r)b.call(r,e)&&!u.hasOwnProperty(e)&&(t[e]=r[e]);if(o&&o.defaultProps)for(e in r=o.defaultProps,r)t[e]===void 0&&(t[e]=r[e]);return{$$typeof:l,type:o,key:n,ref:i,props:t,_owner:h.current}}f.Fragment=x;f.jsx=d;f.jsxs=d;m.exports=f;var s=m.exports;const _=s.Fragment,g=s.jsx,v=s.jsxs,j={primary:{main:"#2563eb",hover:"#1d4ed8",light:"#dbeafe"},secondary:{main:"#64748b",hover:"#475569",light:"#f1f5f9"},error:{main:"#dc2626",hover:"#b91c1c",light:"#fef2f2"},success:{main:"#16a34a",hover:"#15803d",light:"#f0fdf4"},warning:{main:"#d97706",hover:"#b45309",light:"#fffbeb"},text:{primary:"#1f2937",secondary:"#6b7280"},border:{default:"#d1d5db",focus:"#2563eb",error:"#dc2626"},background:{white:"#ffffff",gray:"#f9fafb"}},E={fontSize:{sm:"14px",md:"16px",lg:"18px"},fontWeight:{normal:400,medium:500,semibold:600},lineHeight:{normal:1.5,tight:1.25}};export{_ as F,v as a,j as c,g as j,E as t};
