import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Button from '../../components/body/button'

const SignUp = () => {
    const { t } = useTranslation()
    const [act,setAct] = useState(false)
    return (
        <div className='dark:bg-black dark:text-white flex justify-center items-center'>
            <div className={`${act ? 'hidden' : 'block'} w-[28%] sm:w-[100%] dark:border-[1px] dark:p-[30px] m-[150px_auto]`}>
                <h1 className='font-[500] text-[35px]'>{t('Sign.h1')}</h1>
                <p>{t('Sign.p')}</p>
                <input className='border-2 rounded w-[100%] mt-[20px] p-[12px_10px]' type="text" placeholder={t('Sign.name')} />
                <input className='border-2 rounded w-[100%] mt-[20px] p-[12px_10px]' type="email" placeholder={t('Sign.email')} />
                <input className='border-2 rounded w-[100%] mt-[20px] p-[12px_10px]' type="password" placeholder={t('Sign.pass')} /> <br /><br />
                <Button text={t('Sign.btn')} size={"w-[100%] py-[12px]"} />
                <div className='flex gap-[10px] items-center text-[18px] justify-center border-2 rounded py-[12px]'>
                    <img src="/src/assets/Icon-Google.png" alt="" />
                    <p>{t('Sign.1')}</p>
                </div>
                <div className='flex gap-[20px] justify-center text-[17px] py-[20px]'>
                    <p>{t('Sign.2')}</p>
                    <p onClick={()=>setAct(true)} className='hover:cursor-pointer border-b-2'>{t('Sign.3')}</p>
                </div>
            </div>
            <div className={`${act ? 'block' : 'hidden'} w-[28%] sm:w-[95%] dark:border-[1px] dark:p-[30px] m-[150px_auto]`}>
                <h1 className='font-[500] text-[35px]'>{t('Log.h1')}</h1>
                <p>{t('Sign.p')}</p>
                <input className='border-2 rounded w-[100%] mt-[20px] p-[12px_10px]' type="email" placeholder={t('Sign.email')} />
                <input className='border-2 rounded w-[100%] mt-[20px] p-[12px_10px]' type="password" placeholder={t('Sign.pass')} /> <br /><br />
                <p onClick={()=>setAct(false)} className='text-[#DB4444] hover:cursor-pointer text-center text-[17px] font-medium'>{t('Log.p')}</p><br />
                <Button text={t('Log.btn')} size={"w-[100%] py-[12px]"} />
            </div>
        </div>
    )
}

export default SignUp