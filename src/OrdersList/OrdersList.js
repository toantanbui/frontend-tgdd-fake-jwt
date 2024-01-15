import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions';
import { withRouter } from 'react-router';
import '../css/OrdersList/OrdersList.css'

class OrdersList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            arrOrderList: []
        }
    }
    async componentDidMount() {
        await this.props.getOrdersList('R1')
        console.log('arrOrdersList', this.props.OrdersList)
        this.setState({
            arrOrderList: this.props.OrdersList
        })

    }
    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.arrOrdersList !== this.props.arrOrdersList) {
            this.setState({
                arrOrderList: this.props.arrOrdersList
            })
        }

    }
    handleDeleteUser = async (id) => {


    }
    handleEditOrderList = async (item) => {
        console.log('item.OrderList', item)
        this.props.EditOrdersComplete({ idOrder: item.id })
        await this.props.getOrdersList('R1')



    }





    render() {
        let { arrOrderList } = this.state;

        return (
            <div className='orderlist'>
                <div className='orderlist-up'>
                    <span className='orderlist-up-span'>Danh sách các đơn hàng đã được xác nhận</span>

                </div>
                <table className='table-orderlist'>
                    <tr>
                        <th>FistName</th>
                        <th>Phonenumber</th>
                        <th>NameProduct</th>
                        <th>Amount</th>
                        <th>Address</th>
                        <th>Price</th>
                        <th>Time</th>
                        <th>action</th>
                    </tr>
                    {arrOrderList && arrOrderList.length > 0 &&
                        arrOrderList.map((item, index) => {
                            { console.log('item.updateAt', item.updateAt) }
                            return (
                                <tr key={index}>
                                    <td>{item.idUserData.firstName}</td>
                                    <td>{item.idUserData.phonenumber}</td>
                                    <td>{item.idProductData.NameProduct}</td>
                                    <td>{item.amount}</td>
                                    <td>{item.address}</td>

                                    <td>{item.price}</td>
                                    <td>{item.updatedAt}</td>
                                    {console.log('item.updateAt', item.updatedAt)}

                                    <td className='this-td'>
                                        <button style={{ cursor: 'pointer' }}
                                            onClick={() => { this.handleEditOrderList(item) }}
                                        >Xác nhận giao hàng thành công</button>

                                    </td>
                                </tr>
                            )
                        })

                    }
                </table>

            </div>
        )
    }
}



const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        OrdersList: state.admin.arrOrdersList
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getOrdersList: (data) => dispatch(actions.getOrdersList(data)),
        EditOrdersComplete: (data) => dispatch(actions.EditOrdersComplete(data)),
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(OrdersList));