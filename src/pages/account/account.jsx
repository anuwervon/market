import React from 'react'
import { useTranslation } from 'react-i18next'
import Button from '../../components/body/button'

const Account = () => {
    const {t} = useTranslation()
  return (
    <div className='p-[20px_100px] sm:p-[30px_20px] dark:bg-black dark:text-white'>
        <p>{t('acc.p')}</p>
        <div className='flex sm:block justify-between py-[50px]'>
            <div className="left">
                <h1 className='font-semibold text-[22px]'>{t('acc.left.h1')}</h1>
                <div className='ml-[20px] leading-9 my-[10px] text-[18px]'>
                    <p className='text-[#DB4444]'>{t('acc.left.p1')}</p>
                    <p>{t('acc.left.p2')}</p>
                    <p>{t('acc.left.p3')}</p>
                </div>
                <h1 className='font-semibold text-[22px]'>{t('acc.left.h2')}</h1>
                <div className='ml-[20px] leading-9 my-[10px] text-[18px]'>
                    <p>{t('acc.left.p22')}</p>
                    <p>{t('acc.left.p23')}</p>
                </div>
                <h1 className='font-semibold text-[22px]'>{t('acc.left.h3')}</h1>
            </div><br />
            <div className="right w-[60%] sm:w-[100%] p-[30px] shadow-[0px_0px_20px_lightgrey]">
                <h1 className='text-[#DB4444] font-medium text-[24px]'>{t('acc.right.h1')}</h1>
                <div className='flex gap-[10px]'>
                    <input className='w-[50%] border-2 rounded p-[12px_10px]' type="text" placeholder='First Name' />
                    <input className='w-[50%] border-2 rounded p-[12px_10px]' type="text" placeholder='Last Name'/>
                </div><br />
                <div className='flex gap-[10px]'>
                    <input className='w-[50%] border-2 rounded p-[12px_10px]' type="text" placeholder='Email address' />
                    <input className='w-[50%] border-2 rounded p-[12px_10px]' type="text" placeholder='Street address'/>
                </div><br /><br />
                <h1 className='text-[22px]'>{t('acc.right.h2')}</h1><br />
                <input type="text" className='w-[100%] border-2 rounded p-[12px_10px]' placeholder='Current passwod' name="" id="" /><br /><br />
                <div className='flex gap-[10px]'>
                    <input className='w-[50%] border-2 rounded p-[12px_10px]' type="text" placeholder='First Name' />
                    <input className='w-[50%] border-2 rounded p-[12px_10px]' type="text" placeholder='Last Name'/>
                </div><br />
                <div className='text-end'>
                <Button text={t('acc.btn')} size={'p-[10px_30px]'}/>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Account