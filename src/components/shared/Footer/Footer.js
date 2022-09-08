// import React from 'react';
// import './Footer.css';
// import hotline from '../../../assets/hot-line.svg';
// import appstore from '../../../assets/app-store.svg';
// import googlePlay from '../../../assets/google-play.svg';
// import facebook from '../../../assets/facebook.svg';
// import instagram from '../../../assets/instagram (1).svg';
// import telegram from '../../../assets/telegram.png';
// import twitter from '../../../assets/twitter.svg';
// import youtube from '../../../assets/youtube.svg';
// import tiktok from '../../../assets/tik-tok.png';
// import visa from '../../../assets/visa.svg';
// import mastercard from '../../../assets/mastercard.svg';
// import logoWhite from '../../../assets/logo-white.svg'
//
// function Footer() {
//     return (
//         <>
//             <div className="footer">
//                 <div className="container">
//                     <div className="footer-main">
//                         <div className="footer-left">
//                             <a href="" title="" className="footer-logo">
//                                 <img
//                                  style={{width:140,height:32}}
//                                  src={logoWhite}
//                                                                                                       alt=""/></a> <a
//                             href="tel:*9595" className="d-block d-sm-none"><img  style={{width:140,height:32}}
//                                                                                 src={hotline}
//                                                                                 alt="Hot Line - *9595"/></a>
//                             <div className="footer-app d-none d-sm-block"><a
//                                 href="https://www.apple.com/app-store/"><img  style={{width:101,height:30}}
//                                                                              src={appstore}
//                                                                              alt="App Store"/></a> <a
//                                 href="https://play.google.com/store/apps/details?id=az.limak"><img style={{width:101,height:30}}
//                                                                                                    src={googlePlay}
//                                                                                                    alt="Google Play"/></a>
//                             </div>
//                         </div>
//                         <div className="footer-menu">
//                             <div className="footer-menu-col"><a href="/az/tariffs" title="">Tariflər</a> <a
//                                 href="/az/calculator" title="">Kalkulyator</a> <a href="/az/stores/1"
//                                                                                   title="">Mağazalar</a></div>
//                             <div className="footer-menu-col"><a href="/az/news" title="">Yeniliklər</a> <a
//                                 href="/az/terms" title="">Qaydalar</a> <a href="/az/question" title="">Suallar</a></div>
//                             <div className="footer-menu-col"><a href="/az/about-us" title="">Haqqımızda</a> <a
//                                 href="/az/privacy" title="">Gizlilik şərtləri</a> <a href="/az/contact"
//                                                                                      title="">Əlaqə</a></div>
//                             <div className="footer-social d-block d-sm-none"><a
//                                 href="https://www.facebook.com/Limakaz/"><img  style={{width:25,height:25}}
//                                                                               src={facebook}
//                                                                               alt="Facebook"/></a> <a
//                                 href="https://www.instagram.com/limak.az/"><img style={{width:25,height:25}}
//                                                                                 src={instagram}
//                                                                                 alt="Instagram"/></a> <a
//                                 href="https://t.me/limak_az"><img style={{width:25,height:25}}
//                                                                   src={telegram} alt="Telegram"
//                                                                   style={{width:27}}/></a> <a
//                                 href="https://twitter.com/limak_az"><img style={{width:25,height:25}}
//                                                                          src={twitter}
//                                                                          alt="Twitter"/></a> <a
//                                 href="https://www.youtube.com/channel/UCz0okQvJ53Ml9agfGGjgyVg"><img style={{width:25,height:25}}
//                                                                                                      src={youtube}
//                                                                                                      alt="Youtube"/></a>
//                                 <a href="https://www.tiktok.com/@limak.az?"><img style={{width:25,height:25}}
//                                                                                  src={tiktok}
//                                                                                  alt="tik-tok" style={{width:27}}/></a>
//                             </div>
//                         </div>
//                         <div className="footer-contact d-none d-sm-block">
//                             <a href="tel:*9595"></a>
//                             <a href="" className="hot_line"><img
//                             style={{width:140,height:32}} src={hotline}/></a>
//                             <div className="footer-social">
//                                 <a href="https://www.facebook.com/Limakaz/">
//                                 <img style={{width:25,height:25}}
//                                       src={facebook}
//                                       alt="Facebook"/>
//                                 </a>
//                                 <a href="https://www.instagram.com/limak.az/"><img style={{width:25,height:25}}
//                                                                                    src={instagram}
//                                                                                    alt="Instagram"/></a>
//                                 <a href="https://t.me/limak_az"><img style={{width:25,height:25}}
//                                                                       src={telegram} alt="Telegram"
//                                                                       style={{width:27}}/></a>
//                                 <a href="https://twitter.com/limak_az"><img width="25" height="25"
//                                                                              src={twitter}
//                                                                              alt="Twitter"/></a>
//                                 <a href="https://www.youtube.com/channel/UCz0okQvJ53Ml9agfGGjgyVg"><img style={{width:25,height:25}}
//                                                                                                          src={youtube}
//                                                                                                          alt="Youtube"/></a>
//                                 <a href="https://www.tiktok.com/@limak.az?"><img style={{width:25,height:25}}
//                                                                                  src={tiktok}
//                                                                                  alt="tik-tok" style={{width:27}}/></a>
//                             </div>
//                         </div>
//                         <div className="footer-app d-block d-sm-none">
//                             <a href="https://www.apple.com/app-store/"><img
//                             style={{width:100,height:100}} src={appstore} alt="Limak App Store"/></a>
//                         </div>
//                         <div className="footer-app d-block d-sm-none">
//                             <a href="https://play.google.com/store/apps/details?id=az.limak">
//                             <img style={{width:100,height:30}} src={googlePlay} alt="Limak Google Play"/>
//                             </a>
//                         </div>
//                     </div>
//                     <div className="footer-bottom">
//                         <div className="footer-copy">© 2018 - 2022 <a href="" title="">Limak.az</a> | Bütün hüquqlar
//                             qorunur
//                         </div>
//                         <div className="footer-payment">
//                             <img style={{width:60,height:30}} src={visa} alt="Visa"/>
//                             <img style={{width:60,height:30}} src={mastercard} alt="Limak MasterCard"/>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }
//
// export default Footer;