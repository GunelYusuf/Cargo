import React from 'react';
import CountriesShopListNavbar from './CountriesShopListNavbar'
function ShopCountry() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 page_title text-center mb-3">
                        <h1>Mağazalar</h1>
                        <p className="left_middle">Türkiyə mağazalarını sizlərə yaxın etdik. Alış-verişin ən sərfəli
                            ünvanı Dynamic Express ilə istədiyiniz mağazadan onlayn sifariş edin, biz çatdıraq.</p>
                    </div>
                    <div className="col-md-12">
                        <div className="col-lg-12 col-md-6 brend_images"></div>
                        <CountriesShopListNavbar/>
                    </div>

                </div>
            </div>
        </>
    );
}

export default ShopCountry;