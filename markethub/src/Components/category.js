import { Outlet, Link } from "react-router-dom";


import React, { useEffect, useState } from 'react';

const [category, setCategory]= useState([]);

useEffect(()=>{
    const getCategory = async()=>{
        const reqData = await fetch(process.env.REACT_APP_FETCH_CAT_API);
        const resData = await reqData.json();
        setCategory(resData);
      
    }
    getCategory();
},[ ]);


function Category() {
    return (
        <>
            
            <div className="rbt-categories-area bg-color-white ">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title text-center">
                                <span className="subtitle bg-primary-opacity">LATEST  CATEGORY</span>
                                <h2 className="title">Browse through our  <br />latest market research reports, By Category</h2> <br/>
                                   
                            </div>
                        </div>
                    </div>
                    <div className="row g-5 mt--30">
        
                   
                   

                     

                       
                    {
                                                    category.map((citem,index)=>{
                                                       
                                                    return (

                                                        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                            <div className="rbt-cat-box rbt-cat-box-1 variation-2 text-center">
                                <div className="inner">
                                    <div className="thumbnail">
                                        <a href="#">
                                            <img src="assets/images/category/image/software.jpg" alt="Category Images" />
                                        </a>
                                    </div>
                                    <div className="icons">
                                        <img src="assets/images/category/server.png" alt="Icons Images" />
                                    </div>
                                    <div className="content">
                                        <h5 className="title"><a href="#">IT and Software</a></h5>
                                        <div className="read-more-btn">
                                            <a className="rbt-btn-link" href="#">50 Courses<i
                                                className="feather-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                                                    )


                                                    })

                                            
                                                }
                   
                    
                      
                     
                     




                   
                    </div>

                </div>
            </div>
    
        </>
    )
}

export default Category;