import React from "react";
import BannerImage from "../assets/detailsrpm2.png";
import "../styles/Detailsrpm.css";
import { BsEmojiSmile } from "react-icons/bs";
import { AiOutlineInfo } from "react-icons/ai";
import BannerImage1 from "../assets/slider6.jpeg";

function Detailsrpm() {
  return (
    <div className="">
      <div
        class="background-title"
        style={{ backgroundImage: "url(" + BannerImage1 + ")" }}
      >
        <h1 className="details-title">RPM™</h1>
        <div className="under-title"> Courses / RPM™ / About RPM™ </div>
      </div>
      <div className="section-title">
        <h1>Indoor cycling courses fitness classes</h1>
        <br></br>
        <div className="section-title-border"></div>
      </div>
      <div className="section-description">
        <p>
        Inspired by bicycle racing, the RPM™ simulates climbs and
           sprints during a workout where you control the intensity.
        </p>
      </div>
      <div className="section-img">
       
      </div>
      <div className="section-centent">
        <p>
        With great music pumping and the group cycling as one, your instructor takes you on a journey of hill climbs, sprints and flat riding. In an RPM workout you repeatedly rotate the pedals to reach your cardio peak then ease back down, keeping pace with the pack to lift your personal performance and boost your cardio fitness.
        </p>
        <p>
        RPM is a great way to build up your sense of personal achievement. You can draw on the group’s energy and find your rhythm in the music. You control your own resistance levels and speed so you can build up your fitness level over time. It’s a journey, not a race!
        </p>
      </div>

      <div className="section-info">
        <div className="section-info-1">
          <div className="section-title">
            <h3>
              {" "}
              <BsEmojiSmile></BsEmojiSmile> The benefits of RPM™
            </h3>
            <br></br>
            <div className="section-title-border"></div>
          </div>

          <ul className="section-info-centent">
            <li>Improve your cardiovascular capacity</li>
            <li>tone and sculpt your legs, hips and buttocks</li>
            <li>
            Burns up to 700 calories in a typical 45 minute session
            </li>
            <li>
            Releases endorphins to bring you a feeling of natural euphoria and keep you feeling super fit
            </li>
          </ul>
        </div>
        <div className="section-info-2">
          <div className="section-title">
            <h3>
              {" "}
              <AiOutlineInfo></AiOutlineInfo> Is it your first time?
            </h3>
            <br></br>
            <div className="section-title-border"></div>

            <p className="section-info-centent">
            Your saddle should be at hip height, and you should
have your knees slightly bent when your feet are located at the
lowest point of rotation. Do not hesitate to ask your
RPM instructor to show you how to tune your bike and all
the basic movements of cycling. Start with 4-5 songs and gradually build up to a full course.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detailsrpm;
