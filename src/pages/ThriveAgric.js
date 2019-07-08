import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Testimonial from "../components/Testimonial"
import SEO from "../components/seo"
import logo from "../images/logo.svg"


const ThriveAgric = () => (
  <Layout>
    <SEO title="Enabling Agriculture with qualified hands." />
    <div className="HeroSection ThriveAgric Container">
    	<div className="Content">
    		<h2>“Our roles were filled and we went straight to work with committed developers.”</h2>
    		<div className="TestifierDetails">
    			<p className="TestifierName">AYODEJI ARIKAWE</p>
    			<p className="TestifierPosition">CTO, Thrive Agric</p>
    		</div>
    	</div>
    	<img src={require('../images/testifier-3.png')}/>
    </div>
    <div className="StoryContent ThriveAgricContent">
    	<div className="ContentBlock">
	    	<h2>About Thrive Agric</h2>
	    	<p>Thrive Agric is a technology-driven agricultural company that helps smallholder farmers in Nigeria to access crowdfunded loans to help grow their crops and help them sell their produce. The company is backed by the team at Ventures platform and Ycombinator.
			</p>
		</div>
		<div className="ContentBlock">
	    	<h2>Enabling Agriculture with qualified hands.</h2>
	    	<p>Africa has over 500 million smallholder farmers, yet its set to spend $110 billion importing food into the country. Thrive Agric believes that Africa has the potential to feed the world by using technology to link smallholder farmers to access to finance to grow their crops.
			</p>
			<p>
				Thrive Agric employs a data driven approach to increase yields and make the profitable. For this reason, the company’s desired to hire developers who were not only true to its mission but also had the necessary skills for Thrive Agric to constantly improve yields. Thrive Agris is targeting financing opportunities to help one million shareholder farmers across Africa and we are excited to have helped them recruit exceptional tech talent to scale their business.
			</p>
		</div>
		<div className="MoreCaseStudies">
				<h2>More case studies</h2>
				<div className="CaseStudies">
				 <Testimonial
			        story="Schoolable ramps up their tech team with Gigson."
			        TestifierName="Henry"
			        Position="CEO"
			        Company="Scholable"
			        image={require('../images/Testifier-2.png')}
			        destination="/Scholable"
			        />

		        <Testimonial
			        story="Getting the best fit developers."
			        TestifierName="Dare"
			        Position="CTO"
			        Company="Swipemax"
			        image={require('../images/Testifier-1.png')}
			        destination="/Swipemax"
			        />
		        </div>
			</div>
    </div>
    <div className="SubFooter">
      <div className="SmallContainer">
        <p>Give it a shot</p>
        <h2>Lets connect you to qualified tech talents that deliver on your business objectives.</h2>
        <a className="PrimaryButtonWhite" href="https://gigson.typeform.com/to/I1Pw5Y">Create your job post</a>
      </div>
     </div>

    <div className="Footer">
      <img alt="Gigson" className="logo" src={logo}/>
      <ul className="FooterItems">
        <li><Link to="#Testimonials">Testimonials</Link></li>
        <li><a href="https://www.devcenter.co/privacy">privacy</a></li>
        <li><Link to="https://devcenter.drift.help/">FAQs</Link></li>
        <li><a href="https://www.devcenter.co/terms">Terms and Conditions</a></li>
      </ul>
  </div>
  </Layout>
)

export default ThriveAgric
