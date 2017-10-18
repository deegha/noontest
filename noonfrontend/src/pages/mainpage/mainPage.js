import React, { Component } from 'react'
import {connect}            from 'react-redux'

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
        this.props.dispatch(imageActions.getAllImages())
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.images !== this.state.images) { 
            this.setState({
                images : nextProps.images
            })
        }
        
    }

    rednderImageNode = () => {
        let imageNodes =  []
        this.state.images.map((image, key)=>{
            imageNodes.push(
                <div key={key} >  
                    <ImageNode image={image} handleFav={this.handleFav}></ImageNode>
                </div>
            )        
        })
        
        if(imageNodes.length === 0) {
            return(
                <div>No Images</div>
            )
        }else {
            return imageNodes
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
            this.props.dispatch(imageActions.removeFromfav(mediaId))
            console.log("removed")
        }else{
            this.props.dispatch(imageActions.addToFav(mediaId))
            console.log("added")
        }
    }
  
    render() { 
        return(
            <div>
                <div className="continerMain">
                    {this.rednderImageNode()}
                </div>
                
            </div>
        )
    }
} 

function mapStateToProps(state, ownProps) {
  return {
      images : state.imageData.images
  }
}

export default connect(mapStateToProps)(MainPage) 