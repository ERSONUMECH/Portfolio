import React from "react";
export default function Contact({onAgent}){
 return <section className="contact" id="contact"><div className="contactBg"></div><div className="contactShade"></div><div className="contactInner"><div><span>HAVE A PROBLEM</span><h2>WORTH SOLVING?</h2><p>Ask my AI Agent or let's start a conversation.</p></div><div className="contactMid"><strong>PIYUSH AI IS READY TO HELP YOU</strong><span>Get insights on tech, AI and business.</span><button onClick={onAgent}>What are you trying to build? <b>➜</b></button></div><div className="contactCta"><span>Let's Create<br/><strong>The Future Together.</strong></span><button className="goldBtn" onClick={onAgent}>Talk to AI Agent ✦</button></div></div></section>
}
