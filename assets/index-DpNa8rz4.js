import{w as M,x as T,j as e,r as d,n as m,M as b,s as p,k as y,F as g}from"./index-B9IMi034.js";import{I as j,F as I}from"./index-veDgQXjU.js";import{d as A}from"./Delete-DQESvzff.js";import{T as C,a as D,b as x,c as i,d as S}from"./TableRow-C_zMnsIm.js";var u={},_=T;Object.defineProperty(u,"__esModule",{value:!0});var f=u.default=void 0,F=_(M()),w=e;f=u.default=(0,F.default)((0,w.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"}),"Add");const z=["Document","Test","Assignment","Quiz","Website","Kahoot","Video","Link"];function B({onAddMaterial:s}){const[l,r]=d.useState(""),[t,n]=d.useState(""),c=()=>{l&&t&&(s({type:l,value:t}),r(""),n(""))};return e.jsxs(m,{sx:{display:"flex",alignItems:"center",mb:2},children:[e.jsx(h,{select:!0,label:"Material Type",value:l,onChange:a=>r(a.target.value),sx:{mr:2,minWidth:150},children:z.map(a=>e.jsx(b,{value:a,children:a},a))}),e.jsx(h,{label:"Material Details",value:t,onChange:a=>n(a.target.value),sx:{flexGrow:1,mr:2}}),e.jsx(j,{color:"primary",onClick:c,children:e.jsx(f,{})})]})}const h=p(y)({"& .MuiInputBase-root":{fontSize:"1rem"}});function R({materials:s,onDeleteMaterial:l}){return e.jsx(k,{children:e.jsxs(C,{children:[e.jsx(D,{children:e.jsxs(x,{children:[e.jsx(i,{children:"Type"}),e.jsx(i,{children:"Details"}),e.jsx(i,{children:"Actions"})]})}),e.jsx(S,{children:s.map((r,t)=>e.jsxs(x,{children:[e.jsx(i,{children:r.type}),e.jsx(i,{children:r.value}),e.jsx(i,{children:e.jsx(j,{onClick:()=>l(t),children:e.jsx(A,{color:"error"})})})]},t))})]})})}const k=p(m)(({theme:s})=>({marginTop:s.spacing(3),"& .MuiTableCell-root":{borderBottom:`1px solid ${s.palette.divider}`}}));function O({page:s}){const{formData:l,setFormData:r}=d.useContext(g),[t,n]=d.useState(l.materials||[]);d.useEffect(()=>{r(o=>({...o,materials:t}))},[t,r]);const c=o=>{n([...t,o])},a=o=>{n(t.filter((q,v)=>v!==o))};return e.jsxs(I,{header:"Instructional Materials",contentTitle:"Add Instructional Materials",contentSubtitle:"Attach media resources that will be used to support the instruction. These can include documents, tests, assignments, quizzes, websites, and other types of materials.",page:s,children:[e.jsx(B,{onAddMaterial:c}),e.jsx(R,{materials:t,onDeleteMaterial:a})]})}export{O as default};
