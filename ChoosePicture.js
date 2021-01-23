import React  from 'react'

class ChoosePicture extends React.Component {
  state = { currentPic: 0 };
  nextPic= ()=> {
  this.interval = setInterval(() => {
    var current = this.state.currentPic;
    var next = ++current % this.props.pic.length;
    console.log(next)
    this.setState({ currentPic: next });
}, 2000);
  }
   clearInterval=()=>{
    clearInterval(this.interval)
  } 
  render() { 
    var src = this.props.pic[this.state.currentPic];
    return ( 
      <div>
        <img src={src} alt="cute"/>
        <br/><br/>
        <button type='button' onClick={this.nextPic}>START</button>  
        <button type='button' onClick={this.clearInterval}>STOP</button>  
      </div>
     );
  }
}
export default ChoosePicture;
