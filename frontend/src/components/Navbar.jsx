import React from "react";
export default function Navbar({onAgent}){
 const links=[["ABOUT","/about"],["WORK","/#work"],["AI LAB","/#ai-lab"],["BUSINESS","/#business"],["JOURNEY","/#journey"],["GALLERY","/#gallery"],["CONTACT","/#contact"]];
 return <header className="nav">
   <a className="brand" href="/"><span>Piyush</span><b>KUMAR</b><i/></a>
   <nav>{links.map(([t,h])=><a key={h} href={h}>{t}</a>)}</nav>
   <button className="navAgent" onClick={onAgent}>Talk to AI Agent <span>✦</span></button>
 </header>
}
