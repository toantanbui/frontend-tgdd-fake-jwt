import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../css/HomePage/HomeHeaderleft.css'

class HomeHeaderleft extends Component {
    render() {
        return (
            <>
                <div className='abc'>
                    ABC
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeaderleft);