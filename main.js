// main.js

var Nav = React.createClass({
				getInitialState: function () {
					return { home: "Home",
								me: "About Me",
								work: "My Work",
								contact: "Contact Me"
					};
				},
				goHome: function () {
					this.setState({
								home: "En un lugar de la mancha",
								me: "Esto es solo sobre mi",
					})
				},
				render: function(){
					return (
							<ul>
								<li onClick={this.goHome}>{this.state.home}</li>
								<li>{this.state.me}</li>
								<li>{this.state.work}</li>
								<li>{this.state.contact}</li>
								<li>atras</li>
								<li>adelante</li>
							</ul>	
					);				
				}		
		});
		
ReactDOM.render(<Nav/>,document.getElementById("mainav"));
