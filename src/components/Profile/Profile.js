import React, {useState} from 'react';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import AvTimerOutlinedIcon from '@mui/icons-material/AvTimerOutlined';
import CurrencyLiraOutlinedIcon from '@mui/icons-material/CurrencyLiraOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import './Profile.css';
import './Settings.css';
import photo from './no-photo.jpeg';
import {Link} from "react-router-dom";
import CurrentSection from "./CurrentSection";

function Profile() {
    const [section, setSection] = useState(0);
    return (
        <>
            <div className="container d-flex" style={{marginTop:150}}>
                <aside className="sidebar section-structure sm-pages-pdng d-none d-lg-table">
                    <div className="sidebar__buttons">
                        <a href="/parcel/create?lang=az" className="btn btn--secondary">Bəyan et</a>
                        <Link to="#" onClick={()=> setSection(2) } className="btn btn--primary">
                            Sifariş et
                        </Link>
                    </div>
                    <ul className="sidebar__unordered">
                        <li className="sidebar__list">
                            <Inventory2OutlinedIcon className="MuiSvgIcon-root"/>
                            <Link to="#" onClick={()=> setSection(0) } className="sidebar__list-link">
                                <span>Bağlamalarım</span>
                            </Link>
                        </li>
                        <li className="sidebar__list">
                           <AssignmentTurnedInOutlinedIcon className="MuiSvgIcon-root"/>
                            <Link to="#" onClick={()=> setSection(0)}
                            className="sidebar__list-link"
                            ><span>Sifarişlərim</span>
                            </Link>
                        </li>
                        <li className="sidebar__list">
                            <MapOutlinedIcon className="MuiSvgIcon-root"/>
                            <Link to="#" onClick={()=> setSection(4)}
                                  className="sidebar__list-link"
                            ><span>Ünvanlarım</span>
                            </Link>
                        </li>
                        <li className="sidebar__list">
                             <AccountBalanceWalletIcon className="MuiSvgIcon-root"/>
                             <Link to="#" onClick={()=> setSection(5)} className="sidebar__list-link"><span>Balans</span></Link>
                        </li>
                    </ul>
                    <div className="sidebar__user">
                        <div className="user-image-dsk">
                            <div className="user-image">
                                <img src={photo} alt="Gunel Yusubova"/>
                            </div>
                        </div>
                        <div className="dropdown">
                            <div className="user-info">
                                <div>
                                    <div className="user-name">Gunel Yusubova</div>
                                    <div className="user-id">ID: <span>VL366097</span></div>
                                </div>
                                <KeyboardArrowDownOutlinedIcon  className="dropdown-toggle" id="dropdownMenuButton"
                                                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"/>
                                <ul className="sidebar__user-options dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <li><Link to="#" onClick={()=> setSection(3)}>Hesab tənzimləmələri</Link></li>
                                    <li><a href="/account/logout?lang=az">Hesabdan çıx</a></li>
                                </ul>
                            </div>

                        </div>
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
                        <Link to="#" onClick={()=> setSection(6)}
                           className=" details-numbers__number section-structure">
                            <CurrencyLiraOutlinedIcon  className="currency"/>
                            <h6>Sifariş balansım</h6>
                            <div className="figure">0 ₺</div>
                        </Link>
                        <Link to="#" onClick={()=> setSection(7)}
                           className="details-numbers__number section-structure">
                            <MonetizationOnOutlinedIcon  className="money"/>
                            <h6>Daşınma balansım</h6>
                            <div className="figure">0 AZN</div>
                        </Link>
                    </section>

                   <CurrentSection step={section}/>

                </div>
           </div>

        </>
    );
}

export default Profile;