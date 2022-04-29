import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useStateValue } from '../../StateProvider';


const Header = () => {
    const [{basket}, dispatch] = useStateValue();
  return (
    <nav className='header'>
        <Link to="/">
            <img
            className='header_logo'
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" 
            />
        </Link>
        <div className='header_search'>
            <input type="text" placeholder="Search" className='header_searchInput' />
            <SearchIcon className='header_searchIcon' />
        </div>
        <div className='header_nav'>
            <Link to='/login' className='header_link'>
                <div className='header_option'>
                    <span className='header_optionUp'>Hello</span>
                    <span className='header_optionDown'>Sign In</span>
                </div>
            </Link>
            <Link to='/' className='header_link'>
                <div className='header_option'>
                    <span className='header_optionUp'>Returns</span>
                    <span className='header_optionDown'>& Orders</span>
                </div>
            </Link>
            <Link to='/' className='header_link'>
                <div className='header_option'>
                    <span className='header_optionUp'>Your</span>
                    <span className='header_optionDown'>Prime</span>
                </div>
            </Link>
            <Link to='/checkout' className='header_link'>
                <div className='header_optionBasket'>
                    <ShoppingBasketIcon />
                    <span className='header_optionDown header_basketCount'>
                        {basket?.length}
                    </span>
                </div>
            </Link>
        </div>
    </nav>
  )
}

export default Header