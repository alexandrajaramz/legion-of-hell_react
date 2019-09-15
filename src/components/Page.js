import React from 'react';
import Header from './Header';
import DataList from './DataList';
import Footer from './Footer';

class Page extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <DataList userData={this.props.userData}/>
                <Footer />
            </React.Fragment>
        );
    }
}

export default Page;