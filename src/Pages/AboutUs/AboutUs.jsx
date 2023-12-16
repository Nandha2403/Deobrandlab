import React, { useEffect } from "react";
import Navbar from "../../Components/Navabar/Navbar";
import Footer from "../../Components/Footer/Footer";
import AOS from "aos";
import RichaImg from "../../Images/RichaImg.png";
import Tedx from "../../Images/Tedx.jpeg";
import Products from "../../Images/RichaProjects.jpeg";
import NandhaImg from "../../Images/Nandha.jpeg";
import AshwinImg from "../../Images/AshwinImg.jpeg";
import AmrutaImg from "../../Images/AmrutaImg.jpeg";
import ElizabathImg from "../../Images/ElizaImg.jpeg";
import JyotiImg from "../../Images/JyotiImg.jpeg";
import YouTube from "react-youtube";
import "aos/dist/aos.css";
import "./AboutUs.css";

const AboutUs = () => {
  const videoId = "_YBNNYtDzBQ";

  const opts = {
    height: "690",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="Aboutus_parent">
      <Navbar />

      {/* video */}
      <div className="Video_container">
        <YouTube videoId={videoId} opts={opts} />
      </div>
      <div className="top_section" data-aos="fade-right">
        <p className="IntroTitle">
          Building better brands to reach to their potential
        </p>
        <p className="under_intro_title">
          We are your partners in progress. Our agency is dedicated to
          addressing the unique challenges of those seeking innovation and
          change. DEO is here to tailor solutions that precisely cater to your
          needs, propelling your growth in the right direction. From digital
          marketing and branding to technology solutions, our services are
          customized to fit your requirements. We leverage the latest tools and
          methodologies to ensure your business stays agile, efficient, and
          ready for the future.
        </p>
        <div className="brand_identity">
          <h1>
            DEO is not just about solving problems it's about accelerating your
            growth.
          </h1>
        </div>
      </div>

      <div
        className="Our_vision "
        data-aos="fade-right"
        data-aos-duration="5000"
      >
        <p className="headings">OUR VISION</p>
        <div className="under_Our_vision_title">
          <p>
            At DEO, our commitment goes beyond mere acknowledgment—we strive to
            unveil the untapped possibilities within your business. Our
            dedicated team listens intently to your aspirations, ensuring that
            our strategies align seamlessly with your vision. Together, let's
            amplify your latent potential and create a roadmap to unparalleled
            success. We focus on building genuine connections with your audience
            and fostering relationships. Through strategic storytelling, we not
            only capture attention but also leave a lasting imprint.
          </p>
        </div>
      </div>
      <div className="Who_We_Are">
        <p className="headings">Who We Are</p>
        <div className="Who_We_Are_title_under">
          <p>
            At DEO we are passionate storytellers and content creators. With a
            commitment to quality and creativity, we specialize in producing
            engaging content that captivates audiences. Whether it's written
            articles, multimedia presentations, or social media campaigns, we
            take pride in delivering content that resonates and leaves a lasting
            impression.
          </p>
        </div>
      </div>

      <div className="richa_banner">
        <h1>
          RICHA BAJAJ, <span className="smallTxt">Founder of DEO</span>
        </h1>

        <div className="richa_banner_cont">
          <div className="richa_img_cont">
            <img src={RichaImg} alt="Richa" />
            <h2>
              14+ YEARS OF RICH EXPERIENCE IN MAPPING UNDERLYING MOTIVATIONS OF
              CONSUMERS, BRANDS AND BUSINESSES
            </h2>
          </div>
          <div className="richa_project_img_cont">
            <img src={Tedx} alt="TEDx" />

            <img src={Products} alt="Products" />
          </div>
        </div>
      </div>
      <div className="list_container">
        <p>
          With a wealth of proven insight mining experiences spanning diverse
          business verticals such as Healthcare, FMCG, Tourism, Financial
          Services, Real Estate, and Media, I have contributed my expertise to
          renowned agencies including JWT, McCann, and DDB Mudra. My notable
          collaborations encompass key clients such as ITC Aashirvaad, Britannia
          GoodDay, J&J Accuview, Nestle NAN, Ireland Tourism, UTI & Morgan
          Stanley Mutual Fund, Wipro – Santoor, and more. Recognized for my
          strategic acumen, I've been honored with the McCann Planning
          Excellence Awards by Prasoon Joshi, Chairman Asia Pacific, Chairman
          CBFC. Beyond my corporate achievements, I've ventured into
          entrepreneurship with #LINEOLOGY, an E-commerce startup that
          seamlessly integrates Indian and Western mysticism.
        </p>
      </div>

      <div className="Core_Team_Container">
        <p className="headings">CORE TEAM</p>
        <div className="Core_Team_img_and_text">
          <div className="Core_Team_img_container">
            <img src={JyotiImg} alt="Jyoti" />
            <div className="team_member_names_cont">
              <h2>JYOTI SINHA</h2>
            </div>
          </div>
          <div className="Core_Team_text_container">
            <p className="Core_Team_text_headings">Digital Marketing Manager</p>
            <p>
              Digital Marketing and Sales professional with 4 years of expertise
              in Ed Tech, Product, and Advertising. Holds an MBA with a rich
              background in launching new products across mainline, offline, and
              digital mediums. A seasoned number cruncher with a deep
              understanding of market, consumer, and trade dynamics. Experienced
              in managing creative, media, and PR agencies, having worked with
              retail giants such as Shoppers Stop, salon chain YLG Salon, and
              EFIL. Holds certifications in Google, Facebook, and Bing Digital
              Marketing. Core expertise includes end-to-end strategic and
              digital marketing, CRM, and marketing activations. Successfully
              spearheaded brand and product launches in new geographies.
            </p>
          </div>
        </div>
        <div className="Core_Team_img_and_text">
          <div className="Core_Team_img_container">
            <img src={AmrutaImg} alt="Amruta" />
            <div className="team_member_names_cont">
              <h2>AMRUTA SANKAPAL</h2>
            </div>
          </div>
          <div className="Core_Team_text_container">
            <p className="Core_Team_text_headings">SEO SPECIALIST</p>
            <p>
              Results-oriented SEO specialist dedicated to enhancing online
              presence and driving organic traffic. Proven track record in
              optimizing websites for search engines and delivering measurable
              results. Experienced in managing Google Ads, Amazon Advertising,
              and Flipkart campaigns. Core expertise includes GMB profile
              creation and optimization, Advanced and Technical SEO, Keyword
              Research, On-Page SEO Optimization, HTML/CSS, and WordPress.
              Successfully managed link-building campaigns to boost domain
              authority and secure high-quality backlinks. Proficient in
              optimizing website content for SEO through collaboration with
              content teams, resulting in improved organic search rankings.
            </p>
          </div>
        </div>
        <div className="Core_Team_img_and_text">
          <div className="Core_Team_img_container">
            <img src={ElizabathImg} alt="Elizabath" />
            <div className="team_member_names_cont">
              <h2>ELIZABETH BASUMATARY</h2>
            </div>
          </div>
          <div className="Core_Team_text_container">
            <p className="Core_Team_text_headings">CONTENT WRITTER</p>
            <p>
              Experienced and imaginative writer with a Master's degree in
              English, specializing in content creation for Ed Tech and Health &
              Wellness sectors. Expertise includes research excellence, SEO,
              editing, and proofreading. Dedicated to captivating, informing,
              and engaging audiences through creative storytelling. Proven
              ability to establish strong client relationships with effective
              communication and punctual delivery.
            </p>
          </div>
        </div>
        <div className="Core_Team_img_and_text">
          <div className="Core_Team_img_container">
            <img src={NandhaImg} alt="Nandha" />
            <div className="team_member_names_cont">
              <h2>NANDHA</h2>
            </div>
          </div>
          <div className="Core_Team_text_container">
            <p className="Core_Team_text_headings">SOFTWARE DEVELOPER</p>
            <p>
              Skilled Software Development Engineer (SDE-1) specializing in
              full-stack web applications with the MERN stack. Proficient in
              creating responsive and dynamic user interfaces, designing complex
              single-page applications, and utilizing third-party tools for
              high-quality solutions. Expertise in Front End Technologies HTML,
              CSS, and JavaScript ensuring cross-browser compatibility and
              accessibility. Passionate about crafting seamless web experiences
              and solving challenging technical problems.
            </p>
          </div>
        </div>
        <div className="Core_Team_img_and_text">
          <div className="Core_Team_img_container">
            <img src={AshwinImg} alt="Ashwin" />
            <div className="team_member_names_cont">
              <h2>ASHWIN KUMAR</h2>
            </div>
          </div>
          <div className="Core_Team_text_container">
            <p className="Core_Team_text_headings">GRAPHIC DESIGNER</p>
            <p>
              Dedicated and creative graphic designer passionate about
              multimedia technology, art, and photography. Strong educational
              background with a unique perspective influenced by a love for
              sketching and the automobile industry. Core expertise includes
              logo design, poster and banner creation, brand identity
              development, and user interface design. Proficient in crafting
              impactful logos that communicate brand identity effectively.
              Experienced in designing eye-catching posters and banners for
              diverse campaigns. Possesses a strong understanding of
              user-centered design principles and usability. Approaches each
              project with enthusiasm, boundless creativity, and unwavering
              attention to detail.
            </p>
          </div>
        </div>
      </div>
      <div className="your_success">
        <p>Your success story begins with us.</p>
        <div className="be_in_touch_btn_cont">
          <button class="link style-7">
            <span class="circle" aria-hidden="true">
              <span class="icon arrow"></span>
            </span>
            <span class="button-text">Be In Touch</span>
          </button>
        </div>
      </div>

      <div className="Aboutus_footer_cont">
        <Footer />
      </div>
    </div>
  );
};

export default AboutUs;
