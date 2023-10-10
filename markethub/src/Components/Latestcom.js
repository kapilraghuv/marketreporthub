import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function  Latestcom(){

    const [report, setReport]= useState([]);

    useEffect(()=>{
        const getReport = async()=>{
            const reqData = await fetch(process.env.REACT_APP_FETCH_REPORT_API);
            const resData = await reqData.json();
            console.log(resData);
            setReport(resData);
          
        }
        getReport();
    },[ ]);


    return (
        <>
            <div class="rbt-categories-area bg-color-white ">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="section-title text-center">
                                <span class="subtitle bg-primary-opacity">LATEST INSIGHTS</span>
                                <h2 class="title">Browse through our  <br />latest market research reports,</h2> <br />
                                <p class="text-center">
                                    Welcome to Market Report Hub's "Latest Insights", where you can access our most up-to-date research reports,
                                    analysis, and industry trends. We are committed to providing you with timely and valuable information to help you make
                                    informed decisions in today's fast-paced business environment.

                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="rbt-rbt-card-area  bg-color-white">
                        <div class="container">


                            <div class="row row--15">

                            {
                                                    report.map((ritem,index)=>{
                                                        console.log(ritem);

                                                        var x = ritem.img;
                                                      var new_img = x.replace(/:/g, '_');

                                                      console.log(new_img);

                                                      var  s = ritem.title;
                                                      var new_str = s.replace(/\s/g, '-');
                                                       
                                                    return (


                                <div class="col-lg-4 col-md-6 col-sm-6 col-12 mt--30"  >
                                    <div class="rbt-card variation-03 rbt-hover">
                                        <div class="rbt-card-img">
                                            <Link class="thumbnail-link" to={`/report/${ritem.id}/${new_str}`}>
                                                <img src={`uploads/${new_img}`}  style={{height:"150px"}}  alt="Card image" />
                                                <span class="rbt-btn btn-white icon-hover">
                                                    <span class="btn-text">Read More</span>
                                                    <span class="btn-icon"><i class="feather-arrow-right"></i></span>
                                                </span>
                                            </Link>
                                        </div>
                                        <div class="rbt-card-body">
                                            <h5 class="rbt-card-title"> <p dangerouslySetInnerHTML={{__html:  ritem.title}} />
                                            </h5>
                                            <div class="rbt-card-bottom">
                                                <a class="transparent-button" href="#"><i><svg width="17" height="12" xmlns="http://www.w3.org/2000/svg"><g stroke="#27374D" fill="none" fill-rule="evenodd"><path d="M10.614 0l5.629 5.629-5.63 5.629" /><path stroke-linecap="square" d="M.663 5.572h14.594" /></g></svg></i></a>
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

                </div>
            </div>


        </>
    )
}