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
    render(){
        return(
            <div>
                {/* <h3>{this.props.title}</h3>
                <img src={this.props.imgUrl} alt ={this.props.title} title={this.props.title}/>
                <p>
                    {this.props.description}
                </p> */}
                <Card style={{ width: '18rem' }}>
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