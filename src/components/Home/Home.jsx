import React from "react";
import Stylehome from "../Home/Stylehome.css";
import img from "../asssets/PHOTO-2022-10-12-12-32-04.jpg";

const Home = () => {
  return (
    <div className="personalinfo">
      <div className="personalinfo__right">
        <img style={{ width: "50%" }} src={img} alt="" />
        <button className="btn-dowload">
          <i className="fa fa-download"></i> Download resume
        </button>
      </div>

      <div className="personalinfo__left">
        <h1>ABOUT ME</h1>
        <p className="personalinfo__left-txt">
          Responsibe and ambtious student (4.0 GP A) with excellent time
          management. Seeking to apply my investigative and analyticaJ skills to
          the Neuroscience and Behavior major at your University.Well-Developed
          Care Skills and displaying honesty.integrity and perseverance will aid
          your University ln meeting is milestones .Organized and dependaЫe
          candidate successful at managing multiple priorities with а positive
          attitude. Willingness to take on added responsiЫlities to meet team
          goals.
        </p>
        <div className="contacts">
          <p className="contacts__first">Email</p>
          <p className="contacts__second">nurnisajanybek@gmail.com</p>
        </div>
        <div>
          <p className="contacts__first">Number</p>
          <p className="contacts__second">0 777 755 225</p>
        </div>
      </div>
      <div className="personalinfo__links">
        <div>
          <a href="https://wa.me/996777755225" target="_blank">
            <img
              src="https://static.cdnlogo.com/logos/w/43/whatsapp.svg"
              alt=""
              width="70%"
            />
          </a>
        </div>
        <div>
          <a href="https://www.instagram.com/nurnisarin/" target="_blank">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Instagram.svg/2048px-Instagram.svg.png"
              alt=""
              width="70%"
            />
          </a>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/nurnisa-janybek-709393200"
            target="_blank"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/2048px-LinkedIn_icon_circle.svg.png"
              alt=""
              width="70%"
            />
          </a>
        </div>
        <div>
          <a href="https://t.me/nurnisarin" target="_blank">
            <img
              src="https://seeklogo.com/images/T/telegram-minimal-logo-2F6E632BF2-seeklogo.com.png"
              alt=""
              width="70%"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
