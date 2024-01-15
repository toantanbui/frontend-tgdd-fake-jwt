import React, { Component } from 'react';
import { connect } from 'react-redux';

class HomeHeadercenter extends Component {
    render() {
        return (
            <>
                <div>Thanh tìm kiếm</div>

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

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeadercenter);