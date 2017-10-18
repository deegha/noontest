import React from 'react'

import './menu.css'

const MenuPresentation = (props) => {
    return (
        <div className="menuWrapper">
            <a href="/">{props.icons.home}</a>
            <a href="/favourite">{props.icons.fav}</a>
        </div>
    )
}

export default MenuPresentation