import React from 'react';
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import photo from './no-photo.jpeg';
import './Settings.css';
import MultipleSelect from "./FormControll";
import {Box, FormControl,MenuItem, Select} from "@mui/material";
import Profile from "./Profile";
import {Link} from "react-router-dom";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import AvTimerOutlinedIcon from "@mui/icons-material/AvTimerOutlined";
import CurrencyLiraOutlinedIcon from "@mui/icons-material/CurrencyLiraOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";




function Settings() {
    const [seria, setSeria] = React.useState('');
    const serias = [
        'AZE',
        'AA',
    ];
    const handleChange = (event) => {
        setSeria(event.target.value);
    };
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
                    <section className="details-headline section-structure section-pdng sm-pages-pdng">
                        <h4>Hesab tənzimləmələri</h4>
                        <a href="/account/change-password?lang=az" className="btn btn--primary">Şifrəni yenilə</a>
                    </section>
                    <div className="custom-form">
                        <form id="w0" action="/account/setting?lang=az" method="post" encType="multipart/form-data">
                            <input type="hidden" name="_csrf-frontend" value="NjdiCL7QUOiEyNvQOJpnL2bm4pCA0BsQ0jc7Wv4mJF5CewMx8f0RguaglKNI0CZ5E6Cv9vG6cUHhQWJii2RgFw=="/>
                            <section className="settings-customer section-structure sm-pages-pdng p-32">
                                <div>
                                    <h6 className="title">Müştəri</h6>
                                    <div className="customer-name">Gunel Yusubova</div>
                                    <p className="customer-id">ID: VL366097</p>
                                </div>
                                <div className="change-account-img field-profile-img">
                                    <div className="customer-image-wrapper order-first order-sm-last profile-img ">
                                        <div className="customer-image">
                                            <img src={photo} className="img-file account-img" alt="User Profile"/>
                                        </div>
                                    </div>

                                </div>
                            </section>

                            <section className="settings section-structure p-32 vlct-section sm-pages-pdng">
                                <div className="input-btw pb-32">
                                    <div className="form-floating  w-100 field-user-phone_number required">
                                        <input type="tel" id="user-phone_number" className="form-control bg-input"
                                               name="User[phone_number]" value="559567868" placeholder="Mobil nömrə"
                                               aria-required="true"
                                               data-plugin-inputmask="inputmask_d984f5e8"/>
                                        <label className="" htmlFor="user-phone_number">Telefon nömrəsi</label>
                                    </div>
                                    <div className="form-floating  w-100 field-user-email required">
                                        <input type="email" id="user-email" className="form-control bg-input"
                                               name="User[email]" value="gunelfy@code.edu.az" placeholder="Email"
                                               aria-required="true"/>
                                        <label className="floating-label" htmlFor="user-email">Email</label>
                                    </div>
                                </div>
                                <div className="input-btw mb-32">

                                    <div className=" field-birthdate required">

                                        <div className="input-flex input-width bg-input ps-0">
                                            <div className="form-floating w-100">
                                                <input type="text" id="birthdate" className="form-control ms-3"
                                                       name="User[birthday]" value="26.11.1995"
                                                       placeholder="Doğum tarixi" aria-required="true"/><label
                                                className="ps-3" htmlFor="birthdate">Doğum tarixi</label>
                                            </div>
                                            <label className="add-on" htmlFor="birthdate">
                                                <CalendarMonthOutlinedIcon className="calendar"/>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="form-floating field-select2-placeholder">
                                        <div className="custom_placeholder_select2 form-group input-width bg-input">
                                            <MultipleSelect/>
                                        </div>
                                    </div>
                                </div>
                                <div className="input-btw pb-32">
                                    <div className=" field-user-document_number required">
                                        <div className="newcommit-input bg-input input-width">
                                            <Box sx={{ minWidth: 120 }}>
                                                <FormControl>
                                                    <Select
                                                        labelId="demo-simple-select-label"
                                                        id="demo-simple-select"
                                                        value={seria}
                                                        onChange={handleChange}
                                                    >
                                                        {serias.map((seria) => (
                                                            <MenuItem
                                                                key={seria}
                                                                value={seria}
                                                            >
                                                                {seria}
                                                            </MenuItem>
                                                        ))}

                                                    </Select>
                                                </FormControl>
                                            </Box>
                                            <div className="form-floating serianum">
                                                <input type="text" id="user-document_number"
                                                       className="form-control input-select w-100"
                                                       name="User[document_number]" value="2715306"
                                                       placeholder="ŞV-nin nömrəsi" aria-required="true"/><label
                                                className="floating-label" htmlFor="user-document_number">Sənədin
                                                nömrəsi</label>
                                            </div>
                                        </div>


                                    </div>
                                    <div className=" field-user-document_fin required">

                                        <div className="input-flex bg-input  input-width">
                                            <div className="form-floating ">
                                                <input type="text" id="user-document_fin" className="form-control"
                                                       name="User[document_fin]" value="621UKDP"
                                                       placeholder="FİN kodu daxil edin" aria-required="true"/>
                                                <label className="" htmlFor="user-document_fin">Ş/V-nin FIN kodu</label>
                                            </div>
                                            <HelpOutlinedIcon/>
                                        </div>

                                    </div>
                                </div>


                                <div className="form-floating input-width field-user-address">
                                    <input type="text" id="user-address" className="form-control bg-input"
                                           name="User[address]" value="Shafayet Mehdiyev 1054"
                                           placeholder="Ünvan"/>
                                    <label className="floating-label" htmlFor="user-address">Ünvan</label>
                                </div>
                                <div className="newcommit-buttons">
                                    <a href="/account/index?lang=az" className="btn btn--secondary">Ləğv et</a>
                                    <button type="submit" className="btn btn--primary">Yadda saxla</button>
                                </div>
                            </section>
                        </form>
                    </div>

                </div>
            </div>

        </>
    );
}

export default Settings;