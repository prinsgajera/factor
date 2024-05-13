"use client"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import './styles.scss'

export default function Home() {
  const leftPart = useRef();

  useGSAP(
    () => {
      gsap.from(".left-part", { x: -300,
        duration:1,
        delay:1,
       });
    }
  );
  return (
    <div className="content">
      <div ref={leftPart} className="left-part">
      <p>Right Angle<br/> A New Dimension in <br/> Learning</p>
      <p>At Right Angle, dive into an educational adventure of endless possibilities. In a world driven by technology, we break free from the ordinary, offering a community that not only imparts knowledge but ignites a passion for learning and fosters future-ready skills for all.</p>
      </div>
      <div className="right-part">
        {/* <img src="https://www.rightangle.education/public/assets/images/splash-bg.png"/> */}
      </div>
    </div>
  );
}
