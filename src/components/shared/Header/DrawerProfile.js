import React, { useState } from "react";
import {
    Drawer,
    IconButton,
    List, ListItem, ListItemButton, ListItemIcon, ListItemText,
} from "@mui/material";
import photo from "../../Profile/no-photo.jpeg";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import {Link} from "react-router-dom";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import '../../Profile/Profile.css';
import SettingsIcon from '@mui/icons-material/Settings';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import CurrentSection from "../../Profile/CurrentSection";


const DrawerProfile = () => {
    const [section, setSection] = useState(0);
    const [openDrawer1, setOpenDrawer1] = useState(false);
    return(
        <React.Fragment>
            <IconButton

                sx={{ color: "inherit" }}
                onClick={() => setOpenDrawer1(!openDrawer1)}
            >
                <KeyboardArrowDownOutlinedIcon color="white"   className='close-icon' />
            </IconButton>
            <Drawer
                anchor="right"
                open={openDrawer1}
                onClose={() => setOpenDrawer1(false)}
            >
                           <List>
                                <div className="side-dashboard__top">
                                    <div className="user-div">
                                        <div className="user-image-dsk">
                                            <div className="user-image">
                                                <img src={photo} alt="Gunel Yusubova"/>
                                            </div>
                                        </div>
                                        <h6 className="name">Gunel Yusubova</h6>
                                        <p className="id">ID: VL366097</p>
                                    </div>

                                    {/*<CloseIcon className="icon-close_two_tone close-icon" id="closeDasboardIcon"/>*/}
                                </div>
                                <div className="sidebar section-structure sm-pages-pdng">
                                   <div className="sidebar__buttons">
                                       <Link to="#" onClick={()=>alert('Salam') } className="btn btn--secondary">Bəyan
                                           et</Link>
                                       <Link to="#" onClick={()=>alert('Salam')}  className="btn btn--primary">
                                           Sifariş et
                                       </Link>
                                   </div>

                                        <ListItem className="sidebar__list">
                                            <MapOutlinedIcon className="MuiSvgIcon-root"/>
                                            <Link to="#" onClick={()=>alert('Salam')}
                                                  className="sidebar__list-link"
                                            ><ListItemText>Ünvanlarım</ListItemText>
                                            </Link>
                                        </ListItem>
                                        <ListItem className="sidebar__list">
                                            <Inventory2OutlinedIcon className="MuiSvgIcon-root"/>
                                            <Link to="#" onClick={()=>alert('Salam')}  className="sidebar__list-link">
                                                <span>Bağlamalarım</span>
                                            </Link>
                                        </ListItem>
                                        <ListItem className="sidebar__list">
                                            <AssignmentTurnedInOutlinedIcon className="MuiSvgIcon-root"/>
                                            <Link to="#" onClick={()=>alert('Salam')}
                                                  className="sidebar__list-link"
                                            ><span>Sifarişlərim</span>
                                            </Link>
                                        </ListItem>
                                        <ListItem className="sidebar__list">
                                            <AccountBalanceWalletIcon className="MuiSvgIcon-root"/>
                                            <Link to="#" onClick={()=> alert('Money')} className="sidebar__list-link"><span>Balans</span></Link>
                                        </ListItem>
                                        <ListItem className="sidebar__list">
                                           <SettingsIcon/>
                                           <Link to="#" className="sidebar__list-link" onClick={()=> alert('hello') }>Hesab tənzimləmələri</Link>
                                         </ListItem>
                                        <ListItem className="sidebar__list">
                                            <PowerSettingsNewIcon/>
                                            <Link to="#"
                                              className="sidebar__list-link">
                                              <span>Hesabdan çıxış</span>
                                            </Link>
                                        </ListItem>
                                </div>
                           </List>


            </Drawer>
        </React.Fragment>
    )
}

export default DrawerProfile;