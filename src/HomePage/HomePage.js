import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../css/HomePage/HomePage.css'
import HomeHeaderleft from './HomeHeaderleft';
import HomeHeadercenter from './HomeHeadercenter';
import HomeHeaderrightup from './HomeHeaderrightup';
import HomeHeaderrightdown from './HomeHeaderrightdown';
import HomeContent from './HomeContent/HomeContent';
import HomeContentLaptop from './HomeContent/HomeContentLaptop';
import HomeContentClock from './HomeContent/HomeContentClock';
import HomeHeader from '../HomeHeader/HomeHeader';
import reduxStore from '../redux';

import { withRouter } from 'react-router';


class HomePage extends Component {
    render() {
        let abc = localStorage.getItem('persist:user');
        let abcd = JSON.parse(abc).tokenRedux;
        console.log('gt trị là ', abcd)
        return (
            <>
                <div className='HomePage'>
                    <div className='HomeHeader'>
                        <HomeHeader />

                    </div>
                    <div className='HomeMenu'></div>
                    <div className='HomeContent'>
                        <div className='Ads'>
                        </div>
                        <div className='Content'>


                            <div className='Content-a'></div>
                            <div className='Content-b'>
                                <div className='content-b-a'>
                                    <HomeContent />
                                </div>
                                <div className='content-b-b'>
                                    <HomeContentLaptop />
                                </div>
                                <div className='content-b-c'>
                                    < HomeContentClock />
                                </div>

                            </div>
                            <div className='Content-c'></div>
                        </div>
                        <div className='Ads'>

                        </div>
                    </div>

                </div>

            </>
        )
    }
}



const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomePage));
