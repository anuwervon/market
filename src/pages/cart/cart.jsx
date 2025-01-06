import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Button from '../../components/body/button'

const Cart = () => {
    const { t } = useTranslation()
    const [be, setBe] = useState(false)
    return (
        <div className='dark:bg-black dark:text-white'>
            <div className={`${be ? 'hidden' : 'block'} p-[70px_100px] sm:p-[30px_20px]`}>
                <p>{t('c.p')}</p>
                <table className='w-[100%] my-[80px]'>
                    <thead>
                        <tr>
                            <th className='font-[400] text-left text-[20px] w-[30%]'>{t('c.t.1')}</th>
                            <th className='font-[400] text-[20px] w-[20%]'>{t('c.t.2')}</th>
                            <th className='font-[400] text-[20px] w-[20%]'>{t('c.t.3')}</th>
                            <th className='font-[400] text-[20px] w-[20%]'>{t('c.t.4')}</th>
                        </tr>
                    </thead><br />
                    <tbody className='dark:text-black'>
                        <tr className='bg-white my-[10px] shadow-[0px_0px_10px_lightgrey] rounded-[5px]'>
                            <td className='flex items-center gap-[10px]'>
                                <img className='w-[20%]' src="/src/pages/home/ps5-slim-goedkope-playstation_large 1.png" alt="" />
                                <h1 className='font-medium text-[20px]'>LCD Monitor</h1>
                            </td>
                            <td className='text-center text-[20px]'>$650</td>
                            <td className='text-center'><input className='p-[10px_5px] sm:w-[100%] rounded border-2 w-[24%]' type="number" /></td>
                            <td className='font-medium text-[22px] text-center'>$650</td>
                        </tr><br />
                        <tr className='bg-white my-[10px] shadow-[0px_0px_10px_lightgrey] rounded-[5px]'>
                            <td className='flex items-center gap-[10px]'>
                                <img className='w-[20%]' src="/src/pages/home/ps5-slim-goedkope-playstation_large 1.png" alt="" />
                                <h1 className='font-medium text-[20px]'>LCD Monitor</h1>
                            </td>
                            <td className='text-center text-[20px]'>$650</td>
                            <td className='text-center'><input className='p-[10px_5px] sm:w-[100%] rounded border-2 w-[24%]' type="number" /></td>
                            <td className='font-medium text-[22px] text-center'>$650</td>
                        </tr>
                    </tbody>
                </table>
                <div className='flex sm:block justify-between'>
                    <button className='border-2 rounded w-[18%] sm:w-[100%] py-[10px] font-medium text-[18px]'>{t('c.btn.1')}</button>
                    <div className='flex w-[30%] sm:w-[100%] sm:mt-[20px] gap-[20px]'>
                        <button className='border-2 rounded w-[100%] py-[10px] font-medium'>{t('c.btn.2')}</button>
                        <button className='border-[#DB4444] border-[1px] rounded w-[100%] py-[10px] font-medium text-[#DB4444] '>{t('c.btn.3')}</button>
                    </div>
                </div><br /><br />
                <div className='flex justify-between sm:block items-start'>
                    <div className='w-[35%] sm:w-[100%] flex gap-[10px]'>
                        <input className='w-[80%] border-2 rounded pl-[15px]' type="" placeholder={t('c.p1')} />
                        <button className='border-[#DB4444] border-[1px] rounded w-[30%] py-[10px] font-medium text-[#DB4444]'>{t('c.btn2')}</button>
                    </div> <br />
                    <div className='border-2 dark:border-white border-black w-[30%] sm:w-[100%] p-[20px]'>
                        <h1 className='font-medium text-[24px]'>{t('c.box.h1')}</h1>
                        <div className='flex justify-between my-[10px] text-[18px]'>
                            <p>{t('c.t.4')}:</p>
                            <p>$1750</p>
                        </div>
                        <div className='flex justify-between border-b-2 pb-[10px] my-[10px] text-[18px]'>
                            <p>{t('c.box.1')}</p>
                            <p>{t('c.box.2')}</p>
                        </div>
                        <div className='flex justify-between my-[10px] font-medium text-[20px]'>
                            <p>{t('c.box.3')}</p>
                            <p>$1750</p>
                        </div>
                        <div className='text-center' onClick={() => setBe(true)}>
                            <Button text={t('c.box.btn')} size={'p-[10px_40px]'} />
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${be ? 'block' : 'hidden'} p-[70px_100px]`}>
                <p>{t('ch.p')}</p>
                <div className='flex py-[50px] justify-between'>
                    <div className="left w-[35%]">
                        <h1 className='font-medium text-[39px]'>{t('ch.left.h1')}</h1>
                        <div className='shadow-[0px_0px_10px_lightgrey] mt-[15px] p-[20px]'>
                            <input className='border-2 w-[100%] rounded py-[10px] mt-[15px] pl-[10px]' type="text" placeholder={t('ch.left.1')} /> <br />
                            <input className='border-2 w-[100%] rounded py-[10px] mt-[15px] pl-[10px]' type="text" placeholder={t('ch.left.2')} /> <br />
                            <input className='border-2 w-[100%] rounded py-[10px] mt-[15px] pl-[10px]' type="text" placeholder={t('ch.left.3')} /> <br />
                            <input className='border-2 w-[100%] rounded py-[10px] mt-[15px] pl-[10px]' type="text" placeholder={t('ch.left.4')} /> <br />
                            <input className='border-2 w-[100%] rounded py-[10px] mt-[15px] pl-[10px]' type="text" placeholder={t('ch.left.5')} /> <br />
                            <input className='border-2 w-[100%] rounded py-[10px] mt-[15px] pl-[10px]' type="text" placeholder={t('ch.left.6')} /> <br />
                            <input className='border-2 w-[100%] rounded py-[10px] mt-[15px] pl-[10px]' type="text" placeholder={t('ch.left.7')} /> <br />
                            <div className='flex gap-[10px] my-[10px] text-[17px]'>
                                <input type="checkbox" />
                                <p>{t('ch.left.p')}</p>
                            </div>
                        </div>
                    </div>
                    <div className="right py-[30px] w-[35%]">
                        <div className='flex justify-between my-[5px] items-center text-[18px]'>
                            <div className='flex gap-[15px] items-center'>
                                <img className='w-[20%]' src="/src/pages/home/g92-2-500x500 1.png" alt="" />
                                <p>LCD Monitor</p>
                            </div>
                            <p>$650</p>
                        </div>
                        <div className='flex justify-between my-[5px] items-center text-[18px]'>
                            <div className='flex gap-[15px] items-center'>
                                <img className='w-[20%]' src="/src/pages/home/g92-2-500x500 1.png" alt="" />
                                <p>LCD Monitor</p>
                            </div>
                            <p>$650</p>
                        </div>
                        <div className='flex justify-between my-[10px] text-[18px]'>
                            <p>{t('c.t.4')}:</p>
                            <p>$1750</p>
                        </div>
                        <div className='flex justify-between border-b-2 pb-[10px] my-[10px] text-[18px]'>
                            <p>{t('c.box.1')}</p>
                            <p>{t('c.box.2')}</p>
                        </div>
                        <div className='flex justify-between my-[10px] font-medium text-[20px]'>
                            <p>{t('c.box.3')}</p>
                            <p>$1750</p>
                        </div>
                        <div className='flex mt-[15px] justify-between items-center'>
                            <div className='flex gap-[10px] text-[18px]'>
                                <input type="radio" />
                                <p>{t('ch.right.1')}</p>
                            </div>
                            <img src="/src/pages/cart/Frame 834 (1).png" alt="" />
                        </div>
                        <div className='flex gap-[10px] text-[18px] mt-[10px]'>
                            <input type="radio" />
                            <p>{t('ch.right.2')}</p>
                        </div><br />
                        <div className='w-[100%] p-[20px] shadow-[0px_0px_15px_lightgrey] flex gap-[10px]'>
                            <input className='w-[80%] border-2 rounded pl-[15px]' type="" placeholder={t('c.p1')} />
                            <button className='border-[#DB4444] border-[1px] rounded w-[30%] py-[10px] font-medium text-[#DB4444]'>{t('c.btn2')}</button>
                        </div><br />
                        <Button text={t('ch.btn')} size={'p-[12px_40px]'} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart