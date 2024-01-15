import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../css/showAllUsers/AllUser.css';
import * as actions from '../store/actions'

class AllUser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            arrUsers: []
        }
    }
    async componentDidMount() {

        await this.props.getAllUser();
        this.setState({
            arrUsers: this.props.allUsersRedux
        })

    }
    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.allUsersRedux !== this.props.allUsersRedux) {
            this.setState({
                arrUsers: this.props.allUsersRedux
            })
        }

    }
    handleDeleteUser = async (id) => {
        await this.props.DeleteUser(id);

    }
    handleEditUser = async (item) => {
        this.props.handle(item);
    }


    render() {
        let arrUsers = this.state.arrUsers;
        console.log('arrUser', arrUsers)
        console.log(' this.props.AllUser', this.props.allUsersRedux)
        return (
            <>
                <table className='table'>
                    <tr>
                        <th>Email</th>
                        <th>FistName</th>
                        <th>LastName</th>
                        <th>Address</th>
                        <th>Action</th>
                    </tr>
                    {arrUsers && arrUsers.length > 0 &&
                        arrUsers.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.email}</td>
                                    <td>{item.firstName}</td>
                                    <td>{item.lastName}</td>
                                    <td>{item.address}</td>
                                    <td>
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
        // AllUser: state.user.AllUser,
        allUsersRedux: state.admin.allUsers
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getAllUser: () => dispatch(actions.getAllUser()),
        DeleteUser: (data) => dispatch(actions.DeleteUser(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AllUser);