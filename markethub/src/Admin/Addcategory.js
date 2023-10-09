import Layout from "../Components/Layout";
import { useContext, useState } from "react";
import Adminnavbar from "./Components/Adminnavbar";
import axios from "axios";

export default function Addcategory() {

    const[file, setFile] = useState();
    const[cname, setCname] = useState();

    const hcname = (e)=>{
                    setCname(e.target.value);
    }

         const addinputdata = async (e) => {
        
       e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);
        formData.append('cname', cname);
        axios.post("http://localhost:8001/create" , formData). then(res =>{

        }).catch(er=>{
            console.log(er);
        });;
 }



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

                                 
                                    <div class="col-lg-9">
                                      
                                        <div class="rbt-dashboard-content bg-color-white rbt-shadow-box">
                                            <div class="content">
                                                <div class="section-title">
                                                    <h4 class="rbt-title-style-3">Master Category
                                                    </h4>
                                                </div>


                                        


                                                <div class="rbt-dashboard-table table-responsive mobile-table-750 mt--30">
                                                    <div class="">
                                                        <form>
                                                            
                                                            
                                                            <input type="text" onChange={hcname} />

                                                        <div class="mt--30"></div>

                        <input type="file"  onChange={(e)=> setFile(e.target.files[0])}
                                                            
                                                            style={{ height: "50px", border: "2px solid #115599", paddingBottom: "22px", paddingTop: "10px", borderRadius: "5px" }}

                                                        />

                                                            <div class="mt--30"></div>
                                                            
                                                            <button onClick={addinputdata} type="submit">

                                                        <a class="rbt-btn btn-md hover-icon-reverse" href="#">
                                                            <span class="icon-reverse-wrapper">
                                                                <span class="btn-text">Add </span>
                                                                <span class="btn-icon"><i class="feather-arrow-right"></i></span>
                                                                <span class="btn-icon"><i class="feather-arrow-right"></i></span>
                                                            </span>
                                                                </a>
                                                                
                                                            </button>


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
                </div>

            </>
        }
    </Layout>
        
}
