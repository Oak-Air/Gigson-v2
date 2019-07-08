import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Testimonial from "../components/Testimonial"
import SEO from "../components/seo"
import logo from "../images/logo.svg"


const Swipemax = () => (
  <Layout>
    <SEO title="Hiring for Swipemax" />
    <div className="HeroSection Swipemax Container">
    	<div className="Content">
    		<h2>“The process was very responsive and smooth. Our hiring process that would normally take 6 months was done in 2 -- the commitment was unparalled.”</h2>
    		<div className="TestifierDetails">
    			<p className="TestifierName">DAMILARE</p>
    			<p className="TestifierPosition">CTO, Swipemax</p>
    		</div>
    	</div>
    	<img src={require('../images/testifier-1.png')}/>
    </div>
    <div className="StoryContent SwipemaxContent">
    <div className="ContentBlock">
        <h2>About Swipemax</h2>
        <p>SwipeMax is a product design and Software engineering company in Lagos, Nigeria. They work with amazing companies and built notable products such as LindaIkejiTV VOD Plaform.
      </p>
    </div>
    	<div className="ContentBlock">
	    	<p>In May, Swipemax decided to try Gigson to hire a full time developer. This wasn’t their first time using the bot in the community but this time around they decided to use the tailored service. We used our Job description creation tool to understand precisely the type of developer that would suit their technical & business needs.
			</p>
			<p>
				In no time, Gigson recommended 3 candidates with a 92% match on the Job description. These developers were introduced to Swipemax and an interview was set up shortly after. By the end of the week, one developer was selected and scheduled to resume the following monday. Based on their feedback, they would have loved to take all three but they only just needed one at the moment.
			</p>
			<p>
			  In Dare’s review of the process, he mentioned that he would love to use Gigson going forward to save the headache and time of sieving through unqualified candidates.
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
        story="Schoolable ramps up their tech team with Gigson."
        TestifierName="Henry"
        Position="CEO"
        Company="Scholable"
        image={require('../images/Testifier-2.png')}
        destination="/Scholable"
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

export default Swipemax
