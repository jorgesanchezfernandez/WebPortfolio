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
			storageRender.inactiveAll();
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
				storageRender.inactiveAll();
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
				storageRender.inactiveAll();
			}
		},
		
		//////If Contact Me was clicked
		goContact: function () {
			
			if (!this.state.btnContactAct)             //Do if it's not already actived
			{
				this.setState({ btnContactAct: true,    //Active button
									 btnMeAct: false,        //Active button
									 btnWorkAct: false      //Inactive button
								  })
								  
				meRender.activateHandle(false);        //Inactive id="Me"
				workRender.activateHandle(false);      //Inactive id="Work"
				contactRender.activateHandle(true);   //Active id="Contact"
				storageRender.inactiveAll();
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
			<section data-active={this.state.sectMeAct}>
				<article id="aboutMe">
					<div id="photo">
					   <figure>
					   	<img src="images/me.png" alt=""/> 
					   </figure>
					</div>
					<div id="meDescription">
						<p>  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sollicitudin nisi a metus vestibulum, vel rutrum neque condimentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et sem urna. Phasellus eu orci massa. Pellentesque eu efficitur purus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In vitae tristique nibh. Nulla ac vulputate nibh, hendrerit sagittis neque.

Fusce pharetra lobortis pellentesque. Ut volutpat velit id laoreet vestibulum. Proin facilisis iaculis lectus, quis fringilla nulla hendrerit vel. Morbi blandit dapibus felis, tempus venenatis felis molestie ac. Vivamus in egestas libero. Fusce vehicula arcu non nisi dignissim volutpat. Donec vestibulum malesuada nunc vel ultrices. Sed libero ante, gravida eget viverra id, pharetra sit amet arcu.

Mauris commodo tellus mauris. Suspendisse rhoncus accumsan consectetur. Donec a dapibus lorem. Vestibulum non ex magna. Donec volutpat justo sit amet ullamcorper congue. Integer efficitur venenatis nulla, vel pharetra est tempus vel. Praesent pulvinar efficitur mauris. Curabitur nisi tellus, hendrerit ut aliquet vitae, viverra et nibh. Sed dictum varius tincidunt. Maecenas a tincidunt libero, eu convallis felis. Nunc nec elit ac mauris gravida dignissim eget at nulla. Proin dictum sem tincidunt, maximus nunc id, commodo sem. </p>
					</div>
				</article>
			</section>	
		);		
	}		
});

///// About Work section
var Work = React.createClass({
	
	//////Initialize states
	  getInitialState: function () {
	  	
			return {  sectWorkAct: false	};         //Section id="Work" activate or inactivate
					 							
	},
	
	//////Activate or inactive section Work state
	activateHandle: function(bool){

		this.setState({ sectWorkAct: bool })     //If it's called, get the transfered state		
	},


	render: function(){	
		
		return (
			<section id="work" data-name="prog" data-active={this.state.sectWorkAct}>
				<article clasName="pilgrim" data-prop="click" onClick={storageRender.activePilgrim}>
					<div className="placeholder" data-name="itemWork">
						<p>Codex</p>
					   <figure><img src="images/codex.png" alt=""/>
							<figcaption>El codex en ceiec
							</figcaption>		   
					   </figure>
					</div>
				</article>
				<article className="cube" data-prop="click" onClick={storageRender.activeCube}>
					<div className="placeholder" data-name="itemWork">
						 <p>cube</p>
						 <figure><img src="images/cube.png" alt=""/>
								<figcaption>Cube en ceiec
								</figcaption>		   
						   </figure>	
					</div>
				</article>
				<article className="demo" data-prop="click" onClick={storageRender.activeDemo}>
					<div className="placeholder" data-name="itemWork">
						<p>Demoscene</p>
						<figure><img src="images/demo.png" alt=""/>
							<figcaption>Timescratchers demos
							</figcaption>		   
					   </figure>
					</div>		
				</article>
			</section>
		);
			
	}		
});

