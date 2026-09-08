import React from "react";
import {gallery} from "../data/content";
export default function Journey(){
 return <section className="section journey" id="journey">
  <div className="journeyTop"><div><span>JOURNEY —</span><h2>STORIES FROM <em>THE ROAD.</em></h2></div><a href="#gallery">View Full Gallery →</a></div>
  <div className="galleryStrip" id="gallery">{gallery.map((src,i)=><img src={src} key={src} alt={`Travel ${i+1}`}/>)}</div>
 </section>
}
