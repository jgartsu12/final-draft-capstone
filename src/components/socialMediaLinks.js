import React, { Component } from 'react';

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class SocialMedia extends Component {
    render() {
        return (
            <div className='social-media-content'>
                <div className='Facebook-content-wrapper'>
                    <div className='icon'>
                        <a href="https://www.facebook.com/chefstablect/" className='chefs-facebook-page'>
                            <i className="fab fa-facebook-square"></i>
                            {/* <FontAwesomeIcon icon='Facebook'/> */}
                        </a>
                    </div>
                </div>
                <div className='Instagram-content-wrapper'>
                    <div className='icon'>
                        <a href="https://www.instagram.com/chefstablect/" className='chefs-insta-page'>
                            {/* <FontAwesomeIcon icon='Instagram'/> */}
                            <i className="fab fa-instagram-square"></i>
                        </a>
                    </div>
                </div>
                <div className='Twitter-content-wrapper'>
                    <div className='icon'>
                        <a href="https://twitter.com/ChefsTableCT" className='chefs-twitter-page'>
                            {/* <FontAwesomeIcon icon='Twitter'/> */}
                            <i className="fab fa-twitter-square"></i>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default SocialMedia;