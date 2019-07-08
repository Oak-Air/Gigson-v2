import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import TextBubble from "../components/TextBubble"
import Testimonial from "../components/Testimonial"
import logo from "../images/logo.svg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="HeroSectionMain container">
      <img className="HeroImage" src={require('../images/Lens1.png')}/>
      <div className="HeroCopy">
        <h1>The “expert talent” hiring process that won’t stress you.</h1>
        <p>All you need to do is create your job post and we'll send you top performing developers that are 100% driven to helping your business grow.</p>
      </div>
      <div className="HeroCard">
        <div className="Testimony">
        <img alt="Dare's Image" src={require('../images/Dare-avatar-small.png')}/>
        <div className="TestimonyCopy">
          <h4>Gigson helped us cut down our usual talent hire time by half the time it used to take and we got better than was expected.</h4>
          <p>DARE <span>- CTO, Swipemax </span></p>
        </div>
        </div>
        <a href="https://gigson.typeform.com/to/I1Pw5Y" className="PrimaryButton">Create your job post</a>


      </div>
    </div>
    <div className="Comparison">
      <div className="OldWay Way">
        <p className="title">Usually, you would use the</p>
        <h2> Traditional way</h2>
        <div className="BubbleList">
          <TextBubble 
            emoji={require('../images/hashtag.png')}
            text="Post on social media"
          />
          <TextBubble 
            emoji={require('../images/inbox.png')}
            text="Get thousands of applicants and hence; a 
            jampacked inbox & many sleepless nights."
          />
          <TextBubble 
            emoji={require('../images/phone.png')}
            text="Have lots of interviews,"
          />
          <TextBubble 
            emoji={require('../images/curve-arrow.png')}
            text="Go through negotiations and disappointments,"
          />
          <TextBubble 
            emoji={require('../images/sweat-face.png')}
            text="maybe if you’re lucky, you’d find the right fit,"
          />
          <TextBubble 
            emoji={require('../images/fear.png')}
            text="And then you realize, 60 days just went by,"
          />
          <TextBubble 
            emoji={require('../images/tears.png')}
            text="...there’s also the case where you don’t find a fit  at all."
          />
        </div>

      </div>

      <div className="NewWay Way">
        <p className="title">But now with the</p>
        <h2> Gigson Way</h2>
        <div className="BubbleList">
        <TextBubble 
            emoji={require('../images/cool.png')}
            text="Post on Gigson"
          />
        <TextBubble 
            emoji={require('../images/qualified-portfolios.png')}
            text="Get prequalified portfolios"
          />
        <TextBubble 
            emoji={require('../images/talents.png')}
            text="Interview shortlisted talents"
          />
        <TextBubble 
            emoji={require('../images/time.png')}
            text="Longest its taken so far is 3 weeks"
          />
        </div>
        <a href="https://gigson.typeform.com/to/I1Pw5Y"className="PrimaryButton">Give it a shot <img src={require('../images/wink.png')}/></a>
      </div>
    </div>

    <div id="Testimonials" className="Testimonials">
      <h2>Better Candidates, Better Results, Shorter Time.</h2>
      <div className="TestimonialContainer">
      
        <Testimonial
          story="Enabling Agriculture with qualified hands."
          TestifierName="Ayo"
          Position="CTO"
          Company="Thrive Agric"
          image={require('../images/Testifier-3.png')}
          destination="/ThriveAgric" />
    
      
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

    <div className="HelpCustomers">
      <div className="container">
        <h2>Help your customers & your team.</h2>
        <div className="HelpMeasures">
          <div className="HelpMeasure">
            <img/>
            <h4>Save time and money</h4>
            <p>Whether you are a Startup or Enterprise looking to fill a role, Gigson offers quick and easy talent acquisition support from start to finish.</p>
          </div>

           <div className="HelpMeasure">
            <img/>
            <h4>6000+ tech talent</h4>
            <p>We have a community of tech talents to supplement your internal team while you still retain control of the development.</p>
          </div>

           <div className="HelpMeasure">
            <img/>
            <h4>Turnaround in 3 days</h4>
            <p>We deliver talent choices from our carefully selected pool within a really short turnaround time.</p>
          </div>

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

export default IndexPage
