import React, { Component } from 'react';

import Header from './headernavbarfooter/header';
import Navbar from './headernavbarfooter/navbar';
import Footer from './headernavbarfooter/footer';

class Layout extends Component {
    render() {
        return (
            <div className='layout'>
                {this.props.children}
                <Header />
                <Navbar />
                <Footer />
            </div>
        );
    }
}

export default Layout;