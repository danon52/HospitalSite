import React from 'react'

export default function HeaderPC() {
    return (
        <div>
            <header className=' '>
                <div className='flex justify-center' >
                    {/* <div>
                        <img src="https://medeos-rostov.ru/netcat_template/template/medplus/img/newgoodlogo.svg" alt="" />
                    </div> */}
                    <div className='mt-4 px-10'>
                        <div>
                            <p>Ростов-на-Дону</p>
                        </div>
                        <div>
                            <p>ул.Советская,  д. 27</p>
                        </div>
                    </div>
                    <div className='mt-4'>
                        <div>
                            <p> + 7(863) 303-21-68 </p>
                        </div>
                        <div>
                            <p>Анонимно , 24/7 </p>
                        </div>
                    </div>
                    <div>
                        <div className='lg:flex mt-8 px-5'>
                            <img src="/vk.svg" alt="" />
                            {/*  */}
                            <img className='lg: px-5' src="/wath.svg" alt="" />
                            {/*  */}
                            <img src="/telega.svg" alt="" />
                            <img className='w-6 ml-5' src="/max.svg" alt="" />
                        </div>
                    </div>
                    <div>
                        <button className='w-70 mt-5 h-12 text-white bg-[#1cd581] rounded-2xl'>Заказать обратный звонок </button>
                    </div>
                </div>
            </header>
        </div>
    )
}
