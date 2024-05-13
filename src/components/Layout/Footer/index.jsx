import Image from "next/image";
import React from "react";
import "./styles.scss";
import { pages } from "@/navigations/pages";
import Link from "next/link";
const Footer = () => {
  return (
    <footer>
        <div className="main-footer">
        <section className="part-1">
            {/* <img src=""/> */}
            <h1>LOGO</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat corrupti magni reiciendis, ad architecto obcaecati, facere ducimus illo quia atque harum nam repudiandae?</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, laborum.</p>
        </section>
        <section className="part-2">
        <h1>Quick Links</h1>
        <ul>
        {
            pages.map((page,index) => (
                <li key={index}>&gt;<Link href={page?.pagePath}>{page?.pageName}</Link></li>
            ))
        }
        </ul>
        </section>
        <section className="part-3">
        <h1>Gallary</h1>
        <Image src="" width="100" height="100"/>
        <Image src="" width="100" height="100"/>
        <Image src="" width="100" height="100"/>
        <Image src="" width="100" height="100"/>
        </section>
        <section className="part-4">
        <h1>Contact Info</h1>
        <p>Flat 20, Reynolds Neck, North Hele naville, FV77 8WS</p>
        <p>6999995959995</p>
        <p>abc@gmail.com</p>
        </section>
        </div>
        <hr />
        <div className="footer-end">
        <p>
        abc company © 2024 All Right Reserved
        </p>
        <p>
            <Link href="/">Terms of Service</Link>
            <span>|</span>
            <Link href="/">Privacy Policy</Link>
        </p>

        </div>
    </footer>
  );
};

export default Footer;
