
import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../css/OptionsforAdmin/OptionsforAdmin.css';
import { withRouter } from 'react-router';

class OptionsforAdmin extends Component {


    handleRedirectUsers = () => {
        this.props.history.push('/editallusers')

    }

    handleRedirectOrders = () => {
        this.props.history.push('/order-list')
    }

    handleRedirectProduct = () => {
        this.props.history.push('/editproduct')
    }


    render() {
        return (
            <div className='optionsforAdmin'>
                <div className='optionsforAdmin-users'
                    onClick={() => { this.handleRedirectUsers() }}
                >
                    <span className='edit-span'>
                        ds user
                    </span>
                </div>
                <div className='optionsforAdmin-orders'
                    onClick={() => { this.handleRedirectOrders() }}
                >
                    <span className='edit-span'>
                        ds don hang
                    </span>
                </div>
                <div className='optionsforAdmin-products'
                    onClick={() => { this.handleRedirectProduct() }}>
                    <span className='edit-span'

                    >
                        ds product
                    </span>
                </div>
            </div>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(OptionsforAdmin));