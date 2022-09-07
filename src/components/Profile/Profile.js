import React from 'react';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import AvTimerOutlinedIcon from '@mui/icons-material/AvTimerOutlined';
import CurrencyLiraOutlinedIcon from '@mui/icons-material/CurrencyLiraOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined';
import './Profile.css';
import photo from './no-photo.jpeg';

function Profile() {
    return (
        <>
            <div className="container d-flex" style={{marginTop:150}}>
                <aside className="sidebar section-structure sm-pages-pdng d-none d-lg-table">
                    <div className="sidebar__buttons">
                        <a href="/parcel/create?lang=az" className="btn btn--secondary">Bəyan et</a>
                        <a href="/links/create?lang=az" className="btn btn--primary ">Sifariş et</a>
                    </div>
                    <ul className="sidebar__unordered">
                        <li className="sidebar__list">
                            <Inventory2OutlinedIcon className="MuiSvgIcon-root"/>
                           <a href="/parcel/index?lang=az" className="sidebar__list-link"><span>Bağlamalarım</span></a>
                        </li>
                        <li className="sidebar__list">
                           <AssignmentTurnedInOutlinedIcon className="MuiSvgIcon-root"/>
                            <a href="/links/index?lang=az"
                            className="sidebar__list-link"
                            ><span>Sifarişlərim</span>
                            </a>
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
                            <li><a href="/account/setting?lang=az">Hesab tənzimləmələri</a></li>
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
                    <div className="custom-form">
                        <section className="details-headline section-structure sm-pages-pdng">
                            <div className="d-flex justify-content-between align-items-center w-100">
                                <h4 className="mb-0">Yeni sifariş</h4>
                            </div>
                        </section>
                        <form id="w0" className="" action="/links/create?lang=az" method="post" data-percent="3.5"
                              data-currency="TL">
                              <input type="hidden" name="_csrf-frontend"
                                   value="BCmpGpnC4uvhLGaqGSp69M01iCW9Ag1aMg0FlPXST4JwZcgj1u-jgYNEKdlpYDuiuHPFQ8xoZwsBe1ysgJALyw=="/>
                                <section className="neworders product-list">
                                    <div className="neworder section-structure section-pdng product-list__item">
                                        <div className="neworder__head">
                                            <h6><span>#<span className="product-num">1</span></span>Məhsul</h6>
                                            <button className="btn btn--icon remove-product d-none">
                                                <DeleteOutlinedIcon/>
                                            </button>
                                        </div>
                                        <div className="neworder-link mb-32 field-links-product_link required">
                                            <div className="input-flex bg-input">
                                                <div className="form-floating w-100  ">
                                                    <input type="text" id="links-product_link"
                                                           className="form-control product-link"
                                                           name="Links[product_link][]"
                                                           placeholder="Məhsulun linki"/><label
                                                        className="floating-label"
                                                        htmlFor="links-product_link">Link</label>
                                                </div>
                                                <span className="btn btn--icon">
                                                    <OpenInNewOutlinedIcon/>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="neworder-row">
                                            <div className=" field-links-product_count required">
                                                <div className="neworder-input bg-input"><label
                                                    className="floating-label" htmlFor="links-product_count">Say</label><input
                                                    type="text" id="links-product_count"
                                                    className="form-control bg-input product-count"
                                                    name="Links[product_count][]" placeholder="0"/></div>
                                            </div>
                                            <div className=" field-links-product_price required">
                                                <div className="neworder-input bg-input">
                                                    <div className="input-number-group">
                                                        <label className="" htmlFor="links-product_price">Qiymət</label>
                                                        <input type="number" id="links-product_price"
                                                               className="input-number product-price"
                                                               name="Links[product_price][]" step="0.01"
                                                               placeholder="0"/>
                                                    </div>
                                                    <div className="symbol">₺</div>
                                                </div>
                                            </div>
                                            <div className=" field-links-cargo_price">

                                                <div className="neworder-input bg-input">
                                                    <div className="input-number-group">
                                                        <label className="" htmlFor="links-cargo_price">Karqo
                                                            qiyməti</label>
                                                        <input type="number" id="links-cargo_price"
                                                               className="input-number cargo-price"
                                                               name="Links[cargo_price][]" step="0.01" placeholder="0"/>
                                                    </div>
                                                    <div className="symbol">₺</div>
                                                </div>
                                            </div>
                                        </div>
                                            <div className="input-btw">
                                            <div className="input-direction w-100 field-links-product_color required">
                                                <div className="form-floating"><input type="text"
                                                                                      id="links-product_color"
                                                                                      className="form-control bg-input"
                                                                                      name="Links[product_color][]"
                                                                                      placeholder="Rəng"/><label
                                                    className="" htmlFor="links-product_color">Rəng</label></div>
                                                <small>Məsələn; qırmızı</small>
                                            </div>
                                            <div className="input-direction w-100 field-links-product_size required">
                                                <div className="form-floating"><input type="text"
                                                                                      id="links-product_size"
                                                                                      className="form-control bg-input"
                                                                                      name="Links[product_size][]"
                                                                                      placeholder="Ölçü"/><label
                                                    className="" htmlFor="links-product_size">Ölçü</label></div>
                                                <small>Məsələn; XL</small>

                                            </div>
                                            </div>

                                            <div className="input-btw">

                                            <div className="input-direction w-100 field-links-product_note required">
                                                <textarea id="links-product_note" className="bg-input w-100"
                                                          name="Links[product_note][]" rows="3" cols="0"
                                                          placeholder="Digər qeydlər"/>
                                            </div>
                                            <div className="total-price w-100">
                                                <p>Yekun qiymət (+3.5% komissiya</p>
                                                <h4>₺ <span className="total-link-price">0.00</span></h4>
                                            </div>
                                        </div>
                                            </div>
                                </section>


                                <span className="btn btn--secondary add-neworder add-new-product">
                                     <AddCircleOutlineOutlinedIcon/>
                                  <span className="ms-2">Yeni məhsul əlavə et</span>
                                </span>

                                <div style={{marginBottom:20}}>
                                    <div className=" field-terms required">

                                        <div className="form-check signup-form-check">
                                            <input type="hidden" name="Links[agreement]" value="0"/><input
                                                type="checkbox" id="terms" className="form-check-input"
                                                name="Links[agreement]" value="1"/>
                                                <label htmlFor="terms" className="form-check-label">
                                                    <a href="/az/menu/user-agreement-107.html" target="_blank">İstifadəçi
                                                        şərtləri</a> ilə razıyam
                                                </label>
                                        </div>
                                    </div>
                                </div>

                                <section className="final-amount vlct-section section-pdng section-structure">
                                    <div className="final-amount__content">
                                        <div className="final-amount__price">
                                            <p>Ödəniləcək yekun məbləğ</p>
                                            <h4>₺ <span className="total-amount">0.00</span></h4>
                                        </div>
                                         <div className="final-amount__buttons">
                                            <button className="btn btn--primary order-first order-sm-last">Sifariş et
                                            </button>
                                        </div>
                                    </div>
                                </section>
                        </form>
                    </div>
                </div>
           </div>
        </>
    );
}

export default Profile;