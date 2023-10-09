import Layout from "../Components/Layout";
import Loginform from "./Components/Loginform";

export default function Admin() {
    return <Layout>
        {
            <>
                <div className="rbt-banner-area rbt-banner-3 header-transperent-spacer">
                    <div className="wrapper">

                    </div>
                    <div className="shape-wrapper">

                        <div className="top-shape">
                            <img src="assets/images/banner/top-shape.png" alt="Banner Images" />
                        </div>

                    </div>
                </div>

             
                <div className="rbt-breadcrumb-default pb--100 ptb_md--50 ptb_sm--30 bg-gradient-1">
                    <div className="container">
                        <div className="row ">
                            <div className="col-lg-12">
                                <div className="breadcrumb-inner text-center">
                                    <h2 className="title">Login</h2>
                                    <p className="text-center">Welcome to the Admin Login page for Market Report Hub. <br />This is a secure area for authorized personnel only.
                                    </p>
                                    <h3>Security Notice</h3>
                                    <ul style={{listStyle:"none"}}>
                                        <li>Unauthorized access to this system is prohibited.</li>
                                        <li>Your IP address is being recorded for security purposes.</li>
                                        <li>If you experience any issues with your login, please contact our support team.</li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              

                <div className="rbt-elements-area bg-color-white rbt-section-gap">
                    <div className="container">
                        <div className="row gy-5 row--30">

                            <div className="col-md-3"></div>

                            <div className="col-lg-6">
                                <div className="rbt-contact-form contact-form-style-1 max-width-auto">
                                    <h3 className="title">Login</h3>


            <Loginform />




                                </div>
                            </div>



                        </div>
                    </div>
                </div>


            </>
        }
    </Layout>
}