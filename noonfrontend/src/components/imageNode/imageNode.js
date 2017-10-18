import React, { Component } from 'react';

import Node from './imageNodePresentaton'
import {connect} from 'react-redux'


export class ImageNode extends Component {

    constructor(props) {
        super(props);

        this.state = {
            "image" : props.image
        }
    }

    render() { 
        let likeClass = "fa fa-heart-o"
        if(this.state.image.user_has_liked)
            likeClass = "fa fa-heart"
        return(
            <div className="continerNode">
                <Node 
                    clickmethod={this.clickmethod.bind(this)} 
                    image={this.state.image}
                    likeClass={likeClass}></Node>
            </div>
        )
    }

    clickmethod(clickedID) {
        this.props.handleFav(clickedID)
    }
}

function mapStateToProps(state, ownProps) {
    return {
        images : state.image
    }
}

export default connect(mapStateToProps)(ImageNode)