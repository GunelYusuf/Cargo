import React from 'react';
import './MyOrderBalance.css';
import {TextField} from "@mui/material";

function MyOrderBalance() {
    return (
        <>
            <div className="js-tab-content has-show custom-form">
                <section className="balance-current section-structure sm-pages-pdng">
                    <form id="w0" className="row" action="/payment/increase-order-balance?lang=az" method="post">
                        <input type="hidden" name="_csrf-frontend"
                               value="jSVsR54ZWZ39_AYlxZeycBgwmP4iD0zvytDm4OeLD2q6Th0s9Xc2_5CKZRSVxPE4aFfwi3E7Jpun_d6k0ep7Aw=="/>
                            <div className="col-xl-6">
                                <div className="balance-current__info">
                                    <div>
                                        <h6 className="title">Cari sifariş balansım</h6>
                                        <p className="balance">0 TRY</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className="input-number-group bg-input">
                                    <div className=" field-paymenttask-amount required">
                                        <TextField
                                            className="input-number"
                                            id="outlined-number"
                                            placeholder="Məbləği daxil edin"
                                            type="number"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    </div>
                                    <button className="btn btn--primary">Balansı artır</button>
                                </div>
                            </div>
                            <div className="col-12">
                                <button className="btn btn--primary d-sm-none">Balansı artır</button>
                            </div>
                    </form>
                </section>
            </div>
        </>
    );
}

export default MyOrderBalance;