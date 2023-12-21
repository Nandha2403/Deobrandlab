import React from "react";
import "./WebsiteDesign.css";
import Navbar from "../../../Components/Navabar/Navbar";
import Footer from "../../../Components/Footer/Footer";
import BeInTouch from "../../../Components/BeIntouchContainer/BeInTouch";

const WebsiteDesign = () => {
  return (
    <div className="website_design_parent">
      <Navbar />

      <div className="code_create_cont">
        <h1>
          CODE <span>Create</span>CAPTIVATE
        </h1>
      </div>

      <div className="below_code_create_cont">
        <div>
          <p>
            At DEO, We go beyond mere Digital Business Cards. We're Dedicated to
            Building Bridges between your Brand and Audience.
          </p>
          <p>
            Our Team Excels in Crafting Distinctive Website Designs Tailored to
            your Brand, Combining Aesthetically pleasing Interfaces with
            Persuasive Content.
          </p>
        </div>
        <div>
          <p>
            We aim to Create Captivating Websites that Leave a Lasting
            Impression, Reflecting your Business Identity and Ensuring a Unified
            Online Presence.
          </p>
          <p>
            With our Blend of Creativity, AI, and Technical Expertise, We strive
            to Deliver Genuinely Unique Websites.
          </p>
        </div>
      </div>

      <div className="uiux_design_cont">
        <div className="uiux_design_heading_cont">
          <h1>UI/UX DESIGN</h1>
        </div>
        <div>
          <p>
            We are committed to creating spectacular aesthetics and
            user-friendly functionality that are in line with your business
            goals as a company that leads in UI/UX design services.
          </p>
        </div>
        <div>
          <p>
            Our area of expertise is in producing designs that please your
            audience at every touchpoint while also being visually appealing. We
            put a strong emphasis on every aspect of your website designing
            service or mobile app, to make sure it stands out and makes a good
            impression.
          </p>
        </div>
        <div>
          <p>
            Entrust your online presence to our UI/UX design firm, and watch
            your brand fly above the competition.
          </p>
        </div>
      </div>
      <div className="website_dev_cont">
        <div className="website_dev_heading_cont">
          <h1>WEBSITE DEVELOPMENT</h1>
        </div>
        <div>
          <p>
            Your website holds the key to releasing your company's full
            potential. We specialize in building websites that captivate and
            bewitch your audience, accelerating your growth in the digital
            realm.
          </p>
        </div>
        <div>
          <p>
            We always provide the ideal solution, whether you need a
            straightforward microsite or a sophisticated e-commerce platform.
          </p>
        </div>
      </div>

      <div className="website_maintenance_cont">
        <div className="website_maintenance_heading_cont">
          <h1>WEBSITE MAINTENANCE</h1>
        </div>
        <div>
          <p>
            We understand that website maintenance goes beyond simply updating
            content. We offer comprehensive maintenance services that cover all
            aspects of keeping your website running smoothly.
          </p>
        </div>
        <div>
          <p>
            Our maintenance services include regular software updates, ensuring
            that your website's core software, themes, and plugins are up to
            date.
          </p>
        </div>
        <div>
          <p>
            By keeping everything current, we ensure compatibility, security,
            and optimal performance.
          </p>
        </div>
      </div>

      <div className="website_copy_cont">
        <div className="website_copy_heading_cont">
          <h1>WEBSITE COPY</h1>
        </div>
        <div>
          <p>
            We understand that building a website involves more than just
            aesthetics. We go beyond the visual appeal to create a captivating
            narrative.
          </p>
        </div>
        <div>
          <p>
            Our team of skilled copywriters knows how to craft engaging and
            persuasive content that tells your story effectively.
          </p>
        </div>
        <div>
          <p>
            We delve deep into your brand, values, and target audience to create
            a content strategy that aligns with your goals and resonates with
            your customers.
          </p>
        </div>
      </div>

      <div className="intranet_cont">
        <div className="intranet_heading_cont">
          <h1>INTRANET</h1>
        </div>
        <div>
          <p>
            Your website holds the key to releasing your company's full
            potential. We specialize in building websites that captivate and
            bewitch your audience, accelerating your growth in the digital
            realm.
          </p>
        </div>
        <div>
          <p>
            We always provide the ideal solution, whether you need a
            straightforward microsite or a sophisticated e-commerce platform.
          </p>
        </div>
      </div>

      <div className="web_and_apps_portals_cont">
        <div className="web_and_apps_portals_heading_cont">
          <h1>WEB & APPS PORTALS</h1>
        </div>
        <div>
          <p>
            Our collaborative team of designers and developers is dedicated to
            bringing your vision to life and delivering a seamless user
            experience powered by cutting-edge technology.
          </p>
        </div>
        <div>
          <p>
            With our expertise, get ready to scale your business to the next
            level with web apps and portals that are not only visually pleasing
            but also highly functional.
          </p>
        </div>
      </div>

      <BeInTouch />
      <Footer />
    </div>
  );
};

export default WebsiteDesign;
