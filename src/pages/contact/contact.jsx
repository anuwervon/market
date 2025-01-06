import React from 'react'
import Button from '../../components/body/button'
import { useTranslation } from 'react-i18next'

const Contact = () => {
    const {t} = useTranslation()
  return (
    <div className='dark:text-white dark:bg-[black]'>
       <h1 className='text-left pt-[30px] p-[10px_150px] sm:p-[20px] text-[18px]' >{t('con.p')}</h1>
       <div className='w-[90%] m-auto mt-[50px] flex sm:block justify-evenly lg2:flex-col'>
           <div className='w-[30%] sm:w-[100%] text-[18px] p-[15px] shadow-[0px_0px_10px_lightgrey] rounded-[5px] lg2:w-[90%]'>
            <div className='flex gap-[20px] items-center'>
            <img src="/src/pages/contact/icons-phone.png" alt="" />
             <h1 className='text-[30px]'>{t('con.h1')}</h1>
            </div>
             <h1 className='mt-[20px]'>{t('con.p1')}<br />
             Phone: +8801611112222</h1>
             <hr className='mt-[20px]' /><br />
             <div className='flex gap-[20px] items-center'>
            <img src="/src/pages/contact/icons-phone.png" alt="" />

             <h1 className='text-[30px]'> Write To US</h1>
             </div>
             <h1 className='mt-[20px]'>Fill out our form and we will contact <br /> you within 24 hours.</h1>
             <h1 className='mt-[10px]'>Emails: customer@exclusive.com</h1>
             <h1 className='mt-[10px]'>Emails: customer@exclusive.com</h1>
           </div><br />
           <div className='w-[60%] sm:w-[100%] lg2:w-[100%] lg2:mt-[20px] p-[20px] text-end shadow-[0px_0px_10px_lightgrey] rounded-[5px]'>
            <div className='w-[100%] sm:block flex justify-between lg2:flex-col items-center lg2:gap-[10px]'>
              <input type="text" className='w-[200px] sm:w-[100%] sm:mt-[20px] sm:h-[55px] border p-[5px] h-[40px]' placeholder='Name' />
              <input type="text" className='w-[200px] sm:w-[100%] sm:mt-[20px] sm:h-[55px] border p-[5px] h-[40px]' placeholder='Email' />
              <input type="text" className='w-[200px] sm:w-[100%] sm:mt-[20px] sm:h-[55px] border p-[5px] h-[40px]' placeholder='Phone' />
            </div>
            <textarea className='w-[100%] h-[200px] border mt-[20px] p-[10px]' placeholder='Your Message'> </textarea>
            <Button text={"Send Massage"} size={'p-[10px_30px]'}/>
           </div>
       </div><br /><br /><br /><br /><br />
    </div>
  )
}

export default Contact