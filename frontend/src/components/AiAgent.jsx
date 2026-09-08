import React,{useState} from "react";
export default function AiAgent({open,onClose}){
 const [input,setInput]=useState("");
 const [items,setItems]=useState([]);
 const [busy,setBusy]=useState(false);
 const quick=["Build a Web Application","AI Automation Solution","AI Agents for My Business","AI Video / Content Creation","Validate My Business Idea","Other Business Need"];
 const send=async(value=input)=>{const message=value.trim();if(!message||busy)return;setInput("");setBusy(true);try{const response=await fetch("/api/agent/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message})});const result=await response.json();if(!response.ok)throw new Error(result.error||"The agent could not process that request.");setItems(items=>[...items,{q:message,a:result.reply,meta:`${result.intent} · Next: ${result.nextSteps.join(" · ")}`}])}catch(error){setItems(items=>[...items,{q:message,a:error.message,meta:"The backend agent is unavailable. Start the backend with npm run backend:dev."}])}finally{setBusy(false)}};
 if(!open)return null;
 return <aside className="agent">
   <div className="agentHeader"><div className="agentAvatar">✦</div><div><strong>PIYUSH AI</strong><small><i/> Online</small></div><button onClick={onClose}>×</button></div>
   <div className="agentBody">
    <div className="bubble">Hi! I'm your AI Business Agent.<br/>How can I help you today?</div>
    <div className="quick">{quick.map(q=><button key={q} onClick={()=>send(q)}>{q}<span>›</span></button>)}</div>
    <div className="history">{items.map((m,i)=><React.Fragment key={i}><div className="bubble user">{m.q}</div><div className="bubble">{m.a}{m.meta&&<small className="agentMeta">{m.meta}</small>}</div></React.Fragment>)}</div>
    <div className="composer"><input value={input} disabled={busy} onChange={e=>setInput(e.target.value)} onKeyDown={e=>e.key==="Enter"&&send()} placeholder={busy?"PIYUSH AI is thinking...":"Describe your requirement..."}/><button disabled={busy} onClick={()=>send()}>➜</button></div>
   </div>
 </aside>
}
