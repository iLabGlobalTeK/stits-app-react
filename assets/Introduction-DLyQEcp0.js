import{r as e,F as x,j as d}from"./index-B9IMi034.js";import{A as w}from"./AssessmentPage-C3EWsR28.js";import{D}from"./DynamicList-D7IeigNI.js";import"./index-veDgQXjU.js";import"./AddCircleOutline-BuUg0Trg.js";import"./Delete-DQESvzff.js";function S({page:I}){var m,u;const{formData:r,setFormData:a}=e.useContext(x),[t,n]=e.useState(((m=r.introduction)==null?void 0:m.items)||[""]),[c,E]=e.useState(((u=r.introduction)==null?void 0:u.duration)||"");e.useEffect(()=>{a(o=>({...o,introduction:{items:t,duration:c}}))},[t,c,a]);const l=(o,s)=>{const i=[...t];i[o]=s,n(i)},h=()=>{n([...t,""])},p=o=>{const s=t.filter((i,f)=>f!==o);n(s)};return d.jsx(w,{header:"Introduction to Lesson",contentTitle:"AT THE BEGINNING: What will you share with students?",contentSubtitle:"Opening Hook, Establish Lesson Objectives, Set Expectations For Lesson.",page:I,children:d.jsx(D,{items:t,onItemChange:l,onAddItem:h,onDeleteItem:p,placeholder:"List what you will share with students"})})}export{S as default};
