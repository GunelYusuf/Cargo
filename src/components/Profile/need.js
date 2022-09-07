// import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
// import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
// import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
// import React from "react";
//
// <section className="details-headline section-structure section-pdng sm-pages-pdng">
//     <h4>Hesab tənzimləmələri</h4>
//     <a href="/account/change-password?lang=az" className="btn btn--primary">Şifrəni yenilə</a>
// </section>
// <div className="custom-form">
//     <form id="w0" action="/account/setting?lang=az" method="post" encType="multipart/form-data">
//         <input type="hidden" name="_csrf-frontend" value="NjdiCL7QUOiEyNvQOJpnL2bm4pCA0BsQ0jc7Wv4mJF5CewMx8f0RguaglKNI0CZ5E6Cv9vG6cUHhQWJii2RgFw=="/>
//         <section className="settings-customer section-structure sm-pages-pdng p-32">
//             <div>
//                 <h6 className="title">Müştəri</h6>
//                 <div className="customer-name">Gunel Yusubova</div>
//                 <p className="customer-id">ID: VL366097</p>
//             </div>
//         </section>
//
//         <section className="settings section-structure p-32 vlct-section sm-pages-pdng">
//             <div className="input-btw pb-32">
//                 <div className="form-floating  w-100 field-user-phone_number required">
//                     <input type="tel" id="user-phone_number" className="form-control bg-input"
//                            name="User[phone_number]" value="559567868" placeholder="Mobil nömrə"
//                            aria-required="true"
//                            data-plugin-inputmask="inputmask_d984f5e8"/>
//                     <label className="" htmlFor="user-phone_number">Telefon nömrəsi</label>
//                 </div>
//                 <div className="form-floating  w-100 field-user-email required">
//                     <input type="email" id="user-email" className="form-control bg-input"
//                            name="User[email]" value="gunelfy@code.edu.az" placeholder="Email"
//                            aria-required="true"/>
//                     <label className="floating-label" htmlFor="user-email">Email</label>
//                 </div>
//             </div>
//             <div className="input-btw mb-32">
//
//                 <div className=" field-birthdate required">
//
//                     <div className="input-flex input-width bg-input ps-0">
//                         <div className="form-floating w-100">
//                             <input type="text" id="birthdate" className="form-control ms-3"
//                                    name="User[birthday]" value="26.11.1995"
//                                    placeholder="Doğum tarixi" aria-required="true"/><label
//                             className="ps-3" htmlFor="birthdate">Doğum tarixi</label>
//                         </div>
//                         <label className="add-on" htmlFor="birthdate">
//                             <CalendarMonthOutlinedIcon/>
//                         </label>
//                     </div>
//                 </div>
//                 <div className="form-floating field-select2-placeholder">
//                     <div className="custom_placeholder_select2 form-group input-width bg-input">
//                         <label htmlFor="select2-placeholder" className="selected-label">Vətəndaşlığı seçin</label>
//                         <ArrowDropDownOutlinedIcon/>
//                         <select
//                             id="select2-placeholder"
//                             className="select2_placeholder select2-hidden-accessible"
//                             name="User[citizenship]" tabIndex="-1" aria-hidden="true">
//                             <option value=""></option>
//                             <option value="az" selected="">Azərbaycan</option>
//                             <option value="other">Digər</option>
//                         </select><span
//                         className="select2 select2-container select2-container--default"
//                         dir="ltr" style={{width:88.5}}><span className="selection"><span
//                         className="select2-selection select2-selection--single" role="combobox"
//                         aria-haspopup="true" aria-expanded="false" tabIndex="0"
//                         aria-labelledby="select2-select2-placeholder-container"><span
//                         className="select2-selection__rendered"
//                         id="select2-select2-placeholder-container"
//                         title="Azərbaycan">Azərbaycan</span><span
//                         className="select2-selection__arrow" role="presentation">
//                                                 <b role="presentation"/></span></span></span><span
//                         className="dropdown-wrapper" aria-hidden="true"></span></span></div>
//                 </div>
//             </div>
//             <div className="input-btw pb-32">
//                 <div className=" field-user-document_number required">
//
//                     <div className="newcommit-input bg-input input-width">
//                         <select name="SignupForm[document_series]"
//                                 className="select-small js-niceselect" style={{display:"none"}}>
//                             <option value="AZE">AZE</option>
//                             <option value="AA">AA</option>
//                         </select>
//                         <div className="nice-select select-small js-niceselect" tabIndex="0">
//                             <span className="current">AZE</span>
//                             <ul className="list">
//                                 <li data-value="AZE" className="option selected">AZE</li>
//                                 <li data-value="AA" className="option">AA</li>
//                             </ul>
//                         </div>
//                         <div className="form-floating ">
//                             <input type="text" id="user-document_number"
//                                    className="form-control input-select w-100"
//                                    name="User[document_number]" value="2715306"
//                                    placeholder="ŞV-nin nömrəsi" aria-required="true"/><label
//                             className="floating-label" htmlFor="user-document_number">Sənədin
//                             nömrəsi</label>
//                         </div>
//                     </div>
//
//
//                 </div>
//                 <div className=" field-user-document_fin required">
//
//                     <div className="input-flex bg-input  input-width">
//                         <div className="form-floating ">
//                             <input type="text" id="user-document_fin" className="form-control"
//                                    name="User[document_fin]" value="621UKDP"
//                                    placeholder="FİN kodu daxil edin" aria-required="true"/>
//                             <label className="" htmlFor="user-document_fin">Ş/V-nin FIN kodu</label>
//                         </div>
//                         <HelpOutlinedIcon/>
//                     </div>
//
//                 </div>
//             </div>
//             <div className="input-btw mb-32">
//                 <div className=" field-select2-placeholder required">
//                     <div className="custom_placeholder_select2 form-group input-width bg-input">
//                         <label htmlFor="select2-placeholder" className="selected-label">Şəhər
//                             seçin</label><ArrowDropDownOutlinedIcon/><select
//                         id="select2-placeholder"
//                         className="select2_placeholder select2-hidden-accessible"
//                         name="User[city_id]" aria-required="true" tabIndex="-1"
//                         aria-hidden="true">
//                         <option value=""></option>
//                         <option value="2" selected="">Bakı</option>
//                         <option value="132">Ağcabədi</option>
//                         <option value="133">Ağdam</option>
//                         <option value="134">Ağdaş</option>
//                         <option value="135">Ağstafa</option>
//                         <option value="136">Ağsu</option>
//                         <option value="137">Astara</option>
//                         <option value="138">Balakən</option>
//                         <option value="140">Beyləqan</option>
//                         <option value="141">Bərdə</option>
//                         <option value="142">Biləsuvar</option>
//                         <option value="143">Cəlilabad</option>
//                         <option value="144">Füzuli</option>
//                         <option value="145">Gədəbəy</option>
//                         <option value="146">Gəncə</option>
//                         <option value="147">Goranboy</option>
//                         <option value="148">Göyçay</option>
//                         <option value="149">Göytəpə</option>
//                         <option value="150">Hacıqabul</option>
//                         <option value="151">İmişli</option>
//                         <option value="152">İsmayıllı</option>
//                         <option value="153">Kürdəmir</option>
//                         <option value="154">Lerik</option>
//                         <option value="155">Lənkəran</option>
//                         <option value="156">Masallı</option>
//                         <option value="157">Mingəçevir</option>
//                         <option value="158">Naftalan</option>
//                         <option value="159">Naxçıvan</option>
//                         <option value="160">Neftçala</option>
//                         <option value="161">Oğuz</option>
//                         <option value="162">Qax</option>
//                         <option value="163">Qazax</option>
//                         <option value="164">Qəbələ</option>
//                         <option value="165">Quba</option>
//                         <option value="166">Qusar</option>
//                         <option value="167">Saatlı</option>
//                         <option value="168">Sabirabad</option>
//                         <option value="169">Salyan</option>
//                         <option value="170">Şabran</option>
//                         <option value="171">Şəki</option>
//                         <option value="172">Şəmkir</option>
//                         <option value="173">Şirvan</option>
//                         <option value="174">Siyəzən</option>
//                         <option value="175">Sumqayıt</option>
//                         <option value="176">Tovuz</option>
//                         <option value="177">Ucar</option>
//                         <option value="178">Xaçmaz</option>
//                         <option value="179">Xırdalan</option>
//                         <option value="180">Xızı</option>
//                         <option value="181">Xudat</option>
//                         <option value="182">Yevlax</option>
//                         <option value="183">Zaqatala</option>
//                         <option value="184">Zərdab</option>
//                         <option value="185">Şamaxı</option>
//                     </select><span
//                         className="select2 select2-container select2-container--default"
//                         dir="ltr" style={{width:83}}><span className="selection"><span
//                         className="select2-selection select2-selection--single" role="combobox"
//                         aria-haspopup="true" aria-expanded="false" tabIndex="0"
//                         aria-labelledby="select2-select2-placeholder-container"><span
//                         className="select2-selection__rendered"
//                         id="select2-select2-placeholder-container" title="Bakı">Bakı</span><span
//                         className="select2-selection__arrow" role="presentation"><b
//                         role="presentation"></b></span></span></span><span
//                         className="dropdown-wrapper" aria-hidden="true"></span></span></div>
//                 </div>
//                 <div className=" field-select2-placeholder required">
//                     <div className="custom_placeholder_select2 form-group input-width bg-input">
//                         <label htmlFor="select2-placeholder" className="selected-label">Filial
//                             seçin</label>
//                         <ArrowDropDownOutlinedIcon/>
//                         <select
//                             id="select2-placeholder"
//                             className="select2_placeholder select2-hidden-accessible"
//                             name="User[branch_id]" aria-required="true" tabIndex="-1"
//                             aria-hidden="true">
//                             <option value=""></option>
//                             <option value="1" selected="">Bakı</option>
//                             <option value="3">Gəncə</option>
//                             <option value="4">Sahil Qəsəbəsi</option>
//                             <option value="5">Yeni Poçt /Sumqayıt, Təhvil Məntəqəsi</option>
//                             <option value="6">Lökbatan təhvil məntəqəsi - Yerli Kargo- Taleh
//                                 Telekom
//                             </option>
//                             <option value="7">Yeni Poçt /Xaçmaz , Təhvil Məntəqəsi</option>
//                         </select><span
//                         className="select2 select2-container select2-container--default"
//                         dir="ltr" style={{width:410}}><span className="selection"><span
//                         className="select2-selection select2-selection--single" role="combobox"
//                         aria-haspopup="true" aria-expanded="false" tabIndex="0"
//                         aria-labelledby="select2-select2-placeholder-container"><span
//                         className="select2-selection__rendered"
//                         id="select2-select2-placeholder-container" title="Bakı">Bakı</span><span
//                         className="select2-selection__arrow" role="presentation"><b
//                         role="presentation"></b></span></span></span><span
//                         className="dropdown-wrapper" aria-hidden="true"></span></span></div>
//                 </div>
//             </div>
//
//             <div className="form-floating input-width field-user-address">
//                 <input type="text" id="user-address" className="form-control bg-input"
//                        name="User[address]" value="Shafayet Mehdiyev 1054"
//                        placeholder="Ünvan"/>
//                 <label className="floating-label" htmlFor="user-address">Ünvan</label>
//             </div>
//             <div className="newcommit-buttons">
//                 <a href="/account/index?lang=az" className="btn btn--secondary">Ləğv et</a>
//                 <button type="submit" className="btn btn--primary">Yadda saxla</button>
//             </div>
//         </section>
//     </form>
// </div>