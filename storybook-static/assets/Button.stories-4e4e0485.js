import{j as l,c as e,a as B,F as q,t as p}from"./typography-8f58ee52.js";import"./index-f46741a2.js";const de=(a,i,d,r)=>i?"small":r?"large":d?"medium":a||"medium",ue=(a,i,d,r,n)=>{const z={border:"none",borderRadius:"6px",cursor:d?"not-allowed":"pointer",fontFamily:"inherit",fontWeight:p.fontWeight.medium,transition:"all 0.2s ease-in-out",opacity:d?.5:1,outline:"none",display:"inline-flex",alignItems:"center",justifyContent:"center",textDecoration:"none",gap:r&&n?"8px":"0"},o={small:{height:"32px",padding:r&&!n?"0":"0 12px",fontSize:p.fontSize.sm,minWidth:r&&!n?"32px":"auto"},medium:{height:"40px",padding:r&&!n?"0":"0 16px",fontSize:p.fontSize.md,minWidth:r&&!n?"40px":"auto"},large:{height:"48px",padding:r&&!n?"0":"0 20px",fontSize:p.fontSize.lg,minWidth:r&&!n?"48px":"auto"}},C={primary:{backgroundColor:e.primary.main,color:e.background.white,border:`1px solid ${e.primary.main}`},secondary:{backgroundColor:e.secondary.light,color:e.text.primary,border:`1px solid ${e.border.default}`},outline:{backgroundColor:"transparent",color:e.primary.main,border:`1px solid ${e.primary.main}`},error:{backgroundColor:e.error.main,color:e.background.white,border:`1px solid ${e.error.main}`},success:{backgroundColor:e.success.main,color:e.background.white,border:`1px solid ${e.success.main}`},warning:{backgroundColor:e.warning.main,color:e.background.white,border:`1px solid ${e.warning.main}`},text:{backgroundColor:"transparent",color:e.text.primary,border:"1px solid transparent"},link:{backgroundColor:"transparent",color:e.primary.main,border:"1px solid transparent",textDecoration:"none"}};return{...z,...o[i],...C[a]}},ce=a=>({primary:{backgroundColor:e.primary.hover,borderColor:e.primary.hover},secondary:{backgroundColor:e.secondary.light,borderColor:e.border.focus},outline:{backgroundColor:e.primary.light},error:{backgroundColor:e.error.hover,borderColor:e.error.hover},success:{backgroundColor:e.success.hover,borderColor:e.success.hover},warning:{backgroundColor:e.warning.hover,borderColor:e.warning.hover},text:{backgroundColor:e.secondary.light},link:{textDecoration:"underline"}})[a],t=({children:a,variant:i="primary",size:d,small:r,medium:n,large:z,disabled:o=!1,type:C="button",onClick:te,icon:u,iconLocation:oe="start",style:c,...ie})=>{const se=de(d,r,n,z),k=!!u,w=!!a,M=ue(i,se,o,k,w),V=ce(i),L=c?{...M,...c}:M;return l("button",{type:C,style:L,disabled:o,onClick:te,onMouseEnter:s=>{if(!o){const le=c?{...V,...c}:V;Object.assign(s.currentTarget.style,le)}},onMouseLeave:s=>{o||Object.assign(s.currentTarget.style,L)},onFocus:s=>{o||(s.currentTarget.style.boxShadow=`0 0 0 2px ${e.primary.light}`)},onBlur:s=>{s.currentTarget.style.boxShadow="none"},"aria-disabled":o,...ie,children:(()=>k?w?oe==="end"?B(q,{children:[a,u]}):B(q,{children:[u,a]}):u:a)()})};try{t.displayName="Button",t.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"error"'},{value:'"text"'},{value:'"primary"'},{value:'"secondary"'},{value:'"outline"'},{value:'"success"'},{value:'"warning"'},{value:'"link"'}]}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},small:{defaultValue:null,description:"",name:"small",required:!1,type:{name:"boolean | undefined"}},medium:{defaultValue:null,description:"",name:"medium",required:!1,type:{name:"boolean | undefined"}},large:{defaultValue:null,description:"",name:"large",required:!1,type:{name:"boolean | undefined"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean | undefined"}},type:{defaultValue:{value:"button"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"button"'},{value:'"submit"'},{value:'"reset"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},iconLocation:{defaultValue:{value:"start"},description:"",name:"iconLocation",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"start"'},{value:'"end"'}]}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties | undefined"}}}}}catch{}const he={title:"Components/Button",component:t,parameters:{layout:"centered",docs:{description:{component:"A versatile button component with multiple variants and sizes. Perfect for various user interactions."}}},argTypes:{variant:{control:{type:"select"},options:["primary","secondary","outline"],description:"Visual style variant of the button"},size:{control:{type:"select"},options:["small","medium","large"],description:"Size of the button"},disabled:{control:{type:"boolean"},description:"Whether the button is disabled"},children:{control:{type:"text"},description:"Content inside the button"},onClick:{action:"clicked",description:"Function called when button is clicked"}},args:{children:"Button",variant:"primary",size:"medium",disabled:!1}},m={args:{variant:"primary",children:"Primary Button"}},g={args:{variant:"secondary",children:"Secondary Button"}},y={args:{variant:"outline",children:"Outline Button"}},f={args:{size:"small",children:"Small Button"}},v={args:{size:"medium",children:"Medium Button"}},b={args:{size:"large",children:"Large Button"}},h={args:{disabled:!0,children:"Disabled Button"}},S={render:()=>B("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap"},children:[l(t,{variant:"primary",children:"Primary"}),l(t,{variant:"secondary",children:"Secondary"}),l(t,{variant:"outline",children:"Outline"})]}),parameters:{docs:{description:{story:"All button variants displayed together for comparison."}}}},x={render:()=>B("div",{style:{display:"flex",gap:"16px",alignItems:"center",flexWrap:"wrap"},children:[l(t,{size:"small",children:"Small"}),l(t,{size:"medium",children:"Medium"}),l(t,{size:"large",children:"Large"})]}),parameters:{docs:{description:{story:"All button sizes displayed together for comparison."}}}};var A,W,_;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'Primary Button'
  }
}`,...(_=(W=m.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var O,P,D;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    children: 'Secondary Button'
  }
}`,...(D=(P=g.parameters)==null?void 0:P.docs)==null?void 0:D.source}}};var E,F,$;y.parameters={...y.parameters,docs:{...(E=y.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    variant: 'outline',
    children: 'Outline Button'
  }
}`,...($=(F=y.parameters)==null?void 0:F.docs)==null?void 0:$.source}}};var j,H,N;f.parameters={...f.parameters,docs:{...(j=f.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    size: 'small',
    children: 'Small Button'
  }
}`,...(N=(H=f.parameters)==null?void 0:H.docs)==null?void 0:N.source}}};var R,G,J;v.parameters={...v.parameters,docs:{...(R=v.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    size: 'medium',
    children: 'Medium Button'
  }
}`,...(J=(G=v.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,U;b.parameters={...b.parameters,docs:{...(K=b.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    size: 'large',
    children: 'Large Button'
  }
}`,...(U=(Q=b.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,Z;h.parameters={...h.parameters,docs:{...(X=h.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    disabled: true,
    children: 'Disabled Button'
  }
}`,...(Z=(Y=h.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var T,I,ee;S.parameters={...S.parameters,docs:{...(T=S.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap'
  }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'All button variants displayed together for comparison.'
      }
    }
  }
}`,...(ee=(I=S.parameters)==null?void 0:I.docs)==null?void 0:ee.source}}};var re,ne,ae;x.parameters={...x.parameters,docs:{...(re=x.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'center',
    flexWrap: 'wrap'
  }}>
      <Button size="small">Small</Button>
      <Button size="medium">Medium</Button>
      <Button size="large">Large</Button>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'All button sizes displayed together for comparison.'
      }
    }
  }
}`,...(ae=(ne=x.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};const Se=["Primary","Secondary","Outline","Small","Medium","Large","Disabled","AllVariants","AllSizes"];export{x as AllSizes,S as AllVariants,h as Disabled,b as Large,v as Medium,y as Outline,m as Primary,g as Secondary,f as Small,Se as __namedExportsOrder,he as default};
