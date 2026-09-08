import React from "react";
import Moving3D from "./Moving3D";
import AiAgent from "./AiAgent";
export default function Hero({agentOpen,setAgentOpen}){
 return <section className="hero" id="home">
  <div className="heroBg"></div><div className="heroTint"></div><Moving3D/>
   <div className="heroContent">
    <div className="eyebrow">ENGINEER. INTELLIGENCE. CREATOR. EXPLORER. ENTREPRENEUR.</div>
    <h1>TURNING IDEAS<br/>INTO INTELLIGENT<br/><em>IMPACT.</em></h1>
    <div className="heroRoles">Full-Stack Developer <b>•</b> AI/ML Engineer <b>•</b> AI Creator <b>•</b> Traveller <b>•</b> Entrepreneur</div>
    <p>I build digital products, intelligent systems and immersive experiences that create real-world impact.</p>
    <div className="heroBtns"><a className="goldBtn" href="#work">Explore My Work <span>→</span></a><a className="ghostBtn" href="#business">Business With Us <span>→</span></a></div>
   </div>
  <div className="heroCode"><small>BUILD · AUTOMATE · SCALE</small><pre>AI POWERED SOLUTIONS</pre></div>
   <div className="socialRail"><a>◉</a><a>in</a><a>◎</a><a>✉</a></div>
   <AiAgent open={agentOpen} onClose={()=>setAgentOpen(false)}/>
   {!agentOpen && <button className="agentFab" onClick={()=>setAgentOpen(true)}>✦</button>}
 </section>
}
