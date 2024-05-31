import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
    return (
        <div id="top" className="mt-10 md:mt-0">
            <header className="p-2 md:p-6 bg-zinc-900">
                <div className="flex flex-col md:flex-row items-center justify-center text-amber-50">
                    <div style={{width: '150px', height:'150px'}} className="mb-4 md:mb-0 md:mr-6 relative rounded-full overflow-hidden">
                        <Image
                            src="/profilepic.jpg"
                            alt="Profile Picture"
                            layout='fill'
                            objectFit='cover'
                        />
                    </div>
                    <div>
                        <h1 className="text-xl md:text-2xl font-semibold">ERIKXVI</h1>
                        <h2 className="text-lg md:text-xl">Software Developer</h2>
                    </div>
                </div>
            </header>
            <nav>
                <ul className="flex p-2 md:p-10 justify-center space-x-2 md:space-x-10 bg-zinc-900 text-amber-50 text-lg md:text-xl">
                    <li>
                        <Link href="#top">Home</Link>
                    </li>
                    <li>
                        <Link href="#projects">Projects</Link>
                    </li>
                    <li>
                        <Link href="#contact">Contacts</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;