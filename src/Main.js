import React from 'react';
import HornedBeast from './HornedBeast';
// import data from './data.json'

class Main extends React.Component {
    render() {
        return (

            <>
            {
             this.props.beastArr.map((item,index)=> {
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