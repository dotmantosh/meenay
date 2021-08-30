import React from 'react'

import ListingImg from '../../../assets/img/ellipse-32-1@1x.png'

function SuggestedListings() {
    return (
        <div className="suggested__listings">
            <h3>Suggested Listings</h3>
            <div className="listings_container">
                <div className="listings">
                    <img src={ListingImg}  alt="listingpicture"/>
                    <div className="listings__info">
                        <h6>Smoothie</h6>
                        <p>Smoothie Store</p>
                        <p>25 Orders left</p>
                        <button className="listings__orders_btn">Order</button>
                        <div className="progress_bar_in">
                            <div className="progress_bar_out"> </div> 
                        </div>
                        
                    </div>
                </div>
                <div className="listings">
                    <img src={ListingImg}  alt="listingpicture"/>
                    <div className="listings__info">
                        <h6>Smoothie</h6>
                        <p>Smoothie Store</p>
                        <p>25 Orders left</p>
                        <button className="listings__orders_btn">Order</button>
                        <div className="progress_bar_in">
                            <div className="progress_bar_out"> </div> 
                        </div>
                    </div>
                </div>
                <div className="listings">
                    <img src={ListingImg}  alt="listingpicture"/>
                    <div className="listings__info">
                        <h6>Smoothie</h6>
                        <p>Smoothie Store</p>
                        <p>25 Orders left</p>
                        <button className="listings__orders_btn">Order</button>
                        <div className="progress_bar_in">
                            <div className="progress_bar_out"> </div> 
                        </div>
                    </div>
                </div>
                <div className="listings">
                    <img src={ListingImg}  alt="listingpicture"/>
                    <div className="listings__info">
                        <h6>Smoothie</h6>
                        <p>Smoothie Store</p>
                        <p>25 Orders left</p>
                        <button className="listings__orders_btn">Order</button>
                        <div className="progress_bar_in">
                            <div className="progress_bar_out"> </div> 
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default SuggestedListings