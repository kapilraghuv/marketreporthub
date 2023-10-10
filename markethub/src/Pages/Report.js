import { Link, useParams } from "react-router-dom";
import Layout from "../Components/Layout";
import Slider from "../Components/Slider";
import { useContext, useState , useEffect } from "react";

export default function Report() {

    const param =   useParams();
    const id = param.id;
    
    

    const [report, setReport]= useState([]);

    useEffect(()=>{
        
        const getReport = async()=>{
            const reqData = await fetch(process.env.REACT_APP_FETCH_SINGLE_REPORT_API+ id);
            const resData = await reqData.json();
            console.log(resData);
            setReport(resData);
        }
        getReport();
    },[ ]);

  


    
  



    return (

        <>

            <Layout>

            <br />
            <br />
            <br />

            {
                                                    report.map((citem,index)=>{
                                                        var x = citem.img;
                                                      var new_img = x.replace(/:/g, '_');
                                                       
                                                    return (


<>

<div className="container mt--50 rbt-category-area bg-color-white ">
    <div className="row">
    <div className="col-lg-12">
      
            <div className="content text-center">
               
                <h2 className="title">
                <h2 dangerouslySetInnerHTML={{__html:  citem.heading}} />
</h2>
                <p className="description"><p dangerouslySetInnerHTML={{__html:  citem.title}} />

</p>

                <div className="d-flex align-items-center mb--20 flex-wrap rbt-course-details-feature justify-content-center">

                <Link to={"/request"}>

                    <div className="feature-sin best-seller-badge">
                        <span className="rbt-badge-2">

                            <span className="image"><img src="http://localhost:3000/assets/images/icons/card-icon-1.png"
                                    alt="Best Seller Icon" /></span>  Request For Smaple
                        </span>
                    </div>

                    </Link>
 <div style={{width:'10px'}}></div>

 <Link to={"/request"}>

                    <div className="feature-sin best-seller-badge">
                        <span className="rbt-badge-2">
                        
                            <span className="image"><img src="http://localhost:3000/assets/images/icons/card-icon-1.png"
                                    alt="Best Seller Icon" /></span>   Request For Discount
                        </span>
                    </div>
                    </Link>

                  



                  
                  
                  

                 
                </div>

               <div className="d-flex align-items-center mb--20 flex-wrap rbt-course-details-feature justify-content-center">
               <div className="rbt-author-meta mb--20 text-center">
                    <div className="rbt-avater">
                        <a href="#">
                            <img src="http://localhost:3000/assets/images/client/avatar-02.png" alt="Sophia Jaymes" />
                        </a>
                    </div>
                    <div className="rbt-author-info">
                        By <a href="profile.html">Market</a>  <a href="#">Report Hub</a>
                    </div>
                </div>
               </div>

                <ul className="rbt-meta">
                    <li><i className="feather-calendar"></i> {citem.cdate  }</li>
                    <li><i className="feather-globe"></i>English</li>
                    <li><i className="feather-award"></i>Certified Report</li>
                </ul>

            </div>
        </div>
    </div>
</div>




<div className="rbt-course-details-area ptb--60">
<div className="container">
    <div className="row g-5">

        <div className="col-lg-8">
            <div className="course-details-content">
                <div className="rbt-course-feature-box rbt-shadow-box thuumbnail">
                   
                <img className="w-100" src={`http://localhost:8001/uploads/${new_img}`} style={{height:"400px"}}  alt="Card image" />

                </div>

                <div className="rbt-inner-onepage-navigation sticky-top mt--30">
                    <nav className="mainmenu-nav onepagenav">
                        <ul className="mainmenu">
                            <li className="current">
                                <a href="#overview">Description</a>
                            </li>
                            <li>
                            


                                <a href="#coursecontent">Table Of Contents</a>
                            </li>
                            <li>
                                <a href="#details">Ask For Analyst</a>
                            </li>
                          
                        </ul>
                    </nav>
                </div>

            
                <div className="rbt-course-feature-box overview-wrapper rbt-shadow-box mt--30 has-show-more" id="overview">
                    <div className="rbt-course-feature-inner has-show-more-inner-content">
                        <div className="section-title">
                            <h4 className="rbt-title-style-3"> <p dangerouslySetInnerHTML={{__html:  citem.title}} /></h4>
                        </div>
                        
                                                            


                                                            <div dangerouslySetInnerHTML={{__html:  citem.descr}} />

                                                        
                                                          
                                                        
                                                            
                                                           
                     
                       
                    </div>
                    <div className="rbt-show-more-btn">Show More</div>
                </div>
             </div>
             </div>

             <div className="col-lg-4">
       
            <div className="course-sidebar sticky-top rbt-shadow-box  rbt-gradient-border">
                <div className="inner">

              
               
             

                    <div className="content-item-content">
                        <div className="rbt-price-wrapper d-flex flex-wrap align-items-center justify-content-between">
                         
                        <div class="course-drop-option">
                                                                                    <div class="rbt-form-check">
                                                                                        <input class="form-check-input" type="radio" name="rbt-radio" id="rbt-radio-1" />
                                                                                        <label class="form-check-label" for="rbt-radio-1">
                                                                                        Single User $ {citem.single_price}
                                                                                        </label>
                                                                                    </div>
                                                                                    <div class="rbt-form-check">
                                                                                        <input class="form-check-input" type="radio" name="rbt-radio" id="rbt-radio-2" />
                                                                                        <label class="form-check-label" for="rbt-radio-2">Multi User $ {citem.multi_price}</label>
                                                                                    </div>
                                                                                    <div class="rbt-form-check">
                                                                                        <input class="form-check-input" type="radio" name="rbt-radio" id="rbt-radio-3" />
                                                                                        <label class="form-check-label" for="rbt-radio-3"> Corporate Users $ {citem.corporate_price}</label>
                                                                                    </div>
                                                                                    <div class="rbt-form-check">
                                                                                        <input class="form-check-input" type="radio" name="rbt-radio" id="rbt-radio-4" />
                                                                                        <label class="form-check-label" for="rbt-radio-4"> Data Pack $1850</label>
                                                                                    </div>
                                                                                </div>

                         
                        </div>

                   
                         

                    

                        <div className="buy-now-btn mt--15">
                            <a className="rbt-btn btn-border icon-hover w-100 d-block text-center" href="#">
                                <span className="btn-text">Buy Now</span>
                                <span className="btn-icon"><i className="feather-arrow-right"></i></span>
                            </a>
                        </div>

                        <span className="subtitle"><i className="feather-rotate-ccw"></i> 30-Day Money-Back
                            Guarantee</span>

                     


                     

                        <div className="social-share-wrapper mt--30 text-center">
                            <div className="rbt-post-share d-flex align-items-center justify-content-center">
                                <ul className="social-icon social-default transparent-with-border justify-content-center">
                                    <li><a href="https://www.facebook.com/">
                                            <i className="feather-facebook"></i>
                                        </a>
                                    </li>
                                    <li><a href="https://www.twitter.com">
                                            <i className="feather-twitter"></i>
                                        </a>
                                    </li>
                                    <li><a href="https://www.instagram.com/">
                                            <i className="feather-instagram"></i>
                                        </a>
                                    </li>
                                    <li><a href="https://www.linkdin.com/">
                                            <i className="feather-linkedin"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <hr className="mt--20" />
                            <div className="contact-with-us text-center">
                                <p>For details about the Report</p>
                                <p className="rbt-badge-2 mt--10 justify-content-center w-100"><i className="feather-phone mr--5"></i> Call Us: <a href="#"><strong>
+1417 231 4946</strong></a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



             </div>
             </div>
             </div>

             
             
             

          
            
             

            
            
         

             
               
           


</>
                                                      
                                                    )


                                                    })

                                            
                                                }
           





               
         
     








            </Layout>
        </>
    );
}