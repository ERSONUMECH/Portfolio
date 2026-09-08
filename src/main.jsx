import React,{useEffect,useState}from"react";
import{createRoot}from"react-dom/client";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import AiLab from "./components/AiLab";
import Business from "./components/Business";
import Journey from "./components/Journey";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./styles.css";

function App(){
 const[agentOpen,setAgentOpen]=useState(true);
 const[page,setPage]=useState(window.location.pathname);
 useEffect(()=>{const syncPage=()=>setPage(window.location.pathname);window.addEventListener("popstate",syncPage);return()=>window.removeEventListener("popstate",syncPage)},[]);
 if(page==="/about")return <><Navbar onAgent={()=>setAgentOpen(true)}/><About/><Footer/></>;
 return <><Navbar onAgent={()=>setAgentOpen(true)}/><Hero agentOpen={agentOpen} setAgentOpen={setAgentOpen}/><About/><Work/><AiLab/><Business/><Journey/><Contact onAgent={()=>setAgentOpen(true)}/><Footer/></>
}
createRoot(document.getElementById("root")).render(<App/>);
