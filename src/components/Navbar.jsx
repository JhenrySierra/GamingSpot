import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart } from 'phosphor-react'
import { CartWidget } from "./CartWidget"

export const Navbar = () => {
    return (
        <div className='navbar'>
            <div>
            <Link to="/" className='logo'>Gaming Spot</Link>
            </div>
            <div className='links'>
                <Link to="/">Shop Accessories</Link>
                <Link to="/mouse">Mouse</Link>
                <Link to="/keyboards">Keyboards</Link>
                <Link to="/chairs">Gaming Chairs</Link>
                <Link to="/deskmats">Desk Mats</Link>
                <Link to="/cart">
                    <ShoppingCart size={32} color='green' className='cartContainer'/>
                    <CartWidget />
                </Link>
            </div>
        </div>
    )
}
