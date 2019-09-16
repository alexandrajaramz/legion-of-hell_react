import React from 'react';
import Header from './Header';
import Filters from './Filters';
import Status from './Status';
import DataList from './DataList';
import Footer from './Footer';

class Page extends React.Component {
    render() {
        const {userData, inputValue, getInputValue} = this.props;
        const filteredData = userData.filter(item => item.email.toUpperCase().includes(inputValue.toUpperCase()));
        const filteredUsersNumber = filteredData.length;
        return (
            <React.Fragment>
                <Header />
                <main className="page__main">
                    <Filters getInputValue={getInputValue} />
                    <Status filteredUsersNumber={filteredUsersNumber} />
                    <DataList filteredData={filteredData} />
                </main>
                <Footer />
            </React.Fragment>
        );
    }
}

export default Page;