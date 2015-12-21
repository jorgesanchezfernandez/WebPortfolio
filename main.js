//////////////////////////////////////////////////
//////  ReactJS portfolio by Jorge Sánchez ///////
//////  ********************************** ///////
//////  HTML5 - CSS3 - JQuery - Canvas     ///////
//////////////////////////////////////////////////

//////Navigation component
var Nav = React.createClass({
			
	  //////Initialize states
	  getInitialState: function () {
			return {  
			          menuAct: false ,          //Menu activate or inactivate
						 btnMeAct: false,          //Button activate or inactivate
						 btnWorkAct: false,        //Button activate or inactivate
						 btnContactAct: false		//Button activate or inactivate			 
					 };
											
		},
				  
		//////If Menu was clicked
		goHome: function () {
			
			this.setState({ menuAct: !this.state.menuAct,   //If clicked get opposite state
								 btnMeAct: false,        			//Inactive button
								 btnWorkAct: false,      			//Inactive button
								 btnContactAct: false   			//Inactive button
							  })		
							  
			meRender.activateHandle(false);			//Inactive id="Me"
			workRender.activateHandle(false);      //Inactive id="Work"
			contactRender.activateHandle(false);   //Inactive id="Contact"	
		},

		//////If About me was clicked
		goMe: function () {
			
			if (!this.state.btnMeAct)                 //Do if it's not already actived
			{
				this.setState({ btnMeAct: true,        //Active button
									 btnWorkAct: false,     //Inactive button
									 btnContactAct: false	//inactive button
								  })
								  
				meRender.activateHandle(true);			  //Active id="Me"
				workRender.activateHandle(false);      //Inactive id="Work"
				contactRender.activateHandle(false);   //Inactive id="Contact"
			} 
		},
		
		//////If My Work was clicked
		goWork: function () {
			if (!this.state.btnWorkAct)					//Do if it's not already actived
			{	
				this.setState({ btnWorkAct: true,      //Active button
				    				 btnMeAct: false,       //Inactive button
									 btnContactAct: false	//inactive button
				              })
				              
				meRender.activateHandle(false);        //Inactive id="Me"
				workRender.activateHandle(true);       //Active id="Work"
				contactRender.activateHandle(false);   //Inactive id="Contact"
			}
		},
		
		//////If Contact Me was clicked
		goContact: function () {
			
			if (!this.state.btnContactAct)             //Do if it's not already actived
			{
				this.setState({ btnContactAct: true,    //Active button
									 btnMeAct: false,        //Active button
									 btnWorkAct: false,      //Inactive button
								  })
								  
				meRender.activateHandle(false);        //Inactive id="Me"
				workRender.activateHandle(false);      //Inactive id="Work"
				contactRender.activateHandle(true);   //Active id="Contact"
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

///// About Me section
var Me = React.createClass({
	
	//////Initialize states
	  getInitialState: function () {
	  	
			return {  sectMeAct: false };         //Section id="Me" activate or inactivate
					 							
	},
	
	//////Activate or inactive section Me state
	activateHandle: function(bool){
		this.setState({ sectMeAct: bool })      //If it's called, get the transfered state
	},

	render: function(){	
		
		return (
			<article data-active={this.state.sectMeAct}>
				<p>Hola esto es About me section</p>
			</article>	
		);		
	}		
});

///// About Work section
var Work = React.createClass({
	
	//////Initialize states
	  getInitialState: function () {
	  	
			return {  sectWorkAct: false };         //Section id="Work" activate or inactivate
					 							
	},
	
	//////Activate or inactive section Work state
	activateHandle: function(bool){
		this.setState({ sectWorkAct: bool })      //If it's called, get the transfered state
	},

	render: function(){	
		
		return (
			<article data-active={this.state.sectWorkAct}>
				<p>Hola esto es Work section</p>
			</article>	
		);		
	}		
});

///// About Contact section
var Contact = React.createClass({
	
	//////Initialize states
	  getInitialState: function () {
	  	
			return {  sectContactAct: false };         //Section id="Contact" activate or inactivate
					 							
	},
	
	//////Activate or inactive section Work state
	activateHandle: function(bool){
		this.setState({ sectContactAct: bool })      //If it's called, get the transfered state
	},

	render: function(){
		
		return (
			<article data-active={this.state.sectContactAct}>
				<p>Hola esto es Contact section</p>
			</article>	
		);		
	}		
});

///// About Footer section
var Foot = React.createClass({
						
	render: function(){
		return (
				<p>Hola esto es el pie</p>
		);		
	}		
});

/////Render functions
ReactDOM.render(<Nav/>,document.getElementById("menu"));
var meRender = ReactDOM.render(<Me/>,document.getElementById("me"));
var workRender = ReactDOM.render(<Work/>,document.getElementById("work"));
var contactRender = ReactDOM.render(<Contact/>,document.getElementById("contact"));
ReactDOM.render(<Foot/>,document.getElementById("footmain"));
