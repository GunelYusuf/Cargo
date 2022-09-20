import React, {useState} from 'react';
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import {Link} from "react-router-dom";
import './MyOrders.css';
import OpenInNewOutlinedIcon from "@mui/icons-material/OpenInNewOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import {useDispatch, useSelector} from "react-redux";

function MyOrders() {
    const dispatch = useDispatch()
    const {links} = useSelector((state) => state.links)

    const [list, setList] = useState(links);
    function handleRemove(id) {
        const newList = list.filter((item) => item.productId !== id);
        setList(newList);
    }

    return (
        <>
            <section className="details-headline details-headline--buttons section-structure sm-pages-pdng">
                <div className="details-headline__row">
                    <div className="d-flex justify-content-between align-items-center">
                        <h4>Sifarişlərim</h4>
                        <button className="icon-bg icon-sm d-md-none" data-bs-toggle="modal"
                                data-bs-target="#videoModal">
                            <i className="icon-play_two_tone"><span className="path1"></span><span
                                className="path2"></span>
                                <span className="path3"></span><
                                /i>
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
                    <div className="order section-structure section-pdng sm-pages-pdng trash-parent" key={item.productId}>
                        <div className="form-check">
                            <input className="form-check-input checkbox basket-item" data-price="63.13"
                                   data-comission="2.135" value="28292" id="link-28292" type="checkbox"/>
                            <label className="form-check-label flex-fill" htmlFor="link-28292">
                                <div className="order-row ">
                                    <div className="row">
                                        <div className="col-md-4 mb-3 mb-md-0">
                                            <h6 className="product-title">{item.productTitle}</h6>
                                            <p className="product-subtitle">{item.productColor}</p>
                                        </div>
                                        <div className="col-md-3 mb-3 mb-md-0 text-md-end">
                                            <h6 className="product-title">Qiyməti</h6>
                                            <p className="product-subtitle">{item.productPrice} TRY</p>
                                        </div>
                                        <div className="col-md-2 mb-3 mb-md-0 text-md-end">
                                            <h6 className="product-title">Kargo qiyməti</h6>
                                            <p className="product-subtitle">{item.productCargoPrice} TRY</p>
                                        </div>
                                        <div className="col-md-2 mb-3 mb-md-0 text-md-end">
                                            <h6 className="product-title">Toplam qiymət</h6>
                                            <p className="product-subtitle">{item.productTotalPrice} TRY</p>
                                        </div>
                                        <div className="col-md-1 text-md-end">
                                            <h6 className="product-title">Sayı</h6>
                                            <p className="product-subtitle">{item.productCount}</p>
                                        </div>
                                    </div>
                                    <div className="order-bottom">
                                        <div className="product-link">
                                            <div className="d-flex">
                                                <h6 className="product-title">Məhsulun linki</h6>
                                                <a href={`${item.productLink}`}
                                                   target="_blank"
                                                   className="link product-text product-title">https://www.zara.com</a>
                                            </div>
                                            <a href={`${item.productLink}`}
                                               target="_blank" className="btn btn--icon"> <OpenInNewOutlinedIcon className="open"/></a>
                                        </div>
                                        <DeleteOutlinedIcon type="button" onClick={() => handleRemove(item.productId)}/>
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

        </>
    );
}

export default MyOrders;