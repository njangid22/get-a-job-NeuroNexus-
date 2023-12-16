import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import NavigationLinks3 from '../components/navigation-links3'
import NavigationLinks2 from '../components/navigation-links2'
import './job-seeker.css'

const JobSeeker = (props) => {
  return (
    <div className="job-seeker-container">
      <Helmet>
        <title>job-seeker - Worn Green Chough</title>
        <meta property="og:title" content="job-seeker - Worn Green Chough" />
      </Helmet>
      <header data-role="Header" className="job-seeker-header">
        <Link to="/" className="job-seeker-navlink">
          <img
            alt="image"
            src="/neuronexus-high-resolution-logo-transparent-200h.png"
            className="job-seeker-image"
          />
        </Link>
        <NavigationLinks3 rootClassName="rootClassName19"></NavigationLinks3>
        <div className="job-seeker-icon-group">
          <div data-role="BurgerMenu" className="job-seeker-burger-menu">
            <svg viewBox="0 0 1024 1024" className="job-seeker-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <svg viewBox="0 0 1024 1024" className="job-seeker-icon02">
            <path d="M684.416 676.523c-1.451 1.109-2.859 2.347-4.224 3.712s-2.56 2.731-3.712 4.224c-53.675 51.755-126.677 83.541-207.147 83.541-82.475 0-157.099-33.365-211.2-87.467s-87.467-128.725-87.467-211.2 33.365-157.099 87.467-211.2 128.725-87.467 211.2-87.467 157.099 33.365 211.2 87.467 87.467 128.725 87.467 211.2c0 80.469-31.787 153.472-83.584 207.189zM926.165 865.835l-156.8-156.8c52.523-65.707 83.968-149.035 83.968-239.701 0-106.027-43.008-202.069-112.469-271.531s-165.504-112.469-271.531-112.469-202.069 43.008-271.531 112.469-112.469 165.504-112.469 271.531 43.008 202.069 112.469 271.531 165.504 112.469 271.531 112.469c90.667 0 173.995-31.445 239.701-83.968l156.8 156.8c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"></path>
          </svg>
        </div>
        <div data-role="MobileMenu" className="job-seeker-mobile-menu">
          <nav className="job-seeker-nav">
            <div className="job-seeker-container01">
              <img
                alt="image"
                src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                className="job-seeker-image1"
              />
              <div
                data-role="CloseMobileMenu"
                className="job-seeker-close-mobile-menu"
              >
                <svg viewBox="0 0 1024 1024" className="job-seeker-icon04">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <NavigationLinks2 rootClassName="rootClassName13"></NavigationLinks2>
          </nav>
          <div>
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="job-seeker-icon06"
            >
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="job-seeker-icon08"
            >
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg
              viewBox="0 0 602.2582857142856 1024"
              className="job-seeker-icon10"
            >
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </header>
      <div className="job-seeker-blog">
        <div className="job-seeker-container02">
          <div className="job-seeker-blog-post-card">
            <img
              alt="image"
              src="/wipro1-final-400h.png"
              className="job-seeker-image2"
            />
            <div className="job-seeker-container03">
              <div className="job-seeker-container04">
                <span className="job-seeker-text">intern</span>
                <span className="job-seeker-text01">3 days ago</span>
              </div>
              <Link to="/application" className="job-seeker-navlink1">
                <h1 className="job-seeker-text02">Wipro</h1>
              </Link>
              <span className="job-seeker-text03">
                <span>
                  NeuroNexas Innovation is hiring for the role of SDE Intern!
                </span>
                <br></br>
                <span>
                  Are you passionate about technology and eager to learn?
                  NeuroNexus Innovations is excited to announce our Internship
                  Program!
                </span>
                <br></br>
                <span>
                  About the Internship: This is an opportunity to work with our
                  team of experts in the field of IT services and software
                  development. You will gain hands-on experience working on
                  real-world projects, contributing to our innovative solutions,
                  and learning from industry professionals.
                </span>
              </span>
              <div className="job-seeker-container05">
                <span className="job-seeker-text09">Read More -&gt;</span>
              </div>
            </div>
          </div>
        </div>
        <div className="job-seeker-container06">
          <div className="job-seeker-blog-post-card1">
            <img
              alt="image"
              src="/esg-policies-400h.webp"
              className="job-seeker-image3"
            />
            <div className="job-seeker-container07">
              <div className="job-seeker-container08">
                <span className="job-seeker-text10">full-time</span>
                <span className="job-seeker-text11">3 days ago</span>
              </div>
              <Link to="/application" className="job-seeker-navlink2">
                <h1 className="job-seeker-text12">Infosys</h1>
              </Link>
              <span className="job-seeker-text13">
                NeuroNexas Innovation is hiring for the role of SDE Intern!Are
                you passionate about technology and eager to learn? NeuroNexus
                Innovations is excited to announce our Internship Program!About
                the Internship: This is an opportunity to work with our team of
                experts in the field of IT services and software development.
                You will gain hands-on experience working on real-world
                projects, contributing to our innovative solutions, and learning
                from industry professionals.
              </span>
              <div className="job-seeker-container09">
                <span className="job-seeker-text14">Read More -&gt;</span>
              </div>
            </div>
          </div>
        </div>
        <div className="job-seeker-blog-post-card2">
          <img
            alt="image"
            src="/image_1467537670-400w.webp"
            className="job-seeker-image4"
          />
          <div className="job-seeker-container10">
            <div className="job-seeker-container11">
              <span className="job-seeker-text15">full-time</span>
              <span className="job-seeker-text16">3 days ago</span>
            </div>
            <Link to="/application" className="job-seeker-navlink3">
              <h1 className="job-seeker-text17">Capgemini</h1>
            </Link>
            <span className="job-seeker-text18">
              NeuroNexas Innovation is hiring for the role of SDE Intern!Are you
              passionate about technology and eager to learn? NeuroNexus
              Innovations is excited to announce our Internship Program!About
              the Internship: This is an opportunity to work with our team of
              experts in the field of IT services and software development. You
              will gain hands-on experience working on real-world projects,
              contributing to our innovative solutions, and learning from
              industry professionals.
            </span>
            <div className="job-seeker-container12">
              <span className="job-seeker-text19">Read More -&gt;</span>
            </div>
          </div>
        </div>
      </div>
      <div className="job-seeker-blog1">
        <div className="job-seeker-container13">
          <div className="job-seeker-blog-post-card3">
            <img
              alt="image"
              src="/tech-mahindra-pune-campus-1-770x433-400w.webp"
              className="job-seeker-image5"
            />
            <div className="job-seeker-container14">
              <div className="job-seeker-container15">
                <span className="job-seeker-text20">ENTERPRISE</span>
                <span className="job-seeker-text21">3 days ago</span>
              </div>
              <Link to="/application" className="job-seeker-navlink4">
                <h1 className="job-seeker-text22">Tech Mahindra</h1>
              </Link>
              <span className="job-seeker-text23">
                NeuroNexas Innovation is hiring for the role of SDE Intern!Are
                you passionate about technology and eager to learn? NeuroNexus
                Innovations is excited to announce our Internship Program!About
                the Internship: This is an opportunity to work with our team of
                experts in the field of IT services and software development.
                You will gain hands-on experience working on real-world
                projects, contributing to our innovative solutions, and learning
                from industry professionals.
              </span>
              <div className="job-seeker-container16">
                <span className="job-seeker-text24">Read More -&gt;</span>
              </div>
            </div>
          </div>
        </div>
        <div className="job-seeker-container17">
          <div className="job-seeker-blog-post-card4">
            <img
              alt="image"
              src="/9f-lobby-reception1-edited-200h.jpg"
              className="job-seeker-image6"
            />
            <div className="job-seeker-container18">
              <div className="job-seeker-container19">
                <span className="job-seeker-text25">intern</span>
                <span className="job-seeker-text26">3 days ago</span>
              </div>
              <Link to="/application" className="job-seeker-navlink5">
                <h1 className="job-seeker-text27">Concentrix Corporation</h1>
              </Link>
              <span className="job-seeker-text28">
                NeuroNexas Innovation is hiring for the role of SDE Intern!Are
                you passionate about technology and eager to learn? NeuroNexus
                Innovations is excited to announce our Internship Program!About
                the Internship: This is an opportunity to work with our team of
                experts in the field of IT services and software development.
                You will gain hands-on experience working on real-world
                projects, contributing to our innovative solutions, and learning
                from industry professionals.
              </span>
              <div className="job-seeker-container20">
                <span className="job-seeker-text29">Read More -&gt;</span>
              </div>
            </div>
          </div>
        </div>
        <div className="job-seeker-blog-post-card5">
          <img
            alt="image"
            src="/reliance-rep2-1604075964-400w.jpg"
            className="job-seeker-image7"
          />
          <div className="job-seeker-container21">
            <div className="job-seeker-container22">
              <span className="job-seeker-text30">full-time</span>
              <span className="job-seeker-text31">3 days ago</span>
            </div>
            <Link to="/application" className="job-seeker-navlink6">
              <h1 className="job-seeker-text32">Reliance Jio</h1>
            </Link>
            <span className="job-seeker-text33">
              NeuroNexas Innovation is hiring for the role of SDE Intern!Are you
              passionate about technology and eager to learn? NeuroNexus
              Innovations is excited to announce our Internship Program!About
              the Internship: This is an opportunity to work with our team of
              experts in the field of IT services and software development. You
              will gain hands-on experience working on real-world projects,
              contributing to our innovative solutions, and learning from
              industry professionals.
            </span>
            <div className="job-seeker-container23">
              <span className="job-seeker-text34">Read More -&gt;</span>
            </div>
          </div>
        </div>
        <button type="button" className="job-seeker-button Heading button">
          NEXT PAGE-&gt;
        </button>
      </div>
      <footer className="job-seeker-footer">
        <img
          alt="image"
          src="/neuronexus-high-resolution-logo-transparent-200h.png"
          className="job-seeker-image8"
        />
        <span className="job-seeker-text35">
          © 2021 neuronexus innovation, All Rights Reserved.
        </span>
        <a
          href="https://www.linkedin.com/in/nikhil-jangid-61722b253/"
          target="_blank"
          rel="noreferrer noopener"
          className="job-seeker-link"
        >
          <svg
            viewBox="0 0 877.7142857142857 1024"
            className="job-seeker-icon12"
          >
            <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
          </svg>
        </a>
        <a
          href="https://www.instagram.com/njangid_22/"
          target="_blank"
          rel="noreferrer noopener"
          className="job-seeker-link1"
        >
          <svg
            viewBox="0 0 877.7142857142857 1024"
            className="job-seeker-icon14"
          >
            <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
          </svg>
        </a>
        <a
          href="https://github.com/njangid22"
          target="_blank"
          rel="noreferrer noopener"
          className="job-seeker-link2"
        >
          <svg
            viewBox="0 0 877.7142857142857 1024"
            className="job-seeker-icon16"
          >
            <path d="M438.857 73.143c242.286 0 438.857 196.571 438.857 438.857 0 193.714-125.714 358.286-300 416.571-22.286 4-30.286-9.714-30.286-21.143 0-14.286 0.571-61.714 0.571-120.571 0-41.143-13.714-67.429-29.714-81.143 97.714-10.857 200.571-48 200.571-216.571 0-48-17.143-86.857-45.143-117.714 4.571-11.429 19.429-56-4.571-116.571-36.571-11.429-120.571 45.143-120.571 45.143-34.857-9.714-72.571-14.857-109.714-14.857s-74.857 5.143-109.714 14.857c0 0-84-56.571-120.571-45.143-24 60.571-9.143 105.143-4.571 116.571-28 30.857-45.143 69.714-45.143 117.714 0 168 102.286 205.714 200 216.571-12.571 11.429-24 30.857-28 58.857-25.143 11.429-89.143 30.857-127.429-36.571-24-41.714-67.429-45.143-67.429-45.143-42.857-0.571-2.857 26.857-2.857 26.857 28.571 13.143 48.571 64 48.571 64 25.714 78.286 148 52 148 52 0 36.571 0.571 70.857 0.571 81.714 0 11.429-8 25.143-30.286 21.143-174.286-58.286-300-222.857-300-416.571 0-242.286 196.571-438.857 438.857-438.857zM166.286 703.429c1.143-2.286-0.571-5.143-4-6.857-3.429-1.143-6.286-0.571-7.429 1.143-1.143 2.286 0.571 5.143 4 6.857 2.857 1.714 6.286 1.143 7.429-1.143zM184 722.857c2.286-1.714 1.714-5.714-1.143-9.143-2.857-2.857-6.857-4-9.143-1.714-2.286 1.714-1.714 5.714 1.143 9.143 2.857 2.857 6.857 4 9.143 1.714zM201.143 748.571c2.857-2.286 2.857-6.857 0-10.857-2.286-4-6.857-5.714-9.714-3.429-2.857 1.714-2.857 6.286 0 10.286s7.429 5.714 9.714 4zM225.143 772.571c2.286-2.286 1.143-7.429-2.286-10.857-4-4-9.143-4.571-11.429-1.714-2.857 2.286-1.714 7.429 2.286 10.857 4 4 9.143 4.571 11.429 1.714zM257.714 786.857c1.143-3.429-2.286-7.429-7.429-9.143-4.571-1.143-9.714 0.571-10.857 4s2.286 7.429 7.429 8.571c4.571 1.714 9.714 0 10.857-3.429zM293.714 789.714c0-4-4.571-6.857-9.714-6.286-5.143 0-9.143 2.857-9.143 6.286 0 4 4 6.857 9.714 6.286 5.143 0 9.143-2.857 9.143-6.286zM326.857 784c-0.571-3.429-5.143-5.714-10.286-5.143-5.143 1.143-8.571 4.571-8 8.571 0.571 3.429 5.143 5.714 10.286 4.571s8.571-4.571 8-8z"></path>
          </svg>
        </a>
        <div className="job-seeker-container24"></div>
      </footer>
    </div>
  )
}

export default JobSeeker
