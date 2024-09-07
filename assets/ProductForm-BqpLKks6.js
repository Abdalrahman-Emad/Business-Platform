import{R as P,j as r,V as C,W as B,r as n,B as h,w as g,S as k,T as y,E as x,X as I,Y as E,Z as T}from"./index-CDAGTLlb.js";import{A,u as O,c as q,a as f,b as w,S as M}from"./index.esm-CNvmIr3e.js";import{M as i}from"./MenuItem-BtaXB9P8.js";const R=P.forwardRef(function(l,d){return r.jsx(A,{elevation:6,ref:d,variant:"filled",...l})}),W=()=>{const{id:a}=C(),l=B(),[d,b]=n.useState({productName:"",price:"",category:""}),[v,S]=n.useState(!0),[j,u]=n.useState(!1),[N,m]=n.useState("");n.useEffect(()=>{if(a){const t=(JSON.parse(localStorage.getItem("products"))||[]).find(c=>c.id===parseInt(a));t&&b({productName:t.name,price:t.price,category:t.category})}S(!1)},[a]);const e=O({initialValues:d,enableReinitialize:!0,validationSchema:q({productName:f().required("Product Name is required").min(3,"Product Name must be at least 3 characters"),price:w().required("Price is required").positive("Price must be a positive number").min(1,"Price must be greater than 0"),category:f().required("Category is required")}),onSubmit:o=>{const t=JSON.parse(localStorage.getItem("products"))||[];if(a){const c=t.map(s=>s.id===parseInt(a)?{...s,name:o.productName,price:o.price,category:o.category}:s);localStorage.setItem("products",JSON.stringify(c)),m("Product updated successfully!")}else{const c={id:t.length?Math.max(...t.map(s=>s.id))+1:1,name:o.productName,price:o.price,category:o.category};t.push(c),localStorage.setItem("products",JSON.stringify(t)),m("Product added successfully!")}u(!0),setTimeout(()=>{l("/utils/products-view")},2e3)}}),p=(o,t)=>{t!=="clickaway"&&u(!1)};return v?r.jsx("div",{children:"Loading..."}):r.jsxs(h,{component:"form",onSubmit:e.handleSubmit,children:[a&&r.jsx(h,{display:"flex",justifyContent:"flex-end",mb:2,children:r.jsx(g,{variant:"contained",color:"primary",component:k,to:"/utils/products-view",children:"Back"})}),r.jsx(y,{variant:"h5",gutterBottom:!0,children:a?"Edit Product":"Add Product"}),r.jsx(x,{id:"product-name",label:"Product Name",variant:"outlined",fullWidth:!0,margin:"normal",name:"productName",value:e.values.productName,onChange:e.handleChange,onBlur:e.handleBlur,error:e.touched.productName&&!!e.errors.productName,helperText:e.touched.productName&&e.errors.productName}),r.jsx(x,{id:"price",label:"Price",variant:"outlined",fullWidth:!0,margin:"normal",name:"price",type:"number",value:e.values.price,onChange:e.handleChange,onBlur:e.handleBlur,error:e.touched.price&&!!e.errors.price,helperText:e.touched.price&&e.errors.price}),r.jsxs(I,{fullWidth:!0,margin:"normal",children:[r.jsx(E,{id:"category-label",children:"Category"}),r.jsxs(T,{labelId:"category-label",id:"category",name:"category",value:e.values.category,onChange:e.handleChange,onBlur:e.handleBlur,label:"Category",error:e.touched.category&&!!e.errors.category,children:[r.jsx(i,{value:"",children:r.jsx("em",{children:"None"})}),r.jsx(i,{value:"Electronics",children:"Electronics"}),r.jsx(i,{value:"Clothing",children:"Clothing"}),r.jsx(i,{value:"Accessories",children:"Accessories"})]}),e.touched.category&&e.errors.category?r.jsx(y,{variant:"body2",color:"error",children:e.errors.category}):null]}),r.jsx(g,{type:"submit",variant:"contained",color:"primary",style:{marginTop:"16px"},children:a?"Update Product":"Submit"}),r.jsx(M,{open:j,autoHideDuration:3e3,onClose:p,anchorOrigin:{vertical:"top",horizontal:"center"},children:r.jsx(R,{onClose:p,severity:"success",children:N})})]})};export{W as default};
