import React, {useRef, useState} from 'react';
import './MyAddress.css'
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import {IconButton, TextField, Snackbar} from "@mui/material";
function MyAddress() {
    const [copySuccess, setCopySuccess] = useState('');
    const copyToClipBoard = async copyMe => {
        try {
            await navigator.clipboard.writeText(copyMe);
            setCopySuccess('Copied!');
        } catch (err) {
            setCopySuccess('Failed to copy!');
        }
    };
    return (
        <>
            <section className="details-headline section-structure sm-pages-pdng">
                <h4>Ünvanlarım</h4>
                <div className="tabs d-none">
                    <button className="btn btn--tab js-tab is-tab-active">
                        <img src="/frontend/web/uploads//images/country/Turkey.svg" alt="Türkiyə"/>
                            <span>Türkiyə</span>
                    </button>
                </div>
            </section>
            <section className="details-info vlct-section section-structure">
                <div className="tab1-content js-tab-content has-show">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="data">
                                <div>
                                    <div className="data__title">İsim Soyisim</div>
                                    {

                                    }
                                    <TextField
                                        type="text"
                                        id="outlined-read-only-input"
                                        defaultValue="Gunel Yusubova"
                                        InputProps={{
                                            readOnly: true,
                                            endAdornment:(
                                                <IconButton onClick={() => copyToClipBoard('Gunel Yusubova')}>
                                                    <ContentCopyOutlinedIcon className="copy"/>
                                                </IconButton>

                                            )
                                        }}
                                    />

                                </div>
                                {/*{copySuccess}*/}
                                {/*<Snackbar*/}
                                {/*    message="Copied to clibboard"*/}
                                {/*    anchorOrigin={{ vertical: "top", horizontal: "center" }}*/}
                                {/*    autoHideDuration={2000}*/}
                                {/*    onClose={() => setOpen(false)}*/}
                                {/*    open={open}*/}
                                {/*/>*/}
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="data">
                                <div>
                                    <div className="data__title">İlçe / Semt</div>
                                    <TextField
                                        id="outlined-read-only-input"
                                        defaultValue="Çatalca"
                                        InputProps={{
                                            readOnly: true,
                                            endAdornment:(
                                                <IconButton onClick={() => copyToClipBoard('Çatalca')}>
                                                    <ContentCopyOutlinedIcon className="copy"/>
                                                </IconButton>

                                            )
                                        }}
                                    />
                                </div>
                                {/*{copySuccess}*/}
                                {/*<Snackbar*/}
                                {/*    message="Copied to clibboard"*/}
                                {/*    anchorOrigin={{ vertical: "top", horizontal: "center" }}*/}
                                {/*    autoHideDuration={2000}*/}
                                {/*    onClose={() => setOpen(false)}*/}
                                {/*    open={open}*/}
                                {/*/>*/}
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="data">
                                <div>
                                    <div className="data__title">İl (Şehir)</div>
                                    <TextField
                                        id="outlined-read-only-input"
                                        defaultValue="İstanbul"
                                        InputProps={{
                                            readOnly: true,
                                            endAdornment:(
                                                <IconButton onClick={() => copyToClipBoard('Muratbey mah')}>
                                                    <ContentCopyOutlinedIcon className="copy"/>
                                                </IconButton>
                                            )
                                        }}
                                    />

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="data">
                                <div>
                                    <div className="data__title">Mahalle:</div>
                                    <TextField
                                        id="outlined-read-only-input"
                                        defaultValue="Muratbey mah"
                                        InputProps={{
                                            readOnly: true,
                                            endAdornment:(
                                                <IconButton onClick={() => copyToClipBoard('Muratbey mah')}>
                                                    <ContentCopyOutlinedIcon className="copy"/>
                                                </IconButton>
                                            )
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12">
                            <div className="data">
                                <div>
                                    <div className="data__title">Adres satır 1</div>
                                    <TextField
                                        id="outlined-read-only-input"
                                        defaultValue="VL366097 Muratbey mah. Çayıryolu cad. No 37"
                                        InputProps={{
                                            readOnly: true,
                                            endAdornment:(
                                                <IconButton onClick={() => copyToClipBoard('VL366097 Muratbey mah. Çayıryolu cad. No 37')}>
                                                    <ContentCopyOutlinedIcon className="copy"/>
                                                </IconButton>
                                            )
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="data">
                                <div>
                                    <div className="data__title">Cep numarası</div>
                                    <TextField
                                        id="outlined-read-only-input"
                                        defaultValue="05555857145"
                                        InputProps={{
                                            readOnly: true,
                                            endAdornment:(
                                                <IconButton onClick={() => copyToClipBoard('05555857145')}>
                                                    <ContentCopyOutlinedIcon className="copy"/>
                                                </IconButton>
                                            )
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="data">
                                <div>
                                    <div className="data__title">Postal code</div>
                                    <TextField
                                        id="outlined-read-only-input"
                                        defaultValue="34545"
                                        InputProps={{
                                            readOnly: true,
                                            endAdornment:(
                                                <IconButton onClick={() => copyToClipBoard('34545')}>
                                                    <ContentCopyOutlinedIcon className="copy"/>
                                                </IconButton>
                                            )
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="data">
                                <div>
                                    <div className="data__title">TC Kimlik</div>
                                    <TextField
                                        id="outlined-read-only-input"
                                        defaultValue="36498104467"
                                        InputProps={{
                                            readOnly: true,
                                            endAdornment:(
                                                <IconButton onClick={() => copyToClipBoard('36498104467')}>
                                                    <ContentCopyOutlinedIcon className="copy"/>
                                                </IconButton>

                                            )
                                       }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="data">
                                <div>
                                    <div className="data__title">Teslim alan kişi</div>
                                    <TextField
                                        id="outlined-read-only-input"
                                        defaultValue="Velocity LTD"
                                        InputProps={{
                                            readOnly: true,
                                            endAdornment:(
                                                <IconButton onClick={() => copyToClipBoard('Velocity LTD')}>
                                                    <ContentCopyOutlinedIcon className="copy"/>
                                                </IconButton>

                                            )
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="data">
                                <div>
                                    <div className="data__title">Adres başlığı</div>
                                    <TextField
                                        id="outlined-read-only-input"
                                        defaultValue="Velocity LTD"
                                        InputProps={{
                                            readOnly: true,
                                            endAdornment:(
                                                <IconButton onClick={() => copyToClipBoard('Velocity LTD')}>
                                                    <ContentCopyOutlinedIcon className="copy"/>
                                                </IconButton>

                                            )
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default MyAddress;