import React, { Component } from 'react';

import SocialMedia from '../../components/socialMediaLinks';

class Footer extends Component {
    render() {
        return (
            <div className='footer'>
               <div className='social-media-wrapper__links'>
                   <SocialMedia />
               </div>
            </div>
        )
    }
}

export default Footer;