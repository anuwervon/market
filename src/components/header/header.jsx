import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Switcher from '../switcher'

const Header = () => {
    const { t } = useTranslation()
    const [open, setOpen] = useState(false)
  return (
    <div className='flex items-center border-b-[2px] dark:bg-black dark:text-white justify-between sm:p-[20px] p-[10px_100px]'>
        <img src="/src/assets/logo.png" alt="" />
        <div className='flex sm:hidden gap-[40px] text-[19px]'>
            <p><Link to="/home">{t('Header.1')}</Link></p>
            <p><Link to="/contact">{t('Header.2')}</Link></p>
            <p><Link to="/about">{t('Header.3')}</Link></p>
            <p><Link to="/">{t('Header.4')}</Link></p>
        </div>
        <div className='flex gap-[20px] items-center'>
            <Switcher/>
            <div className='flex items-center sm:hidden bg-[#F5F5F5] p-[5px_15px] gap-[10px]'>
                <input className='w-[200px] bg-[#F5F5F5]' type="search" placeholder='What are you looking for?' />
                <img src="/src/assets/search.png" alt="" />
            </div>
            <img className='sm:hidden' src="/src/assets/Wishlist (1).png" alt="" />
            <Link to="/cart"><img src="/src/assets/Cart1 (1).png" alt="" /></Link>
            <Link to="/account">
            <img src="/src/assets/user (1).png" alt="" />
            </Link>
            <div onClick={()=>setOpen(true)}>
                <p className='h-[5px] rounded-md w-[35px] bg-[black] dark:bg-white'></p>
                <p className='h-[5px] rounded-md mt-[5px] w-[35px] bg-[black] dark:bg-white'></p>
                <p className='h-[5px] rounded-md mt-[5px] w-[35px] bg-[black] dark:bg-white'></p>
            </div>
        </div>
    </div>
  )
}

export default Header