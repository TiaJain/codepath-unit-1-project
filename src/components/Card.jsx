import React from "react";

const Card = (props) => {
    return (
        <td className="Card">
            <img src={props.image_src} class="rest-imgs"/>
            <p>{props.image}</p>
            <h3>{props.title}</h3>
            <p>{props.address}</p>
            <a href={props.menu_link}><button class="view-menu">View Menu</button></a>
        </td>
    )

}

export default Card;