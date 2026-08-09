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
        <button className="w-100 bg-[#1cd581]   text-white h-10 rounded-4xl text-xl cursor-pointer">
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
        <button className="bg-[#f7773c] rounded-3xl cursor-pointer  w-100 h-13 text-xl text-white">Узнать стоимость для вашего случая </button>
      </div>



      <p className="text-[#E08E5B] mt-10">Выберите капельницу </p>
      <p className="text-4xl">Вывод из запоя на дому  </p>
      <div className="px-4 ">

        <div className="mt-5 w-100 h-auto rounded-xl bg-[#F5F1EB]">


          <div className="px-4 py-5">
            <p className="text-2xl">Базовая капельница</p>
            <div>
              <p className="text-[#5F7178]">Быстрое очищение</p>
            </div>
            <div className="mt-5  flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#2cb779]"></div>
              <span> Водный баланс </span>
            </div>
            <div className="py-6 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#2cb779]"></div>
              <span> Успокительные + противорвотные </span>
            </div>
            <div className="flex items-center gap-2 w-auto">
              <div className="w-2 h-2 rounded-full bg-[#2cb779] flex"></div>
              <span className="">Консультация нарколога  </span>
            </div>

            <div className="mt-6 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full  bg-[#2cb779]"></div>
              <span>Очищяющая капельница</span>
            </div>
          </div>

          <div className=" flex justify-center py-5">
            <button className="bg-[#1cd581] text-white w-[250px] h-[50px] rounded-xl">Вызывать бригаду </button>
          </div>
        </div>

        <div className="mt-5 w-100 h-auto rounded-xl bg-[#fbe0d4] border border-[#f7773c]">

          {/* поменять услуги  */}
          <div className="px-4 py-5">
            <div className="flex">
              <p className="text-2xl">Стандартная  капельница</p>
              <img className="w-6 ml-3 py-1" src="/Star1.svg" alt="" />
            </div>
            <div>
              <p className="text-[#5F7178]">Все из базовой</p>
            </div>
            <div className="mt-5  flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#2cb779]"></div>
              <span> Витамины , электролиты</span>
            </div>
            <div className="py-6 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#2cb779]"></div>
              <span> Таблетки на 2 дня </span>
            </div>
            <div className="flex items-center gap-2 w-auto">
              <div className="w-2 h-2 rounded-full bg-[#2cb779] flex"></div>
              <span className="">Мотивация на лечение    </span>
            </div>
            <p className="text-2xl font-bold text-[#f76d2d]">6 500₽ </p>
            <p className=" line-through text-gray-400 ">7 500 ₽</p>
          </div>
          <div className=" flex justify-center py-5">
            <button className="bg-[#f76d2d] text-white w-[250px] h-[50px] rounded-xl">Вызывать бригаду </button>
          </div>

        </div>
        <div className="mt-5 w-100 h-auto rounded-xl bg-[#F5F1EB]">

          {/* поменять услуги  */}
          <div className="px-4 py-5">
            <p className="text-2xl">VIP капельница</p>
            <p>Максимальный уход </p>
            <div>
              <p className="text-[#5F7178]">Все из стандартной</p>
            </div>
            <div className="mt-5  flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#2cb779]"></div>
              <span>Ноотропные + гепатопротекторы  </span>
            </div>
            <div className="py-6 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#2cb779]"></div>
              <span> Таблетки на 3 дня </span>
            </div>
            <div className="flex items-center gap-2 w-auto">
              <div className="w-2 h-2 rounded-full bg-[#2cb779] flex"></div>
              <span className="">Мотивация на лечение  </span>
            </div>

            <div className=" flex justify-center py-5">
              <button className="bg-[#1cd581] text-white w-[250px] h-[50px] rounded-xl">Вызывать бригаду </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
