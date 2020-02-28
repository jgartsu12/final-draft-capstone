import React, { Component } from 'react';

// import Layout from '../layout';
// import Header from '../headernavbarfooter/header'
import ChefsTableBannerImage from '../../../static/assets/images/chefs_home_page_banner.png';


class HomePage extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return(
            <div className='home-page-container'>
                <div className='home-page-header'>
                    <div className='home-page-header__banner-img'
                        style= {{
                            background: "url(" + ChefsTableBannerImage + ") no-repeat",
                            backgroundSize: "cover",
                            backgroundPosition: 'center'
                        }}    
                    />
                </div>
            </div>
        )
    }
}

export default HomePage;