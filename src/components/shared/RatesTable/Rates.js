import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import flag from '../../../assets/turk.png';
import Slider from "react-slick";
import {useState} from "react";
import './MultiTables.css';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.white,
        color: theme.palette.common.black,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
        fontWeight:"bolder",
        backgroundColor: "#ffffff"

    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));


function createData(weight,price,) {
    return { weight, price};
}

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            id="nextArrow"
            className=" slick-next"
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            id="prevArrow"
            className="slick-prev"
            onClick={onClick}
        />
    );
}


const rows = [
    createData('0 kq - 0.1 kq', 1.00),
    createData('0.1 kq - 0.25 kq', 2.00),
    createData('0.25 kq - 0.5 kq', 3.00),
    createData('0.5 kq - 0.7 kq', 4.00),
    createData('0.7 kq - 1 kq', 4.50),
];

export default function Rates() {
    const [sliderRef, setSliderRef] = useState(null)

      const settings = {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
          responsive: [
              {
                  breakpoint: 1024,
                  settings: {
                      slidesToShow: 2,
                  },
              },
              {
                  breakpoint: 800,
                  settings: {
                      slidesToShow: 1,
                  },
              },
          ],
        };
    return (

        <div className='container' >
            <div className="row">
                <div className="traffic-ad">
                    <h2 className='traffic-name'>Tariflər</h2>
                </div>

                <Slider className='traffic-slider' ref={setSliderRef}  {...settings}>

                    <div key="1" >
                        <TableContainer
                            style={{padding:"17px 9px 14px",border:"1px solid rgba(0,0,0,.125)",marginBottom:"20px",flexDirection:"column",background:"#fff",borderRadius:"8px",boxShadow:"0px 4px 10px rgb(0 0 0 / 5%)"}}
                            component={Paper}>
                            <Table  sx={{ minWidth: 500}}  aria-label="customized table">
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell style={{display:"flex"}}>
                                            <img src={flag} className='flag' style={{width:"20px",height:"20px", borderRadius:10}} alt=""/>
                                            <span className="country">Türkiyə</span>
                                        </StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <StyledTableRow  key={row.weight}>
                                            <StyledTableCell className='table-td' component="th" scope="row">
                                                {row.weight}
                                            </StyledTableCell>
                                            <StyledTableCell className='table-td' align="center">{row.price}$</StyledTableCell>
                                        </StyledTableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                    <div key="2">
                        <TableContainer
                            style={{marginLeft:"20px",padding:"17px 9px 14px",border:"1px solid rgba(0,0,0,.125)",marginBottom:"20px",flexDirection:"column",background:"#fff",borderRadius:"8px",boxShadow:"0px 4px 10px rgb(0 0 0 / 5%)"}}
                            component={Paper}>
                            <Table  sx={{ minWidth: 500}}  aria-label="customized table">
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell style={{display:"flex"}}>
                                            <img src={flag} className='flag' style={{width:"20px",height:"20px", borderRadius:10}} alt=""/>
                                            <span className="country">Azərbaycan</span>
                                        </StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <StyledTableRow  key={row.weight}>
                                            <StyledTableCell className='table-td' component="th" scope="row">
                                                {row.weight}
                                            </StyledTableCell>
                                            <StyledTableCell className='table-td' align="center">{row.price}$</StyledTableCell>
                                        </StyledTableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                    <div key="3">
                        <TableContainer
                            style={{marginLeft:"50px",padding:"17px 9px 14px",border:"1px solid rgba(0,0,0,.125)",marginBottom:"20px",flexDirection:"column",background:"#fff",borderRadius:"8px",boxShadow:"0px 4px 10px rgb(0 0 0 / 5%)"}}
                            component={Paper}>
                            <Table  sx={{ minWidth: 500}}  aria-label="customized table">
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell style={{display:"flex"}}>
                                            <img src={flag} className='flag' style={{width:"20px",height:"20px", borderRadius:10}} alt=""/>
                                            <span className="country">Çin</span>
                                        </StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <StyledTableRow  key={row.weight}>
                                            <StyledTableCell className='table-td' component="th" scope="row">
                                                {row.weight}
                                            </StyledTableCell>
                                            <StyledTableCell className='table-td' align="center">{row.price}$</StyledTableCell>
                                        </StyledTableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                </Slider>
            </div>

        </div>

    );
}
