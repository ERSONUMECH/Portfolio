import React,{useState} from "react";
export default function AiAgent({open,onClose}){
 const [input,setInput]=useState("");
 const [items,setItems]=useState([]);
 const quick=["Build a Web Application","AI Automation Solution","AI Agents for My Business","AI Video / Content Creation","Validate My Business Idea","Other Business Need"];
 const send=(value=input)=>{const v=value.trim(); if(!v)return; setItems(a=>[...a,{q:v,a:"I can help scope this business requirement, recommend a technology/AI approach and prepare the next step. Connect this UI to your LLM/API for live answers."}]); setInput("")};
 if(!open)return null;
 return <aside className="agent">
   <div className="agentHeader"><div className="agentAvatar">✦</div><div><strong>PIYUSH AI</strong><small><i/> Online</small></div><button onClick={onClose}>×</button></div>
   <div className="agentBody">
    <div className="bubble">Hi! I'm your AI Business Agent.<br/>How can I help you today?</div>
    <div className="quick">{quick.map(q=><button key={q} onClick={()=>send(q)}>{q}<span>›</span></button>)}</div>
    <div className="history">{items.map((m,i)=><React.Fragment key={i}><div className="bubble user">{m.q}</div><div className="bubble">{m.a}</div></React.Fragment>)}</div>
    <div className="composer"><input value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>e.key==="Enter"&&send()} placeholder="Describe your requirement..."/><button onClick={()=>send()}>➜</button></div>
   </div>
 </aside>
}
