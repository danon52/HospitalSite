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
        <p className="text-2xl text-amber-600">
          Наркологическая клиника в Ростову-на-Дону
        </p>
        <p className="text-xl text-amber-400">Анонимная помощь на дому и на стационаре </p>
      </div>
      <div className="">
        <div className="" >
          <p>Вывод из запоя на дому </p>
          <div>
            <p>От 3500 </p>
            <p>Черезе 30 минут у вас дома </p>
          </div>
          <div>
            <button>
              Вызвать врача на дом
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
