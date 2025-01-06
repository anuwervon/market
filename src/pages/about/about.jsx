import React from 'react'
// import Card2 from '../home/card2'
import Card1 from './card1'
import { useTranslation } from 'react-i18next'
// import suratLogo2 from '../../assets/Frame 877.png'
const About = () => {
    const {t} = useTranslation()
    return (
        <div className='bg-[white] dark:bg-[black] dark:text-[white]'>
            <h1 className='text-[20px] text-left sm:p-[30px_20px] p-[50px_150px]'>{t('a.p')}</h1>
            <div className='w-[90%] sm:w-[100%] m-auto flex sm:block items-center gap-[250px] mt-[50px] sm:mt-[10px] justify-center lg2:flex-col'>
                <div className='w-[40%] sm:w-[100%] p-[10px] lg2:w-[100%]'>
                    <h1 className='text-[40px] font-bold'>{t('a.left.1')}</h1>
                    <p className='text-[18px] mt-[20px]'>{t('a.left.2')}</p>
                    <p className='text-[18px] mt-[10px]'>{t('a.left.3')}</p>
                </div>
                <div><br />
                    <img className='w-[450px]' src="https://s3-alpha-sig.figma.com/img/fcc8/9aaa/7b85f8c1dcce81e71e2eb178be13bd4d?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SNl8tHiQ1Ai2WUT5m-e0MdxFpj-behKwD6UV6SBOyC1xGcTluB2XlHsHX74iutgqpT2whK4Du5H6qOZwAzElNZMLLfr1m8imXJmXceeybxMEE47hEzaZHSsnJKWQu15BT1YdrfmPJrBqAIgmDjO8oW-lxuK2b6iNhYihNuClv~3ypEYY5tcXVfSeBZOsWaDeUt6kUW-Y6CYHHf9j34JRxnhdNaThu~ozBBpvhiyUrXn~fB52IodQNBeCDHdaSJksZLL8Kcp~qPOuipI30IddT3v62MX3eS2Vem2rsW58uF13NxSuMulLrvhGZxcu8m58bzdTTcZvTdBKPEWziXaseg__" alt="" />
                </div>
            </div>

            <div className='w-[90%]  sm:w-[80%] sm:block m-auto flex mt-[60px] justify-evenly lg2:flex-col lg2:items-center lg2:gap-[20px ]'>
                <Card1 be={false} /> <br />  
                <Card1 be={true} /> <br />
                <Card1 be={false} /> <br />
                <Card1 be={false} />
            </div>
            <div className='w-[90%] sm:w-[90%] sm:block m-auto flex mt-[60px] justify-evenly lg2:flex-col lg2:items-center lg2:gap-[20px ]'>
                <div className='w-[30%] dark:border-2 p-[10px] sm:w-[90%]'>
                    <div className='bg-[#F5F5F5] flex justify-center'>
                        <img className='w-[270px]' src="https://s3-alpha-sig.figma.com/img/0881/49fd/5afc043392ee3cbb529f429b3e2098d3?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gJEmR5eSg6P7y5b7L4jGLJquO2g3jX8J89F3fV-wZFAkLW89kO~pA-IjPgP7A-XbGVkkfBq2OJf9VIRsdvHQQmHw-6hA8XEpKHj6Mjdmv~DKXUonpy03BX87XSucMxEakSKMkq4nsjGXh9CEkJpsHUxjGAjMH2fN9v6ftTki-GLKlwmaoK3APc6lmp2RzyegdoaQjoHiODfHVDWBDsuVa9NJ590p18eq-HlOniMpBheeLxkGjcR9~DI4shcMtQ7vSG1psqBim1P6D35KDf0UYTrVi1rYRfO0ZfzVp3U7TzLerju7AdeMsKqdYtJQZ~QrdszhUUHxgz97UUIu7maSjA__" alt="" />
                    </div>
                    <h1 className='text-[30px] mt-[10px] font-semibold'>{t('a.box.1')}</h1>
                    <h1 className='text-[17px]'>{t('a.box.p')}</h1>
                    <div className='mt-[10px]'>
                        <img src="/src/pages/about/Frame 877.png" alt="" />
                    </div>
                </div>
                <div className='w-[30%] dark:border-2 p-[10px] sm:w-[90%]'>
                    <div className='bg-[#F5F5F5] flex justify-center'>
                        <img className='w-[270px]' src="https://s3-alpha-sig.figma.com/img/0881/49fd/5afc043392ee3cbb529f429b3e2098d3?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gJEmR5eSg6P7y5b7L4jGLJquO2g3jX8J89F3fV-wZFAkLW89kO~pA-IjPgP7A-XbGVkkfBq2OJf9VIRsdvHQQmHw-6hA8XEpKHj6Mjdmv~DKXUonpy03BX87XSucMxEakSKMkq4nsjGXh9CEkJpsHUxjGAjMH2fN9v6ftTki-GLKlwmaoK3APc6lmp2RzyegdoaQjoHiODfHVDWBDsuVa9NJ590p18eq-HlOniMpBheeLxkGjcR9~DI4shcMtQ7vSG1psqBim1P6D35KDf0UYTrVi1rYRfO0ZfzVp3U7TzLerju7AdeMsKqdYtJQZ~QrdszhUUHxgz97UUIu7maSjA__" alt="" />
                    </div>
                    <h1 className='text-[30px] mt-[10px] font-semibold'>{t('a.box.1')}</h1>
                    <h1 className='text-[17px]'>{t('a.box.p')}</h1>
                    <div className='mt-[10px]'>
                        <img src="/src/pages/about/Frame 877.png" alt="" />
                    </div>
                </div>
                <div className='w-[30%] dark:border-2 p-[10px] sm:w-[90%]'>
                    <div className='bg-[#F5F5F5] flex justify-center'>
                        <img className='w-[270px]' src="https://s3-alpha-sig.figma.com/img/0881/49fd/5afc043392ee3cbb529f429b3e2098d3?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gJEmR5eSg6P7y5b7L4jGLJquO2g3jX8J89F3fV-wZFAkLW89kO~pA-IjPgP7A-XbGVkkfBq2OJf9VIRsdvHQQmHw-6hA8XEpKHj6Mjdmv~DKXUonpy03BX87XSucMxEakSKMkq4nsjGXh9CEkJpsHUxjGAjMH2fN9v6ftTki-GLKlwmaoK3APc6lmp2RzyegdoaQjoHiODfHVDWBDsuVa9NJ590p18eq-HlOniMpBheeLxkGjcR9~DI4shcMtQ7vSG1psqBim1P6D35KDf0UYTrVi1rYRfO0ZfzVp3U7TzLerju7AdeMsKqdYtJQZ~QrdszhUUHxgz97UUIu7maSjA__" alt="" />
                    </div>
                    <h1 className='text-[30px] mt-[10px] font-semibold'>{t('a.box.1')}</h1>
                    <h1 className='text-[17px]'>{t('a.box.p')}</h1>
                    <div className='mt-[10px]'>
                        <img src="/src/pages/about/Frame 877.png" alt="" />
                    </div>
                </div>
            </div>
            <div className='page4 flex justify-center sm:block py-[100px] gap-[0px]'>
                <div className='w-[25%] sm:w-[90%] sm:mt-[20px] text-center flex justify-center flex-wrap'>
                    <img src="/src/pages/home/Services.png" alt="" />
                    <h1 className='font-bold text-[20px] my-[10px] w-[100%]'>{t('hp4.h1')}</h1>
                    <p>{t('hp4.p')}</p>
                </div>
                <div className='w-[25%] sm:w-[90%] sm:mt-[20px] text-center flex justify-center flex-wrap'>
                    <img src="/src/pages/home/Services.png" alt="" />
                    <h1 className='font-bold text-[20px] my-[10px] w-[100%]'>{t('hp4.h1')}</h1>
                    <p>{t('hp4.p')}</p>
                </div>
                <div className='w-[25%] sm:w-[90%] sm:mt-[20px] text-center flex justify-center flex-wrap'>
                    <img src="/src/pages/home/Services.png" alt="" />
                    <h1 className='font-bold text-[20px] my-[10px] w-[100%]'>{t('hp4.h1')}</h1>
                    <p>{t('hp4.p')}</p>
                </div>
            </div>
        </div>
    )
}

export default About









