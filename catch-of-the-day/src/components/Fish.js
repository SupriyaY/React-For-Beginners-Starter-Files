import React from 'react';
import {formatPrice} from '../helpers'

class Fish extends React.Component {
    render () {
        const {image, name, description, price, status} = this.props.details
        // const image = this.props.details.image;
        // const name = this.props.details.name;
       
        return (
            <div className="menu-fish">
                <img src={image} alt={this.props.details.name}/>
                <h3 className="fish-name">{name}
                <span className="price">{formatPrice(price)}</span>
                </h3>
            </div>
        )
    }
}

export default Fish;