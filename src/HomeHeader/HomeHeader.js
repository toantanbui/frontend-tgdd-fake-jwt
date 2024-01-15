import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../css/HomeHeader/HomeHeader.css';
import HomeHeaderrightup from '../HomePage/HomeHeaderrightup';
import User from '../User/User';
import * as actions from '../store/actions';
import { withRouter } from 'react-router';
import OptionsforAdmin from '../OptionsforAdmin/OptionsforAdmin';


class HomeHeader extends Component {
    handleLogout = () => {
        this.props.LoginOutUser();
    }

    handleRedirect = () => {
        this.props.history.push('/')
    }


    handleRedirectChat = () => {
        this.props.history.push(`/chat/${this.props.userInfo.id}`)
    }

    render() {
        console.log('this.props.useInfor.homeHeader', this.props.userInfo)
        return (
            <div className='HomeHeaderabc'>
                <div className='up'>
                    <div className='up-two'
                        onClick={() => { this.handleRedirectChat() }}
                    >
                        <span>Chat với chúng tôi</span>

                    </div>
                    <div className='up-one'
                        onClick={() => { this.handleLogout() }}
                    >
                        <span>Đăng xuất </span>
                    </div>


                </div>
                <div className='center'>
                    <div className='center-title'
                        onClick={() => { this.handleRedirect() }}
                        style={{ cursor: 'pointer' }}
                    >
                        <span className='center-title-title'>Thế giới di động fake</span>
                    </div>
                    <div className='center-address'>
                        <span>Hồ Chí Minh</span>
                    </div>
                    <div className='center-look-at'>
                        <span>Thanh tìm kiếm</span>
                    </div>
                    <div className='center-user'>
                        <User />
                    </div>
                    <div className='center-cart'>
                        <span>Gio hàng</span>
                    </div>
                    <div className='center-hi'>
                        <HomeHeaderrightup />
                    </div>
                </div>
                <div className='down'>
                    {this.props.userInfo && this.props.userInfo.roleId === 'admin' ? <OptionsforAdmin /> : ''}
                </div>
            </div>
        )
    }
}



const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        userInfo: state.user.userInfo
    };
};

const mapDispatchToProps = dispatch => {
    return {
        LoginOutUser: () => dispatch(actions.LoginOutUser()),
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomeHeader));