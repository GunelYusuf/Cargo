import React, {useState} from 'react';
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import OpenInNewOutlinedIcon from "@mui/icons-material/OpenInNewOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";


function ProductLink() {
    const[form,setForm] = useState([{ id: 1}]);

    const handleClick = (id) =>{
        const newList =   form.filter((x) => x.id !== id)
        setForm(newList)
    }

    console.log(form, 'ahahahha')
    return (
        <>
            <section className="details-headline section-structure sm-pages-pdng">
                <div className="d-flex justify-content-between align-items-center w-100">
                    <h4 className="mb-0">Yeni sifariş</h4>
                </div>
            </section>
            <div className="custom-form">


                {
                   form.map((item,index)=>(
                        <div id="w0"  data-percent="3.5" currency="TL" key={index}>
                            <section className="neworders product-list">
                                <div className="neworder section-structure section-pdng product-list__item">
                                    <div className="neworder__head">
                                        <h6><span>#<span className="product-num">{item.id}</span></span>Məhsul</h6>
                                        {item.id !==1 ?
                                            <DeleteOutlinedIcon onClick={()=> handleClick(item.id)}className="btn btn--icon remove-product " />
                                           :
                                            <>G</>
                                        }
                                   </div>
                                    <div className="neworder-link mb-32 field-links-product_link required">
                                        <div className="input-flex bg-input">
                                            <div className="form-floating w-100  ">
                                                <input type="text" id="links-product_link"
                                                       className="form-control product-link count-input"
                                                       name="Links[product_link][]"
                                                       placeholder="Məhsulun linki"/><label
                                                className="floating-label"
                                                htmlFor="links-product_link">Link</label>
                                            </div>
                                            <span className="btn btn--icon">
                                                    <OpenInNewOutlinedIcon className="open"/>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="neworder-row">
                                        <div className=" field-links-product_count required">
                                            <div className="neworder-input bg-input"><label
                                                className="floating-label" htmlFor="links-product_count">Say</label><input
                                                type="text" id="links-product_count"
                                                className="form-control bg-input product-count count-input"
                                                name="Links[product_count][]" placeholder="0"/></div>
                                        </div>
                                        <div className=" field-links-product_price required">
                                            <div className="neworder-input bg-input">
                                                <div className="input-number-group">
                                                    <label className="" htmlFor="links-product_price">Qiymət</label>
                                                    <input type="number" id="links-product_price"
                                                           className="input-number product-price"
                                                           name="Links[product_price][]" step="0.01"
                                                           placeholder="0"/>
                                                </div>
                                                <div className="symbol">₺</div>
                                            </div>
                                        </div>
                                        <div className=" field-links-cargo_price">

                                            <div className="neworder-input bg-input">
                                                <div className="input-number-group">
                                                    <label className="" htmlFor="links-cargo_price">Karqo
                                                        qiyməti</label>
                                                    <input type="number" id="links-cargo_price"
                                                           className="input-number cargo-price"
                                                           name="Links[cargo_price][]" step="0.01" placeholder="0"/>
                                                </div>
                                                <div className="symbol">₺</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="input-btw">
                                        <div className="input-direction w-100 field-links-product_color required">
                                            <div className="form-floating"><input type="text"
                                                                                  id="links-product_color"
                                                                                  className="form-control bg-input"
                                                                                  name="Links[product_color][]"
                                                                                  placeholder="Rəng"/><label
                                                className="" htmlFor="links-product_color">Rəng</label></div>
                                            <small>Məsələn; qırmızı</small>
                                        </div>
                                        <div className="input-direction w-100 field-links-product_size required">
                                            <div className="form-floating"><input type="text"
                                                                                  id="links-product_size"
                                                                                  className="form-control bg-input"
                                                                                  name="Links[product_size][]"
                                                                                  placeholder="Ölçü"/><label
                                                className="" htmlFor="links-product_size">Ölçü</label></div>
                                            <small>Məsələn; XL</small>

                                        </div>
                                    </div>

                                    <div className="input-btw">

                                        <div className="input-direction w-100 field-links-product_note required">
                                                <textarea id="links-product_note" className="bg-input w-100"
                                                          name="Links[product_note][]" rows="3" cols="0"
                                                          placeholder="Digər qeydlər"/>
                                        </div>
                                        <div className="total-price w-100">
                                            <p>Yekun qiymət (+3.5% komissiya</p>
                                            <h4>₺ <span className="total-link-price">0.00</span></h4>
                                        </div>
                                    </div>
                                </div>
                            </section>

                        </div>
                    ))
                }

                <button onClick={()=> setForm([...form,{id:form.length+1}])} className="btn btn--secondary add-neworder add-new-product">
                    <AddCircleOutlineOutlinedIcon className="open"/>
                    <span className="ms-2">Yeni məhsul əlavə et</span>
                </button>

                <div style={{marginBottom:20}}>
                    <div className=" field-terms required">

                        <div className="form-check signup-form-check">
                            <input type="hidden" name="Links[agreement]" value="0"/><input
                            type="checkbox" id="terms" className="form-check-input"
                            name="Links[agreement]" value="1"/>
                            <label htmlFor="terms" className="form-check-label">
                                <a href="/az/menu/user-agreement-107.html" className="terms" target="_blank">İstifadəçi
                                    şərtləri</a> ilə razıyam
                            </label>
                        </div>
                    </div>
                </div>

                <section className="final-amount vlct-section section-pdng section-structure">
                    <div className="final-amount__content">
                        <div className="final-amount__price">
                            <p>Ödəniləcək yekun məbləğ</p>
                            <h4>₺ <span className="total-amount">0.00</span></h4>
                        </div>
                        <div className="final-amount__buttons">
                            <button className="btn btn--primary order-first order-sm-last">Sifariş et
                            </button>
                        </div>
                    </div>
                </section>
            </div>

        </>
    );
}

export default ProductLink;