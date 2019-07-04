import React from 'react'
import './TextBubble.css'

const TextBubble = props =>  (
	<div className="Bubble">
		<img src={props.emoji}/>
		<p>{props.text}</p>	
	</div>
)

export default TextBubble