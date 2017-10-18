import React from 'react'

import './imageNode.css'

const Node = (props) => {
    return(
        <div className="wrapperNode">
            <div className="nodeHeader">
                <div className="wrapper">
                    <div className="profilePic">
                        <img src={props.image.caption.from.profile_picture} />
                    </div>
                    <div className="profileName">
                        <span>
                            {props.image.caption.from.full_name}
                        </span>
                    </div>
                </div>
            </div>
            <div className="nodeImage">
                <img src={props.image.images.standard_resolution.url} />
                <div className="imageOptions">
                    <div className="price">
                        <div className="title">Lorem Ipsum is simply</div>
                        <div className="priceTag">AED 230</div>
                    </div>
                    <div className="favourite" onClick={()=>{props.clickmethod(props.image.id)}}>
                        <i className={props.likeClass} aria-hidden="true"></i>
                    </div>
                </div>
            </div>
            <div className="nodeInfo">
                <div className="wrapper">
                    <div className="imageLikes">
                        <i className="fa fa-heart" aria-hidden="true"></i>
                        <span>{props.image.likes.count}Likes</span>
                    </div>
                    <div className="imageDiscription">
                        <span>Lorem Ipsum is simply dummy text of the printing </span>
                        <span className="imagetags">#test #someTag #tags</span>
                    </div>
                    <div className="imageComments">
                        <span>View 12 Comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Node