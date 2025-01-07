"use client";
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className='sticky top-0 backdrop-blur-lg bg-white/20'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex items-center justify-between h-16'>
                    <div className='text-xl font-bold'>SaaSify</div>
                    
                    {/* Desktop Menu */}
                    <div className='hidden md:block'>
                        <ul className='flex space-x-8'>
                            <li><Link href="/" className='hover:text-gray-600'>Home</Link></li>
                            <li><Link href="/" className='hover:text-gray-600'>Features</Link></li>
                            <li><Link href="/" className='hover:text-gray-600'>Pricing</Link></li>
                            <li><Link href="/" className='hover:text-gray-600'>Contact Us</Link></li>
                        </ul>
                    </div>
                    
                    <div className='hidden md:flex space-x-4'>
                        <Button asChild size="sm">
                            <Link href="/login">Login</Link>
                        </Button>
                        <Button asChild variant="outline" size="sm">
                            <Link href="/login">SignUp</Link>
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className='md:hidden'
                        onClick={toggleMenu}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className='md:hidden'>
                        <div className='px-2 pt-2 pb-3 space-y-1'>
                            <Link href="/" className='block px-3 py-2 hover:bg-gray-100 rounded-md'>Home</Link>
                            <Link href="/" className='block px-3 py-2 hover:bg-gray-100 rounded-md'>Features</Link>
                            <Link href="/" className='block px-3 py-2 hover:bg-gray-100 rounded-md'>Pricing</Link>
                            <Link href="/" className='block px-3 py-2 hover:bg-gray-100 rounded-md'>Contact Us</Link>
                            <div className='flex flex-col space-y-2 px-3 pt-4'>
                                <Button asChild size="sm">
                                    <Link href="/login">Login</Link>
                                </Button>
                                <Button asChild variant="outline" size="sm">
                                    <Link href="/login">SignUp</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Navbar;