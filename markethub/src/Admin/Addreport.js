import Layout from "../Components/Layout";
import Adminnavbar from "./Components/Adminnavbar";
import React, { useEffect, useState } from 'react';
import axios from "axios";


export default function Addreport() {

    const[file, setFile] = useState();




    const [cname, setCname] = useState();



    const hcname = (e)=>{
        setCname(e.target.value);
   }



   const [addhed, setHed] = useState();

   const hsetHed = (e)=>{
    setHed(e.target.value);
}


const [addtit, setTit] = useState();

const hsetTit = (e)=>{
    setTit(e.target.value);
}


const [addser, setSer] = useState();
const hsetSer = (e)=>{
    setSer(e.target.value);
}


const [adddes, setDes] = useState();
const hsetDes = (e)=>{
    setDes(e.target.value);
}


const [addtoc, setToc] = useState();
const hsetToc = (e)=>{
    setToc(e.target.value);
}


const [addmti, setMet] = useState();
const hsetMet = (e)=>{
    setMet(e.target.value);
}

const [addmdc, setMes] = useState();
const hsetMes = (e)=>{
    setMes(e.target.value);
}

const [addsta, setSta] = useState();
const hsetSta = (e)=>{
    setSta(e.target.value);
}


const [addsup, setSup] = useState();
const hsetSup = (e)=>{
    setSup(e.target.value);
}

const [addmup, setMup] = useState();
const hsetMup = (e)=>{
    setMup(e.target.value);
}

const [addcup, setCup] = useState();
const hsetCup = (e)=>{
    setCup(e.target.value);
}



const [adddate, setDate] = useState();
const hsetDate = (e)=>{
    setDate(e.target.value);
}

const Formsubmit = (e) => {
   
        e.preventDefault();

        const formData = new FormData();

     
        formData.append('catid', cname);
        formData.append('title', addtit);
        formData.append('service', addser);
        formData.append('descr', adddes);
        formData.append('tableofcontents', addtoc);
        formData.append('status', addsta);
        formData.append('img', file);
        formData.append('heading', addhed);
        formData.append('single_price', addsup);
        formData.append('multi_price', addmup);
        formData.append('corporate_price', addcup);
        formData.append('cdate', adddate);
        formData.append('metatitle', addmti);
        formData.append('metadescr', addmdc);


       
      
      
     
       
      
     
      


        console.log(formData);

        axios.post("http://localhost:8001/addreport" , formData). then(res =>{
            console.log(formData);


        }).catch(er=>{
            console.log(er);
        });;
     
      

         
      



        

    }

 const [category, setCategory]= useState([]);

    useEffect(()=>{
        const getCategory = async()=>{
            const reqData = await fetch("http://localhost:8001/api/category");
            const resData = await reqData.json();
            console.log(resData);
            setCategory(resData);
          
        }
        getCategory();
    },[ ]);

    return <Layout>
            {
                <>
                    <div class="rbt-banner-area rbt-banner-3 header-transperent-spacer">
                        <div class="wrapper">

                        </div>
                        <div class="shape-wrapper">

                            <div class="top-shape">
                                <img src="assets/images/banner/top-shape.png" alt="Banner Images" />
                            </div>

                        </div>
                    </div>
               
             
                    <div className="rbt-dashboard-area rbt-section-overlayping-top rbt-section-gapBottom">
                        <div className="container mt--200">
                            <div className="row">
                                <div className="col-lg-12">
                            
                                    <div className="rbt-dashboard-content-wrapper">
                                  
                               
                                        <div className="rbt-tutor-information">
                                            <div className="rbt-tutor-information-left">


                                            </div>
                                       
                                        </div>
                                
                                    </div>
                             

                                    <div className="row g-5">
                                        <div className="col-lg-3">
                                     
                                            <div className="rbt-default-sidebar sticky-top rbt-shadow-box rbt-gradient-border">
                                                <div className="inner">
                                                    <div className="content-item-content">

                                                        <div className="rbt-default-sidebar-wrapper">
                                                            <div className="section-title mb--20">
                                                                <h6 className="rbt-title-style-2">Welcome, </h6>
                                                            </div>
                                                            <Adminnavbar />







                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                    
                                        </div>

                                        <div className="col-lg-9">
                                  
                                            <div className="rbt-dashboard-content bg-color-white rbt-shadow-box">
                                                <div className="content">
                                                    <div className="section-title">
                                                        <h4 className="rbt-title-style-3">Add Report
                                                        </h4>
                                                    </div>


                                           
                                             
                                         

                                            

                                                    <div className="">

                                                        <form onSubmit={(e) => Formsubmit(e)} class="rbt-profile-row rbt-default-form row row--15">
                                                            <div class="col-12">
                                                                <div class="filter-select rbt-modern-select">
                                                              
                                                                    <select id="displayname" class="w-100" onChange={hcname} > 
                                                                    <option value="">Select</option>
                                                                        {category.map(values => {
                                                                            return (
                                                                                <option value={values.id}>{values.cname}</option>
                                                                            )
                                                                        })}
                                                                 
                                                                   
                                                                    </select>
                                                                </div>


                                                                <div class="rbt-form-group">
                                                                    <label for="Headding"></label>
                                                                    <input id="Headding" type="text" placeholder="Enter Heading" onChange={hsetHed}  />
                                                                </div>



                                                            </div>
                                                            <div class="col-12">
                                                                <div class="rbt-form-group">
                                                                    <label for="Title"></label>
                                                                    <input id="Title" type="text" placeholder="Enter Title" onChange={hsetTit} />
                                                                </div>
                                                            </div>


                                                            <div class="col-12">
                                                                <div class="rbt-form-group">
                                                                    <label for="Services"></label>
                                                                    <input id="Services" type="text" placeholder="Enter Services" onChange={hsetSer}/>
                                                                </div>
                                                            </div>

                                                            <div class="col-12">
                                                                <div class="rbt-form-group">
                                                                    <label for=""></label>
                                                                    <input id="" type="text" placeholder="Enter Description" onChange={hsetDes}/>
                                                                </div>
                                                            </div>

                                                            <div class="col-12">
                                                                <div class="rbt-form-group">
                                                                    <label for=""></label>
                                                                    <input id="" type="text" placeholder="Enter Table Of Contents" onChange={hsetToc} />
                                                                </div>
                                                            </div>

                                                            <div class="col-12">
                                                                <div class="rbt-form-group">
                                                                    <label for=""></label>
                                                                    <input id="" type="text" placeholder="Meta Title" onChange={hsetMet} />
                                                                </div>
                                                            </div>

                                                            <div class="col-12">
                                                                <div class="rbt-form-group">
                                                                    <label for=""></label>
                                                                    <input id="" type="text" placeholder="Meta Description" onChange={hsetMes}/>
                                                                </div>
                                                            </div>

                                                            <div class="col-6">
                                                                <div class="rbt-form-group">
                                                                    <label for=""></label>
                                                                    <input id="" type="text" placeholder="Status"onChange={hsetSta}/>
                                                                </div>
                                                            </div>

                                                            <div class="col-6">
                                                                <div class="rbt-form-group">
                                                                    <label for=""></label>
                                                                    <input id="" type="text" placeholder="Single User Price" onChange={hsetSup} />
                                                                </div>
                                                            </div>

                                                            <div class="col-6">
                                                                <div class="rbt-form-group">
                                                                    <label for=""></label>
                                                                    <input id="" onChange={hsetMup	} type="text" placeholder="Multi User Price
" />
                                                                </div>
                                                            </div>

                                                            <div class="col-6">
                                                                <div class="rbt-form-group">
                                                                    <label for=""></label>
                                                                      <input id="" onChange={hsetCup} type="text" placeholder="Corporate User Price" />

                                                                </div>
                                                            </div>

                                                            <div class="col-12">
                                                                <div class="rbt-form-group">
                                                                    <label for=""></label>
                                                                


<input type="file"  style={{ height: "50px", border: "2px solid #115599", paddingBottom: "22px", paddingTop: "10px", borderRadius: "5px" }}  onChange={(e)=> setFile(e.target.files[0])} />


                                                                </div>
                                                            </div>

                                                            {/* <div class="col-12">
                                                                <div class="rbt-form-group">
                                                                    <label for=""></label>
                                                                    <input onChange={(e) => { setImg2(e.target.value) }} style={{ height: "50px", border: "2px solid #115599", paddingBottom: "22px", paddingTop: "10px", borderRadius: "5px" }}
                                                                        id="" type="file" placeholder="Corporate User Price 
" />
                                                                </div>
                                                            </div> */}

                                                            <div class="col-12">
                                                                <div class="rbt-form-group">
                                                                    <label for=""></label>
                                                                    <input id="" onChange={hsetDate}type="date" placeholder="Corporate User Price
" />
                                                                </div>
                                                            </div>




                                                                        
                                                            <div class="col-12 mt--10">
                                                        
                                                                <div class="rbt-form-group">
                                                              
                                                                    <button class="rbt-btn btn-gradient"  type="submit">Submit Report</button>
                                                                  
                                                                </div>
                                                              
                                                                </div>
                                                          
                                                        </form>
                                                    

                                                  
                                                    </div>

                                                </div>
                                            </div>
                                     
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
     
                    <div className="rbt-separator-mid">
                        <div className="container">
                            <hr className="rbt-separator m-0" />
                        </div>
                    </div>

                </>
            }
        </Layout>
    }
