import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import BrandCard from './BrandCard';
import './stylees.css';

function CountriesShopListNavbar() {
    return (
        <Tabs
            defaultActiveKey="turkish"
            id="fill-tab-example"
            className="mb-3"
            fill
        >
            <Tab eventKey="turkish" title="Türkiyə">
                <div className="row">
                    <BrandCard/>
                </div>
            </Tab>
            <Tab eventKey="usa" title="ABŞ">
                <div className="row">
                    <BrandCard/>
                </div>
            </Tab>
            <Tab eventKey="china" title="Çin">
               <div className="row">
                   <BrandCard/>
               </div>
            </Tab>
        </Tabs>
    );
}

export default CountriesShopListNavbar;