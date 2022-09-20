import React, {useState} from 'react';
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import photo from './no-photo.jpeg';
import './Settings.css';
import MultipleSelect from "./FormControll";
import {Box, FormControl, MenuItem, Select, TextField} from "@mui/material";




function Settings() {
    const [seria, setSeria] = React.useState('');
    const serias = [
        'AZE',
        'AA',
    ];
    const handleChange = (event) => {
        setSeria(event.target.value);
    };

    const [name, setName] = React.useState('26.11.1995');
    const onChange = (event) => {
        setName(event.target.value);
    };

    const[number,setNumber]=useState('055-956-78-68');
    const changeNumber = (event) => {
        setNumber(event.target.value);
    };

    const[email,setEmail]=useState('gunelfy@code.edu.az');
    const changeEmail = (event) =>{
        setEmail(event.target.value);
    }

    const[seriaNum,setSeriaNum]=useState('2715306');
    const changeSeriaNum = (event) =>{
        setSeriaNum(event.target.value);
    }

    const[fincode,setFinCode]=useState('626UKDP');
    const changeFinCode = (event) =>{
        setFinCode(event.target.value);
    }

    const[address,setAddress]=useState('Shafayet Mehdiyev 1054');
    const changeAddress = (event) =>{
        setAddress(event.target.value);
    }
    return (
        <>
            <section className="details-headline section-structure section-pdng sm-pages-pdng">
                <h4>Hesab tənzimləmələri</h4>
                <a href="/account/change-password?lang=az" className="btn btn--primary">Şifrəni yenilə</a>
            </section>
            <div className="custom-form">
                <form id="w0" action="/account/setting?lang=az" method="post" encType="multipart/form-data">
                    <input type="hidden" name="_csrf-frontend" value="NjdiCL7QUOiEyNvQOJpnL2bm4pCA0BsQ0jc7Wv4mJF5CewMx8f0RguaglKNI0CZ5E6Cv9vG6cUHhQWJii2RgFw=="/>
                    <section className="settings-customer section-structure sm-pages-pdng p-32">
                        <div>
                            <h6 className="title">Müştəri</h6>
                            <div className="customer-name">Gunel Yusubova</div>
                            <p className="customer-id">ID: VL366097</p>
                        </div>
                        <div className="change-account-img field-profile-img">
                            <div className="customer-image-wrapper order-first order-sm-last profile-img ">
                                <div className="customer-image">
                                    <img src={photo} className="img-file account-img" alt="User Profile"/>
                                </div>
                            </div>

                        </div>
                    </section>

                    <section className="settings section-structure p-32 vlct-section sm-pages-pdng">
                        <div className="input-btw pb-32">
                            <div className="form-floating  w-100 field-user-phone_number required bg-input">
                                <Box
                                    component="form"
                                    sx={{
                                        '& > :not(style)': { m: 1, width: '25ch' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField
                                        className="tel"
                                        id="component-filled"
                                        label="Telefon nömrəsi"
                                        value={number}
                                        onChange={changeNumber}
                                    />
                                </Box>
                            </div>
                            <div className="form-floating bg-input  w-100 field-user-email required">
                                <Box
                                    component="form"
                                    sx={{
                                        '& > :not(style)': { m: 1, width: '25ch' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField
                                        className="tel"
                                        id="component-filled"
                                        label="Email"
                                        value={email}
                                        onChange={changeEmail}
                                    />
                                </Box>
                            </div>
                        </div>
                        <div className="input-btw mb-32">
                            <div className="field-birthdate required">
                                <div className="input-flex input-width bg-input ps-0">
                                    <div className="form-floating w-100">
                                        <Box
                                            component="form"
                                            sx={{
                                                '& > :not(style)': { m: 1, width: '25ch' },
                                            }}
                                            noValidate
                                            autoComplete="off"
                                        >
                                            <TextField
                                                id="component-filled"
                                                label="Doğum tarixi"
                                                value={name}
                                                onChange={onChange}
                                            />
                                        </Box>
                                    </div>
                                    <label className="add-on" htmlFor="birthdate">
                                        <CalendarMonthOutlinedIcon className="calendar"/>
                                    </label>
                                </div>
                            </div>
                            <div className="form-floating field-select2-placeholder">
                                <div className="custom_placeholder_select2 form-group input-width bg-input">
                                    <MultipleSelect/>
                                </div>
                            </div>
                        </div>
                        <div className="input-btw pb-32">
                            <div className=" field-user-document_number required">
                                <div className="newcommit-input bg-input input-width">
                                    <Box  component="form"

                                          noValidate
                                          autoComplete="off"
                                    >

                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={seria}
                                                onChange={handleChange}
                                            >
                                                {serias.map((seria) => (
                                                    <MenuItem
                                                        key={seria}
                                                        value={seria}
                                                    >
                                                        {seria}
                                                    </MenuItem>
                                                ))}

                                            </Select>
                                            <TextField
                                               id="component-filled"
                                               className="seriaNumber"
                                               label="Sənədin nömrəsi"
                                               value={seriaNum}
                                               onChange={changeSeriaNum}
                                                />
                                    </Box>
                                </div>


                            </div>
                            <div className=" field-user-document_fin required">
                                <div className="input-flex bg-input  input-width">
                                    <div className="form-floating ">
                                        <Box
                                            component="form"
                                            sx={{
                                                '& > :not(style)': { m: 1, width: '25ch' },
                                            }}
                                            noValidate
                                            autoComplete="off"
                                        >
                                            <TextField
                                                id="component-filled"
                                                label="Ş/V-nin FIN kodu"
                                                value={fincode}
                                                onChange={changeFinCode}
                                            />
                                        </Box>
                                    </div>
                                    <HelpOutlinedIcon className="help"/>
                                </div>

                            </div>
                        </div>

                        <div className="form-floating input-width field-user-address form-control bg-input">
                            <Box
                                component="form"
                                sx={{
                                    '& > :not(style)': { m: 1, width: '25ch' },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <TextField
                                    className="tel"
                                    id="component-filled"
                                    label="Ünvan"
                                    value={address}
                                    onChange={changeAddress}
                                />
                            </Box>
                        </div>
                        <div className="newcommit-buttons">
                            <button href="/account/index?lang=az" className="btn btn--secondary">Ləğv et</button>
                            <button type="submit" className="btn btn--primary">Yadda saxla</button>
                        </div>
                    </section>
                </form>
            </div>

        </>
    );
}

export default Settings;