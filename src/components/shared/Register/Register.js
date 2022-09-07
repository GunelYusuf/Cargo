import './Register.css';
import {useState} from "react";

function Register() {

    const phoneNumber = ['050','051','055','070']
    const [selected, setSelected] = useState(phoneNumber[0].value);
    console.log(phoneNumber[0].value,'hahahah')
    const onChange =(e) => {
        console.log(e.target.value);
        setSelected(e.target.value);
    }


    return (
        <>
        <div className="container" style={{marginTop:'150px'}}>

                <div className="row">
                    <div className="col-md-12 page_title reg_main_title">
                        <h1>AlfaEx-ə xoş gəlmişsiniz !</h1>
                        <p className="left_middle">Qeydiyyat</p>
                    </div>
                </div>
                <div className='row'>
                    <div className="col-md-12 d-flex justify-content-center registration_container">
                         <div className="col-md-6 reg_left_cont">
                                <div className="login_left" data-select2-id="select2-data-14-nl37">
                                    <form id="custom-form" className="reset-form" action="/az/signup.html"
                                          method="post" data-select2-id="select2-data-custom-form">
                                        <input type="hidden" name="_csrf-frontend"
                                               value="8LjxtvGZYbYzxfIdQ47SMg-E79-9nzg2Kh5hWDlBrBmKjL7HuMEC3EG_i2kRx7Zce7Ocqvj8cE8db1YebnfqeA=="/>
                                        <h3 className="full">Qeydiyyat formu</h3>
                                        <div className="user-fields">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group field-signupform-name">
                                                        <input type="text" id="signupform-name"
                                                               className="form-control floating-input custom-for"
                                                               name="SignupForm[name]" placeholder="Ad"/>
                                                        <div className="help-block"/>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group field-signupform-surname">
                                                        <input type="text" id="signupform-surname"
                                                               className="form-control floating-input custom-for"
                                                               name="SignupForm[surname]"
                                                               placeholder="Soyad"/>
                                                        <div className="help-block"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group field-signupform-email required">
                                                           <input type="text" id="signupform-email"
                                                           className="form-control floating-input custom-for"
                                                           name="SignupForm[email]" placeholder="Email"
                                                           aria-required="true"/>
                                                    <div className="help-block"/>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <div className="input-group mb-2 mr-sm-2">
                                                        <div className="input-group-prepend">
                                                            <div className="input-group">
                                                                   <select className='form-control reg-select custom-for'>
                                                                    <option value="050" data-select2-id="select2-data-3-hsy2">050</option>
                                                                    <option value="051">051</option>
                                                                    <option value="055">055</option>
                                                                    <option value="070">070</option>
                                                                    <option value="077">077</option>
                                                                    <option value="099">099</option>
                                                                    <option value="060">060</option>
                                                                    <option value="010">010</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <input type="text"
                                                               className="form-control custom-for"
                                                               name="SignupForm[phone_number]"
                                                               placeholder="Telefon" aria-required="true"/>
                                                    </div>


                                                    <div className="help-block"/>

                                                </div>
                                            </div>
                                        </div>

                                        <div className="user-fields" data-select2-id="select2-data-13-a1wr">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group field-signupform-birthday">
                                                        <input type="text" id="signupform-birthday"
                                                               className="form-control floating-input calendar datepicker custom-for"
                                                               name="SignupForm[birthday]"
                                                               placeholder="Doğum tarixi"/>
                                                        <div className="help-block"/>
                                                    </div>
                                                </div>

                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <div className="input-group mb-2 mr-sm-2">
                                                            <div className="input-group-prepend">
                                                                <div className="input-group">
                                                                    <select className='form-control reg-select custom-for'>
                                                                        <option value="AZE" data-select2-id="select2-data-7-6val">AZE
                                                                        </option>
                                                                        <option value="AA" data-select2-id="select2-data-17-5a2d">AA
                                                                        </option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <input type="text"
                                                                   className="form-control custom-for"
                                                                   name="SignupForm[document_number]"
                                                                   placeholder="ŞV-nin nömrəsi"/>
                                                        </div>


                                                        <div className="help-block"/>

                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group field-signupform-document_fin">
                                                        <input type="text" id="signupform-document_fin"
                                                               className="form-control custom-for"
                                                               name="SignupForm[document_fin]"
                                                               placeholder="Fin kodu daxil edin"/>
                                                        <button type="button" className="show_fin aze">
                                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                                 width="18" height="18"
                                                                 viewBox="0 0 18 18">
                                                                <path id="prefix__help-circle-outline"
                                                                      d="M10.1 16.4h1.8v-1.8h-1.8v1.8M11 2a9 9 0 1 0 9 9 9 9 0 0 0-9-9m0 16.2a7.2 7.2 0 1 1 7.2-7.2 7.21 7.21 0 0 1-7.2 7.2m0-12.6a3.6 3.6 0 0 0-3.6 3.6h1.8a1.8 1.8 0 0 1 3.6 0c0 1.8-2.7 1.575-2.7 4.5h1.8c0-2.025 2.7-2.25 2.7-4.5A3.6 3.6 0 0 0 11 5.6z"
                                                                      transform="translate(-2 -2)"
                                                                      style={{fill: "#cecee2"}}></path>
                                                            </svg>
                                                        </button>
                                                        <div className="sv_img"/>
                                                        <div className="help-block"/>

                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="form-group field-signupform-address required">

                                            <input type="text" id="signupform-address"
                                                   className="form-control floating-input custom-for"
                                                   name="SignupForm[address]" placeholder="Ünvan"
                                                   aria-required="true"/>

                                            <div className="help-block"/>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group field-signupform-password required">
                                                    <input type="password" id="signupform-password"
                                                           className="form-control floating-input custom-for"
                                                           name="SignupForm[password]" placeholder="Şifrə"
                                                           aria-required="true"/>
                                                    <div className="help-block"/>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group field-signupform-repeat_password required">
                                                    <input type="password" id="signupform-repeat_password"
                                                           className="form-control floating-input custom-for"
                                                           name="SignupForm[repeat_password]"
                                                           placeholder="Təkrar şifrə" aria-required="true"/>

                                                    <div className="help-block"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="agree_rules row">
                                            <div className="col-md-6">
                                                <div className=" field-agreement required">
                                                    <input type="hidden" name="SignupForm[agreement]" value="0"/>
                                                    <input type="checkbox" id="agreement" name="SignupForm[agreement]"
                                                           value="1"/>
                                                    <label
                                                        className="control-label" htmlFor="agreement">
                                                        <a href="/page/user-agreement-5.html?lang=az"
                                                           target="_blank" title="">İstifadəçi
                                                            şərtləri</a> &nbsp; ilə razıyam</label>
                                                    <div className="help-block"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="login_submit col-md-6">
                                                <button type="submit">Qeydiyyatdan keç</button>
                                            </div>
                                        </div>

                                    </form>
                                </div>
                            </div>

                            {/*<div className="col-md-5 fiziki_reg_img">*/}
                            {/*    <div className="login_right_img reg_right_img full">*/}
                            {/*        <img src="/images/f_reg_img.svg" alt="">*/}
                            {/*    </div>*/}
                            {/*    <div className="have_account full">*/}
                            {/*        <p>Hesabınız var?<a href="/az/signin.html">Daxil olun</a></p>*/}
                            {/*    </div>*/}
                            {/*</div>*/}

                        </div>

                </div>
        </div>

        </>
);
}

export default Register;