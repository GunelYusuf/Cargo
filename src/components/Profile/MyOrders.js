import React, {useState} from 'react';
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import {Link} from "react-router-dom";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import photo from "./no-photo.jpeg";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import AvTimerOutlinedIcon from "@mui/icons-material/AvTimerOutlined";
import CurrencyLiraOutlinedIcon from "@mui/icons-material/CurrencyLiraOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import './MyOrders.css';
import OpenInNewOutlinedIcon from "@mui/icons-material/OpenInNewOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
const initialList = [
    {
        id: 1,


    },
    {
        id:2
    }

];

function MyOrders() {

    const [list, setList] = useState(initialList);
    function handleRemove(id) {
        const newList = list.filter((item) => item.id !== id);

        setList(newList);
    }

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
                    <section className="details-headline details-headline--buttons section-structure sm-pages-pdng">
                        <div className="details-headline__row">
                            <div className="d-flex justify-content-between align-items-center">
                                <h4>Sifarişlərim</h4>
                                <button className="icon-bg icon-sm d-md-none" data-bs-toggle="modal"
                                        data-bs-target="#videoModal">
                                    <i className="icon-play_two_tone"><span className="path1"></span><span
                                        className="path2"></span><span className="path3"></span></i>
                                </button>
                            </div>
                            <div className="d-flex">
                                <Link to="/ProductLink" className="btn btn--primary ms-0 ms-md-3 w-100 w-sm-auto">
                                    <AddCircleOutlineOutlinedIcon className="open"/>
                                    <span className="ms-2">Sifariş et</span>
                                </Link>
                            </div>
                        </div>
                        <div className="details-headline__row">
                            <div className="tabs-adjacent">
                                <a href="/links/index?lang=az" className="btn btn--adjacent-tab">
                                    <span>Sifarişlərim</span>
                                </a>
                                <a href="/links/basket?lang=az" className="btn btn--adjacent-tab is-tab-active">
                                    <span>Səbətim</span>
                                </a>
                            </div>
                        </div>
                    </section>
                    <section className="carts orders vlct-section js-tab-content has-show">
                        {list.map((item) => (
                            <div className="order section-structure section-pdng sm-pages-pdng trash-parent" key={item.id}>
                                <div className="form-check">
                                    <input className="form-check-input checkbox basket-item" data-price="63.13"
                                           data-comission="2.135" value="28292" id="link-28292" type="checkbox"/>
                                    <label className="form-check-label flex-fill" htmlFor="link-28292">
                                        <div className="order-row ">
                                            <div className="row">
                                                <div className="col-md-4 mb-3 mb-md-0">
                                                    <h6 className="product-title">Ölçü/Rəng</h6>
                                                    <p className="product-subtitle">qara / s</p>
                                                </div>
                                                <div className="col-md-3 mb-3 mb-md-0 text-md-end">
                                                    <h6 className="product-title">Qiyməti</h6>
                                                    <p className="product-subtitle">56 TRY</p>
                                                </div>
                                                <div className="col-md-2 mb-3 mb-md-0 text-md-end">
                                                    <h6 className="product-title">Kargo qiyməti</h6>
                                                    <p className="product-subtitle">5 TRY</p>
                                                </div>
                                                <div className="col-md-2 mb-3 mb-md-0 text-md-end">
                                                    <h6 className="product-title">Toplam qiymət</h6>
                                                    <p className="product-subtitle">63.13 TRY</p>
                                                </div>
                                                <div className="col-md-1 text-md-end">
                                                    <h6 className="product-title">Sayı</h6>
                                                    <p className="product-subtitle">1</p>
                                                </div>
                                            </div>
                                            <div className="order-bottom">
                                                <div className="product-link">
                                                    <div className="d-flex">
                                                        <h6 className="product-title">Məhsulun linki</h6>
                                                        <a href="https://www.zara.com/tr/tr/kemerli-pilili-midi-elbise-p08741247.html?v1=184842420&amp;v2=2113500"
                                                           target="_blank"
                                                           className="link product-text product-title">https://www.zara.com</a>
                                                    </div>
                                                    <a href="https://www.zara.com/tr/tr/kemerli-pilili-midi-elbise-p08741247.html?v1=184842420&amp;v2=2113500"
                                                       target="_blank" className="btn btn--icon"> <OpenInNewOutlinedIcon className="open"/></a>
                                                </div>
                                                    <DeleteOutlinedIcon type="button" onClick={() => handleRemove(item.id)}/>

                                            </div>
                                        </div>
                                    </label>
                                </div>
                            </div>

                        ))}


                        <section className="final-amount section-pdng section-structure">
                            <div className="final-amount__content">
                                <div className="final-amount__price">
                                    <p>Yekun qiymət (+3.5% komissiya</p>
                                    <h4><span className="total-payable-amount">0.00</span> TRY</h4>
                                </div>
                                <div className="final-amount__buttons">
                                    <input type="checkbox" className="check-all basket-check" id="selectAll"/>
                                        <label htmlFor="selectAll" className="btn btn--secondary">Hamısını seç</label>
                                        <button className="btn btn--primary confirm-order">Ödənişi tamamla</button>
                                </div>
                            </div>
                            <p className="orders-notice d-sm-none">Ödəniş edərkən <a
                                href="/az/menu/user-agreement-107.html"><span>sifariş və daşınma</span></a> qaydalarını
                                qəbul etmiş olursunuz.</p>
                        </section>
                        <p className="orders-notice d-none d-sm-block">Ödəniş edərkən <a
                            href="/az/menu/user-agreement-107.html"><span>sifariş və daşınma</span></a> qaydalarını
                            qəbul etmiş olursunuz.</p>
                    </section>
                </div>
            </div>

        </>
    );
}

export default MyOrders;