import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../css/HomePage/HomeHeaderrightdown.css'

class HomeHeaderrightdown extends Component {
    render() {
        return (
            <>
                <div className='infor'>
                    <span>Trang chủ</span>
                    <span>Tài khoản</span>
                    <span>zỏ hàng</span>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeaderrightdown);