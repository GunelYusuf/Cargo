import React from 'react';
import './About.css';
import aboutImage from './about-image-3.webp';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
function About() {
    return (
        <div className="container about-text" style={{marginTop:"150px"}}>
                <section className="info vlct-section">
                    <div className="info__content about-div section-structure sm-section-pdng">
                        <div className="heading">
                            <h2 className="heading__title">HAQQIMIZDA</h2>
                            <div className="about__content-text text-font">
                                <p dir="ltr">
                                    <span style={{fontSize:"16px"}}>
                                        <span style={{backgroundColor:"transparent", fontFamily:"arial"}}>&nbsp;Biz Kimik ?</span>
                                    </span>
                                </p>
                                <p>
                                    <span style={{fontSize:"16px"}}>
                                       <span style={{backgroundColor:"transparent", fontFamily:"arial"}}>“AlfaEx”&nbsp;&nbsp;Sürətli poçt daşıma şirkətidir.</span>
                                    </span>
                                </p>
                                <p>
                                    <span style={{fontSize:"16px"}}>
                                        <span style={{backgroundColor:"transparent", fontFamily:"arial"}}>“AlfaEx ”&nbsp;Azərbaycan Respublikasının qanunvericiliyinə uyğun olaraq əldə etdiyi lisenziya ilə həm ölkədaxili, həm də beynəlxalq poçt bağlamalarının
                                        <span style={{backgroundColor:"transparent", fontFamily:"arial"}}></span>sürətli və etibarlı bir şəkildə çatdırılmasını həyata keçirir. "AlfaEx &nbsp;"Türkiyə və ABŞ-ın onlayn mağazalarından əldə etdiyiniz məhsulların ölkəmizə çatdırılmasını ən sərfəli qiymətlərlə ən keyfiyyətli şəkildə həyata keçirir. “AlfaEx” -nin əsas məqsədi
                                        <span style={{backgroundColor:"transparent", fontFamily:"arial"}}> </span>müştərilərinin məmnuniyyətini ən üst səviyyədə qoruyaraq onlara sərfəli qiymətlər ilə yüksək səviyyəli xidmət göstərməkdir.“AlfaEx&nbsp;” &nbsp;ABŞ və Türkiyədən poçt bağlamalarının, onlayn alış-veriş mağazaları vasitəsilə sifariş edilən məhsulların, eləcə də böyük həcmli və ağır çəkili qeyri-standart yüklərin tez bir zaman ərzində hava nəqliyyatı ilə Azərbaycana çatdırılmasını təmin edir.
                                        </span>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="info__image about-div">
                        <img src={aboutImage} className="d-block w-100"
                             alt="HAQQIMIZDA"/>
                    </div>
                </section>
                <section className="work vlct-section">
                    <div className="bottom-part">
                        <div className="item">
                            <div className="title">Dəyərlərimiz</div>
                            <ul>
                                <li><span className="starexicon"><svg width="1em" height="1em" viewBox="0 0 14 14"
                                                                      fill="currentColor"><path fill-rule="evenodd"
                                                                                                clip-rule="evenodd"
                                                                                                d="M7 0C3.14035 0 0 3.14035 0 7C0 10.8596 3.14035 14 7 14C10.8596 14 14 10.8596 14 7C14 3.14035 10.8596 0 7 0ZM10.9123 5.15789L6.4386 9.59649C6.17544 9.85965 5.75439 9.87719 5.47368 9.61403L3.10526 7.45614C2.82456 7.19298 2.80702 6.75439 3.05263 6.47368C3.31579 6.19298 3.75439 6.17544 4.03509 6.4386L5.91228 8.1579L9.91228 4.15789C10.193 3.87719 10.6316 3.87719 10.9123 4.15789C11.193 4.4386 11.193 4.87719 10.9123 5.15789Z"></path></svg></span><span>Sadə işləyiş şəkli</span>
                                </li>
                                <li><span className="starexicon"><svg width="1em" height="1em" viewBox="0 0 14 14"
                                                                      fill="currentColor"><path fill-rule="evenodd"
                                                                                                clip-rule="evenodd"
                                                                                                d="M7 0C3.14035 0 0 3.14035 0 7C0 10.8596 3.14035 14 7 14C10.8596 14 14 10.8596 14 7C14 3.14035 10.8596 0 7 0ZM10.9123 5.15789L6.4386 9.59649C6.17544 9.85965 5.75439 9.87719 5.47368 9.61403L3.10526 7.45614C2.82456 7.19298 2.80702 6.75439 3.05263 6.47368C3.31579 6.19298 3.75439 6.17544 4.03509 6.4386L5.91228 8.1579L9.91228 4.15789C10.193 3.87719 10.6316 3.87719 10.9123 4.15789C11.193 4.4386 11.193 4.87719 10.9123 5.15789Z"></path></svg></span><span>Müştəriyə yönəlik</span>
                                </li>
                                <li><span className="starexicon"><svg width="1em" height="1em" viewBox="0 0 14 14"
                                                                      fill="currentColor"><path fill-rule="evenodd"
                                                                                                clip-rule="evenodd"
                                                                                                d="M7 0C3.14035 0 0 3.14035 0 7C0 10.8596 3.14035 14 7 14C10.8596 14 14 10.8596 14 7C14 3.14035 10.8596 0 7 0ZM10.9123 5.15789L6.4386 9.59649C6.17544 9.85965 5.75439 9.87719 5.47368 9.61403L3.10526 7.45614C2.82456 7.19298 2.80702 6.75439 3.05263 6.47368C3.31579 6.19298 3.75439 6.17544 4.03509 6.4386L5.91228 8.1579L9.91228 4.15789C10.193 3.87719 10.6316 3.87719 10.9123 4.15789C11.193 4.4386 11.193 4.87719 10.9123 5.15789Z"></path></svg></span><span>Davamlı inkişaf və öyrənmək</span>
                                </li>
                            </ul>
                        </div>
                        <div className="item">
                            <div className="title">Vizyonumuz</div>
                            <ul>
                                <li><span className="starexicon"><svg width="1em" height="1em" viewBox="0 0 14 14"
                                                                      fill="currentColor"><path fill-rule="evenodd"
                                                                                                clip-rule="evenodd"
                                                                                                d="M7 0C3.14035 0 0 3.14035 0 7C0 10.8596 3.14035 14 7 14C10.8596 14 14 10.8596 14 7C14 3.14035 10.8596 0 7 0ZM10.9123 5.15789L6.4386 9.59649C6.17544 9.85965 5.75439 9.87719 5.47368 9.61403L3.10526 7.45614C2.82456 7.19298 2.80702 6.75439 3.05263 6.47368C3.31579 6.19298 3.75439 6.17544 4.03509 6.4386L5.91228 8.1579L9.91228 4.15789C10.193 3.87719 10.6316 3.87719 10.9123 4.15789C11.193 4.4386 11.193 4.87719 10.9123 5.15789Z"></path></svg></span><span>Sektorda ən mötəbər, ən dəqiq şirkət olmaq</span>
                                </li>
                                <li><span className="starexicon"><svg width="1em" height="1em" viewBox="0 0 14 14"
                                                                      fill="currentColor"><path fill-rule="evenodd"
                                                                                                clip-rule="evenodd"
                                                                                                d="M7 0C3.14035 0 0 3.14035 0 7C0 10.8596 3.14035 14 7 14C10.8596 14 14 10.8596 14 7C14 3.14035 10.8596 0 7 0ZM10.9123 5.15789L6.4386 9.59649C6.17544 9.85965 5.75439 9.87719 5.47368 9.61403L3.10526 7.45614C2.82456 7.19298 2.80702 6.75439 3.05263 6.47368C3.31579 6.19298 3.75439 6.17544 4.03509 6.4386L5.91228 8.1579L9.91228 4.15789C10.193 3.87719 10.6316 3.87719 10.9123 4.15789C11.193 4.4386 11.193 4.87719 10.9123 5.15789Z"></path></svg></span><span>Eyni gündə çatdırmaq xidmətini həyata keçirmək</span>
                                </li>
                            </ul>
                        </div>
                        <div className="item">
                            <div className="title">Missiyamız</div>
                            <ul>
                                <li><span className="starexicon"><svg width="1em" height="1em" viewBox="0 0 14 14"
                                                                      fill="currentColor"><path fill-rule="evenodd"
                                                                                                clip-rule="evenodd"
                                                                                                d="M7 0C3.14035 0 0 3.14035 0 7C0 10.8596 3.14035 14 7 14C10.8596 14 14 10.8596 14 7C14 3.14035 10.8596 0 7 0ZM10.9123 5.15789L6.4386 9.59649C6.17544 9.85965 5.75439 9.87719 5.47368 9.61403L3.10526 7.45614C2.82456 7.19298 2.80702 6.75439 3.05263 6.47368C3.31579 6.19298 3.75439 6.17544 4.03509 6.4386L5.91228 8.1579L9.91228 4.15789C10.193 3.87719 10.6316 3.87719 10.9123 4.15789C11.193 4.4386 11.193 4.87719 10.9123 5.15789Z"></path></svg></span><span>Keyfiyyətli xidmət və müştərilərimizin maksimum razılığını təmin etmək</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
    );
}

export default About;