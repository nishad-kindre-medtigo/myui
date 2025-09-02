import{a as i,j as r,c as e,t as s}from"./typography-8f58ee52.js";import{R as ze}from"./index-f46741a2.js";const Te=(l,E,o)=>{const w={width:"100%",border:`1px solid ${E?e.border.error:e.border.default}`,borderRadius:"6px",fontFamily:"inherit",fontWeight:s.fontWeight.normal,transition:"all 0.2s ease-in-out",opacity:o?.5:1,cursor:o?"not-allowed":"text",outline:"none",backgroundColor:o?e.background.gray:e.background.white,color:e.text.primary},I={small:{height:"32px",padding:"0 12px",fontSize:s.fontSize.sm},medium:{height:"40px",padding:"0 16px",fontSize:s.fontSize.md},large:{height:"48px",padding:"0 20px",fontSize:s.fontSize.lg}};return{...w,...I[l]}},qe=()=>({display:"block",marginBottom:"4px",fontSize:s.fontSize.sm,fontWeight:s.fontWeight.medium,color:e.text.primary}),Me=l=>({marginTop:"4px",fontSize:s.fontSize.sm,color:l?e.error.main:e.text.secondary}),Le=()=>({display:"flex",flexDirection:"column",width:"100%"}),a=({label:l,placeholder:E,value:o,defaultValue:w,type:I="text",size:ye="medium",disabled:z=!1,error:t=!1,errorMessage:V,helperText:fe,required:T=!1,style:D,onChange:ge,onFocus:q,onBlur:M,...be})=>{const d=ze.useId(),xe=Le(),Se=qe(),F=Te(ye,t,z),ve=Me(t),Ee=D?{...F,...D}:F,we=n=>{z||(n.currentTarget.style.borderColor=t?e.border.error:e.border.focus,n.currentTarget.style.boxShadow=`0 0 0 2px ${t?e.error.light:e.primary.light}`),q==null||q(n)},Ie=n=>{n.currentTarget.style.borderColor=t?e.border.error:e.border.default,n.currentTarget.style.boxShadow="none",M==null||M(n)},L=t&&V?V:fe;return i("div",{style:xe,children:[l&&i("label",{htmlFor:d,style:Se,children:[l,T&&r("span",{style:{color:e.error.main,marginLeft:"2px"},children:"*"})]}),r("input",{id:d,type:I,placeholder:E,value:o,defaultValue:w,disabled:z,required:T,style:Ee,onChange:ge,onFocus:we,onBlur:Ie,"aria-invalid":t,"aria-describedby":L?`${d}-text`:void 0,"aria-required":T,...be}),L&&r("span",{id:`${d}-text`,style:ve,role:t?"alert":void 0,"aria-live":t?"polite":void 0,children:L})]})};try{a.displayName="Input",a.__docgenInfo={description:"",displayName:"Input",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string | undefined"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string | undefined"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | undefined"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string | undefined"}},type:{defaultValue:{value:"text"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"number"'},{value:'"text"'},{value:'"email"'},{value:'"password"'}]}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean | undefined"}},error:{defaultValue:{value:"false"},description:"",name:"error",required:!1,type:{name:"boolean | undefined"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"string | undefined"}},helperText:{defaultValue:null,description:"",name:"helperText",required:!1,type:{name:"string | undefined"}},required:{defaultValue:{value:"false"},description:"",name:"required",required:!1,type:{name:"boolean | undefined"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((event: ChangeEvent<HTMLInputElement>) => void) | undefined"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"((event: FocusEvent<HTMLInputElement, Element>) => void) | undefined"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"((event: FocusEvent<HTMLInputElement, Element>) => void) | undefined"}}}}}catch{}const Fe={title:"Components/Input",component:a,parameters:{layout:"centered",docs:{description:{component:"A flexible input component with label, validation, and helper text support. Designed for forms and user data collection."}}},argTypes:{type:{control:{type:"select"},options:["text","email","password","number"],description:"HTML input type"},size:{control:{type:"select"},options:["small","medium","large"],description:"Size of the input field"},disabled:{control:{type:"boolean"},description:"Whether the input is disabled"},error:{control:{type:"boolean"},description:"Whether the input is in error state"},required:{control:{type:"boolean"},description:"Whether the input is required"},label:{control:{type:"text"},description:"Label text for the input"},placeholder:{control:{type:"text"},description:"Placeholder text"},helperText:{control:{type:"text"},description:"Helper text below the input"},errorMessage:{control:{type:"text"},description:"Error message to display"},onChange:{action:"changed",description:"Function called when input value changes"},onFocus:{action:"focused",description:"Function called when input receives focus"},onBlur:{action:"blurred",description:"Function called when input loses focus"}},args:{placeholder:"Enter text...",size:"medium",type:"text",disabled:!1,error:!1,required:!1}},p={args:{placeholder:"Enter your name"}},u={args:{label:"Full Name",placeholder:"Enter your full name"}},c={args:{label:"Password",type:"password",placeholder:"Enter your password",helperText:"Password must be at least 8 characters long"}},m={args:{label:"Email",type:"email",placeholder:"Enter your email",error:!0,errorMessage:"Please enter a valid email address"}},h={args:{label:"Username",placeholder:"Enter username",required:!0,helperText:"This field is required"}},y={args:{label:"Disabled Input",placeholder:"This input is disabled",disabled:!0,value:"Cannot edit this"}},f={args:{label:"Small Input",size:"small",placeholder:"Small size input"}},g={args:{label:"Medium Input",size:"medium",placeholder:"Medium size input"}},b={args:{label:"Large Input",size:"large",placeholder:"Large size input"}},x={render:()=>i("div",{style:{display:"flex",flexDirection:"column",gap:"24px",width:"300px"},children:[r(a,{label:"Text Input",type:"text",placeholder:"Enter text"}),r(a,{label:"Email Input",type:"email",placeholder:"Enter email"}),r(a,{label:"Password Input",type:"password",placeholder:"Enter password"}),r(a,{label:"Number Input",type:"number",placeholder:"Enter number"})]}),parameters:{docs:{description:{story:"Different input types displayed together."}}}},S={render:()=>i("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"300px"},children:[r(a,{label:"Small",size:"small",placeholder:"Small input"}),r(a,{label:"Medium",size:"medium",placeholder:"Medium input"}),r(a,{label:"Large",size:"large",placeholder:"Large input"})]}),parameters:{docs:{description:{story:"All input sizes displayed together for comparison."}}}},v={render:()=>i("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"300px"},children:[r(a,{label:"First Name",placeholder:"Enter first name",required:!0}),r(a,{label:"Email",type:"email",placeholder:"Enter email address",required:!0,helperText:"We'll never share your email"}),r(a,{label:"Phone",type:"text",placeholder:"Enter phone number",helperText:"Optional field"}),r(a,{label:"Password",type:"password",placeholder:"Enter password",required:!0,helperText:"Must be at least 8 characters"})]}),parameters:{docs:{description:{story:"Example of how inputs would look in a typical form."}}}};var P,W,C;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter your name'
  }
}`,...(C=(W=p.parameters)==null?void 0:W.docs)==null?void 0:C.source}}};var _,N,H;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    label: 'Full Name',
    placeholder: 'Enter your full name'
  }
}`,...(H=(N=u.parameters)==null?void 0:N.docs)==null?void 0:H.source}}};var k,A,R;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter your password',
    helperText: 'Password must be at least 8 characters long'
  }
}`,...(R=(A=c.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};var $,j,O;m.parameters={...m.parameters,docs:{...($=m.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    type: 'email',
    placeholder: 'Enter your email',
    error: true,
    errorMessage: 'Please enter a valid email address'
  }
}`,...(O=(j=m.parameters)==null?void 0:j.docs)==null?void 0:O.source}}};var B,U,G;h.parameters={...h.parameters,docs:{...(B=h.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    label: 'Username',
    placeholder: 'Enter username',
    required: true,
    helperText: 'This field is required'
  }
}`,...(G=(U=h.parameters)==null?void 0:U.docs)==null?void 0:G.source}}};var J,K,Q;y.parameters={...y.parameters,docs:{...(J=y.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Input',
    placeholder: 'This input is disabled',
    disabled: true,
    value: 'Cannot edit this'
  }
}`,...(Q=(K=y.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Y,Z;f.parameters={...f.parameters,docs:{...(X=f.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    label: 'Small Input',
    size: 'small',
    placeholder: 'Small size input'
  }
}`,...(Z=(Y=f.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,re,ae;g.parameters={...g.parameters,docs:{...(ee=g.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    label: 'Medium Input',
    size: 'medium',
    placeholder: 'Medium size input'
  }
}`,...(ae=(re=g.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};var te,le,ne;b.parameters={...b.parameters,docs:{...(te=b.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    label: 'Large Input',
    size: 'large',
    placeholder: 'Large size input'
  }
}`,...(ne=(le=b.parameters)==null?void 0:le.docs)==null?void 0:ne.source}}};var se,oe,ie;x.parameters={...x.parameters,docs:{...(se=x.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    width: '300px'
  }}>
      <Input label="Text Input" type="text" placeholder="Enter text" />
      <Input label="Email Input" type="email" placeholder="Enter email" />
      <Input label="Password Input" type="password" placeholder="Enter password" />
      <Input label="Number Input" type="number" placeholder="Enter number" />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Different input types displayed together.'
      }
    }
  }
}`,...(ie=(oe=x.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var de,pe,ue;S.parameters={...S.parameters,docs:{...(de=S.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    width: '300px'
  }}>
      <Input label="Small" size="small" placeholder="Small input" />
      <Input label="Medium" size="medium" placeholder="Medium input" />
      <Input label="Large" size="large" placeholder="Large input" />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'All input sizes displayed together for comparison.'
      }
    }
  }
}`,...(ue=(pe=S.parameters)==null?void 0:pe.docs)==null?void 0:ue.source}}};var ce,me,he;v.parameters={...v.parameters,docs:{...(ce=v.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    width: '300px'
  }}>
      <Input label="First Name" placeholder="Enter first name" required />
      <Input label="Email" type="email" placeholder="Enter email address" required helperText="We'll never share your email" />
      <Input label="Phone" type="text" placeholder="Enter phone number" helperText="Optional field" />
      <Input label="Password" type="password" placeholder="Enter password" required helperText="Must be at least 8 characters" />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Example of how inputs would look in a typical form.'
      }
    }
  }
}`,...(he=(me=v.parameters)==null?void 0:me.docs)==null?void 0:he.source}}};const Pe=["Default","WithLabel","WithHelperText","ErrorState","Required","Disabled","Small","Medium","Large","InputTypes","AllSizes","FormExample"];export{S as AllSizes,p as Default,y as Disabled,m as ErrorState,v as FormExample,x as InputTypes,b as Large,g as Medium,h as Required,f as Small,c as WithHelperText,u as WithLabel,Pe as __namedExportsOrder,Fe as default};
