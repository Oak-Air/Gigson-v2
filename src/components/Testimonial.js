import React from 'react'
import { Link } from "gatsby"
import './Testimonial.css'

const Testimonial = props =>(
	<div className="TestimonialCard ">
		<Link to={props.destination}>
			<div className="TestimonialText">
				<p className="TestimonialStory">{props.story}</p>
				<p className="TestifierName">{props.TestifierName}</p>
				<p className="TestifierDetails">{props.Position}<span>{props.Company}</span></p>
			</div>
			<Link className="Read" to={props.destination}> Read case study</Link>
			<img src={props.image}/>
		</Link>
	</div>

	)
export default Testimonial