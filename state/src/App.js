import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './App.css';
import {Component} from "react";
import Alert from 'react-bootstrap/Alert';


class App extends Component{
  constructor(prop) {
    super(prop);
    this.state = {
      fullName: "Rayene Kaabachi",
      bio: "Pretty optimistic for a pessimist.",
      profession: "Web developer",
      imgUrl:'https://hypixel.net/attachments/screenshot_2019-12-29-15-15-35-358-jpeg.1458269/',
      hide: true,
      countshow: 0,
    };
    this.handleClick=()=>{
      this.setState({hide:!this.state.hide})
    }
  }
  render(){
    if (this.state.hide){


      return(
        <Card style={{ width: '20rem',textAlign:'center',margin:'auto' } }>
        <Card.Img variant="top" src={this.state.imgUrl} />
        <Card.Body>
          <Card.Title>{this.state.fullName}</Card.Title>
          <Card.Text>
            {this.state.bio}
          
          </Card.Text>
          <Card.Text>
            {this.state.profession}
          
          </Card.Text>
          <h5 style={{ color: "red" }}>
                  Timer: {this.state.countshow} sec
                </h5>
          <Button variant="primary"onClick={this.handleClick}>{"hide"}</Button>
        </Card.Body>
      </Card>

      )

    }else{

      
      return(

        <div style={{margin:'auto', textAlign:'center'}}>
        <Alert  style={{width:'20rem', margin:'auto',paddingBottom:'80px'}} key="danger" variant="danger">
        Hidden ..
        </Alert>
        <Button variant="outline-success"onClick={this.handleClick}>{"show"}</Button>
        </div>
      )
    }
  }
  componentDidMount()

  {

   if (this.props.hide) {
     setInterval(() => {
       this.setState({ countshow: this.state.countshow + 1 });
     }, 1000);
   }
 }
}




    
    

  



export default App;
