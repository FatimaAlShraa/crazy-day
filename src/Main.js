import React from 'react';
import HornedBeast from './HornedBeast';
import Horendata from './Horendata';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
// import data from './data.json'

class Main extends React.Component {
  constructor(props){
    super(props)
    this.state={
      result:Horendata
    }
  }
  formList =(event) =>{
    let hornNum= parseInt(event.target.value);
    let allData=Horendata;
    let resultFinal;
    if(hornNum){
      resultFinal=allData.filter(item =>{
        if(item.horns===hornNum){
        return item;
        }
      });
    }else{
      resultFinal=allData;
    }
    // this.props.showFilter(result)
    this.setState({
    result:resultFinal
  })
  }
  
    render() {
        return (

            <>
                     <Form>
  <Form.Group controlId="exampleForm.SelectCustomHtmlSize">
    <Form.Label>Horn Choose</Form.Label>
    <Form.Control as="select" custom onChange={this.formList}>
      <option value=''>All</option>
      <option value='1'>one</option>
      <option value='2'>two</option>
      <option value='3'>three</option>
      <option value='100'>woow</option>
    </Form.Control>
  </Form.Group>
</Form>
                        
                    
            {
             this.state.result.map((item,index)=> {
                    return (
                        <HornedBeast
                            title={item.title}
                            imgUrl={item.image_url}
                            description={item.description}
                            key={index}
                            showstuff={this.props.showstuff}
                        />
                    )


                }
             )

            }
            </>

          

        )


   }
   }
      export default Main;