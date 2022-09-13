import React from 'react';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import AvTimerOutlinedIcon from '@mui/icons-material/AvTimerOutlined';
import CurrencyLiraOutlinedIcon from '@mui/icons-material/CurrencyLiraOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import './Profile.css';
import './Settings.css';
import photo from './no-photo.jpeg';
import ProductLink from "./ProductLink";
import Settings from "./Settings";
import {Link} from "react-router-dom";

function Profile() {
    return (
        <>
            <div className="container d-flex" style={{marginTop:150}}>
                <aside className="sidebar section-structure sm-pages-pdng d-none d-lg-table">
                    <div className="sidebar__buttons">
                        <a href="/parcel/create?lang=az" className="btn btn--secondary">Bəyan et</a>
                        <Link to={"/ProductLink"} className="btn btn--primary ">
                            Sifariş et
                        </Link>

                    </div>
                    <ul className="sidebar__unordered">
                        <li className="sidebar__list">
                            <Inventory2OutlinedIcon className="MuiSvgIcon-root"/>
                           <a href="/parcel/index?lang=az" className="sidebar__list-link"><span>Bağlamalarım</span></a>
                        </li>
                        <li className="sidebar__list">
                           <AssignmentTurnedInOutlinedIcon className="MuiSvgIcon-root"/>
                            <Link to='/myorders'
                            className="sidebar__list-link"
                            ><span>Sifarişlərim</span>
                            </Link>
                        </li>
                        <li className="sidebar__list">
                             <AccountBalanceWalletIcon className="MuiSvgIcon-root"/>
                             <a href="/balance/index?lang=az" className="sidebar__list-link"><span>Balans</span></a>
                        </li>
                    </ul>
                    <div className="sidebar__user">
                        <div className="user-image-dsk">
                            <div className="user-image">
                                <img src={photo} alt="Gunel Yusubova"/>
                            </div>
                        </div>
                        <div className="user-info">
                            <div>
                                <div className="user-name">Gunel Yusubova</div>
                                <div className="user-id">ID: <span>VL366097</span></div>
                            </div>
                            <KeyboardArrowDownOutlinedIcon/>
                        </div>
                        <ul className="sidebar__user-options">
                            <li><Link to="./setting">Hesab tənzimləmələri</Link></li>
                            <li><a href="/account/logout?lang=az">Hesabdan çıx</a></li>
                        </ul>
                    </div>
                </aside>
                <div className="fill addresses">
                    <section className="dashboard-compact d-lg-none">
                        <div className="sidebar__user   section-structure">
                            <div className="user-image-dsk">
                                <div className="user-image">
                                    <img src={photo} alt="Gunel Yusubova"/>
                                </div>
                            </div>
                            <div className="user-info">
                                <div>
                                    <div className="user-name">Gunel Yusubova</div>
                                    <div className="user-id">ID: <span>VL366097</span></div>
                                </div>
                               <KeyboardArrowDownOutlinedIcon/>
                            </div>
                        </div>
                    </section>
                    <section className="details-numbers ms-3 ms-sm-0">
                        <a href="#" className=" details-numbers__number section-structure">
                            <AvTimerOutlinedIcon className="timer"/>
                            <h6>Bu ay üzrə limit</h6>
                            <div className="figure">$ 0</div>
                        </a>
                        <a href="/parcel/index?lang=az" className=" details-numbers__number section-structure">
                            <Inventory2OutlinedIcon  className="invent"/>
                            <h6>Bağlamalarım</h6>
                            <div className="figure">0</div>
                        </a>
                        <a href="/balance/index?type=order&amp;lang=az"
                           className=" details-numbers__number section-structure">
                            <CurrencyLiraOutlinedIcon  className="currency"/>
                            <h6>Sifariş balansım</h6>
                            <div className="figure">0 ₺</div>
                        </a>
                        <a href="/balance/index?type=shipping&amp;lang=az"
                           className="details-numbers__number section-structure">
                            <MonetizationOnOutlinedIcon  className="money"/>
                            <h6>Daşınma balansım</h6>
                            <div className="figure">0 AZN</div>
                        </a>
                    </section>


                </div>
           </div>
        </>
    );
}

export default Profile;