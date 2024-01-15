import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';


class User extends Component {
    handleRedirect = () => {
        this.props.history.push(`/showuser/${this.props.userInfo.id}`)
    }
    render() {

        return (
            <span onClick={() => { this.handleRedirect() }}>
                Tài khoản
            </span>
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
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(User));