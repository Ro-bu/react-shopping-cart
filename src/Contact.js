import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import contactBouquet from "./img/contact-bouquet.jpg";

function Contact() {

    return (
        <div className="main-container">
            <Nav />
            <div className="contact-container">
                <div className="about-us">
                    <img className="contact-bouquet" src={contactBouquet} alt="bouquet" />
                    <div className="about-us-text-container">
                        <h2>ABOUT US</h2>
                        <p className="about-us-text">
                        If you want to show your loved one how much you care, then this is the perfect bouquet for you! This bouquet will help you express all of your feelings in a beautiful and sweet way. You can use it on special occasions or just as an everyday gift. The flowers in this bouquet are very fragrant, so they will make any room smell fantastic!
                        </p>
                    </div>
                </div>
                <div className="contact-information-container">
                    <div className="contact-information">
                        <h2>CONTACT INFORMATION</h2>
                        <p className="company-name">NOTFAKE llc</p>
                        <p className="contact-data">2355 Rowes Lane, Glasgow, 42141, KY, USA</p>
                        <a href="tel:+12706787645"><p className="contact-data">+1 270-678-7645</p></a>
                        <a href="mailto:not@fake.com"><p className="contact-data">not@fake.com</p></a>
                    </div>
                    <div className="any-questions-container">
                        <h2>ANY QUESTIONS?</h2>
                        <p className="any-questions-text">
                        Flowers come in all shapes, sizes, and colors. You can choose from a single flower or mix and match them to create something truly unique. We'll walk you through the process so that your gift is perfect for any occasion.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact;