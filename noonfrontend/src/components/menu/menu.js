import React, { Component } from 'react'
 
import MenuPresentation from './menuPresentation'

export default class Menu extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            width:window.innerWidth,
            menuClass : "fixedTop",
            icons : {
                fav : "Favourite",
                home: "Home"
            }
        }

    }

    render() {
        return(
            <div>
                <MenuPresentation 
                    icons={this.state.icons} 
                    menuClass={this.setState.menuClass} ></MenuPresentation>
            </div>
        )
    }
    updateDimensions = () => {  console.log("here"); console.log(this.state.width)
        this.setState({width: window.innerWidth},this.setMenuicons())
    }
    setMenuicons = () => {
        if(this.state.width < 900) {
            this.setState({
                menuClass : "fixedBottom",
                icons : {
                    fav : <i className="fa fa-heart menu-icons" aria-hidden="true"></i>,
                    home: <i className="fa fa-home menu-icons" aria-hidden="true"></i>
                }
            })
        }else{
            this.setState({
                menuClass : "fixedTop",
                icons : {
                    fav : 'Favourite',
                    home: "Home"
                }
            })
        }
    }
    componentWillMount() {
        this.updateDimensions()
    }
    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions);
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }
}