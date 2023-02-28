import './cart.scss'
import { IoIosArrowUp } from 'react-icons/io'
import { MdOutlineClose } from 'react-icons/md'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'


const Cart = ({ card, deleteCard, updateCounter }) => {
    const total = card.reduce((a, b) => a + b.price * b.counter, 0)

    const cardItems = card.map((item, i) => {
        return (
            <div key={i} className='cart__products-item grid'>
                <div className='cart__products-item-img'>
                    <img src={item.img} alt='' />
                </div>
                <div>
                    {item.name}
                </div>
                <div>
                    {item.articles}
                </div>
                <div className='cart__products-item-counter'>
                    <AiOutlineMinus className='button' onClick={() => updateCounter(item.id, item.counter - 1)} >-</AiOutlineMinus>

                    <div>
                        {item.counter}
                    </div>

                    <AiOutlinePlus className='button' onClick={() => updateCounter(item.id, item.counter + 1)}>+</AiOutlinePlus>
                </div>
                <div className='cart__products-item-price'>
                    {item.price}с <MdOutlineClose onClick={() => deleteCard(item.id)} />
                </div>
            </div>
        )
    })
    return (
        <div className='cart'>
            <h1>
                Оформление заказа
            </h1>

            <form className='cart__content'>
                <div className='cart__content-left'>
                    <div className='cart__basket block'>
                        <h3>
                            Корзина
                        </h3>
                        <div className='cart__basket-arrow'>
                            <IoIosArrowUp />
                        </div>
                    </div>
                    <div className='cart__products block'>
                        <div className='cart__products-names grid'>
                            <div>
                                Фото
                            </div>
                            <div>
                                Название
                            </div>
                            <div>
                                Артикул
                            </div>
                            <div>
                                Кол-во
                            </div>
                            <div>
                                Цена
                            </div>
                        </div>

                        {cardItems}
                    </div>

                    <div className='cart__contact block'>
                        <h3>
                            Оформление заказа
                        </h3>

                        <div className="cart__contact-content">
                            <div className="field">
                                <label htmlFor="fname">Имя</label>
                                <input type="text" name="fname" id="" placeholder='Заполните Имя' />
                            </div>
                            <div className="field">
                                <label htmlFor="lname">Фамилия</label>
                                <input type="text" name="lname" id="" placeholder='Заполните Фамилию' />
                            </div>
                            <div className="cart__contact-content-number">
                                <div className="field">
                                    <label htmlFor="mNumber">Телефон</label>
                                    <input type="text" name="mNumber" id="" placeholder='+996550360636' />
                                </div>
                                <div className="field">
                                    <label htmlFor="mNumber">Моб.</label>
                                    <input type="text" name="mNumber" id="" placeholder='0' />
                                </div>
                            </div>

                            <div className="field">
                                <label htmlFor="email">E-mail</label>
                                <input type="text" name="email" id="" placeholder='email@gmail.com' />
                            </div>
                            <div className="field">
                                <label htmlFor="wNumber">Доп телефон или whatsapp</label>
                                <input type="text" name="wNumber" id="" placeholder='+996550360636' />
                            </div>

                        </div>
                    </div>
                    <div className='cart__im block'>
                        <h3>Я</h3>

                        <div className="cart__im-content">
                            <div>
                                <label htmlFor="individual">
                                    <input type="checkbox" name="individual" id="" />
                                    Физическое лицо
                                </label>
                            </div>

                            <div>
                                <label htmlFor="entity">
                                    <input type="checkbox" name="entity" id="" />
                                    Юридическое лицо
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="cart__delivery block">
                        <h3>
                            Доставка
                        </h3>

                        <div>
                            <span>
                                Способ  доставки
                            </span>
                        </div>

                        <div>
                            <label htmlFor="pickup">
                                <input type="checkbox" name="pickup" id="" />
                                Самовывоз <a href="/">режим работы магазина {'>'}</a>
                            </label>
                        </div>
                        <div>
                            <label htmlFor="express">
                                <input type="checkbox" name="express" id="" />
                                Курьерская доставка  <a href="/">условия доставки {'>'} </a>
                            </label>
                        </div>

                        <div>
                            <span>
                                Адрес доставки
                            </span>
                        </div>

                        <div className="cart__delivery-fields">
                            <div className="field">
                                <label htmlFor="">
                                    Страна
                                </label>
                                <input type="text" name='' placeholder='Кыргызстан' />
                            </div>
                            <div className="field">
                                <label htmlFor="">
                                    Город
                                </label>
                                <input type="text" name='' placeholder='Ош' />
                            </div>
                            <div className="field">
                                <label htmlFor="">
                                    Улица
                                </label>
                                <input type="text" name='' placeholder='Аэропорт' />
                            </div>
                            <div className="field">
                                <label htmlFor="">
                                    Квартира
                                </label>
                                <input type="text" name='' placeholder='5' />
                            </div>
                            <div className="field">
                                <label htmlFor="">
                                    Дом
                                </label>
                                <input type="text" name='' placeholder='26' />
                            </div>
                        </div>

                        <div>
                            <span>
                                Указать домофон, этаж, подъезд и комментарий к адресу
                            </span>
                        </div>

                        <div className="field">
                            <label htmlFor="">
                                Дом
                            </label>
                            <input type="text" name='' placeholder='Комментарий' />
                        </div>

                    </div>

                </div>

                <div className='cart__content-right'>
                    <div className='cart__total block'>
                        <h3>Стоимость заказа</h3>
                        <div className='cart__total-main'>
                            <div>
                                Товары({card.length})
                            </div>
                            <div className='cart__total-main-price'>
                                {total}с
                            </div>
                            <div>
                                Доставка
                            </div>
                            <div className='cart__total-main-price'>
                                Бесплатно
                            </div>

                            <div className='cart__total-main-line'></div>
                            <div className='cart__total-main-line'></div>

                            <h3>
                                Итого
                            </h3>
                            <h3 className='cart__total-main-price'>
                                <span>
                                    {total}
                                </span>
                            </h3>
                        </div>

                        <button type='submit' className='cart__total-button'>
                            Подтвердить заказ
                        </button>

                        <div className='cart__total-terms'>
                            Подтверждая заказ, я принимаю условия <a href="/"> пользовательского соглашения</a>
                        </div>

                    </div>
                </div>

            </form>

        </div>
    )
}

export default Cart