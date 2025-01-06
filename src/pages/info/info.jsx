import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import Button from '../../components/body/button'

const Info = () => {
    const url = 'http://localhost:3001/prod'
    const { t } = useTranslation()
    const { id } = useParams()
    const [prod, setProd] = useState({})
    async function get(id) {
        try {
            const { data } = await axios.get(`${url}/${id}`)
            setProd(data)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        get(id)
    }, [id])
    return (
        <div className='p-[70px_100px] sm:p-[30px_10px]'>
            <p className='sm:text-[20px]'>{t('i.p')} / {prod.name}</p>
            <div className='flex sm:block gap-[70px] items-center'>
                <div className="left bg-[#F5F5F5] w-[70%] sm:w-[100%] p-[30px]">
                    <img className='w-[100%]' src={prod.img} alt="" />
                </div>
                <div className="right">
                    <h1 className='font-semibold text-[35px]'>{prod.name}</h1>
                    <div className='flex items-center gap-[20px]'>
                        <img src="/src/assets/Five star.png" alt="" />
                        <p>({prod.qty})</p>
                        <p className={`${prod.status?'text-[#12CA5B]':'text-[red]'} font-medium text-[18px]`}>{prod.status? t('i.st1'): t('i.st2')}</p>
                    </div><br />
                    <p className='font-bold text-[30px]'>${prod.price}</p>
                    <p className='text-[#00000099] pb-[20px] border-b-2 text-[19px]'>{prod.text}</p><br />
                    <div className='flex gap-[30px] items-center'>
                        <p className='text-[24px]'>{t('i.1')}</p>
                        <div className='flex gap-[15px] items-center'>
                            <p className='h-[20px] w-[20px] rounded-[150px] bg-[blue]'></p>
                            <p className='h-[20px] w-[20px] rounded-[150px] bg-[red]'></p>
                        </div>
                    </div><br />
                    <div className='flex gap-[40px]'>
                        <p className='text-[24px]'>{t('i.2')}</p>
                        <div className='flex gap-[10px]'>
                            <p className='border-2 rounded font-medium p-[10px_20px]'>XS</p>
                            <p className='border-2 rounded font-medium p-[10px_20px]'>S</p>
                            <p className='text-white rounded bg-[#DB4444] p-[10px_20px]'>M</p>
                            <p className='border-2 rounded font-medium p-[10px_20px]'>L</p>
                            <p className='border-2 rounded font-medium p-[10px_20px]'>XL</p>
                        </div>
                    </div>
                    <div className='flex gap-[20px] items-center'>
                        <div className='flex border-2 w-[25%] rounded'>
                            <p className='w-[30%] font-semibold text-[25px] border-r-[1px] text-center py-[6px]'>-</p>
                            <p className='w-[80%] font-semibold text-[20px] py-[6px] text-center'>2</p>
                            <p className='w-[30%] font-semibold text-[25px] border-l-[1px] text-center py-[6px]'>+</p>
                        </div>
                        <Button text={t('i.btn')} size={'p-[10px_40px]'} />
                        <img src="/src/pages/info/Frame 904.png" alt="" />
                    </div>
                    <img src="/src/pages/info/Frame 911 (1).png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Info