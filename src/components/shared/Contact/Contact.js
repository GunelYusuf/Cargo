import React from 'react';
import './Contact.css'
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
function Contact() {
    return (
        <div>
            <div className="container" style={{marginTop:"150px"}}>
                <div className="row contact__content ">
                    <div className="contact__column section-structure sm-section-pdng">
                        <h4 className="contact-title">Əlaqə</h4>
                        <ul>
                            <li>
                                <RoomOutlinedIcon className='room icon-map-marker_two_tone icon-lg icon-outline'/>
                                <div>
                                    <h5>Ünvan</h5>
                                    <p>Bakı şəh.,AZ1072, Nərimanov rayonu Koroğlu Rəhimov küçəsi Gəncə şəhəri, Heydər
                                        Əliyev prospekti 183D</p>
                                </div>
                            </li>
                            <li>
                                <AccessTimeOutlinedIcon className='room icon-map-marker_two_tone icon-lg icon-outline'/>
                                <div>
                                    <h5>İş saatları</h5>
                                    <p>Bazar ertəsi- Şənbə: 09:00 - 18:00</p><p>Bazar: qeyri iş günü</p></div>
                            </li>
                            <li>
                                <LocalPhoneOutlinedIcon className='room icon-map-marker_two_tone icon-lg icon-outline'/>
                                <div>
                                    <h5>Qaynar xətt</h5>
                                    <p>+994123108707</p>
                                </div>
                            </li>
                            <li>
                                <EmailOutlinedIcon className='room icon-map-marker_two_tone icon-lg icon-outline'/>
                                <div>
                                    <h5>Elektron ünvanlar</h5>
                                    <p> : info@velocity.az : corporate@velocity.az</p></div>
                            </li>
                        </ul>
                        {/*<h4>Bizi izləyin</h4>*/}
                        {/*<div className="social-icons">*/}
                        {/*    <a href="https://www.facebook.com/Velocityaz-110153937876363" target="_blank"*/}
                        {/*       className="social-icons__link"><i className="icon-facebook"></i></a>*/}
                        {/*    <a href="https://www.instagram.com/velocity.az/" target="_blank"*/}
                        {/*       className="social-icons__link"><i className="icon-instagram"></i></a>*/}
                        {/*    <a href="https://www.youtube.com/channel/UCx2nxoyQHRVqGR4Zefyp6Zg" target="_blank"*/}
                        {/*       className="social-icons__link"><i className="icon-youtube"></i></a>*/}
                        {/*</div>*/}
                    </div>
                    <div className="contact__column contact__column--input section-structure sm-section-pdng">
                        <h4>Bizə yazın</h4>
                        <p className="text-font">İrad və təkliflərinizi bildirə bilərsiniz. </p>
                        <form action="" className="contact-form">
                            <div className="form-floating w-100">
                                <input type="text" name="" id="name" className="contactIn form-control bg-input contact-input"
                                       placeholder="Adınız " autoComplete="off"/>
                                    <label htmlFor="name">Adınız </label>
                            </div>
                            <div className="form-floating w-100">
                                <input type="text" name="" id="surname" className="contactIn form-control bg-input contact-input"
                                       placeholder="Soyadınız" autoComplete="off"/>
                                    <label htmlFor="surname">Soyadınız</label>
                            </div>
                            <div className="form-floating w-100">
                                <input type="tel" name="" id="phone" className="contactIn form-control bg-input contact-input"
                                       placeholder="əlaqə nömrəniz" autoComplete="off"/>
                                    <label htmlFor="phone">əlaqə nömrəniz</label>
                            </div>
                            <div className="form-floating w-100">
                                <input type="email" name="" id="email" className="contactIn form-control bg-input contact-input"
                                       placeholder="e-poçt ünvanı" autoComplete="off"/>
                                    <label htmlFor="email">e-poçt ünvanı</label>
                            </div>
                            <textarea name="" id="" cols="0" rows="6" className="contactIn form-control bg-input contact-input"
                                      placeholder="Mesajınız"/>
                            <button type="submit" className="btn btn--primary contact-btn">Göndər</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;