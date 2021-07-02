import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import StorefrontIcon from '@material-ui/icons/Storefront';
import RateReviewIcon from '@material-ui/icons/RateReview';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const Header = () => {
    return (
        <div className="header">
            <div className="header-left">
                <img src={logo} alt="" />
                <div className="header-search">
                    <SearchIcon></SearchIcon>
                    <input type="text" />
                </div>
            </div>
            <div className="header-right">
                <a href="/shop"><HeaderOption Icon={StorefrontIcon} title="Shop"></HeaderOption></a>
                <a href="/review"><HeaderOption Icon={RateReviewIcon} title="Order Review"></HeaderOption></a>
                <a href="/inventory"><HeaderOption Icon={AccountTreeIcon} title="Manage Inventory"></HeaderOption></a>
                <HeaderOption Icon={ShoppingCartIcon} title="Cart"></HeaderOption>
            </div>
        </div>
    );
};

export default Header;