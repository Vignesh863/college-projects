import React from 'react';
class ClsComponentLifeCycle extends React.Component{

    constructor(props){
  
      super(props)
  
      this.state ={Name:''};
  
      this.fnUpdateName=this.fnUpdateName.bind(this);
  
      this.fnUpdateName1=this.fnUpdateName1.bind(this);
  
    }
  
    fnUpdateName(event){
  
      this.setState({Name:event.target.value});
  
    }
  
    fnUpdateName1(event){
  
      alert("Name is :"+this.state.Name);
  
      ///this.setState({Name:event.target.value});
  
    }
  
    componentDidMount(){
  
    console.log("Calling Component Did Mount Method");
  
    }
  
    shouldComponentUpdate()
  
    {
  
    console.log("Calling Should Component Update Method");
  
    return true;
  
    }
  
    componentDidUpdate()
  
    {
  
    console.log("Calling Component Did Update Method");
  
    }
  
    componentWillUnmount()
  
    {
  
    console.log("Calling Component Will Unmount Method");
  
    }
  
    render ()
  
    {
  
    return(
  
      <div>
  
       <h1>Enter Name</h1>
  
       <input type="text" value={this.state.Name} on onChange={this.fnUpdateName}/>
  
       <h1>{this.state.Name}</h1>
  
       <button onClick={this.fnUpdateName1}>Click</button>
  
      </div>
  
    );
  
    }
  
  }
  
  export default ClsComponentLifeCycle;
  
  