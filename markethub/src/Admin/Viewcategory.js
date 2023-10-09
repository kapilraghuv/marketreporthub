import Layout from "../Components/Layout";
import Adminnavbar from "./Components/Adminnavbar";
import React, { useEffect, useState } from 'react';



export default function Viewcategory() {



    const [val, setVal] = useState([]);
  

    const [category, setCategory]= useState([]);

    useEffect(()=>{
        const getCategory = async()=>{
            const reqData = await fetch("http://localhost:8001/api/category");
            const resData = await reqData.json();
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
                                                    <h4 className="rbt-title-style-3">Category List
                                                    </h4>
                                                </div>


                                           
                                                <div className="rbt-dashboard-filter-wrapper">
                                                    <div className="row g-5">
                                                        <div className="col-md-6 mt--70">
                                                            <h5>Total Category: 10</h5>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <div className="filter-select rbt-modern-select">
                                                                <span className="select-label d-block">Search</span>
                                                                <input type="text" />
                                                            </div>
                                                        </div>


                                                    </div>
                                                </div>
                                         

                                                <hr className="mt--30" />

                                                    <div className="rbt-dashboard-table table-responsive mobile-table-750 mt--30">
                                                        <table className="rbt-table table table-borderless">
                                                        <thead>
                                                            


                                                                <tr>

                                                                <th>Category</th>
                                                                  
                                                                    <th>Image</th>
                                                                    <th>Edit</th>
                                                                    <th>Delete</th>
                                                                </tr>
                                                            </thead>
                                                        <tbody> 

                                                        {
                                                    category.map((citem,index)=>{
                                                       
                                                    return (

                                                        <tr>
                                                                        <th>
                                                                        {citem.cname}
                                                                        </th>


                                                                        <td>
                                                                            <img src="path" />
                                                                        </td>
                                                                        <td>

                                                                            <a className="rbt-btn btn-xs bg-primary-opacity radius-round" href="#" title="Edit"><i
                                                                                className="feather-edit pl--0"></i></a>


                                                                        </td>
                                                                        <td><a className="rbt-btn btn-xs bg-color-danger-opacity radius-round color-danger" href="#" title="Delete"><i
                                                                            className="feather-trash-2 pl--0"></i></a></td>
                                                                    </tr>
                                                    )


                                                    })

                                            
                                                }
                                       
                                                        
                                                         
                                                              
                                                         



                                                               



                                                         
                                                                





                                                            </tbody>

                                                        </table>
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