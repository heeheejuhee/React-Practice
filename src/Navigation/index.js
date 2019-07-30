import React from 'react';

// class Navigation extends Component {

// }

// var Navigation = function(props){}

// const Navigation = (props) => {
// 	return (
// 		<nav>
// 			<h1>{props.logo}</h1>
// 			<ul>
// 			  <li>Home</li>
// 			  <li>About</li>
// 			  <li>Contact</li>
// 			</ul>
// 		</nav>
// 	)
// }

class Navigation extends React.Component {
	constructor(props){
    	super(props);
  	}
	render(){
		return (
			<nav style={{background:this.props.background}}>
	 			<h1>{this.props.logo}</h1>
	 			<ul>
	 			  <li>Home</li>
	 			  <li>About</li>
	 			  <li>Contact</li>
	 			</ul>
			</nav>
		)
	}
}

export default Navigation;