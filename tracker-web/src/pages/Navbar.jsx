import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { animate, createScope, spring, createDraggable } from "animejs";

export default function Nav() {
    const [blink, setBlink] = useState(1);

    const [navMenu, toggleMenu] = useState(false)
    const menu = [
        { text: "List", link: "/" },
        { text: "Progress", link: "/" },
        { text: "Main", link: "/" }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setBlink((prev) => (prev === 1 ? 0 : 1));
        }, 500);
    
        return () => clearInterval(interval);
    }, []);

    return (
        <nav className="text-4xl absolute top-5 right-5 flex flex-row-reverse" ref={root}>
            <div className="font-title select-none cursor-pointer" onClick={() => toggleMenu(!navMenu)}>&lt;</div>
            <div className={`overflow-hidden ${navMenu ? "w-full" : "w-0"} transition-all duration-300`}>
                <div className="">
                    {menu.map((item) => (
                        <Link
                            to={item.link}
                            className="font-monospace px-6 hover:underline"
                        >{item.text}</Link>
                    ))}
                </div>

            </div>
            <div className={`font-title tick-tock ${blink ? 'opacity-100' : 'opacity-0'}`}>_</div>
        </nav>
    )
}