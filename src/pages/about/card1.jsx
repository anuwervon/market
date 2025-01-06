import React from 'react'
import { useTranslation } from 'react-i18next'
// import surat1 from '../../assets/Services (1).png'
const card1 = ({be}) => {
    const { t } = useTranslation()
    // const surat1 = be? '/src/pages/about/Services (1).png' : '/src/pages/about/Services (1).png'
  return (
    <div className={`${be?'bg-[#DB4444] text-white': ''} w-[20%] sm:w-[100%] lg2:w-[90%] border flex flex-col items-center p-[10px]`}>
        <div>
            <img src="/src/pages/about/Services (1).png" alt="" />
        </div>
        <h1 className='mt-[10px] font-bold text-[35px]'>10.5k </h1>
        <p className='mt-[0px]'>{t('a.left.4')}</p>
    </div>
  )
}

export default card1