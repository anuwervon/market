import React from 'react'
import { useTranslation } from 'react-i18next'

const Footer = () => {
    const { t } = useTranslation()
    return (
        <div className='bg-black dark:border-t-2'>
            <div className=' text-white flex sm:block sm:p-[40px_20px] sm:text-[24px] justify-between p-[50px_150px]'>
                <div>
                    <h1 className='font-semibold text-[30px]'>{t('Footer.h1')}</h1>
                    <p className='text-[24px] my-[20px]'>{t('Footer.p1')}</p>
                    <p>{t('Footer.p11')}</p><br />
                    <img src="/src/assets/Send Mail.png" alt="" />
                </div>
                <div className='w-[14%]'>
                    <h1 className='font-semibold text-[24px]'>{t('Footer.h2')}</h1><br />
                    <p className='w-[100%]'>{t('Footer.p2')}</p><br />
                    <p>exclusive@gmail.com</p><br />
                    <p>+88015-88888-9999</p>
                </div>
                <div>
                    <h1 className='font-semibold text-[24px]'>{t('Footer.h3')}</h1>
                    <p className='leading-[40px] mt-[15px]'>{t('Footer.p3')} <br /> {t('Footer.p31')} <br /> {t('Footer.p32')} <br /> {t('Footer.p33')} </p>
                </div>
                <div>
                    <h1 className='font-semibold text-[24px]'>{t('Footer.h4')}</h1>
                    <p className='leading-[40px] mt-[15px]'>{t('Footer.p4')} <br /> {t('Footer.p41')} <br /> {t('Footer.p42')} <br /> {t('Footer.p43')} </p>
                </div>
                <div>
                    <h1 className='font-semibold text-[24px]'>{t('Footer.h5')}</h1><br />
                    <img src="/src/assets/sites.png" alt="" />
                </div>
            </div>
            <p className='text-center border-t-2 border-[#1e1e1e] py-[20px] text-[#2a2a2a]'>{t('Footer.p')}</p>
        </div>
    )
}

export default Footer