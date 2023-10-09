import { Outlet, Link } from "react-router-dom";


import React, { useEffect, useState } from 'react';

export default function Header() {
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




   
    return (
        <>


            <header class="rbt-header rbt-header-10">
                <div class="rbt-sticky-placeholder"></div>
                <div class="rbt-header-wrapper header-space-betwween header-transparent header-sticky">
                    <div class="container-fluid">
                        <div class="mainbar-row rbt-navigation-start align-items-center">
                            <div class="header-left rbt-header-content">
                                <div class="header-info">
                                    <div class="logo">
                                        <a href="/">
                                            <img src="http://localhost:3000/assets/images/logo/logo.png" alt="Education Logo Images" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="rbt-main-navigation d-none d-xl-block">
                                <nav class="mainmenu-nav">
                                    <ul class="mainmenu">
                                        <li class="with-megamenu has-menu-child-item position-static">
                                            <a href="#">       <Link to="/">Home</Link> </a> </li>
                                        
                                 



                                        <li class="with-megamenu has-menu-child-item">
                                            <a href="#"> <Link to="/about">About Us</Link> </a> </li>
                                        
                                  
                                        

                                     

                                        
                                        <li class="has-dropdown has-menu-child-item">
                                            <a href="javascript:void(0)">Industries
                                                <i class="feather-chevron-down"></i>
                                            </a>
                                            <ul class="submenu">
                                            <li class="has-dropdown">
                                                  
                                            {
                                                    category.map((citem,index)=>{
                                                       
                                                    return (

                                                        <li className="has-dropdown">
                                                  
                                                  <Link to="/industries" key={index}>  {citem.cname}   </Link>
                                       
                                              </li>
                                                    )


                                                    })

                                            
                                                }
                                       
                                              </li>
                                           
                                             
                                                

                                                        
                                                   
                                          

                                                
                                                
                                             

                                            

                                       
                                    </ul>
                                </li>

                                <li class="with-megamenu has-menu-child-item position-static">
                                            <a href="#">  <Link to="/latest-insights">Latest Insights</Link></a>
                                </li>
                             


                                <li class="with-megamenu has-menu-child-item position-static">
                                            <a href="#"><Link to="/terms-conditions">Terms & Conditions </Link></a>
                                  
                                </li>

                                <li class="with-megamenu has-menu-child-item position-static">
                                            <a href="#"> <Link to="/contact">Contact Us</Link>  </a>
                               

                                  
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div class="header-right">
                        <div class="rbt-btn-wrapper d-none d-xl-block">
                            <a class="rbt-btn marquee-auto btn-border-gradient radius-round btn-sm hover-transform-none" href="">
                                <span>+1417 231 4946 </span>
                            </a>
                        </div>
                    
                        <div class="mobile-menu-bar d-block d-xl-none">
                            <div class="hamberger">
                                <button class="hamberger-button rbt-round-btn">
                                    <i class="feather-menu"></i>
                                </button>
                            </div>
                        </div>
                      
                    </div>
                </div>
            </div>
        </div >
  </header >

        <div class="popup-mobile-menu">
            <div class="inner-wrapper">
                <div class="inner-top">
                    <div class="content">
                        <div class="logo">
                            <a href="index.html">
                                <img src="http://localhost:3000/assets/images/logo/logo.png" alt="Education Logo Images" />
                            </a>
                        </div>
                        <div class="rbt-btn-close">
                            <button class="close-button rbt-round-btn"><i class="feather-x"></i></button>
                        </div>
                    </div>


                </div>

                <nav class="mainmenu-nav">
                    <ul class="mainmenu">
                        <li class="with-megamenu has-menu-child-item position-static">
                            <a href="#">Home </a>
                           
                        </li>

                        <li class="with-megamenu has-menu-child-item">
                            <a href="#">About Us </a>
                        
                        </li>



                        <li class="with-megamenu has-menu-child-item position-static">
                            <a href="#">Industries <i class="feather-chevron-down"></i></a>
                   
                            <div class="rbt-megamenu grid-item-4">
                                <div class="wrapper">
                                    <div class="row row--15">
                                        <div class="col-lg-12 col-xl-3 col-xxl-3 single-mega-item">

                                            <ul class="mega-menu-item">
                                                <li><a href="about-us-01.html">Chemicals and Materials</a></li>
                                                <li><a href="about-us-02.html">Consumer Goods</a></li>
                                                <li><a href="event-grid.html">Automotive & Transportation</a></li>
                                                <li><a href="event-list.html">Electronics & Semiconductors</a></li>
                                                <li><a href="event-sidebar.html">Healthcare & Pharmaceutical</a></li>
                                                <li><a href="event-details.html">Energy & Power</a></li>
                                                <li><a href="academy-gallery.html">Packaging</a></li>
                                                <li><a href="admission-guide.html">Industrial Equipment & Machining</a></li>
                                                    <li><a href="admission-guide.html">Agriculture and Sustainability</a></li>
                                                    
                                                </ul>
                                                
                                        </div>




                                    </div>
                                </div>
                                </div>
                                
                                </li>

                            <li class="with-megamenu has-menu-child-item">
                                <a href="#">Latest Insights</a>
                             
                            </li>


                            <li class="with-megamenu has-menu-child-item">
                                <a href="#">Terms & Conditions</a>
                              
                            </li>


                          





                    </ul>
                </nav>

                <div class="mobile-menu-bottom">
                    <div class="rbt-btn-wrapper mb--20">
                        <a class="rbt-btn btn-border-gradient radius-round btn-sm hover-transform-none w-100 justify-content-center text-center"
                            href="#">
                            <span>Contact us</span>
                        </a>
                    </div>

                    <div class="social-share-wrapper">
                        <span class="rbt-short-title d-block">Find With Us</span>
                        <ul class="social-icon social-default transparent-with-border justify-content-start mt--20">
                            <li><a href="https://www.facebook.com/">
                                <i class="feather-facebook"></i>
                            </a>
                            </li>
                            <li><a href="https://www.twitter.com/">
                                <i class="feather-twitter"></i>
                            </a>
                            </li>
                            <li><a href="https://www.instagram.com/">
                                <i class="feather-instagram"></i>
                            </a>
                            </li>
                            <li><a href="https://www.linkdin.com/">
                                <i class="feather-linkedin"></i>
                            </a>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
        </>
    )
}