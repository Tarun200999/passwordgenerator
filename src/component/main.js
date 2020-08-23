import React, { Component } from 'react';
import "./main.css";
class Main extends Component {
  constructor(props)
  {
    super(props);
    this.state={
       length:12,
       number:"",
       small:"",
       capital:"",
       symbol:"",
       ambigous:"",
       passward:""
       

    }
  }
  handleChange=async function(event){
   await this.setState({length:event.target.value})
  }
  handleCheckbox1= async function(event){
    if(event.target.checked)
    {
     await this.setState({number:"123456789"})
    }
    else{
      await this.setState({number:""})
    }
  }
  handleCheckbox2= async function(event){
    if(event.target.checked)
    {
     await this.setState({small:"abcdefghijklmnopqrstuvwxyz"})
    }
    else{
      await this.setState({small:""})
    }
  }
  handleCheckbox3= async function(event){
    if(event.target.checked)
    {
     await this.setState({capital:"ABCDEFGHIJKLMNOPQRSTUVWXYZ"})
    }
    else{
      await this.setState({capital:""})
    }
  }
  handleCheckbox4= async function(event){
    if(event.target.checked)
    {
     await this.setState({symbol:"@#$%"})
    }
    else{
      await this.setState({symbol:""})
    }
  }
  handleCheckbox5= async function(event){
    if(event.target.checked)
    {
     await this.setState({ambigous:"(){}<>:''-+[\]*&^~!/"})
    }
    else{
      await this.setState({ambigous:""})
    }
  }
  show=()=>{
    var arr=this.state.small+this.state.capital+this.state.symbol+this.state.ambigous+this.state.number;
    var ans = ''; 
      for (var i = this.state.length; i > 0; i--) { 
                ans +=arr[Math.floor(Math.random() * arr.length)]; 
            }
    if(arr.length===0)
     this.setState({passward:"NO CONDITIONS HAS BEEN APPLIED"});
     else
     {
       this.setState({passward:ans})
     }

  }
  handlerange=(event)=>{
    console.log(event.target.value)

  }
  copy=()=>{

    var copyText = document.getElementById("textarea");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
  }
  render() { 
    return (
      <div className="container main">
      <div className="row">  
    <div className="col-md-8 col-12">
        <h4 className="text-success">Select the length of your password</h4>
       
       <select className="select" value={this.state.value} onChange={(e)=>this.handleChange(e)}>
           
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
            <option value="25">25</option>
       </select>
        <h3 className="text-secondary">Enter Password Conditions</h3>
        <input type="checkbox"
        onChange={(e)=>this.handleCheckbox1(e)} />    Include Numbers (e.g 1234567890 )
        <br></br>
         <input type="checkbox" 
        onChange={(e)=>this.handleCheckbox2(e)}/>    Include LowerCase Letters ( e.g abcdefg..)
        <br></br>
         <input type="checkbox"
        onChange={(e)=>this.handleCheckbox3(e)}/>    Include UpperCase Letters (e.g ABCDEFG..)
        <br></br>
         <input type="checkbox" 
        onChange={(e)=>this.handleCheckbox4(e)}/>    Include Symbols ( e.g. @#$% )
        <br></br>
        <input type="checkbox"
        onChange={(e)=>this.handleCheckbox5(e)}/>    Ambiguous Characters ( e.g. ([]()/\'"`~,;:.) )      
        <br></br>
        <br></br>
        <button className="btn btn-primary" onClick={this.show} >click me</button>
       </div> 

       <div className="col-md-4 col-12">

           <br></br>
          
           <h4 className="text-primary">Your Random Password</h4>
           <textarea id="textarea"className="form-control"row="5" value={this.state.passward}>
           </textarea>
           <br></br>
           <button className="btn btn-success" onClick={this.copy}>copy password</button>
           <br></br>
           <br></br>
           <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
         
       </div> 
       </div> 
    

    

       </div>
    );
  }
}
 
export default Main;
