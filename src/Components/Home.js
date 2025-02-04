import React from "react";
import vg from "../assets/2.png";
import { Link } from "react-router-dom";
import {
  AiFillAmazonCircle,
  AiFillGoogleCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <div>
      <div className="home" id="Home">
        <main>
          <h1>DevBharat Technology.</h1>
          <p>Solution to your Problems</p>
        </main>
      </div>

      <div className="home2" id="">
        <img src={vg} alt="graphics"></img>
        <p>
        we specialize in providing innovative and cost-effective digital solutions. Our team of experts offers tailored web and mobile development, cloud services, IT consulting, and digital marketing to help businesses grow and succeed in the digital world.
        </p>
      </div>
      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            At DevBharat Technology, we are passionate about delivering
            innovative, high-quality, and cost-effective tech solutions to
            businesses around the globe. Our team of experienced developers,
            designers, and tech enthusiasts specialize in creating customized
            digital experiences that drive success for your business. We offer a
            wide range of services, including web and mobile application
            development, cloud solutions, digital marketing, and IT consulting.
            Whether you're a startup looking to make your mark or an established
            company in need of a technological overhaul, we have the expertise
            to help you achieve your goals. Our approach is simple: we listen,
            we collaborate, and we deliver. We work closely with you to
            understand your vision and translate it into a powerful digital
            presence. By leveraging the latest technologies and industry best
            practices, we ensure that your business stays ahead in this
            fast-evolving digital landscape.
          </p>
          <div className="link">
            <Link to={"/contact"}>Contact us</Link>
          </div>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div style={{ animationDelay: "0.3s" }}>
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>
            <div style={{ animationDelay: "0.5s" }}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
            <div style={{ animationDelay: "0.7s" }}>
              <AiFillYoutube />
              <p>YouTube</p>
            </div>
            <div style={{ animationDelay: "1s" }}>
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Home;
