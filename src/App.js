import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Horendata from './Horendata';
import Main from './Main';
import SelectedBeast from './SelectedBeast';



class App extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      dataArr: Horendata,
      element:{},
      show: false,
    }
  }

  showstuff = (para) =>{
    let elementNew = Horendata.find((element)=>{
      if (element.title === para){
        return element;
      }
    })
    this.setState({
      element: elementNew,
      show: true,
    })
  }

  hideStuf =(para)=>{
    this.setState({
      show:false,
    })
  }
  render(){
    return(
      <div>
      

      

        <Header />
       <SelectedBeast
       show={this.state.show}
       element={this.state.element}
       hideStuf={this.hideStuf}
       />

        <Main
        beastArr={this.state.dataArr}
        showstuff={this.showstuff}
        />
        <Footer/>
        



      </div>
    )
  }
}

export default App; 
