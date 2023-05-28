import React from 'react'
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import offer from "../images/offer.png"
import book from "../images/book.png"
import watch from "../images/watch.png"
import tv from '../images/tv.png'
import degree from "../images/degree.png"
import ads from "../images/ads.png"
import { Button, Container } from '@mui/material';
import signup from "../images/signup.png"
import subs from "../images/subs.png"
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import tag from "../images/tag.png"
import recomm from "../images/recommended.png"
import bTag from "../images/bTag.png"
import tTag from "../images/149.png"
import fTag from "../images/99.png"
import clock from "../images/clock.png"
import Razor from "../images/Razor.png"
import include from "../images/included.png"
export default function Cards() {
    const [value, setValue] = React.useState('');
    const [error, setError] = React.useState(false);

    const handleRadioChange = (event) => {
        setValue(event.target.value);

        setError(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (value === 'best') {

            setError(false);
        } else if (value === 'worst') {

            setError(true);
        } else {

            setError(true);
        }
    };
    return (
        <div>
            <Container maxWidth="xl" >
                <Grid container spacing={2} >
                    <Grid item sx={{ marginTop: "140px", }} display="flex" justifyContent="center" xs={12} sm={12} md={12} lg={6} xl={6}>
                        <div className="center" style={{ width: "400px", }}>
                            <Typography sx={{
                                width: "405px",
                                height: "10px",
                                fontStyle: "normal",
                                fontWeight: "300",
                                fontSize: "30px",
                                color: "white",
                                letterSpacing: "-0.01em",
                                display: "block"

                            }}>Access curated courses worth</Typography>

                            <Typography sx={{ marginTop: "34px", width: "401px", height: "40px" }}><span style={{
                                fontSize: "32px",
                                fontStyle: "normal",
                                fontWeight: "600",
                                letterSpacing: "-0.01em",
                                color: "white",
                            }} > ₹ 18,500</span><span style={{
                                color: "white",
                                fontSize: "28px",
                                fontWeight: "600",
                                letterSpacing: "-0.01em"
                            }}> at just</span>
                                <span style={{
                                    color: "#0096FF",
                                    fontSize: "32px",
                                    fontWeight: "600",
                                    fontStyle: "normal",
                                    letterSpacing: "-0.01em"
                                }}>  ₹ 99</span>
                                <span style={{
                                    fontStyle: "normal",
                                    fontWeight: "600",
                                    fontSize: "26px",
                                    letterSpacing: "-0.01em",
                                    color: "white",

                                }}> per year!</span>

                            </Typography>

                            <Typography style={{ marginTop: "21px", display: "flex", alignItems: "center" }}><img src={book} width="36px" height="36px" alt="book" /><Typography sx={{
                                marginLeft: "34px",
                                fontSize: "16px",
                                fontStyle: "normal",
                                fontWeight: "300",
                                letterSpacing: "0.03em",


                            }}><span style={{ color: "#0096FF" }}>100+ </span> <span style={{ color: "white" }}>Job relevant courses</span></Typography> </Typography>

                            <Typography style={{ marginTop: "21px", display: "flex", alignItems: "center" }}><img src={watch} width="36px" height="36px" alt="watch" /><Typography sx={{
                                marginLeft: "34px",
                                fontSize: "16px",
                                fontStyle: "normal",
                                fontWeight: "300",
                                letterSpacing: "0.03em",


                            }}><span style={{ color: "#0096FF" }}>20,000+ </span> <span style={{ color: "white" }}> Hours of content</span></Typography> </Typography>

                            <Typography style={{ marginTop: "21px", display: "flex", alignItems: "center" }}><img src={tv} width="36px" height="36px" alt="watch" /><Typography sx={{
                                marginLeft: "34px",
                                fontSize: "16px",
                                fontStyle: "normal",
                                fontWeight: "300",
                                letterSpacing: "0.03em",


                            }}><span style={{ color: "#0096FF" }}>Exclusive </span> <span style={{ color: "white" }}>  webinar access</span></Typography> </Typography>

                            <Typography style={{ marginTop: "21px", display: "flex", alignItems: "center" }}><img src={degree} width="36px" height="36px" alt="watch" /><Typography sx={{
                                marginLeft: "34px",
                                fontSize: "16px",
                                fontStyle: "normal",
                                fontWeight: "300",
                                letterSpacing: "0.03em",


                            }}><span style={{ color: "white" }}>Scholarship worth</span>  <span style={{ color: "#0096FF" }}>₹94,500</span> </Typography> </Typography>

                            <Typography style={{ marginTop: "21px", display: "flex", alignItems: "center" }}><img src={ads} width="36px" height="36px" alt="watch" /><Typography sx={{
                                marginLeft: "34px",
                                fontSize: "16px",
                                fontStyle: "normal",
                                fontWeight: "300",
                                letterSpacing: "0.03em",


                            }}><span style={{ color: "#0096FF" }}>Ad Free </span> <span style={{ color: "white" }}>  learning experience</span></Typography> </Typography>


                        </div>
                    </Grid>
                    <Grid item display="flex" justifyContent="center" sx={{ marginTop: "140px", }} xs={12} sm={12} md={12} lg={6} xl={6}>
                        <div className="center" style={{
                            width: "400px",
                            borderRadius: "8px",
                            background: "white",

                        }}>
                            <div style={{ display: "flex", justifyContent: "center", gap: "88px", marginTop: "16px" }}>
                                <Button><img src={signup} alt="signup" /></Button>
                                <Button><img src={subs} alt="signup" /></Button>

                            </div>
                            <div style={{ display: "flex", justifyContent: "center" }}>
                                <Typography sx={{
                                    color: "#3C4852",
                                    fontStyle: "normal",
                                    fontWeight: "600",
                                    fontSize: "18px",
                                    marginTop: "14px"
                                }}>Select your subcription plan</Typography>
                            </div>


                            <form onSubmit={handleSubmit}>
                                <FormControl error={error} variant="standard">

                                    <RadioGroup
                                        aria-labelledby="demo-error"

                                        value={value}
                                        onChange={handleRadioChange}
                                    >




                                        <div className='radio1'>
                                            <FormControlLabel value="Limited time offer -18401 Offer valid till 25th March 2023" control={<Radio />}
                                                label={<Typography sx={{
                                                    fontWeight: "600",
                                                    fontStyle: "normal",
                                                    fontSize: "16px",
                                                    color: "#BEBEBE",
                                                }}>12 Months Subscription </Typography>} />
                                            <img style={{
                                                position: "absolute",
                                                marginBottom: "50px",
                                                marginLeft: "31px",
                                                width: "130px",
                                                borderRadius: "0px 0px 4px 4px",
                                            }} src={offer} alt="offer" />

                                            <img style={{ marginLeft: "22.2px" }} src={tag} alt="atg" />

                                        </div>

                                        <div className='radio2'>
                                            <FormControlLabel value="12 Months Subscription -18321" control={<Radio />} label={<Typography sx={{
                                                fontStyle: "normal",
                                                fontSize: "16px",
                                                fontWeight: "600",
                                                color: "#3C4852"
                                            }}>12 Months Subscription </Typography>} />
                                            <img style={{
                                                position: "absolute",
                                                marginBottom: "50px",
                                                marginLeft: "31px",
                                                width: "130px",
                                                borderRadius: "0px 0px 4px 4px",
                                            }} src={recomm} alt="offer" />
                                            <img style={{ marginLeft: "13.3px" }} src={bTag} alt="atg" />
                                        </div>
                                        <div className='radio'>
                                            <FormControlLabel value="6 Months Subscription -18351" control={<Radio />} label={<Typography sx={{
                                                fontSize: "16px",
                                                fontStyle: "normal",
                                                fontWeight: "600",
                                                color: "#3C4852;"
                                            }}>6 Months Subscription </Typography>} />
                                            <img style={{ marginLeft: "22.4px" }} src={tTag} alt="atg" />
                                        </div>
                                        <div className='radio'>

                                            <FormControlLabel className='color' aria-labelledby='last' value="3 Months Subscription -18401" control={<Radio />} label={<Typography sx={{
                                                color: "#BEBEBE",
                                                fontWeight: "600",
                                                fontSize: "16px",
                                                fontStyle: "normal",
                                                color: "#3C4852"
                                            }}>3 Months Subscription </Typography>} />
                                            <img style={{ marginLeft: "31.3px" }} src={fTag} alt="atg" />
                                        </div>
                                        <div>
                                            <hr style={{
                                                marginLeft: "24px",
                                                marginRight: "24px",
                                                marginTop: "28px",
                                                background: "#BEBEBE",
                                                height: "1px"


                                            }} />
                                        </div>
                                        <div style={{ display: "flex", justifyContent: "space-around" }}>
                                            <Typography sx={{
                                                fontSize: "16px",
                                                fontStyle: "normal",
                                                fontWeight: "400",
                                                color: "#3C4852;",
                                                marginRight: "45px",
                                              
                                            }}>Subscription Fee</Typography>
                                            <Typography sx={{
                                                fontWeight: "500",
                                                fontStyle: "normal",
                                                fontSize: "16px",
                                                color: "#3C4852;"
                                            }}>₹18,500</Typography>
                                        </div>
                                        {value === "Limited time offer -18401 Offer valid till 25th March 2023" ? <div className='red' style={{ marginTop: "14px", marginBottom: "20px" }}>
                                          <div style={{display:"flex",}}>
                                            <Typography sx={{
                                                color: "#DE4313",
                                                fontSize: "16px",
                                                fontStyle: "normal",
                                                fontWeight: "600",
                                                marginTop:"-27px",
                                                
                                            

                                            }}>{value.slice(0, 18)}</Typography>
                                            <Typography sx={{
                                                fontSize: "16px",
                                                fontStyle: "normal",
                                                fontWeight: "600",
                                                letterSpacing: "0.03em",
                                                color: " #3C4852",
                                                marginTop:"-27px",
                                              marginLeft:"105.8px"
                                              }}>- ₹18,401</Typography></div>
                                              <div style={{display:"flex",position:"absolute",marginTop:"37px"}}> 
                                                <img  src={clock} alt="ghadi"/>
                                                <Typography sx={{marginLeft:"5px",
                                                                 fontStyle:"normal",
                                                                 fontWeight:"400",
                                                                 fontSize:"14px",
                                                                 color:"#DE4313"
                                            }} >Offer valid till 25th March 2023 </Typography>
                                             </div>
                 
                                                    
                                                  
                                                    
                                        </div> : ""}


                                        {value === "12 Months Subscription -18321" ? <div className='radio' style={{ display: "flex", justifyContent: "space-between", marginTop: "14px", marginBottom: "20px" }}>
                                            <Typography sx={{

                                                fontSize: "16px",
                                                fontStyle: "normal",
                                                fontWeight: "600"
                                            }}>{value.slice(0, 22)}</Typography>
                                            <Typography sx={{
                                                fontSize: "16px",
                                                fontStyle: "normal",
                                                fontWeight: "600",
                                                letterSpacing: "0.03em",
                                                color: " #3C4852"

                                            }}>{value.slice(23, 29)}</Typography>

                                        </div> : ""}

                                        {value === "6 Months Subscription -18351" ? <div className='radio' style={{ display: "flex", justifyContent: "space-between", marginTop: "14px", marginBottom: "20px" }}>
                                            <Typography sx={{

                                                fontSize: "16px",
                                                fontStyle: "normal",
                                                fontWeight: "600"
                                            }}>{value.slice(0, 21)}</Typography>
                                            <Typography sx={{
                                                fontSize: "16px",
                                                fontStyle: "normal",
                                                fontWeight: "600",
                                                letterSpacing: "0.03em",


                                            }}>{value.slice(21, 28)}</Typography>


                                        </div> : ""}

                                        {value === "3 Months Subscription -18401" ? <div className='radio' style={{ display: "flex", justifyContent: "space-between", marginTop: "14px", marginBottom: "20px" }}>
                                            <Typography sx={{

                                                fontSize: "16px",
                                                fontStyle: "normal",
                                                fontWeight: "600"
                                            }}>{value.slice(0, 22)}</Typography>
                                            <Typography sx={{
                                                fontSize: "16px",
                                                fontStyle: "normal",
                                                fontWeight: "600",
                                                letterSpacing: "0.03em",


                                            }}>{value.slice(22, 28)}</Typography>

                                        </div> : ""}

                                        {value === "" ? "" : <div style={{display:"flex",justifyContent:"space-around"}}>
                                            <Typography sx={{marginRight:"30px"}} >Total (Incl. of 18% GST)</Typography>
                                            <Typography >₹149</Typography>
                                        </div>}

                                        {value === "" ? "" : <div style={{marginTop:"46px",display:"flex",justifyContent:"center",gap:"10px"}}>
                                            <Button sx={{
                                                width:"170px",
                                                height:"56px",
                                                border: "2px solid #F77171",
                                                borderRadius:"4px",
                                                fontStyle:"normal",
                                                fontWeight:"700",
                                                fontSize:"19px",
                                                color:"#F77171",

                                               
                                            }}>cancel</Button>
                                            <Button  sx={{
                                                width:"170px",
                                                height:"56px",
                                                background:"#47BA68",
                                                borderRadius:"4px",
                                                color:"white",
                                                fontStyle:"normal",
                                                fontWeight:"700",
                                                fontSize:"16px",
                                                textTransform:"uppercase",
                                                "&:hover": {backgroundColor: "#47BA68"}
                                                
                                            }}>proceed to pay</Button>
                                        </div>}
                                        
                                        <div style={{marginTop:"28px",marginBottom:"32px"}}>
                                            <Button style={{marginLeft:"20px"}} ><img style={{width:"120px",}} src={Razor} alt='Razor'/></Button>
                                        </div>



                                    </RadioGroup>
                                </FormControl>
                            </form>

                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
