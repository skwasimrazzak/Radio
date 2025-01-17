import React from 'react';
import Link from 'next/link';
import {UserAuth} from '../context/AuthContext';

const Navbar = () => {
    const{user, googleSignIn, logOut} = UserAuth();

    const handleSignIn = async () => {
        try{
            await googleSignIn()
        }catch(error){
            console.log(error)
        }
    }

    const handleSignOut = async () => {
        try{
            await logOut()
        }catch(error){
            console.log(error);
        }
    }
    return(
        <div className="h-20 w-full border-b-2 items-center justify-between p-2">
            <ul className='flex'>
                <li className="p-2 cursor-pointer">
                    <Link href="/">Navbar</Link>
                </li>
                <li className="p-2 cursor-pointer">
                    <Link href="/">Navbar</Link>
                </li>
                <li className="p-2 cursor-pointer">
                    <Link  href="/">login</Link>
                </li>
            </ul>
            {!user ? (<ul className='flex'>
                            <li onClick={handleSignIn} className='p-2 cursor-pointer'>
                                Sign Up
                            </li>
                            <li onClick={handleSignIn} className='p-2 cursor-pointer'>
                                log in
                            </li>
                    </ul>) : (
                        <div>
                            <p>Welcome, {user.displayName}</p>
                            <p className='cursor-pointer' onClick={handleSignOut}>SignOut</p>
                        </div>
                    )};
            
        </div>
    )
}

export default Navbar


