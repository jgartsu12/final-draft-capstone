import React, { Component } from 'react';
import { connect } from 'react-redux';

import history from '../../history';
import ChefsTableBannerImage from '../../../static/assets/images/chefs_home_page_banner.png';

class Header extends Component {
    render() {
        return (
            <div className='header'>
                <img className='header-banner__img'
                    style= {{
                            background: "url(" + ChefsTableBannerImage + ") no-repeat",
                            backgroundSize: "cover",
                            backgroundPosition: 'center'
                        }}    
                    />
                <div className='header__links'>
                {
                    this.props.headerLinks.map((link, index) => {
                        return (
                            <a className='header__link' key={index} onClick={() => history.push(link.path)}>
                                {link.title}
                            </a>
                        )
                    })
                }
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const{ headerLinks } = state.headerNavbar;
    return {
        headerLinks
    }
}

Header = connect(mapStateToProps)(Header);

export default Header;