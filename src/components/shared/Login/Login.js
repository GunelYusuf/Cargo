import './Login.css'

const Login = () => {
    return (
               <div className="container-fluid h-custom"  style={{marginTop:'150px'}}>
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <h1 className='login-title'>Daxil ol</h1>
                        <div className="col-md-9 col-lg-6 col-xl-5">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                                    className="img-fluid" alt="Sample image"/>
                        </div>
                        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                    <form>
                        <div className="form-outline mb-4">
                            <input type="email" id="form3Example3" className="form-control form-control-lg"
                                   placeholder="Email adresinizi daxil edin"/>
                            <label className="form-label" htmlFor="form3Example3">Email</label>
                        </div>
                        <div className="form-outline mb-3">
                            <input type="password" id="form3Example4" className="form-control form-control-lg"
                                   placeholder="Şifrənizi daxil edin"/>
                            <label className="form-label" htmlFor="form3Example4">Şifrə</label>
                        </div>

                        <div className="d-flex justify-content-between align-items-center">
                            <div className="form-check mb-0">
                                <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3"/>
                                <label className="form-check-label" htmlFor="form2Example3">
                                    Məni yadda saxla
                                </label>
                            </div>
                            <a href="#!" className="text-body">Şifrəni unutdunuz?</a>
                        </div>

                        <div className="text-center text-lg-start mt-4 pt-2">
                            <button type="button" className="btn btn-primary btn-lg login-button">
                                Daxil ol
                            </button>
                            <p className="small fw-bold mt-2 pt-1 mb-0">Hesabınız yoxdur? <a href="#!" className="link-danger">Qeydiyyat</a>
                            </p>
                        </div>

                    </form>
                </div>
                    </div>
               </div>
    );
}

export default Login;