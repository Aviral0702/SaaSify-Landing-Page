import React from 'react'
import { Button, buttonVariants } from '@/components/ui/button'
import Link from 'next/link'
function Navbar() {
    return (
        <nav className='sticky top-0 flex justify-between items-center backdrop-blur-lg bg-white/30'>
            <div className='flex items-center justify-between w-full mx-10 my-5'>
                <div className='text-xl'>SaaSify</div>
                <div>
                    <ul className='flex space-x-10'>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/">Features</Link></li>
                        <li><Link href="/">Pricing</Link></li>
                        <li><Link href="/">Contact Us</Link></li>
                    </ul>
                </div>
                <div className='flex space-x-5'>
                    <Button asChild className="mr-4" size="lg">
                        <Link href="/login">Login</Link>
                    </Button>
                    <Button asChild variant="outline">
                        <Link href="/login">SignUp</Link>
                    </Button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
