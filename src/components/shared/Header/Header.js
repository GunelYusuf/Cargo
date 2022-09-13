import React, {useState} from 'react';
import {
    AppBar,
    Button,
    Tab,
    Tabs,
    Toolbar,
    Typography,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import DrawerComp from "./DrawerComp";
import './Header.css';
import {Link} from "react-router-dom";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';



export const Header = () => {
    const [value, setValue] = useState(0);
    const theme = useTheme();

    const isMatch = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <React.Fragment>
            <AppBar className='navbarist' >
                <div className="container header-container">
                    <div className="row">
                        <div className="header-top">
                            <div className="header-top-holder">
                                <div className="header-top-holder-navigation">
                                    <div className="header-top-holder-navigation-list">
                                        <a href="#" className='header-top-holder-navigation-list-link'>Daşıma şərtləri</a>
                                        <a href="#" className='header-top-holder-navigation-list-link'>Tez-tez verilən suallar</a>
                                        <a href="#" className='header-top-holder-navigation-list-link'>Qadağan olunmuş məhsullar</a>
                                    </div>
                                </div>
                                <div className="header-top-holder-action">
                                    <Link to="#" className='order-button' ><span>Sifariş et</span></Link>
                                </div>
                            </div>
                        </div>
                        <Toolbar>
                         <div className="header-logo">
                             <Link to='#'><span >AlfaEx</span></Link>
                         </div>

                            {isMatch ? (
                                <>
                                    <Typography sx={{ fontSize: "2rem", paddingLeft: "70%" }}>
                                        <Button className='logIn' sx={{ marginLeft: "auto" }}>
                                            Giriş
                                        </Button>
                                    </Typography>
                                    <DrawerComp />
                                </>
                            ) : (
                                <>
                                    <Tabs
                                        className='navbar-tablist'
                                        sx={{ marginLeft: "auto" }}
                                        textColor="inherit"
                                        value={value}
                                        onChange={(e, value) => setValue(value)}
                                        TabIndicatorProps={{
                                            style: {
                                                backgroundColor: "#ec1839",
                                            }
                                        }}
                                    >
                                        <Tab label="Haqqımızda"/>
                                        <Tab label="Tariflərimiz"  />
                                        <Tab label="Mağazalar"/>
                                        <Tab label="Xəbərlər" />
                                        <Tab label="Bizimlə Əlaqə"  />
                                    </Tabs>
                                    <Link to='/myorders'>
                                        <div className="basketAll">
                                            <ShoppingBasketIcon className="basket"/>
                                            <span className="cart-count">1</span>
                                        </div>

                                    </Link>

                                    <Button className='logIn' sx={{ marginLeft: "auto" }}>
                                        Giriş
                                    </Button>
                                    <Button className='signIn' sx={{ marginLeft: "10px" }} variant="contained">
                                        Qeydiyyat
                                    </Button>
                                </>
                            )}
                        </Toolbar>
                    </div>
                </div>
            </AppBar>
        </React.Fragment>
    )
}
