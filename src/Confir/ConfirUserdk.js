import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../css/Confir/Confir.css';
import HomeHeader from '../HomeHeader/HomeHeader';
import * as actions from '../store/actions';



class ConfirUserdk extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    async componentDidMount() {


        const urlParams = new URLSearchParams(this.props.location.search);
        console.log('urlParams', urlParams)
        const token2 = urlParams.get('token2');

        const firstName = urlParams.get('firstName');

        this.props.EditUserdk({
            firstName: firstName,
            token2: token2

        })


        this.setState({

        })

    }
    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.allUsersRedux !== this.props.allUsersRedux) {

        }

    }



    render() {
        console.log('this.props.match.params. confirrr', this.props.location.search)
        return (
            <div className='confir'>
                <div className='confir-up'>
                    <HomeHeader />
                </div>
                <div className='confir-down'>
                    <span className='confir-down-text'>
                        Tài khoản của bạn đã được đăng kí thành công, mời bạn quay lại trang đăng nhập để đăng nhập vào tài khoản

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
        EditUserdk: (data) => dispatch(actions.EditUserdk(data)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ConfirUserdk);
