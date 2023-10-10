import { Outlet, Link } from "react-router-dom";


import React, { useEffect, useState } from 'react';


export default function Homecategory() {
 //   const [val, setVal] = useState([]);


    const [category, setCategory]= useState([]);

    useEffect(()=>{
        const getCategory = async()=>{
            const reqData = await fetch(process.env.REACT_APP_FETCH_CAT_API);
            const resData = await reqData.json();
          
            setCategory(resData);
          
        }
        getCategory();
    },[ ]);

    return (
        <>
            <div class="rbt-categories-area bg-color-white">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="section-title text-center mb--60">
                                <h2 class="title">Popular Category</h2>
                                <br />
                                <p>Welcome to Market Report Hub's Popular Category! Discover the latest insights, trends, and in-depth analysis in the below mention  sector. Our team of industry experts and researchers has curated a comprehensive collection of reports and market intelligence to keep you well-informed.</p>
                            </div>
                        </div>
                    </div>
                    <div class="row g-5">
                     
                      {
                                                    category.map((citem,index)=>{


                                                      var x = citem.img;
                                                      var new_img = x.replace(/:/g, '_');

                                                      var  s = citem.cname;
                                                      var new_str = s.replace(/\s/g, '-');

                                                 

                                                       
                                                    return (

                                                        <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                            <Link class="rbt-cat-box rbt-cat-box-1 list-style" to =  {`industries/${citem.id}/${new_str}`}> 
                                <div class="inner">
                                    <div class="thumbnail">
                                                          
                                        <img src={`uploads/${new_img}`}   alt="Icons Images" />

                                     
                                        
                                    </div>
                                    <div class="content">
                                        <h5 class="title">{citem.cname}</h5>
                                      
                                    </div>
                                </div>
                            </Link>
                        </div>

                                                    )


                                                    })

                                            
                                                }
                   
                     
                      
                    
                      
                      
                      
                     


                     
                    </div>
                </div>
            </div>

        </>
    );
}