import React, { Component } from 'react'
import {connect} from 'react-redux'
import Grid from '../../components/grid/grid'
import MDSpinner from "react-md-spinner";

import * as imageActions from  '../../actions/imageActions'
import './favouritePage.scss'

import ImageNode from '../../components/imageNode/imageNode'

class FavouritePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images : []
        }
    } 

    componentDidMount() {     
         this.props.dispatch(imageActions.startFetchingImages())
        this.props.dispatch(imageActions.getAllImages())
    }

    componentWillReceiveProps(nextProps){
        if(nextProps !== this.state) {
            this.setState({
                images : nextProps.images
            })
        }
    }

    handleFav = (mediaId) =>  {
        this.props.dispatch(imageActions.startFetchingImages())
        this.props.dispatch(imageActions.removeFromfav(mediaId))
    }
  
    render() { 
        let brakePoints = [700, 900, 1050];
        if(this.state.images.length < 1 || this.state.fetchingData === true ) {
           console.log("spinner")
           return(
               <div className="spinner">
                 <MDSpinner/>
               </div>
           ) 
        }
        return(
            <div>
            <Grid brakePoints={brakePoints}>
                { 
                    this.state.images.map((image, key)=>{ 
                    if(image.user_has_liked) {
                        return(
                            <div key={key} className="nodeContiner">  
                                <ImageNode image={image} handleFav={this.handleFav}></ImageNode>
                            </div>
                        )    
                    }
                     
                 })}
                </Grid>
            </div>
        )
    }
} 

function mapStateToProps(state, ownProps) {
  return {
      images : state.imageData.images,
      fetchingData : state.imageData.fetchingData
  }
}

export default connect(mapStateToProps)(FavouritePage) 