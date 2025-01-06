import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import Button from '../../components/body/button'

const Products = () => {
    const { t } = useTranslation()
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
        <div className='p-[60px_100px] sm:p-[20px] dark:bg-black dark:text-white'>
            <div className="top flex justify-between">
                <p>{t('pt.p')}</p>
                <select name="" id="" className='border-2 dark:text-black rounded p-[10px] sm:w-[40%] w-[14%]'>
                    <option value="">{t('pt.opt1')}</option>
                </select>
            </div><br /><br />
            <div className="page1 flex sm:block gap-[50px]">
                <div className="left w-[20%] sm:hidden">
                    <div className='text-[18px] leading-9'>
                        <h1 className='font-semibold text-[19px] flex justify-between items-center'>{t('pp.h1')} <img src="/src/pages/home/top.png" alt="" /></h1>
                        <p className='font-medium text-[#DB4444] text-[18px]'>{t('pp.p1.1')}</p>
                        <p>{t('pp.p1.2')}</p>
                        <p>{t('pp.p1.3')}</p>
                        <p>{t('pp.p1.4')}</p>
                        <p>{t('pp.p1.5')}</p>
                        <p className='text-[#DB4444]'>{t('pp.p1.6')}</p>
                    </div>
                    <div className='text-[18px] leading-9'>
                        <h1 className='font-semibold text-[19px] flex justify-between items-center'>{t('pp.h2')} <img src="/src/pages/home/top.png" alt="" /></h1>
                        <div className='flex gap-[15px] items-center'>
                            <input className='h-[20px] w-[20px]' type="checkbox" />
                            <p>{t('pp.p2.1')}</p>
                        </div>
                        <div className='flex gap-[15px] items-center'>
                            <input className='h-[20px] w-[20px]' type="checkbox" />
                            <p>{t('pp.p2.2')}</p>
                        </div>
                        <div className='flex gap-[15px] items-center'>
                            <input className='h-[20px] w-[20px]' type="checkbox" />
                            <p>{t('pp.p2.3')}</p>
                        </div>
                        <div className='flex gap-[15px] items-center'>
                            <input className='h-[20px] w-[20px]' type="checkbox" />
                            <p>{t('pp.p2.4')}</p>
                        </div>
                        <div className='flex gap-[15px] items-center'>
                            <input className='h-[20px] w-[20px]' type="checkbox" />
                            <p>{t('pp.p2.5')}</p>
                        </div>

                        <p className='text-[#DB4444]'>{t('pp.p1.6')}</p>
                    </div>
                    <div className='text-[18px] leading-9'>
                        <h1 className='font-semibold text-[19px] flex justify-between items-center'>{t('pp.h3')} <img src="/src/pages/home/top.png" alt="" /></h1>
                        <div className='flex gap-[15px] items-center'>
                            <input className='h-[20px] w-[20px]' type="checkbox" />
                            <p>{t('pp.p3.1')}</p>
                        </div>
                        <div className='flex gap-[15px] items-center'>
                            <input className='h-[20px] w-[20px]' type="checkbox" />
                            <p>{t('pp.p3.2')}</p>
                        </div>
                        <div className='flex gap-[15px] items-center'>
                            <input className='h-[20px] w-[20px]' type="checkbox" />
                            <p>{t('pp.p3.3')}</p>
                        </div>
                        <div className='flex gap-[15px] items-center'>
                            <input className='h-[20px] w-[20px]' type="checkbox" />
                            <p>{t('pp.p3.4')}</p>
                        </div>
                        <div className='flex gap-[15px] items-center'>
                            <input className='h-[20px] w-[20px]' type="checkbox" />
                            <p>{t('pp.p3.5')}</p>
                        </div>
                        <p className='text-[#DB4444]'>{t('pp.p1.6')}</p>
                    </div>
                    <div>
                        <h1 className='font-semibold text-[19px] flex justify-between items-center'>{t('pp.h4')} <img src="/src/pages/home/top.png" alt="" /></h1>
                        <input type="range" className='w-[100%] my-[20px]' />
                        <div className='flex gap-[10px]'>
                            <input className='p-[10px_5px] w-[50%] rounded border-2' placeholder='min' type="number" />
                            <input className='p-[10px_5px] w-[50%] rounded border-2' placeholder='max' type="number" />
                        </div>
                        <button className='text-[#DB4444] font-medium w-[100%] border-2 border-[#DB4444] rounded py-[10px] my-[20px]'>{t('pp.btn')}</button>
                    </div>
                    <div className='leading-9'>
                        <h1 className='font-semibold text-[19px] flex justify-between items-center'>{t('pp.h5')} <img src="/src/pages/home/top.png" alt="" /></h1>
                        <div className='flex gap-[10px] text-[18px]'>
                            <input type="radio" />
                            <p>{t('pp.p4.1')}</p>
                        </div>
                        <div className='flex gap-[10px] text-[18px]'>
                            <input type="radio" />
                            <p>{t('pp.p4.2')}</p>
                        </div>
                        <div className='flex gap-[10px] text-[18px]'>
                            <input type="radio" />
                            <p>{t('pp.p4.3')}</p>
                        </div>
                        <div className='flex gap-[10px] text-[18px]'>
                            <input type="radio" />
                            <p>{t('pp.p4.4')}</p>
                        </div>
                    </div>
                    <div>
                        <h1 className='font-semibold text-[19px] flex justify-between items-center'>{t('pp.h6')} <img src="/src/pages/home/top.png" alt="" /></h1>
                        <div className='flex gap-[10px] mt-[10px]'>
                            <input type="checkbox" className='w-[16px] h-[16px]' />
                            <img src="/src/assets/Five star.png" alt="" />
                        </div>
                        <div className='flex gap-[10px] mt-[10px]'>
                            <input type="checkbox" className='w-[16px] h-[16px]' />
                            <img src="/src/assets/Five star.png" alt="" />
                        </div>
                        <div className='flex gap-[10px] mt-[10px]'>
                            <input type="checkbox" className='w-[16px] h-[16px]' />
                            <img src="/src/assets/Five star.png" alt="" />
                        </div>
                        <div className='flex gap-[10px] mt-[10px]'>
                            <input type="checkbox" className='w-[16px] h-[16px]' />
                            <img src="/src/assets/Five star.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className='right w-[80%] sm:w-[100%] my-[30px]'>
                    <div className='flex gap-[20px] w-[100%]'>
                        {data.map(el => <div className='w-[32%] sm:w-[80%] flex-shrink-0' onMouseEnter={() => setBe('block')} onMouseLeave={() => setBe('hidden')} >
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
                    </div> <br /><br />
                    <div className=''>
                        <Link to="/products">
                            <Button text={t('copy.btn')} size={'p-[10px_45px]'} />
                        </Link>
                    </div>
                </div>
            </div><br /><br />
        </div>
    )
}

export default Products