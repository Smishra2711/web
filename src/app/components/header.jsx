"use client";

import { useEffect, useState } from "react";
import NavBar from "./navbar";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        onScroll();
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            id="header"
            className={`header d-flex align-items-center fixed-top${scrolled ? " header-scrolled" : ""}`}
        >
            <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
                <a href="index.html" className="logo d-flex align-items-center">
                    {/* <img src="assets/img/logo.webp" alt="" /> */}
                    <h1 className="sitename">W Mishra</h1>
                </a>
                <NavBar />
            </div>
        </header>
    );
}