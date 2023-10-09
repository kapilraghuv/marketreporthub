import Layout from "../Components/Layout";
import Slider from "../Components/Slider";

export default function Contact() {
    return (

        <>

            <Layout>


                <div className="rbt-conatct-area bg-gradient-11 rbt-section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center mb--60">
                                    <span className="subtitle bg-secondary-opacity">Contact Us</span>
                                    <h2 className="title">Feel free to get in touch with our expert team <br/> through the following channels:
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div className="row g-5">
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12 sal-animate" data-sal="slide-up" data-sal-delay="150" data-sal-duration="800">
                                <div className="rbt-address">
                                    <div className="icon">
                                        <i className="feather-headphones"></i>
                                    </div>
                                    <div className="inner">
                                        <h4 className="title">Contact Phone Number</h4>
                                        <p><a href="tel:+1 417 231 4946">+1 417 231 4946</a></p>
                                        <p><a href="tel:+919310330551"> +919310330551</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12 sal-animate" data-sal="slide-up" data-sal-delay="200" data-sal-duration="800">
                                <div className="rbt-address">
                                    <div className="icon">
                                        <i className="feather-mail"></i>
                                    </div>
                                    <div className="inner">
                                        <h4 className="title">Our Email Address</h4>
                                        <p><a href="mailto:admin@gmail.com">sales@marketreporthub.com</a></p>
                                        <p><a href="mailto:example@gmail.com">info@marketreporthub.com</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12 sal-animate" data-sal="slide-up" data-sal-delay="250" data-sal-duration="800">
                                <div className="rbt-address">
                                    <div className="icon">
                                        <i className="feather-map-pin"></i>
                                    </div>
                                    <div className="inner">
                                        <h4 className="title">Our Location</h4>
                                        <p>400 East Royal Lane,Building Three, <br /> Suite 290,Irving, Texas, 75039,United States</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="rbt-contact-address">
                    <div className="container">
                        <div className="row g-5">
                            <div className="col-lg-6">
                                <div className="thumbnail">
                                    <img className="w-100 radius-6" src="assets/images/about/contact.jpg" alt="Contact Images" />
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="rbt-contact-form contact-form-style-1 max-width-auto">
                                    <div className="section-title text-start">
                                        <span className="subtitle bg-primary-opacity">Reach Out to Us
                                        </span>
                                    </div>
                                    <p className="title">At Market Report Hub, we're dedicated to providing you with top-notch market research solutions and unparalleled
                                        support.
                                    </p>
                                    <form id="contact-form" method="POST" action="https://rainbowit.net/html/histudy/mail.php" className="rainbow-dynamic-form max-width-auto">
                                        <div className="form-group">
                                            <input name="contact-name" id="contact-name" type="text" />
                                                <label>Name</label>
                                                <span className="focus-border"></span>
                                        </div>
                                        <div className="form-group">
                                            <input name="contact-phone" type="email" />
                                                <label>Email</label>
                                                <span className="focus-border"></span>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" id="subject" name="subject" />
                                                <label>Your Subject</label>
                                                <span className="focus-border"></span>
                                        </div>
                                        <div className="form-group">
                                            <textarea name="contact-message" id="contact-message"></textarea>
                                            <label>Message</label>
                                            <span className="focus-border"></span>
                                        </div>
                                        <div className="form-submit-group">
                                            <button name="submit" type="submit" id="submit" className="rbt-btn btn-md btn-gradient hover-icon-reverse w-100">
                                                <span className="icon-reverse-wrapper">
                                                    <span className="btn-text">GET IT NOW</span>
                                                    <span className="btn-icon"><i className="feather-arrow-right"></i></span>
                                                    <span className="btn-icon"><i className="feather-arrow-right"></i></span>
                                                </span>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>




                <div className="rbt-google-map bg-color-white rbt-section-gapTop">
                    <iframe className="w-100"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3350.124936103272!2d-96.94226632522577!3d32.89486487795565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c2819ade1332f%3A0x53da4866dde98900!2sRegus%20-%20Irving%20-%20Dallas%20Communications%20Complex!5e0!3m2!1sen!2sin!4v1695237055595!5m2!1sen!2sin"
                        width="600" height="500"></iframe>
                </div>



            </Layout>
        </>
    );
}