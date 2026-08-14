
import Header from "./components/Header";
import HeaderPC from "./components/HeaderPC";

export default function App() {
  return (
    <div className="px-50">
      <div className="hidden lg:block h-20 sticky top-0 z-50 w-full bg-white">
        <HeaderPC />
      </div>
      <div className="absolute  ">
        <img className="block lg:hidden" src="/host.jpg" alt="" />
      </div>
      <div className="block relative h-130 flex flex-col justify-end py-6 px-4 lg:hidden ">
        <div className="  w-80 h-7 flex bg-gray-200 rounded-4xl ">
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
      <div className="lg:absolute ">

        <img className="hidden lg:block w-[80rem] h-[50rem] py-10  " src="/525_1.jpg" alt="" />

      </div>



      {/* для пк  */}
      <section className="hidden lg:block">
        <div className="lg:relative mt-40 px-10">
          <div>
            <div className="lg:w-60 h-8   px-2 rounded-3xl bg-gray-200">
              <div className="lg:flex " >
                <div className="py-3">
                  <div className="lg:w-2 h-2  rounded-full bg-green-500" ></div>
                </div>
                <p className="lg:py-2 text-xs px-2">Работаем 24/7 · Ростов-на-Дону</p>
              </div>
            </div>
          </div>

          <div>
            <p className=" lg:text-xl py-4">Наркологическая клиника в Ростове-на-Дону </p>
          </div>
          <div>
            <p className="lg:text-5xl text-[#ff5029]">Выезд нарколога - <br /> через 30 минут <br /> у вас дома </p>
          </div>
          <div className="lg:py-5">
            <p className="lg: ">Срочный выезд бригады в любой район города. </p>
            <p className="lg:py-1 ">Анонимно ,без постановки на учет. </p>
            <p className="lg:">Облегение через 15 минут после капельницы. </p>
          </div>
          <div>
            <div className=" lg:w-80 h-20 bg-gray-200 rounded-3xl">
              <div className=" lg:flex px-3 py-2">
                {/* фото плиз  */}
                <div>
                  <p>От 3 500 ₽</p>
                  <div>
                    <p>Вывод из запоя на дому</p>
                    <p>Договор и чеки - обязательно </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="hidden lg:block">
        <div className="hidden lg:block">
          <div className="lg:py-50">
            <p className="lg: text-xl text-[#f7773c]">Почему выбирают нас  </p>
            <div>
              <p className="lg: text-4xl ">4 причины доверять клинике у Мишани </p>
            </div>
          </div>
        </div>


        <div className="lg: grid grid-cols-4 gap-4 ">
          <div className="lg:w-70 h-40 rounded-2xl bg-[#D7EFFF]">
            <p className="lg:  px-2 py-3 text-xl">Помощь 24/7 </p>
            <div>
              <p className="lg: px-2">Приедем за 30 мин, облегчение через 15 мин после капельницы</p>
            </div>
          </div>
          <div className="lg:w-70 h-40 rounded-2xl bg-[#D7EFFF]">
            <p className=" lg: px-2  py-3 text-xl">Анонимнсть</p>
            <div>
              <p className="lg: px-2"> Врачи в штатском , без учета , машина не привлечет внимания </p>
            </div>
          </div>
          <div className="lg:w-70 h-40  rounded-2xl bg-[#D7EFFF]">
            <p className="lg: px-2 py-3 text-xl">Эффективность</p>
            <div>
              <p className="lg: px-2"> Современные препараты и полное очищение </p>
            </div>
          </div>
          <div className="lg:w-70 h-40 rounded-2xl bg-[#D7EFFF]">
            <p className="lg: px-2 py-3 text-xl">Честны подход </p>
            <div>
              <p className="lg: px-2">Официальный договор и чеки на все препараты </p>
            </div>
          </div>
        </div>

        <div className="lg: my-10 flex justify-center">
          <button className="lg:rounded-2xl w-100 h-20 bg-[#1cd581] cursor-pointer  text-white">Узнать стоимость вашего случая </button>
        </div>
      </section>
      {/* для пк  */}
      <section className="hidden lg:block">
        <div className=" lg:grid grid-cols-3 gap-5">
          <div className="lg:px-5 py-5 bg-[#EAF0FE] border-[#C7D7FC]  rounded-3xl ">
            <p className="lg:text-2xl">Базовая капельница</p>
            <div>
              <p className="lg:text-[#5F7178] text-xs">Быстрое очищение</p>
            </div>
            <div className="lg:mt-5  flex items-center gap-2">
              <div className="lg:w-2 h-2 rounded-full bg-[#f0892e]"></div>
              <span> Водный баланс </span>
            </div>
            <div className="lg:py-6 flex items-center gap-2">
              <div className="lg:w-2 h-2 rounded-full bg-[#f0892e]"></div>
              <span> Успокительные + противорвотные </span>
            </div>
            <div className="lg:flex items-center gap-2 w-auto">
              <div className="lg:w-2 h-2 rounded-full bg-[#f0892e] flex"></div>
              <span className="lg:">Консультация нарколога  </span>
            </div>

            <div className="lg:mt-6 flex items-center gap-2">
              <div className="lg:w-2 h-2 rounded-full  bg-[#f0892e]"></div>
              <span>Очищяющая капельница</span>
            </div>
            <div className="lg:flex justify-center py-3">
              <button className="lg: cursor-pointer text-white rounded-3xl w-75 h-12 bg-[#3B70F5]"> Вызвать бригаду</button>
            </div>
          </div>


          {/* Выделить другим цветом (сделать акцент) */}
          <div className="lg:px-4 py-5 bg-[#EAF0FE]  rounded-3xl ">
            <div className="lg:flex">
              <p className="lg:text-2xl">Стандартная </p>
              <div>
                <img className="lg: w-5  py-[8px] ml-2" src="/Star1.svg" alt="" />
              </div>
            </div>
            <div>
              <p className="lg:text-[#5F7178] text-xs">Полное восстановление </p>
            </div>
            <div className="lg:mt-5  flex items-center gap-2">
              <div className="lg:w-2 h-2 rounded-full bg-[#f0892e]"></div>
              <span> Все из базовой </span>
            </div>
            <div className="lg:py-6 flex items-center gap-2">
              <div className="lg:w-2 h-2 rounded-full bg-[#f0892e]"></div>
              <span> Витамины , электролиты </span>
            </div>
            <div className="lg:flex items-center gap-2 w-auto">
              <div className="lg:w-2 h-2 rounded-full bg-[#f0892e] flex"></div>
              <span className="lg:">Таблетки на 2 дня   </span>
            </div>
            <div className="lg:mt-6 flex items-center gap-2">
              <div className="lg:w-2 h-2 rounded-full  bg-[#f0892e]"></div>
              <span>Мотивация на лечение </span>
            </div>
            {/*   так же поменять цвет под основной  */}
            <div className="lg:flex justify-center py-3">
              <button className="lg:cursor-pointer text-white rounded-3xl w-75 h-12 bg-[#3B70F5]"> Вызвать бригаду</button>
            </div>
          </div>
          <div className="lg:px-4 py-5 bg-[#EAF0FE] rounded-3xl">
            <p className="lg:text-2xl">VIP-терапия</p>
            <div>
              <p className="lg:text-[#5F7178] text-xs">Максимальный уход  </p>
            </div>
            <div className="lg:mt-5  flex items-center gap-2">
              <div className="lg:w-2 h-2 rounded-full bg-[#f0892e]"></div>
              <span> Все из стандартной </span>
            </div>
            <div className="lg:mt-5  flex items-center gap-2">
              <div className="lg:w-2 h-2 rounded-full bg-[#f0892e]"></div>
              <span> Ноотропные + гепатопротекторы  </span>
            </div>
            <div className="lg:py-6 flex items-center gap-2">
              <div className="lg:w-2 h-2 rounded-full bg-[#f0892e]"></div>
              <span> Таблетки на 3 дня  </span>
            </div>
            <div className="lg:flex items-center gap-2 w-auto">
              <div className="lg:w-2 h-2 rounded-full bg-[#f0892e] flex"></div>
              <span className="lg:">Мотивация на лечение   </span>
            </div>
            <div className="lg:flex justify-center py-3">
              <button className="lg:cursor-pointer text-white rounded-3xl w-75 h-12 bg-[#3B70F5]"> Вызвать бригаду</button>
            </div>
          </div>
        </div>
      </section>

      {/* для пк */}
      <section className="hidden lg:block mt-10">
        <div className="lg:grid grid-cols-2 gap-4">
          <div>
            {/* картинка под замену  */}
            <img className="lg: w-150 rounded-4xl" src="/413_66.jpg" alt="" />
          </div>
          <div>
            <p className="lg: text-xs  text-[#f0892e]">
              Бесплатная консультация
            </p>
            <div>
              <p className="lg: text-3xl mt-5  "> Мотивируем на лечение , <br /> помогаем родственникам </p>
            </div>
            <div>
              <p className="lg: py-7">Оставьте заявку - поможем разобраться , <br /> с чего начать путь к выздоровлению. </p>
            </div>
            {/* форма */}
            <form action="">
              <div className="lg: flex ">
                <div>
                  <input className="lg:w-70 px-3 bg-gray-100 rounded-2xl h-10 " placeholder="Ваше имя " type="text" />
                </div>
                <div className="ml-5">
                  <input className="lg:w-60 px-3 bg-gray-100 rounded-2xl h-10 " placeholder="+7 xxx-xxx-xx-xx  " type="number" />
                  {/* каптча */}
                </div>
              </div>
              <div className="lg: px-20 py-10">
                <button className="lg:  h-15 rounded-3xl text-white bg-[#3B70F5] w-100">Получить консультацию </button>
              </div>
            </form>
          </div>
        </div>


      </section>

      {/* для пк */}
      <section className="hidden lg:block mt-10">
        <div className="lg:grid grid-cols-3 gap-4">

          <div className="lg:w-100 rounded-2xl h-auto bg-gray-100">
            <div className="lg:p-5">
              <img src="" alt="картинка " />
            </div>
            <div className="lg:text-center">
              <p className="lg:text-3xl py-4">Палата 4 чел.</p>
            </div>
            <div>

              <div>
                <p>Мотивация на лечение пациента</p>
              </div>
              <div>
                <p>Доставка пациента в стационар</p>
              </div>
              <div>
                <p>Диагностика состояния пациента
                </p>
              </div>
              <div>
                <p>Очищающая капельница</p>
              </div>
              <div>
                <p>Восстановление водного баланса
                </p>
              </div>
              <div>
                <p>Успокоительные</p>
              </div>
              <div>
                <p>Противорвотные</p>
              </div>
              <div>
                <p>Таблетированные препараты на 1 день (при необходимости)</p>
              </div>
              <div>
                <p>Консультация нарколога, план дальнейшего лечения
                </p>
              </div>

              <div>
                <div>
                  <p className="text-4xl">5500 ₽</p>
                </div>
                <div>
                  <p className="lg:line-through text-xl text-gray-300"> 7000 ₽</p>
                </div>
              </div>
            </div>
            <div className="lg:flex justify-center py-10">
              <button className="w-60 h-15 text-xl rounded-xl bg-[#3B70F5] text-white">Оставь заявку </button>
            </div>
          </div>
          <div className="lg:w-100 h-auto rounded-2xl bg-gray-100">
            <div className="lg:p-4">
              <img src="" alt="картинка " />
            </div>
            <div className="lg:text-center py-4">
              <p className="lg:text-3xl">Палата 2 чел.</p>
            </div>
            <div>
              <p>Мотивация на лечение пациента</p>
            </div>
            <div>
              <p>Доставка пациента в стационар</p>
            </div>
            <div>
              <p>Диагностика состояния пациента
              </p>
            </div>
            <div>
              <p>Очищающая капельница</p>
            </div>
            <div>
              <p>Восстановление водного баланса
              </p>
            </div>
            <div>
              <p>Успокоительные</p>
            </div>
            <div>
              <p>Противорвотные</p>
            </div>
            <div>
              <p>Витамины, электролиты, сердечные (подбирается индивидуально)</p>
            </div>
            <div>
              <p>Таблетированные препараты на 2 день (при необходимости)</p>
            </div>
            <div>
              <p>Консультация нарколога, план дальнейшего лечения
              </p>
            </div>
            <div>
              <p>Мотивация на дальнейшее лечение</p>
            </div>
            <div>
              <div>
                <p className="lg:text-4xl">7000 ₽</p>
              </div>
              <div className="">
                <p className="lg:line-through text-xl text-gray-300">
                  9000 ₽
                </p>
              </div>
            </div>
            <div className="lg:flex justify-center py-10">
              <button className="w-60 h-15 text-xl rounded-xl bg-[#3B70F5] text-white">Оставь заявку </button>
            </div>
          </div>
          <div className="lg:w-100 rounded-3xl h-auto bg-gray-100">
            <div className="p-3">
              <img src="" alt="картинка" />
            </div>
            <div className="lg:text-center py-4">
              <p className="lg:text-3xl ">VIP , 1 чел  </p>
            </div>
            <div>
              <p>Мотивация на лечение пациента</p>
            </div>
            <div>
              <p>Доставка пациента в стационар</p>
            </div>
            <div>
              <p>Диагностика состояния пациента
              </p>
            </div>
            <div>
              <p>Очищающая капельница</p>
            </div>
            <div>
              <p>Восстановление водного баланса
              </p>
            </div>
            <div>
              <p>Успокоительные</p>
            </div>
            <div>
              <p>Противорвотные</p>
            </div>
            <div>
              <p>Таблетированные препараты на 1 день (при необходимости)</p>
            </div>
            <div>
              <p>Консультация нарколога, план дальнейшего лечения</p>
            </div>
            <div>
              <p>
                Настрой на здоровый образ жизни
              </p>
            </div>
            <div>
              <p>Послепроцедурная поддержка</p>
            </div>
            <div>
              <div>
                <p className="lg:text-4xl">9000 ₽</p>
              </div>
              <div className="">
                <p className="line-through text-xl text-gray-400">
                  15 000 ₽
                </p>
              </div>
            </div>
            <div className="lg:flex justify-center py-10">
              <button className="w-60 h-15 text-xl rounded-xl bg-[#3B70F5] text-white">Оставь заявку </button>
            </div>
          </div>
        </div>
      </section>

      {/* мобилка  */}
      <section className="block lg:hidden">
        <div>
          <p className="text-2xl text-[#222a2e]">
            Наркологическая клиника в Ростову-на-Дону
          </p>
          <p className="text-xl  ">Анонимная помощь на дому и на стационаре </p>
        </div>
      </section>
      <section className="block lg:hidden">
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
      </section>
      {/* для мобилки  */}
      <section className="block lg:hidden">
        <div className="flex justify-center py-4 ">
          <button className="w-100 bg-[#1cd581]   text-white h-10 rounded-4xl text-xl cursor-pointer">
            Вызвать врача на дом
          </button>
        </div>
      </section>
      {/* для мобилки */}
      <section className="block lg:hidden">
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
      </section>
      <section className="block lg:hidden">
        <div className="flex justify-center mt-5">
          <button className="bg-[#f7773c] rounded-3xl cursor-pointer  w-100 h-13 text-xl text-white">Узнать стоимость для вашего случая </button>
        </div>
      </section>

      {/* для мобилки  */}
      <section className="block lg:hidden">
        <div className="">
          <p className="text-[#E08E5B] mt-10">Выберите капельницу </p>
          <p className="text-4xl">Вывод из запоя на дому  </p>
        </div>
      </section>
      {/* для мобилки  */}
      <section className="block lg:hidden">
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


            <div className="px-4 py-5">
              <p className="text-2xl">VIP капельница</p>
              <p className="text-gray-400">Максимальный уход </p>
              <div className="mt-5  flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#2cb779]"></div>
                <span> Все из стандартной </span>
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
      </section>

      {/* оживить все три кнопки | МОБИЛКА */}
      <section className="block lg:hidden">
        <div className="mt-10">
          <div className="flex justify-center ">
            <img className="w-[400px]" src="/doctor.jpg" alt="" />
          </div>
          <div className="ml-4">
            <div>
              <p className="text-2xl text-[#f37236]">Бесплатная Консультация</p>
            </div>
            <div>
              <p className="text-gray-600 text-xl font-bold">Мотивируем на лечение , помогаем родственникам</p>
              <div className="py-2 ">
                <p className="text-xl">Оставьте заявку - поможем разобраться ,<br /> с чего начать путь к выздоровлению </p>
              </div>
            </div>

            <form action="">
              <div>
                <div>
                  {/* рабочие  поля  */}
                  <p className="text-xl px-4">Имя</p>
                  <div className="px-3 py-1">
                    <input className="bg-gray-200 py-1 w-full h-[45px] rounded-2xl px-2 " placeholder='Ваше имя ' type="text" />
                  </div>
                </div>
                <div className="py-4">
                  <p className="text-xl px-3">
                    Телефон
                  </p>
                  <div className="px-3 py-1">
                    <input className="bg-gray-200 w-full h-[45px] rounded-2xl px-4 " placeholder="+7 xxx-xxx-xx-xx " type="number" />
                  </div>
                </div>
              </div>
            </form>
            <div >
              {/* сделать рабочую капчу  */}
              <section className="block lg:hidden">

                <div className="flex justify-center py-4">
                  <div className="w-[250px] h-30 bg-gray-200 rounded-2xl  ">
                    <div className="flex justify-center mt-10">
                      <input className="w-10 h-10 bg-white border" type="checkbox" />
                      <p className="px-5  text-2xl">Я не робот </p>
                    </div>
                  </div>
                </div>
              </section>

              <section>

                <div>
                  {/*   политика конфидециальность (я в шоке ) */}
                  <div className="py-3 flex ">
                    <p className="text-xs">Нажимая кнопку , вы соглашаетесь с  </p>
                    <p className="text-blue-600 text-xs line-clamp-2"> политикой конфидециальности</p>
                  </div>

                </div>
              </section>

              <div className="flex justify-center">
                {/* рабочая кнопка с модалкой  */}
                <button className="w-[350px]  h-13  rounded-2xl text-white bg-[#1cd581]">Получить консультацию </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Мобилка */}
      <section className="block lg:hidden">
        <div className="">
          <div className="mt-3">
            <div>
              {/*картинка*/}
              <img src="" alt="" />
            </div>
            <div className="w-25 border-blue-200 h-7 rounded-3xl bg-blue-100 ml-13" >
              <p className="px-2 text-blue-800">Анонимно</p>
            </div>
            <div>
              <p className="font-bold text-xl px-4">Подпишись на наш канал - <br /> здесь помогают делом , а не просто словами  </p>
            </div>
            <div className="w-[430px] py-5 px-4">
              <p className="">Закрытый канал клиники: только проверенные методы лечения и <br /> честные ответы на вопросы.
                Подписка абсолютно анонимна — никто не узнает, что вы ищете помощь.</p>
            </div>
            <section>
              <div>
                <div className="px-4">
                  <div className="flex ">
                    <span class="tg-cta__dot">✓</span>
                    <p className="px-3">Прямая связь с дежурными наркологами </p>
                  </div>
                  <div className="flex py-3 ">
                    <span class="tg-cta__dot">✓</span>
                    <p className="px-3">Пошаговый план действий при срывах  </p>
                  </div>
                  <div className="flex ">
                    <span class="tg-cta__dot">✓</span>
                    <p className="px-3">Анонимный чат поддержки  </p>
                  </div>
                </div>
                <p className="px-4 py-2">Ваша подписка конфидециальна. Мы не видим ваш номер телефона</p>
                <div className="flex justify-center py-3">
                  <button className="flex  w-70 rounded-3xl bg-[#1cd581]">
                    <img className="w-7  ml-10" src="/Tg.svg" alt="" />
                    <p className="py-3 px-3 text-white"> Подписаться на канал</p>
                  </button>
                </div>
                <div className="text-center">
                  <p className="text-xs py-3"> Наш Telegram  - это скорая помощь в вашем телефоне </p>
                </div>
              </div>
            </section>
          </div>
        </div>

      </section>


      {/* сделать слайдер  */}
      {/* хз наверное не надо | Мобилка */}
      <section className="block lg:hidden">
        <img alt="image-content" src="https://medeos-rostov.ru/netcat_files/multifile/474/1/preview_1.webp"></img>
        {/* ______________________ */}
        <img alt="image-content" src="https://medeos-rostov.ru/netcat_files/multifile/474/2/preview_1.webp"></img>
        {/* ______________________Я */}
        <img alt="image-content" src="/netcat_files/multifile/474/3/preview_1.webp"></img>
        {/* добавить политику  */}

      </section>

    </div >
  )
}