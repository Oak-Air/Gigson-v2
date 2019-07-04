import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Testimonial from "../components/Testimonial"
import SEO from "../components/seo"
import logo from "../images/logo.svg"


const Scholable = () => (
  <Layout>
    <SEO title="Ramping up Scholable's tech team" />
    <div className="HeroSection Scholable Container">
    	<div className="Content">
    		<h2>“The challenging part for us was the selection. All the shortlisted developers exceeded our expectations.”</h2>
    		<div className="TestifierDetails">
    			<p className="TestifierName">HENRY CHIBUZO</p>
    			<p className="TestifierPosition">CEO, Scholable (YC W'19)</p>
    		</div>
    	</div>
    	<img src={require('../images/testifier-2.png')}/>
    </div>
    <div className="StoryContent ScholableContent">
	    <div className="ContentBlock">
	    	<h2>About Scholable</h2>
	    	<p>Schoolable is a fintech company that focuses on providing access to affordable finance in the private school system in Africa.
			</p>
		</div>
    	<div className="ContentBlock">
	    	<h2>Schoolable ramps up their tech team with Gigson</h2>
	    	<p>Schoolable is going after a big problem in Africa - access to finance. The problem affects every facet of the economy including education. To solve a big problem such as this, a very capable team is needed. Financial technology is an area where expertise and experience matter a lot.
			</p>
			<p>
				In a bid to quickly scale up their tech team, Henry, CEO of Schoolable used Gigson to get shortlisted candidates within a week. Gigson recommended developers based on their past projects, years of experience and other external recommendations. We also conducted a coding test to verify the developers’ ability. The interview process with Henry was very simple and conducted over Skype with the developers. In less than a month, developers were selected and onboarded to the Schoolable team.
			</p>
			<p>
			  Henry summarized the entire process as stress-free, fast and affordable, as the talent were well within the Company’s budget.
			</p>
		</div>

		<div className="MoreCaseStudies">
				<h2>More case studies</h2>
				<div className="CaseStudies">
				 <Testimonial
			        story="Enabling Agriculture with qualified hands."
			        TestifierName="Ayo"
			        Position="CTO"
			        Company="Thrive Agric"
			        image={require('../images/Testifier-3.png')}
			        destination="/ThriveAgric"
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
        <p>Ready to get started?</p>
        <h2>Lets connect you to qualified tech talents that deliver on your business objectives.</h2>
        <a className="PrimaryButtonWhite" href="#">I'm Interested</a>
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

export default Scholable
