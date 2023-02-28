import './footer.scss'
import { RiWhatsappFill, RiFacebookFill, RiInstagramFill, RiSmartphoneLine, RiPhoneFill } from 'react-icons/ri'



const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <h1>
                    Kanzler&Bürger
                </h1>

                <div className="footer__content">
                    <div>
                        <div>
                            Меню
                        </div>
                        <div>
                            <span>
                                Каталог
                            </span>
                        </div>
                        <div>
                            <span>
                                Акции
                            </span>
                        </div>
                        <div>
                            <span>
                                Популярные товары
                            </span>
                        </div>
                        <div>
                            <span>
                                Новинки
                            </span>
                        </div>
                        <div>
                            <span>
                                Новости
                            </span>
                        </div>
                        <div>
                            <span>
                                О компании
                            </span>
                        </div>
                        <div>
                            <span>
                                Контакты
                            </span>
                        </div>

                    </div>



                    <div>
                        <div>
                            Категории
                        </div>
                        <div>
                            <span>
                                Бумага
                            </span>
                        </div>
                        <div>
                            <span>
                                Письмо и графика
                            </span>
                        </div>
                        <div>
                            <span>
                                Кан. товары
                            </span>
                        </div>
                        <div>
                            <span>
                                Художественные товары
                            </span>
                        </div>
                        <div>
                            <span>
                                Творчество
                            </span>
                        </div>
                        <div>
                            <span>
                                Полиграфические материалы
                            </span>
                        </div>
                        <div>
                            <span>
                                Распродажи
                            </span>
                        </div>
                        <div>
                            <span>
                                Офисное  оборудование
                            </span>
                        </div>
                        <div>
                            <span>
                                Игры и игрушки
                            </span>
                        </div>
                        <div>
                            <span>
                                Сувенирная продукция
                            </span>
                        </div>

                    </div>



                    <div>
                        <div>
                            Контакты
                        </div>

                        <div>
                            Огонбаева, 222
                        </div>
                        <div>
                            <span className='images'>
                                <RiSmartphoneLine />0777 90 22 33
                            </span>
                        </div>
                        <div>
                            <span className='images'>
                                <RiPhoneFill /> 0312 90 22 33
                            </span>
                        </div>
                        <div>
                            Эркиндик, 7
                        </div>
                        <div>
                            <span className='images'>
                                <RiSmartphoneLine />0777 90 22 34
                            </span>
                        </div>
                        <div>
                            <span className='images'>
                                <RiPhoneFill />0312 90 22 34
                            </span>
                        </div>
                        <div>

                            Уметалиева, 84

                        </div>
                        <div>
                            <span className='images'>
                                <RiSmartphoneLine />0777 90 22 36
                            </span>
                        </div>
                        <div>
                            <span className='images'>
                                <RiPhoneFill />0312 90 22 36
                            </span>
                        </div>
                    </div>




                    <div>
                        <div>
                            Мы в соц сетях
                        </div>

                        <div className='images'> <RiInstagramFill /> Instagram</div>
                        <div className='images'><RiFacebookFill /> Facebook</div>
                        <div className='images'><RiWhatsappFill /> What’s App</div>

                    </div>

                </div>

                <div className="footer__creator">
                    <span>
                        Kanzler & Burger (c) 2017. All rights reserved
                    </span>
                </div>
            </div>
        </footer>
    )
}

export default Footer