import{u as i,j as a,r as l}from"./index-BHdHH20D.js";const s=({text:t,goTo:e,className:o})=>{const r=i(),n=()=>{l.startTransition(()=>{r(`${e}`,{replace:!0})})};return a.jsx("button",{onClick:n,className:`btn text-start rounded-1 ${o}`,children:t})},c=()=>a.jsx(a.Fragment,{children:a.jsx("section",{className:"col-12",children:a.jsxs("article",{className:"list-group",id:"list-tab",role:"tablist",children:[a.jsx(s,{className:"border-bottom btn-dark fw-bolder",text:"Inicio",goTo:"/inicio"}),a.jsx(s,{className:"border-bottom btn-dark fw-bolder",text:"Prótesis fijas",goTo:"/inicio/fijas"}),a.jsx(s,{className:"border-bottom btn-dark fw-bolder",text:"Prótesis removibles",goTo:"/inicio/removibles"}),a.jsx(s,{className:"border-bottom btn-dark fw-bolder",text:"Placas dentales",goTo:"/inicio/placas"}),a.jsx(s,{className:"border-bottom btn-dark fw-bolder",text:"Reparaciones de prótesis",goTo:"/inicio/reparaciones"}),a.jsx(s,{className:"border-bottom btn-dark fw-bolder",text:"Contacto",goTo:"/inicio/contacto"})]})})}),d=()=>a.jsx(a.Fragment,{children:a.jsxs("section",{className:"offcanvas offcanvas-start bg-dark text-light","data-bs-scroll":"true","data-bs-backdrop":"false",tabIndex:-1,id:"offcanvasScrolling","aria-labelledby":"offcanvasScrollingLabel",children:[a.jsxs("header",{className:"offcanvas-header",children:[a.jsx("h5",{className:"offcanvas-title",id:"offcanvasScrollingLabel",children:"Prótesis Dental"}),a.jsx("button",{type:"button",className:"btn-close bg-light","data-bs-dismiss":"offcanvas","aria-label":"Close"})]}),a.jsx("article",{className:"offcanvas-body",children:a.jsx(c,{})})]})}),f=()=>a.jsxs("nav",{className:"container-fluid p-2 bg-dark text-light position-fixed z-2 top-0 d-flex align-items-center justify-content-between",children:[a.jsx("h4",{children:"Prótesis Dental"}),a.jsx("button",{className:"btn btn-primary px-3",type:"button","data-bs-toggle":"offcanvas","data-bs-target":"#offcanvasScrolling","aria-controls":"offcanvasScrolling",children:"Buscar"}),a.jsx(d,{})]});export{s as B,f as N};
