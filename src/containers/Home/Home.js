import React from 'react';

import './Home.scss';
import HomeForm from '../../components/HomeForm/HomeForm';
import HomeFormOne from '../../components/HomeForm/HomeFormOne';
import HomeFormTwo from '../../components/HomeForm/HomeFormTwo';
import HomeFormThree from '../../components/HomeForm/HomeFormThree';

class HomeContainer extends React.Component {

    render() {
        return (
            <div className="home-page">
                Home page

                {/* <hr />
                <HomeForm />
                <hr />
                <HomeFormOne />
                <hr />
                <HomeFormTwo /> */}
                <hr />
                <HomeFormThree />
            </div>
        )
    }
}

export default HomeContainer;