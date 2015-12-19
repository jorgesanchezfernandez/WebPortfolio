// main.js

var Nav = React.createClass({
						
			getInitialState: function () {
					return { home: "home",
							   view: "hide"
					};
				},
						  
				goHome: function () {
					if (this.state.home==="home")
					{ 
						this.setState({ home: "homeonClick",
											 view: "show"
										})
						
					}	else {
						this.setState({ home: "home",
											 view: "hide"									
										})

					}
				},

				render: function(){
					return (
							<ul>
								<li className="main" id={this.state.home} onClick={this.goHome}><a href="#"><img src="images/menu.png" /></a></li>
	          					<li className={this.state.view}><a href="#">About Me</a></li>
									<li className={this.state.view}><a href="#">My Work</a></li>
									<li className={this.state.view}><a href="#">Contact Me</a></li>
									<li>atras</li>
									<li>adelante</li>
							</ul>
					);		
				}		
		});

var Foot = React.createClass({
						
				render: function(){
					return (
							<p>Hola esto es el pie</p>
					);		
				}		
		});
ReactDOM.render(<Nav/>,document.getElementById("menu"));
ReactDOM.render(<Foot/>,document.getElementById("footmain"));
