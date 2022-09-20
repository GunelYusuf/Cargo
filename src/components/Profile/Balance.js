import React,{useState} from 'react';
import './Balance.css'
import CurrentBalanceSection from "./CurrentBalanceSection";
import {Link} from "react-router-dom";



function Balance() {
    const [section, setSection] = useState(0);
    return (
        <>
            <section className="details-headline details-headline--buttons section-structure sm-pages-pdng">
                <div className="details-headline__row">
                    <h4>Balans</h4>
                </div>
                <div className="details-headline__row">
                    <div className="tabs-adjacent">
                        <Link to="#" onClick={()=> setSection(1)} className="btn btn--adjacent-tab ">
                            <span>Sifariş balansım</span>
                        </Link>
                        <Link to="#" onClick={()=> setSection(2)}
                           className="btn btn--adjacent-tab is-tab-active">
                            <span>Daşınma balansım</span>
                        </Link>
                    </div>
                </div>
            </section>
           <CurrentBalanceSection step={section}/>
        </>
    );
}

export default Balance;