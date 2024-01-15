

import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../css/OrderConfirmation/OrderConfirmation.css'
import HomeHeader from '../HomeHeader/HomeHeader';
import * as actions from '../store/actions';

let multiply = (a, b) => {
    return a * b;
}

class OrderConfirmation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            idUser: '',
            idProduct: '',
            amount: '1',
            Price: '',
            address: '',
            status: 'R1',

            NameProduct: '',
            email: ''



        }
    }
    async componentDidMount() {
        await this.props.getProduct(this.props.match.params.id)
        console.log('OrderConfir', this.props.oneProduct)
        this.setState({
            NameProduct: this.props.oneProduct.NameProduct,
            Price: this.props.oneProduct.Price,



        })



    }
    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.allUsersRedux !== this.props.allUsersRedux) {

        }

    }

    handleCreateData = () => {
        this.props.createOrders({

            idUser: this.state.idUser,
            idProduct: this.state.idProduct,
            amount: this.state.amount,
            price: this.state.Price,
            address: this.state.address,


            NameProduct: this.state.NameProduct,
            email: this.state.email
        }

        )

    }
    // handleOnChange = (event, id) => {
    //     console.log('onChange', event.target.value)
    //     let copyState = { ...this.state };
    //     copyState[id] = event.target.value;

    //     this.setState({
    //         ...copyState
    //     })

    // }


    handleOnChangeAmount = (event) => {
        let numberPrice = +this.props.oneProduct.Price;
        let onchange = +event.target.value;

        let stringOnchange = onchange.toString();
        console.log('numberPrice', numberPrice);
        console.log('onChange', onchange)


        let realPrice = multiply(onchange, numberPrice)
        console.log('realPrice', realPrice);

        let a = realPrice.toString();
        console.log('a', typeof (a))

        this.setState({
            Price: a,
            amount: stringOnchange,
            idUser: this.props.userInfo.id.toString(),
            idProduct: this.props.match.params.id,

        })





    }
    handleOnChangeAddress = (event) => {
        this.setState({
            address: event.target.value,
            email: this.props.userInfo.email
        })
    }



    render() {

        console.log('check userInforvvvvvvvvv', this.props.userInfo)
        console.log('this.props.errMessageOrders', this.props.errMessageOrders)
        console.log('state.Order....', this.state)
        console.log('check number', typeof (this.state.Price))
        return (
            <div className='order-confir'>
                <div className='order-confir-top'>
                    <HomeHeader />
                </div>
                <div className='order-confir-center'>
                    <div className='order-confir-center-right'>

                    </div>
                    <div className='order-confir-center-left'>
                        <div className='order-confir-center-left-a'>
                            <span className='title-title-title'>
                                {this.state.NameProduct}
                            </span>
                        </div>
                        <div className='order-confir-center-left-b'>
                            <div className='order-confir-center-left-a-a'>
                                <span className='order-confir-center-left-a-a-a'>
                                    Số lượng
                                </span>
                            </div>
                            <div className='order-confir-center-left-a-b'>

                                <input type='text' placeholder='Mời nhập số lượng sản phẩm'
                                    style={{ width: '90%' }}
                                    className='order-confir-center-left-a-a-a'

                                    onChange={(event) => this.handleOnChangeAmount(event)}
                                ></input>

                            </div>
                        </div>
                        <div className='order-confir-center-left-a'>
                            <div className='order-confir-center-left-a-a'>
                                <span className='order-confir-center-left-a-a-a'>
                                    Số điện thoại
                                </span>
                            </div>
                            <div className='order-confir-center-left-a-b'>
                                <span className='order-confir-center-left-a-a-a'>
                                    Mặc định
                                </span>

                            </div>
                        </div>
                        <div className='order-confir-center-left-b'>
                            <div className='order-confir-center-left-a-a'>
                                <span className='order-confir-center-left-a-a-a'>
                                    Trạng thái đơn hàng
                                </span>
                            </div>
                            <div className='order-confir-center-left-a-b'>
                                <span className='order-confir-center-left-a-a-a'>
                                    {this.state.status}
                                </span>

                            </div>
                        </div>
                        <div className='order-confir-center-left-a'>
                            <div className='order-confir-center-left-a-a'>
                                <span className='order-confir-center-left-a-a-a'>
                                    Địa chỉ giao hàng
                                </span>
                            </div>
                            <div className='order-confir-center-left-a-b'>

                                <input type='text' placeholder='Số nhà, xóm-ấp, thôn, xã-phường, quận-huyện, tỉnh-thành phố'
                                    style={{ width: '90%' }}
                                    className='order-confir-center-left-a-a-a'
                                    onChange={(event) => this.handleOnChangeAddress(event)}
                                ></input>

                            </div>
                        </div>
                        <div className='order-confir-center-left-bbb'>
                            <div className='order-confir-center-left-a-abbb'>
                                <span className='order-confir-center-left-a-a-abbb'

                                >
                                    {this.state.Price}
                                </span>
                            </div>

                        </div>
                        <div className='order-confir-center-left-bbb'>
                            <div className='order-confir-center-left-a-abbbb'
                                onClick={() => { this.handleCreateData() }}
                            >
                                <span className='order-confir-center-left-a-a-abbbb'>
                                    Đặt hàng
                                </span>
                            </div>

                        </div>

                    </div>

                </div>
                <div className='order-confir-bottom'>
                    <span style={{ color: 'red' }}>
                        {this.props.errMessageOrders}
                    </span>
                </div>
            </div>
        )
    }
}



const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        oneUser: state.admin.oneUser,
        oneProduct: state.admin.oneProduct,
        errMessageOrders: state.admin.errMessageOrders,
        userInfo: state.user.userInfo,

    };
};

const mapDispatchToProps = dispatch => {
    return {
        getProduct: (data) => dispatch(actions.getProduct(data)),
        createOrders: (data) => dispatch(actions.createOrders(data)),

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderConfirmation);
