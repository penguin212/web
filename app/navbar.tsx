import React from 'react';

export default function Navbar() {
    return (
        <nav className="z-40 z-10 grid grid-rows-[20px_1fr_20px] p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <div className="flex items-center justify-between w-full max-w-6xl px-4">
                <ul className="flex space-x-4">
                    <li><a href="/" className="text-gray-700 hover:text-blue-500 font-bold">Home</a></li>
                    <li><a href="/guitar" className="text-gray-700 hover:text-blue-500">Guitar</a></li>
                    <li><a href="" className="text-gray-700 hover:text-blue-500">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
}
