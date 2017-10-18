import React, { Component } from 'react'
import {connect} from 'react-redux'

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
        this.props.dispatch(imageActions.getAllImages())
    }

    componentWillReceiveProps(nextProps){
        if(nextProps !== this.state) {
            this.setState({
                images : nextProps.images
            })
        }
        
    }

    rednderImageNode() {
        let imageNodes =  []
        
        this.state.images.map((image, key)=>{
            if(image.user_has_liked) { 
               imageNodes.push(
                   <div key={key} >  
                        <ImageNode image={image} handleFav={this.handleFav.bind(this)}></ImageNode>
                    </div>
               ) 
                    
            }
        })
        
        if(imageNodes.length == 0) {
            return(
                <div>No Favourite Images</div>
            )
        }else {
            return imageNodes
        } 
    }

    handleFav(mediaId) {
        this.props.dispatch(imageActions.removeFromfav(mediaId))
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
      images : state.image
  }
}

export default connect(mapStateToProps)(FavouritePage) 