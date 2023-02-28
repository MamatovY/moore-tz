import { useState } from 'react'

import Cart from "../components/cart"
import Footer from '../components/footer'
import Header from "../components/header"

import product1 from './../assets/images/product1.png'
import product2 from './../assets/images/product2.png'
import product3 from './../assets/images/product3.png'

const cardList = [
    { name: 'Lorem ipsum dolor sit amet consectetur. Duis', articles: 'L434-GH43', price: 420, id: 1, img: product1, counter: 1, },
    { name: 'Lorem ipsum dolor sit amet', articles: 'L434-GH43', price: 420, id: 2, img: product2, counter: 1, },
    { name: 'Lorem ipsum dolor sit amet consectetur. Dictum venenatis porta at mus sit', articles: 'L434-GH43', price: 1000, id: 3, img: product3, counter: 1, }
]

const MainPage = () => {
    const [card, setCard] = useState(cardList)

    const deleteCard = (i) => {
        setCard(card.filter(item => item.id !== i))
    }

    const updateCounter = (id, i) => {

        if (i > 0) {
            setCard(card.map(item => {
                if (item.id === id) {
                    item.counter = i
                }
                return item
            }))
        }
    }

    return (
        <>
            <Header />
            <div className="container">
                <Cart card={card} deleteCard={deleteCard} updateCounter={updateCounter} />
            </div>

            <Footer />
        </>
    )
}

export default MainPage