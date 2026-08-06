import Header from "./components/Header";

export default function App() {
  return (
    <div>
      <div>
        <Header />
      </div>



      <div className="absolute">
        <img src="/host.jpg" alt="" />
      </div>
      <div className="relative h-130 flex flex-col justify-end py-6 px-4 ">
        <div className="w-80 h-7 flex bg-gray-200 rounded-4xl ">
          <div className="py-[10px] ml-4">
            <div className="w-2 rounded-full bg-green-400 h-2 "></div>
          </div>
          <div className="flex px-4 py-[2px]">
            <p>

              Работаем 24/7
            </p>
            <p className="px-2">
              Ростов-на-Дону
            </p>
          </div>
        </div>
      </div>


      <div>
        <p className="text-2xl text-[#222a2e]">
          Наркологическая клиника в Ростову-на-Дону
        </p>
        <p className="text-xl  ">Анонимная помощь на дому и на стационаре </p>
      </div>


      <div className="w-100 mt-5 bg-gray-200 rounded-2xl ml-5 " >
        <div>
          <div className="flex">
            <img className="w-20" src="/blood_bag.svg" alt="" />
            <div>
              <p>
                Вывод из запоя на дому
              </p>
              <p>От 3500 </p>
              <p>
                Через 30 минту у вас дома
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center py-4 ">
        <button className="w-100 bg-[#5B9279]  text-white h-10 rounded-4xl text-xl cursor-pointer">
          Вызвать врача на дом
        </button>
      </div>

      <p className="text-2xl px-4">Почему выбирают нас ? </p>
      <div className="grid grid-cols-2 gap-2 mt-4 px-2">
        <div className="bg-amber-200 w-50 h-auto px-3 py-2 rounded-2xl">
          <p>
            Помощь 24/7
          </p>
          <p>Приедем за 30 минут , облегчение через 15 минут после капельницы </p>
        </div>
        <div className="bg-[#F5F1EB] w-50 h-auto px-3 py-2 rounded-2xl ">
          <p>Честный подход </p>
          <p>Официальный договор и чеки на все препараты</p>
        </div>
        <div className="bg-[#F5F1EB] w-50 h-auto px-3 py-2 rounded-2xl">
          <p>
            Анонимность
          </p>
          <p>Врачи в штатскои , без учета , машина не привлечет внимания </p>
        </div>
        <div className="bg-amber-200 w-50 h-auto px-3 py-2 rounded-2xl">
          <p> Эффективность </p>
          <p>Современные препараты и полное очищение </p>
        </div>

      </div>
      <div className="flex justify-center mt-5">
        <button className="bg-[#D97B4F] rounded-3xl cursor-pointer  w-100 h-13 text-xl text-white">Узнать стоимость для вашего случая </button>
      </div>



      <p className="text-[#E08E5B] mt-10">Выберите капельницу </p>
      <p className="text-4xl">Вывод из запоя на дому  </p>
      <div className="px-4 ">

        <div className="mt-5 w-100 h-auto rounded-xl bg-[#F5F1EB]">


          <div className="px-4">
            <p className="text-2xl">Базовая капельница</p>
            <div>
              <p className="text-[#5F7178]">Быстрое очищение</p>
            </div>


            <div className="mt-5  ">
              <div className="w-2 h-2 rounded-full bg-[#2cb779]"></div>

            </div>

            <div className="py-6">
              <div className="w-2 h-2 rounded-full bg-[#2cb779]"></div>
            </div>

            <div className="flex ">
              <div className="w-2 h-2 rounded-full bg-[#2cb779]"></div>
              <p className="ml-3">dafa</p>
            </div>

            <div className="py-6 flex">
              <div className="w-2 h-2 rounded-full  bg-[#2cb779]"></div>
            </div>

          </div>

        </div>

      </div>
    </div>
  )
}
