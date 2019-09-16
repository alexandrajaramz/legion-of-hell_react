import React from 'react';
import Header from './Header';
import Filters from './Filters';
import Status from './Status';
import DataList from './DataList';
import Footer from './Footer';

class Page extends React.Component {
    render() {
        const {userData, inputValue, getInputValue, attackDate} = this.props;
        const filteredData = userData.filter(item => item.email.toUpperCase().includes(inputValue.toUpperCase()));
        const filteredUsersNumber = filteredData.length;
        return (
            <div className="app">
                <Header attackDate={attackDate} />
                <main className="app__main">
                    <Filters getInputValue={getInputValue} />
                    <Status filteredUsersNumber={filteredUsersNumber} />
                    <DataList filteredData={filteredData} />
                </main>
                <Footer />
            </div>
        );
    }
}

export default Page;