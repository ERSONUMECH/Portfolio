import React from "react";
import {services} from "../data/content";
export default function Business(){
 return <section className="section business" id="business">
  <div className="sectionTop"><div><span>BUSINESS WITH US —</span><h2>LET'S BUILD SOMETHING<br/>POWERFUL TOGETHER.</h2></div><a className="outlineCta" href="#contact">Start a Business Conversation →</a></div>
  <div className="serviceGrid">{services.map(([t,d],i)=><article className="service" key={t}><div className="serviceIcon">{["▣","⌁","✣","▶","⌘","◈"][i]}</div><h3>{t}</h3><p>{d}</p></article>)}</div>
 </section>
}
