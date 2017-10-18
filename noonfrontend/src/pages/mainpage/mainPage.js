import React, { Component } from 'react'
import {connect}            from 'react-redux'
import Grid from '../../components/grid/grid'
import MDSpinner from "react-md-spinner";

import * as imageActions from  '../../actions/imageActions'

import ImageNode from   '../../components/imageNode/imageNode'

import './mainPage.css'

class MainPage extends Component {
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
        nextProps.images.map((image, key) => {
            if(this.state.images[key] && image.user_has_liked !== this.state.images[key].user_has_liked){
                this.setState({
                    images : nextProps.images
                })
            }
        })
        
         if(nextProps.images !== this.state.images) {
            this.setState({
                images : nextProps.images
            })
        }
    }

    handleFav = (mediaId) => {

        let likedByuserAlready
        this.state.images.map(image => {
            if(image.id === mediaId){
                likedByuserAlready = image.user_has_liked
            }
        })

        if(likedByuserAlready){
            this.props.dispatch(imageActions.startFetchingImages())
            this.props.dispatch(imageActions.removeFromfav(mediaId))
            console.log("removed")
        }else{
            this.props.dispatch(imageActions.startFetchingImages())
            this.props.dispatch(imageActions.addToFav(mediaId))
            console.log("added")
        }
    }
  
    render() { 
        let brakePoints = [700, 900, 1050];
        if(this.state.images.length < 1) {
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
                { this.state.images.map((image, key)=>{ 
                    return(
                        <div key={key} className="nodeContiner">  
                            <ImageNode image={image} handleFav={this.handleFav}></ImageNode>
                        </div>
                    )     
                })}
                </Grid>
            </div>
        )
    }
} 

function mapStateToProps(state, ownProps) {
    console.log(state)
  return {
      images : state.imageData.images,
      fetchingData : state.imageData.fetchingData
  }
}

export default connect(mapStateToProps)(MainPage) 