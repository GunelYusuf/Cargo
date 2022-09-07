import React from 'react';
import './ForgetPassword.css';

function ForgetPassword() {
    return (
        <div className="container-fluid h-custom" style={{marginTop:'150px'}}>
            <div className="row d-flex justify-content-center align-items-center h-100">
                <h1 style={{textAlign:'center'}}>Şifrəni unutdum</h1>
                <div className="col-md-8 col-lg-6 col-xl-4">
                           <p>Şifrənizin yenilənməsi üçün email adresinizi daxil edin</p>
                            <label className="label-default" htmlFor="un">Email</label>
                            <input
                                id="email_addy"
                                name="email_addy"
                                className="form-control"
                                type="text"
                                style={{borderRadius:'5px'}}/><br></br>
                            <a id="mybad" className="btn btn-primary" role="button">I FORGOT</a>
                        </div>
            </div>
        </div>
);
}

export default ForgetPassword;