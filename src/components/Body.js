import React from "react";
import "./body.css";
import SubscriptionPlan from "./SubscriptionPlan";
import { BsCurrencyRupee } from "react-icons/bs";
import { VscBook } from "react-icons/vsc";
import { AiOutlineClockCircle } from "react-icons/ai";
import { MdLiveTv } from "react-icons/md";
import { IoSchoolSharp } from "react-icons/io5";
import { FaAdversal } from "react-icons/fa";

const Body = () => {
  return (
    <div className="body-section">
      <div className="section-body-left">
        <div className="header-ad">
          Access curated courses worth
          <div className="actual-price">
            <BsCurrencyRupee />
            <span class="outer">
              <span class="inner">18500 </span>
            </span>
          </div>
          at just{" "}
          <div className="header-offer-price">
            <BsCurrencyRupee />
            <span>99 </span>
          </div>
          per year!
        </div>
        <div className="course-offerings">
          <VscBook />
          <p>
            <span>100+</span>
            Job relevant courses
          </p>
        </div>
        <div className="course-offerings">
          <AiOutlineClockCircle />
          <p>
            <span>20,000+</span>
            Hours of content
          </p>
        </div>{" "}
        <div className="course-offerings">
          <MdLiveTv />
          <p>
            <span>Exclusive </span>
            webinar access
          </p>
        </div>
        <div className="course-offerings">
          <IoSchoolSharp />
          <p>
            Scholorship worth{" "}
            <span>
              <BsCurrencyRupee />
              <p>94,500</p>
            </span>
          </p>
        </div>
        <div className="course-offerings">
          <FaAdversal />
          <p>
            <span>Ad free</span> learning experience
          </p>
        </div>
      </div>
      <div className="section-body-right">
        <SubscriptionPlan />
      </div>
    </div>
  );
};

export default Body;
