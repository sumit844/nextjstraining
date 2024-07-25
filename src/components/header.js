import React from 'react'
import Link from 'next/link'
import Navbar from './navbar'
import { init } from "@sitecore/engage";
import { useEffect } from 'react';
import engageSettings from './sitecorecdp';
import { useRouter } from 'next/router';
import { Button } from 'react-bootstrap';

function Header() {

   
    var router=useRouter()
    var pageLocation=router.pathname.replace('/','');
   var url=router.asPath;
    
   const removeCookie=()=>{
    localStorage.removeItem('loginStatus');
    localStorage.removeItem('userName');
    localStorage.removeItem('name');
    router.push('/login')
}
    const loadEngage = async () => {

        const engage = await init(engageSettings);

        var pageData = {
            url: url,
            pageName: pageLocation,

        }
        var pageViewData = {
            channel: 'WEB',
            currency: 'EUR',
            pointOfSale: 'CDPLearning',
            language: 'en',
            page: pageLocation,
            pageData:pageData

        }

        engage.event("PageVisited", pageViewData)
        console.log("Page view event New is triggered")
    };

    useEffect(() => {
        loadEngage();
    }, []);

    return (
        <div className='row'>
            <div className='col-2'>
                <Link href="/"><h1> Next Js</h1></Link>
            </div>
            <div className='col-6'>
                <Navbar />
            </div>
            <div className='col-1'>
                <div className='text-end'>
                <Link href="/login">Login</Link>

                </div>
            </div>
            <div className='col-1'>
                <div className='text-end'>
                <Link href="/register">Register</Link>
                </div>
            </div>
            <div className='col-1'>
                <div className='text-end'>
                <a href="#" onClick={()=>{removeCookie()}}>LogOut</a>
                </div>
            </div>
        </div>
    )
}

export default Header
