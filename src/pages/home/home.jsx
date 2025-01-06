import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Button from '../../components/body/button'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Home = () => {
  const { t } = useTranslation()
  function box(img, h1) {
    return <div className='py-[30px] w-[15%] sm:w-[40%] flex-shrink-0 rounded-md text-center border-2 flex flex-wrap justify-center'>
      <img src={img} alt="" />
      <h1 className='font-medium w-[100%] text-[22px]'>{h1}</h1>
    </div>
  }
  const url = 'http://localhost:3001/prod'
  const [data, setData] = useState([])
  async function get() {
    try {
      const { data } = await axios.get(url)
      setData(data)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    get()
  }, [])
  const [be, setBe] = useState('hidden')
  return (
    <div className='dark:bg-black dark:text-white'>
      <div className="page1 flex justify-between sm:p-[20px] sm:block p-[70px_100px]">
        <div className="left text-[20px] leading-[40px] sm:text-[24px] border-r-2 pr-[60px]">
          <p>{t('hp1.1')}</p>
          <p>{t('hp1.2')}</p>
          <p>{t('hp1.3')}</p>
          <p>{t('hp1.4')}</p>
          <p>{t('hp1.5')}</p>
          <p>{t('hp1.6')}</p>
          <p>{t('hp1.7')}</p>
          <p>{t('hp1.8')}</p>
          <p>{t('hp1.9')}</p>
        </div>
        <img className='w-[80%] sm:w-[100%] sm:mt-[20px]' src="/src/pages/home/Frame 560 (2).png" alt="" />
      </div>
      <div className="copy p-[40px_100px] sm:p-[20px]">
        <div className='flex gap-[15px] items-center'>
          <p className='h-[40px] w-[20px] rounded-md bg-[#DB4444]'></p>
          <p className='font-semibold text-[#DB4444] text-[18px]'>{t('copy.p')}</p>
        </div>
        <div className='flex items-end justify-between'>
          <h1 className='font-semibold text-[40px]'>{t('copy.h1')}</h1>
          <img src="/src/pages/home/Frame 726.png" alt="" />
        </div>
        <div className='my-[30px]'>
          {data.map(el => <div key={el.id} className='w-[23%] sm:w-[70%]' onMouseEnter={() => setBe('block')} onMouseLeave={() => setBe('hidden')} >
            <div className={`top rounded-[5px] flex justify-center p-[40px_20px] relative bg-[#F5F5F5]`}>
              <img src={el.img} alt="" />
              <img className='absolute top-[10px] right-[10px]' src="/src/assets/Fill Heart (1).png" alt="" />
              <img className='absolute top-[50px] right-[10px]' src="/src/assets/Fill Eye (1).png" alt="" />
              <button className={`${be} py-[4px] bg-black absolute bottom-0 text-white w-[100%]`}><Link to={`/info/${el.id}`}>{t('copy.cart')}</Link></button>
            </div>
            <h1 className='font-semibold text-[20px]'>{el.name}</h1>
            <p className='font-medium text-[#DB4444]'>${el.price}</p>
            <div className='flex items-center gap-[20px]'>
              <img src="/src/assets/Five star.png" alt="" />
              <p>({el.qty})</p>
            </div>
          </div>)}
        </div>
        <div className='text-center'>
          <Link to="/products">
            <Button text={t('copy.btn')} size={'p-[10px_45px]'} />
          </Link>
        </div>
      </div>
      <div className="copy sm:p-[20px] p-[40px_100px]">
        <div className='flex gap-[15px] items-center'>
          <p className='h-[40px] w-[20px] rounded-md bg-[#DB4444]'></p>
          <p className='font-semibold text-[#DB4444] text-[18px]'>{t('copy.p2')}</p>
        </div>
        <div className='flex items-end justify-between'>
          <h1 className='font-semibold text-[40px] sm:text-[30px]'>{t('copy.h2')}</h1>
          <img src="/src/pages/home/Frame 726.png" alt="" />
        </div>
        <div className='flex gap-[30px] my-[20px] overflow-x-scroll'>
          {box("/src/pages/home/Category-CellPhone (1).png", t('box.1'))}
          {box("/src/pages/home/Category-CellPhone (1).png", t('box.1'))}
          {box("/src/pages/home/Category-CellPhone (1).png", t('box.1'))}
          {box("/src/pages/home/Category-CellPhone (1).png", t('box.1'))}
          {box("/src/pages/home/Category-CellPhone (1).png", t('box.1'))}
          {box("/src/pages/home/Category-CellPhone (1).png", t('box.1'))}
        </div>
      </div>
      <div className="copy sm:p-[20px] p-[40px_100px]">
        <div className='flex gap-[15px] items-center'>
          <p className='h-[40px] w-[20px] rounded-md bg-[#DB4444]'></p>
          <p className='font-semibold text-[#DB4444] text-[18px]'>{t('copy.p3')}</p>
        </div>
        <div className='flex items-center justify-between'>
          <h1 className='font-semibold sm:text-[26px] text-[40px]'>{t('copy.h3')}</h1>
          <Button text={t('copy.btn2')} size={'p-[12px_42px] sm:p-[12px_20px]'} />
          {/* <img src="/src/pages/home/Frame 726.png" alt="" /> */}
        </div>
        <div className='my-[30px]'>
          {data.map(el => <div className='w-[23%] sm:w-[70%]' onMouseEnter={() => setBe('block')} onMouseLeave={() => setBe('hidden')} >
            <div className={`top rounded-[5px] flex justify-center p-[40px_20px] relative bg-[#F5F5F5]`}>
              <img src={el.img} alt="" />
              <img className='absolute top-[10px] right-[10px]' src="/src/assets/Fill Heart (1).png" alt="" />
              <img className='absolute top-[50px] right-[10px]' src="/src/assets/Fill Eye (1).png" alt="" />
              <button className={`${be} py-[4px] bg-black absolute bottom-0 text-white w-[100%]`}>{t('copy.cart')}</button>
            </div>
            <h1 className='font-semibold text-[20px]'>{el.name}</h1>
            <p className='font-medium text-[#DB4444]'>${el.price}</p>
            <div className='flex items-center gap-[20px]'>
              <img src="/src/assets/Five star.png" alt="" />
              <p>({el.qty})</p>
            </div>
          </div>)}
        </div>
      </div>
      <div className='page2 mx-[100px] sm:mx-[10px] sm:p-[20px] sm:block dark:border-2 p-[40px_60px] flex justify-between bg-black text-white'>
        <div className="left">
          <p className='text-[#00FF66]'>{t('hp2.p')}</p>
          <h1 className='font-semibold sm:text-[35px] sm:w-[100%] text-[50px] leading-[60px] w-[66%]'>{t('hp2.h1')}</h1>
          <div className='flex gap-[30px] my-[40px]'>
            <p className='text-center h-[80px] sm:h-[70px] w-[80px] pt-[15px] font-semibold text-[24px] bg-white rounded-[150px] text-black leading-5'>05 <br /> <span className='font-medium text-[16px]'>{t('hp2.d')}</span></p>
            <p className='text-center h-[80px] sm:h-[70px] w-[80px] pt-[15px] font-semibold text-[24px] bg-white rounded-[150px] text-black leading-5'>05 <br /> <span className='font-medium text-[16px]'>{t('hp2.h')}</span></p>
            <p className='text-center h-[80px] sm:h-[70px] w-[80px] pt-[15px] font-semibold text-[24px] bg-white rounded-[150px] text-black leading-5'>05 <br /> <span className='font-medium text-[16px]'>{t('hp2.m')}</span></p>
            <p className='text-center h-[80px] sm:h-[70px] w-[80px] pt-[15px] font-semibold text-[24px] bg-white rounded-[150px] text-black leading-5'>05 <br /> <span className='font-medium text-[16px]'>{t('hp2.s')}</span></p>
          </div>
          <button className='bg-[#00FF66] font-medium text-black p-[12px_40px] rounded'>{t('hp2.btn')}</button>
        </div> <br />
        <img src="/src/pages/home/Frame 694.png" alt="" />
      </div><br />
      <div className="copy sm:p-[20px] p-[40px_100px]">
        <div className='flex gap-[15px] items-center'>
          <p className='h-[40px] w-[20px] rounded-md bg-[#DB4444]'></p>
          <p className='font-semibold text-[#DB4444] text-[18px]'>{t('copy.p4')}</p>
        </div>
        <div className='flex items-end justify-between'>
          <h1 className='font-semibold text-[40px]'>{t('copy.h4')}</h1>
          {/* <img src="/src/pages/home/Frame 726.png" alt="" /> */}
        </div>
        <div className='my-[30px]'>
          {data.map(el => <div className='w-[23%] sm:w-[70%]' onMouseEnter={() => setBe('block')} onMouseLeave={() => setBe('hidden')} >
            <div className={`top rounded-[5px] flex justify-center p-[40px_20px] relative bg-[#F5F5F5]`}>
              <img src={el.img} alt="" />
              <img className='absolute top-[10px] right-[10px]' src="/src/assets/Fill Heart (1).png" alt="" />
              <img className='absolute top-[50px] right-[10px]' src="/src/assets/Fill Eye (1).png" alt="" />
              <button className={`${be} py-[4px] bg-black absolute bottom-0 text-white w-[100%]`}>{t('copy.cart')}</button>
            </div>
            <h1 className='font-semibold text-[20px]'>{el.name}</h1>
            <p className='font-medium text-[#DB4444]'>${el.price}</p>
            <div className='flex items-center gap-[20px]'>
              <img src="/src/assets/Five star.png" alt="" />
              <p>({el.qty})</p>
            </div>
          </div>)}
        </div>
        <div className='text-center'>
          <Button text={t('copy.btn')} size={'p-[10px_45px]'} />
        </div>
      </div>
      <div className="page3 sm:p-[20px] p-[20px_100px]">
        <div className='flex gap-[15px] items-center'>
          <p className='h-[40px] w-[20px] rounded-md bg-[#DB4444]'></p>
          <p className='font-semibold text-[#DB4444] text-[18px]'>{t('hp3.p')}</p>
        </div>
        <h1 className='font-semibold text-[38px]'>{t('hp3.h1')}</h1><br />
        <div className='flex gap-[20px] sm:block'>
          <div className="left w-[43%] sm:w-[100%] bg-black relative dark:border-2">
            <img src="/src/pages/home/ps5-slim-goedkope-playstation_large 1.png" alt="" />
            <div className='text-white p-[30px] absolute bottom-[5px]'>
              <h1 className='font-semibold text-[26px]'>{t('hp3.h2')}</h1>
              <p className='w-[66%] my-[10px]'>{t('hp3.p2')}</p>
              <p className='border-b-2 w-max'>{t('hp3.p3')}</p>
            </div>
          </div><br />
          <div className="right w-[50%] sm:w-[100%]">
            <div className="top flex items-end dark:border-2 bg-black relative text-white p-[20px]">
              <div className='text-white p-[30px] bottom-[5px]'>
                <h1 className='font-semibold text-[26px]'>{t('hp3.h2')}</h1>
                <p className='w-[80%] sm:w-[100%] my-[10px]'>{t('hp3.p2')}</p>
                <p className='border-b-2 w-max'>{t('hp3.p3')}</p>
              </div>
              <img className='w-[35%]' src="/src/pages/home/ps5-slim-goedkope-playstation_large 1.png" alt="" />
            </div><br />
            <div className='flex gap-[20px] sm:block'>
              <div className='bg-black relative dark:border-2'>
                <div className='text-white absolute p-[30px] bottom-[5px]'>
                  <h1 className='font-semibold text-[26px]'>{t('hp3.h2')}</h1>
                  <p className='w-[80%] my-[10px]'>{t('hp3.p2')}</p>
                  <p className='border-b-2 w-max'>{t('hp3.p3')}</p>
                </div>
                <img className='' src="/src/pages/home/ps5-slim-goedkope-playstation_large 1.png" alt="" />
              </div><br />
              <div className='bg-black relative dark:border-2'>
                <div className='text-white absolute p-[30px] bottom-[5px]'>
                  <h1 className='font-semibold text-[26px]'>{t('hp3.h2')}</h1>
                  <p className='w-[80%] my-[10px]'>{t('hp3.p2')}</p>
                  <p className='border-b-2 w-max'>{t('hp3.p3')}</p>
                </div>
                <img className='' src="/src/pages/home/ps5-slim-goedkope-playstation_large 1.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='page4 flex sm:block justify-center py-[100px] gap-[0px]'>
        <div className='w-[25%] sm:w-[100%] text-center flex justify-center flex-wrap'>
          <img src="/src/pages/home/Services.png" alt="" />
          <h1 className='font-bold text-[20px] my-[10px] w-[100%]'>{t('hp4.h1')}</h1>
          <p>{t('hp4.p')}</p>
        </div> <br />
        <div className='w-[25%] sm:w-[100%] text-center flex justify-center flex-wrap'>
          <img src="/src/pages/home/Services.png" alt="" />
          <h1 className='font-bold text-[20px] my-[10px] w-[100%]'>{t('hp4.h1')}</h1>
          <p>{t('hp4.p')}</p>
        </div><br />
        <div className='w-[25%] sm:w-[100%] text-center flex justify-center flex-wrap'>
          <img src="/src/pages/home/Services.png" alt="" />
          <h1 className='font-bold text-[20px] my-[10px] w-[100%]'>{t('hp4.h1')}</h1>
          <p>{t('hp4.p')}</p>
        </div>
      </div>
    </div>
  )
}

export default Home