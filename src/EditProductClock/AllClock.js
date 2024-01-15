import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../css/EditProduct/AllProduct.css'
import * as actions from '../store/actions';

class AllClock extends Component {
    constructor(props) {
        super(props)
        this.state = {
            arrUsers: []
        }
    }
    async componentDidMount() {

        await this.props.getAllProduct();
        this.setState({
            arrUsers: this.props.allProduct
        })

    }
    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.allProduct !== this.props.allProduct) {
            this.setState({
                arrUsers: this.props.allProduct
            })
        }

    }
    handleDeleteUser = async (id) => {
        await this.props.DeleteProduct(id);

    }
    handleEditUser = async (item) => {
        this.props.handle(item);
    }


    render() {
        let arrUsers = this.state.arrUsers;
        console.log('arrUser', arrUsers)
        console.log(' this.props.AllProduct', this.props.allUsersRedux)
        return (
            <>
                <table className='table'>
                    <tr>
                        <th>NameProduct</th>
                        <th>Screen</th>
                        <th>OperatingSystem</th>
                        <th>Price</th>
                        <th>action</th>
                    </tr>
                    {arrUsers && arrUsers.length > 0 &&
                        arrUsers.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.NameProduct}</td>
                                    <td>{item.Screen}</td>
                                    <td>{item.OperatingSystem}</td>
                                    <td>{item.Price}</td>
                                    <td className='this-td'>
                                        <button
                                            onClick={() => { this.handleEditUser(item) }}
                                        >sua</button>
                                        <button
                                            onClick={() => { this.handleDeleteUser(item.id) }}
                                        >xoa</button>
                                    </td>
                                </tr>
                            )
                        })

                    }
                </table>

            </>
        )
    }
}



const mapStateToProps = state => {
    return {
        // AllProduct: state.user.AllProduct,
        allProduct: state.admin.allProduct
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getAllProduct: () => dispatch(actions.getAllProduct()),
        DeleteProduct: (data) => dispatch(actions.DeleteProduct(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AllClock);