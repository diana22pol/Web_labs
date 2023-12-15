import React from 'react';
import '../../styles.css';
import './Item.styles.css';
import Header from '../../containers/Header/Header';
import {hotelsItemList} from '../../pages/Catalog';
import {Link, useParams} from "react-router-dom";


const CartPage = () => {
    const {id} = useParams();
    const selectedItem = hotelsItemList.find((item) => item.id === parseInt(id));

    return (
      <div>
        <Header/>
        <div className='hotel-card'>
            <img src={selectedItem.image} alt={selectedItem.title} className="hotel-card-image" />
            <div className="hotel-card-content">
                <h2 className="hotel-card-title">{selectedItem.title}</h2>
                <p className="hotel-card-description">{selectedItem.description}</p>
                <Link to="/catalog" className="go_back">Go back</Link>
                <button className='add_to_cart'>Add to cart</button>
            </div>
        </div>
      </div>
    )
}

export default CartPage;