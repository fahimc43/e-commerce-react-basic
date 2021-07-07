import React, { useContext } from 'react';
import logo from '../../images/logo.png';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import StorefrontIcon from '@material-ui/icons/Storefront';
import RateReviewIcon from '@material-ui/icons/RateReview';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';



const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
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
                <Link className="link" to="/shop"><HeaderOption Icon={StorefrontIcon} title="Shop"></HeaderOption></Link>
                <Link className="link" to="/review"><HeaderOption Icon={RateReviewIcon} title="Order Review"></HeaderOption></Link>
                <Link className="link" to="/inventory"><HeaderOption Icon={AccountTreeIcon} title="Manage Inventory"></HeaderOption></Link>
                <HeaderOption Icon={ShoppingCartIcon} title="Cart"></HeaderOption>
                {
                    loggedInUser.email && <button className="sign-out" onClick={() => setLoggedInUser({})}><HeaderOption Icon={ExitToAppIcon} title="Sign Out"></HeaderOption></button>
                }

            </div>
        </div>
    );
};

export default Header;