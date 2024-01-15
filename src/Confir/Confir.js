import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../css/Confir/Confir.css';
import HomeHeader from '../HomeHeader/HomeHeader';
import * as actions from '../store/actions';



class Confir extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    async componentDidMount() {


        const urlParams = new URLSearchParams(this.props.location.search);
        console.log('urlParams', urlParams)
        const token = urlParams.get('token');
        console.log('token', token)

        const idUser = urlParams.get('idUser');

        this.props.EditOrders({
            idUser: idUser,
            token: token

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
                        Đơn hàng của bạn đã được xác nhận thành công, hàng của quý khách sẽ được giao trong vòng
                        7 ngày kể từ ngày xác nhận đơn hàng

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
        EditOrders: (data) => dispatch(actions.EditOrders(data)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Confir);
