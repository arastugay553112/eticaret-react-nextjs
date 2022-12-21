import React,{useState,useEffect} from 'react';
import Link from 'next/link';
import {BsBagCheckFill} from 'react-icons/bs';

import { useStateContext } from '../context/StateContext';
import {SchoolPride} from '../lib/utils';

const Success = () => {

const {setCartItems,setTotalPrice,setTotalQuantities}= useStateContext();

useEffect(()=>{
localStorage.clear();
setCartItems([]);
setTotalPrice(0);
setTotalQuantities(0);
SchoolPride();
},[])

  return (
    <div className='success-wrapper'>
        <div className='success'>
            <p className='icon'>
                <BsBagCheckFill />
            </p>
            <h2>Siparişiniz için teşekkür ederiz!</h2>
            <p className='email-msg'>
                Fatura için emailinizi kontrol edin.
            </p>
            <p className='description'>
                Herhangi bir sorunuz varsa email atabilirsiniz?
                <a className='email' href='mailto:order@example.com'>
                order@example.com</a>
            </p>
            <Link href="/">
                <button type='button' width="300px" className='btn'>
                    Alışverişe Devam
                </button>
            </Link>

        </div>
    </div>
  )
}

export default Success