import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


class HornedBeast extends React.Component{
    constructor(props){
        super(props);
        this.state={
            numberOfVote: 0,
        }
    }
    increaseNum=() =>{
        this.setState({
            numberOfVote: this.state.numberOfVote +1,
        })
    }
    sendData =()=>{
        this.props.showstuff(this.props.title)
    }
    render(){
        return(
            <div>

               
                <Card style={{ width: '18rem' }} onClick={this.sendData}>
          <Card.Img  variant="top" src={this.props.imgUrl} />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
            <p>
                    {this.props.description}
                </p> 



            🐍 Number of Horn: {this.state.numberOfVote}


            </Card.Text>
          </Card.Body>
          <Button id="toot" onClick={this.increaseNum} variant="outline-danger">Vote Here</Button>
        </Card>
      </div>
            


          

        )
    }
}
export default HornedBeast;