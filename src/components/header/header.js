import './header.scss'
import { TfiEmail } from 'react-icons/tfi'
import { IoIosCall } from 'react-icons/io'
import { BiCategoryAlt } from 'react-icons/bi'
import { IoSearchOutline } from 'react-icons/io5'
import { CgShoppingCart } from 'react-icons/cg'
import { VscAccount } from 'react-icons/vsc'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import logo from './../../assets/images/logo.svg'
import { useState } from 'react'



const Header = () => {
    const [menu, setMenu] = useState(false)
    return (
        <header className='header'>
            <div className="header__menu">
                {menu ? <AiOutlineClose onClick={() => setMenu(!menu)} /> : <AiOutlineMenu onClick={() => setMenu(!menu)} />}

            </div>
            <div className='header__nav'>
                <div className='container'>
                    <nav>
                        <a href='/'>
                            Каталог
                        </a>
                        <a href='/'>
                            Акции
                        </a>
                        <a href='/'>
                            Популярные товары
                        </a>
                        <a href='/'>
                            Новинки
                        </a>
                        <a href='/'>
                            Новости
                        </a>
                        <a href='/'>
                            О Компании
                        </a>
                        <a href='/'>
                            Контакты
                        </a>
                    </nav>

                    <div className='header__nav-buttons'>
                        <div className='header__nav-buttons-mail'>
                            <TfiEmail /> <a href='info@Kanzler.kg'>info@Kanzler.kg</a>
                        </div>
                        <a href='/' className='header__nav-buttons-call'>
                            <IoIosCall /> Позвонить
                        </a>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='header__search'>
                    <div className='header__search-ico'>
                        <div className='header__search-ico-logo'>
                            <img src={logo} alt='' />
                        </div>

                        <div className='header__search-ico-directory'>
                            <BiCategoryAlt /> Каталог
                        </div>
                    </div>
                    <div className='header__search-form'>
                        <form >
                            <button><IoSearchOutline /></button> <input type='text' name='name' placeholder='Найти товар' />
                        </form>
                    </div>

                    <div className='header__search-right'>
                        <div className='header__search-card'><CgShoppingCart /></div>
                        <div className='header__search-profile'><VscAccount /></div>
                    </div>
                </div>
                <div className="header__path">
                    <a href="/">Главная/</a>
                    <a href="/">Корзина/</a>
                    <a href="/">Оформление заказа</a>
                </div>
            </div>
        </header>
    )
}

export default Header