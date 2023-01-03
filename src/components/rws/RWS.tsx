import "./RWS.css"
import img1 from "./1.jpg"
import img2 from "./2.jpg"
import img3 from "./3.jpg"
import img4 from "./4.jpg"
import {FaFacebookF,FaLinkedinIn} from "react-icons/fa"
import {AiOutlineTwitter} from "react-icons/ai"
import {useState} from "react"


function RWS() {
    const [scrolled, setScrolled] = useState(false)

    return <>
        <div className = "body">
            <header  id = "header">
                <a href="#" className = "logo">Logo</a>
                <ul>
                    <li> <a href="#home" onClick = {toggle}>Home</a> </li>
                    <li> <a href="#about" onClick = {toggle}>About</a> </li>
                    <li> <a href="#services" onClick = {toggle}>Services</a> </li>
                    <li> <a href="#portfolio" onClick = {toggle}>Portfolio</a> </li>
                    <li> <a href="#team" onClick = {toggle}>Team</a> </li>
                    <li> <a href="#contact" onClick = {toggle}>Contact</a> </li>
                </ul>
                <div className = "toggle" onClick = {toggle}> </div>
            </header>
        
            <section className = "banner" id = "home">
                <h2>We Make <br /> <span>Brands</span>  Matter</h2>
            </section>

            <section className = "sec" id = "about">
                <div className = "content">
                    <div className = "mxw800p">
                        <h3>Who We Are</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum id esse iste sunt odio, obcaecati a ullam animi ratione dignissimos incidunt aliquid dolor tempore nam voluptates ipsam impedit sequi ducimus.</p>
                        <a href="#" className = "btn">Read Our Story</a>
                    </div>
                </div>
            </section>

            <section className = "sec about" id = "services">
                <div className = "content">
                    <div className = "mxw800p">
                        <h3>What We Do</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum id esse iste sunt odio, obcaecati a ullam animi ratione dignissimos incidunt aliquid dolor tempore nam voluptates ipsam impedit sequi ducimus.</p>
                    </div>
                    <div className = "services">
                        <div className = "box">
                            <div className = "iconBox"> 
                                <img src={img1} alt="" />
                            </div>
                            <div className = "content">
                                <h2>Desing</h2>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
                            </div>
                        </div>
                        <div className = "box">
                            <div className = "iconBox"> 
                                <img src={img2} alt="" />
                            </div>
                            <div className = "content">
                                <h2>Development</h2>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
                            </div>
                        </div>
                        <div className = "box">
                            <div className = "iconBox"> 
                                <img src={img3} alt="" />
                            </div>
                            <div className = "content">
                                <h2>Branding</h2>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
             
            <section className = "sec stats">
                <div className = "content">
                    <div className = "mxw800p">
                        <h3>Our Archievements</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
                    </div>
                    <div className = "statsBox"> 
                        <div className = "box">
                            <h2>1200+</h2>
                            <h4>Projects</h4> 
                        </div>
                        <div className = "box">
                            <h2>800+</h2>
                            <h4>Happy Cients</h4> 
                        </div>
                        <div className = "box">
                            <h2>150+</h2>
                            <h4>Countries</h4> 
                        </div>
                        <div className = "box">
                            <h2>50+</h2>
                            <h4>Awards</h4> 
                        </div>
                    </div>
                </div>
            </section>

            <section className = "sec work" id = "portfolio">
                <div className = "content">
                    <div className = "mxw800p">
                        <h3>Recent Work</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum id esse iste sunt odio, obcaecati a ullam animi ratione dignissimos incidunt aliquid dolor tempore nam voluptates ipsam impedit sequi ducimus.</p>
                    </div>
                    <div className = "workBox">
                        <div className = "brand">
                            <a href="#"><h2>Brand Name</h2></a>
                        </div>
                        <div className = "brand">
                            <a href="#"><h2>Brand Name</h2></a>
                        </div>
                        <div className = "brand">
                            <a href="#"><h2>Brand Name</h2></a>
                        </div>
                        <div className = "brand">
                            <a href="#"><h2>Brand Name</h2></a>
                        </div>
                        <div className = "brand">
                            <a href="#"><h2>Brand Name</h2></a>
                        </div>
                        <div className = "brand">
                            <a href="#"><h2>Brand Name</h2></a>
                        </div>
                        <div className = "brand">
                            <a href="#"><h2>Brand Name</h2></a>
                        </div>
                        <div className = "brand">
                            <a href="#"><h2>Brand Name</h2></a>
                        </div>
                    </div>
                </div>
            </section>

            <section className = "sec" id = "team">
                <div className = "content">
                    <div className = "mxw800p">
                        <h3>Meet Our Expert</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum id esse iste sunt odio, obcaecati a ullam animi ratione dignissimos incidunt aliquid dolor tempore nam voluptates ipsam impedit sequi ducimus.</p>
                    </div>
                    <div className = "teamBx">
                        <div className = "member">
                            <div className = "imgBx">
                                <img src={img1} alt="" />
                            </div>
                            <div className = "details">
                                <div>
                                    <h2>John Doe <br /><span>Creative Director</span></h2>
                                </div>
                            </div>
                        </div>
                        <div className = "member">
                            <div className = "imgBx">
                                <img src={img2} alt="" />
                            </div>
                            <div className = "details">
                                <div>
                                    <h2>John Doe <br /><span>Creative Director</span></h2>
                                </div>
                            </div>
                        </div>
                        <div className = "member">
                            <div className = "imgBx">
                                <img src={img3} alt="" />
                            </div>
                            <div className = "details">
                                <div>
                                    <h2>John Doe <br /><span>Creative Director</span></h2>
                                </div>
                            </div>
                        </div>
                        <div className = "member">
                            <div className = "imgBx">
                                <img src={img4} alt="" />
                            </div>
                            <div className = "details">
                                <div>
                                    <h2>John Doe <br /><span>Creative Director</span></h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className = "sec contact" id = "contact">
                <div className = "content">
                    <div className = "mxw800p">
                        <h3>Send Us A Message</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
                    </div>
                    <div className = "contactForm">
                        <form action="">
                            <div className = "row100">
                                <div className = "inputBx50">
                                    <input type="text" placeholder = "Full Name" />
                                </div>
                                <div className = "inputBx50">
                                    <input type="text" placeholder = "Email Address" />
                                </div>
                            </div>
                            <div className = "row100">
                                <div className = "inputBx100">
                                    <textarea placeholder = "Message"></textarea>
                                </div>
                            </div>
                            <div className = "row100">
                                <div className = "inputBx100">
                                    <input type="submit" value = "Send"/>
                                </div>
                            </div>
                        </form> 
                    </div>
                    <div className = "sci">
                        <ul>
                            <li><a href="#"> <FaFacebookF className = "icon"/></a></li>
                            <li><a href="#"> <AiOutlineTwitter className = "icon"/></a></li>
                            <li><a href="#"> <FaLinkedinIn className = "icon"/></a></li>
                        </ul>
                    </div>
                    <p className = "copyright"> Desing & Developed By < a href="#" > Daniela Yero </a></p> 
                </div>
            </section>

        </div>
        {another()}
    </>
}

function another() {
    /*escuchador que indica al navegador que este atento a la interaccion el usuario */
    window.addEventListener("scroll" , function() {

    /*objeto especial con metodos para agregar, eliminar y alternar una sola clase
     *Se agrega la clase sticky cuando se haga scroll 
     */
    console.log("scroll ocurred")
    header.classList.toggle("sticky", window.scrollY > 0)  
    })
}

function toggle() {
    header.classList.toggle("active") ;
}

export default RWS ;