var Storage = React.createClass({
	
	//////Initialize states
	  getInitialState: function () {
	  	
			return {  itemPilgrim: "item-out",
						 itemCube: "item-out",
						 itemDemo: "item-out",
						 sectContentAct: false												
												 };         //Section id="Work" activate or inactivate
					 							
	},
	
	//////Activate items
	activePilgrim: function(){
		
		workRender.activateHandle(false);
		this.setState({
							itemPilgrim: "item-in", 
							sectContentAct: true
						  });
	},
	activeCube: function(){
		
		workRender.activateHandle(false);
		this.setState({ 		
		 					itemCube: "item-in" , 
		 					sectContentAct: true 
		 				  });
	},
	activeDemo: function(){
		
		workRender.activateHandle(false);
		this.setState({							 
							itemDemo: "item-in", 
							sectContentAct: true
						  });
	},
	
	//////Inactive items
	inactivePilgrim: function(){
		
		workRender.activateHandle(true);
		this.setState({
							itemPilgrim: "item-out", 
							sectContentAct: false
						  });
		var video = document.getElementById("videoCodex");
		video.pause();
		
	},
	inactiveCube: function(){
		
		workRender.activateHandle(true);
		this.setState({
							itemCube: "item-out", 
							sectContentAct: false
						  });	
	},
	inactiveDemo: function(){
		
		workRender.activateHandle(true);
		this.setState({ 
							itemDemo: "item-out", 
							sectContentAct: false
						  });
	},
	
	inactiveAll: function(){
		this.setState({
							itemPilgrim: "item-out", 
							sectContentAct: false
						  });
		var video = document.getElementById("videoCodex");
		video.pause();
		this.setState({
							itemCube: "item-out", 
							sectContentAct: false
						  });
		this.setState({ 
							itemDemo: "item-out", 
							sectContentAct: false
						  });
	},
	
	render: function(){	
		return(
			<section data-name="storage" data-active={this.state.sectContentAct}>
				<article className="pilgrim">
					<div id="stCodex" className={this.state.itemPilgrim}>
						<div onClick={this.inactivePilgrim}>X</div>
							 <video id="videoCodex" width="420" height="340" controls>
								  <source src="videos/codex.mp4" type="video/mp4" />
								  Your browser does not support the video tag.
							 </video> 
					</div> 
				</article>
				<article className="cube">
					<div id="stCube" className={this.state.itemCube}>
						<div onClick={this.inactiveCube}>X</div>
						<img src="images/cubeImages.png" alt="Cube image"/>
					</div>
				</article>
				<article className="demo">
					<div id="stDemo" className={this.state.itemDemo}>
						<div onClick={this.inactiveDemo}>X</div>
						<img src="images/demoImages.png" alt="Demoscene image"/>
					</div>
				</article>
			</section>

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
			<section data-active={this.state.sectContactAct}>
				<article id="contactMe">
					 <form action="">
						<p>Please enter your name:</p>
						<input type="text" name="name"/>
						<p>E-mail:</p>
  						<input type="email" name="email"/><br></br>
  						  <select value="B">
						    <option value="A">Apple</option>
						    <option value="B">Banana</option>
						    <option value="C">Cranberry</option>
						  </select><br></br>
						  <textarea name="textarea" rows="10" cols="31">Write your message</textarea> <br></br>
						<input type="submit" value="Submit"/>
					</form> 		
				</article>
			</section>	
		);		
	}		
});

///// About Footer section
var Foot = React.createClass({
						
	render: function(){
		return (
				<p>Jorge Sánchez Fernández Portfolio</p>
		);		
	}		
});

/////Render functions
ReactDOM.render(<Nav/>,document.getElementById("menu"));
var meRender = ReactDOM.render(<Me/>,document.getElementById("me"));
var storageRender = ReactDOM.render(<Storage/>,document.getElementById("storage"));
var workRender = ReactDOM.render(<Work/>,document.getElementById("work"));
var contactRender = ReactDOM.render(<Contact/>,document.getElementById("contact"));
ReactDOM.render(<Foot/>,document.getElementById("footmain"));
