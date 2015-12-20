// main.js

var Nav = React.createClass({
			
			  //Initialize states
			  getInitialState: function () {
					return {  
					          menuAct: false ,          //Menu activate or inactivate
					         // sectionAct: false, 
								 btnMeAct: false,          //Button activate or inactivate
								 btnWorkAct: false,        //Button activate or inactivate
								 btnContactAct: false		//Button activate or inactivate			 
							 };
													
				},
						  
				//If Menu was clicked
				goHome: function () {
					
					this.setState({ menuAct: !this.state.menuAct, 
										 btnMeAct: false,        //Inactive button
										 btnWorkAct: false,      //Inactive button
										 btnContactAct: false    //Inactive button
									  })			
				},

				//If About me was clicked
				goMe: function () {
					
					if (!this.state.btnMeAct)                 //Do if it's not already actived
					{
						this.setState({ btnMeAct: true,        //Active
											 btnWorkAct: false,     //Inactive
											 btnContactAct: false	//inactive
										  })
					}
						 
				},
				
				//If My Work was clicked
				goWork: function () {
					if (!this.state.btnWorkAct)					//Do if it's not already actived
					{	
						this.setState({ btnWorkAct: true,      //Active
						    				 btnMeAct: false,       //Inactive
											 btnContactAct: false	//inactive
						              })
					}
				},
				
				//If Contact Me was clicked
				goContact: function () {
					
					if (!this.state.btnContactAct)                  //Do if it's not already actived
					{
						this.setState({ btnContactAct: true,    //Active
											 btnMeAct: false,        //Active
											 btnWorkAct: false,      //Inactive
										  })
					}
						 
				},

				render: function(){
					//Building data-names
					var menuActName = "menuAct" + this.state.menuAct;
					
					return (
							<ul>
								<li onClick={this.goHome}><img src="images/menu.png" /></li>
          					<li data-menu={menuActName} data-active={this.state.btnMeAct} onClick={this.goMe}>About Me</li>
								<li data-menu={menuActName} data-active={this.state.btnWorkAct} onClick={this.goWork}>My Work</li>
								<li data-menu={menuActName} data-active={this.state.btnContactAct} onClick={this.goContact}>Contact Me</li>
							</ul>
					);		
				}		
		});
		
var Me = React.createClass({
						
	render: function(){
		return (
				<p>Hola esto es el pie</p>
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
ReactDOM.render(<Me/>,document.getElementById("me"));
ReactDOM.render(<Foot/>,document.getElementById("footmain"));
