import React from "react";
import {dimensions} from "../data/content";
export default function About(){
 return <section className="section about" id="about">
  <div className="sectionTop"><div><span>01 / ABOUT</span><h2>MORE THAN <em>A JOB TITLE.</em></h2></div><p>Five dimensions. One identity.</p></div>
    <p className="aboutIntro">I’m a <strong>Full-Stack Developer and AI/ML Engineer</strong> with 4+ years of professional experience, focused on building scalable digital products and solving real-world problems through technology. My expertise spans full-stack development, intelligent systems, AI-driven solutions, automation, and production support. Beyond engineering, I’m passionate about <strong>AI-powered video creation, visual storytelling, travel, and photography</strong>. I enjoy bringing technology and creativity together to turn ideas into meaningful digital experiences. Alongside my professional career, I’m also exploring <strong>entrepreneurship and AI-powered business solutions</strong>, with a focus on helping businesses leverage software, automation, and intelligent agents to work smarter and create greater impact.</p>
  <div className="dimensionGrid">{dimensions.map((d,i)=><article className="dimension" key={d.key}><div className="dimIcon">{["⌘","✺","◫","⌃","➤"][i]}</div><small>0{i+1}</small><h3>{d.title}</h3><p>{d.text}</p><a href={i===0?"#work":i===1?"#ai-lab":i===2?"#gallery":i===3?"#journey":"#business"}>Explore →</a></article>)}</div>
 </section>
}
