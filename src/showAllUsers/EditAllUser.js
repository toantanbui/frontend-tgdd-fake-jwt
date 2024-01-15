import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../css/showAllUsers/EditAllUser.css';
import AllUser from './AllUser';
import * as actions from '../store/actions'
import { CRUD_ACTIONS } from '../constant/constant';
import { withRouter } from 'react-router';


class EditAllUser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            phonenumber: '',
            address: '',
            roleId: '',
            gender: '',
            // image: '',

            action: 'CREATE'

        }
    }
    async componentDidMount() {
        await this.props.getAllUser;
    }
    componentDidUpdate(prevProps, prevState, snapshot) { }

    onChangeInput = (event, id) => {
        let copyState = { ...this.state };
        copyState[id] = event.target.value;

        this.setState({
            ...copyState
        })

    }
    handleCreateOrEditUser = () => {
        if (this.state.action === 'CREATE') {
            this.props.createAllUser({
                email: this.state.email,
                password: this.state.password,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                address: this.state.address,
                roleId: this.state.roleId,
                gender: this.state.gender,
                phonenumber: this.state.phonenumber
            })
            this.setState({
                email: '',
                password: '',
                firstName: '',
                lastName: '',
                address: '',
                roleId: '',
                gender: '',
                phonenumber: '',
                id: ''

            })
        }

        if (this.state.action === 'EDIT') {
            this.props.EditUser({
                id: this.state.id,
                password: this.state.password,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                address: this.state.address,
                roleId: this.state.roleId,
                gender: this.state.gender,
                phonenumber: this.state.phonenumber
            })
        }
        this.setState({
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            address: '',
            roleId: '',
            gender: '',
            phonenumber: '',
            id: '',
            action: 'CREATE'
        })



    }

    handleEditUserFromAllUser = (data) => {
        this.setState({
            id: data.id,
            email: data.email,
            password: data.password,
            firstName: data.firstName,
            lastName: data.lastName,
            address: data.address,
            roleId: data.roleId,
            gender: data.gender,
            phonenumber: data.phonenumber,

            action: 'EDIT'
        })
    }
    handleLogout = () => {
        this.props.LoginOutUser();
    }

    render() {
        let { email, password, firstName, lastName, address, roleId, gender,
            phonenumber, action } = this.state;


        return (
            <>
                <div className='edit'>
                    <div className='edit-header'>
                        <div>Edit User infor</div>
                        <div>
                            <button
                                onClick={() => this.handleLogout()}
                            > Logout</button>
                        </div>

                    </div>
                    <div className='edit-all-body'>
                        <div className='edit-body'>
                            <div className='all'>
                                <label>email:</label>
                                <input type="text"
                                    value={email}
                                    onChange={(event) => { this.onChangeInput(event, 'email') }}
                                />
                            </div >
                            <div className='all'>
                                <label>firstName:</label>
                                <input type="text"
                                    value={firstName}
                                    onChange={(event) => { this.onChangeInput(event, 'firstName') }}
                                />
                            </div>
                            <div className='all'>
                                <label>lastName:</label>
                                <input type="text"
                                    value={lastName}
                                    onChange={(event) => { this.onChangeInput(event, 'lastName') }}
                                />
                            </div>
                            <div className='all'>
                                <label>password:</label>
                                <input type="text"
                                    value={password}
                                    onChange={(event) => { this.onChangeInput(event, 'password') }}
                                /></div>
                            <div className='all'>
                                <label>phonenumber:</label>
                                <input type="text"
                                    value={phonenumber}
                                    onChange={(event) => { this.onChangeInput(event, 'phonenumber') }}
                                />
                            </div>
                            <div className='all'>
                                <label>address:</label>

                                <input type="text"
                                    value={address}
                                    onChange={(event) => { this.onChangeInput(event, 'address') }}
                                />
                            </div>
                            <div className='all'>
                                <label>roleId:</label>
                                <input type="text"
                                    value={roleId}
                                    onChange={(event) => { this.onChangeInput(event, 'roleId') }}
                                />
                            </div>
                            <div className='all'>
                                <label>gender:</label>
                                <input type="text"
                                    value={gender}
                                    onChange={(event) => { this.onChangeInput(event, 'gender') }}
                                />
                            </div>
                            <div className='all'>
                                <label>image:</label>
                                <input type="text"
                                    // value={image}
                                    onChange={(event) => { this.onChangeInput(event, 'image') }}
                                />
                            </div>

                        </div>
                        <div className='edit-button'>
                            <button onClick={() => {
                                this.handleCreateOrEditUser()
                            }}>
                                {CRUD_ACTIONS.CREATE === action ? 'Add' : 'Edit'}
                            </button>

                        </div>
                        <div>
                            <AllUser
                                handle={this.handleEditUserFromAllUser}

                            />
                        </div>


                    </div>
                </div>

            </>
        )
    }
}



const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        errMessage: state.user.errMessage
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getAllUser: () => dispatch(actions.getAllUser()),
        createAllUser: (data) => dispatch(actions.createAllUser(data)),
        EditUser: (data) => dispatch(actions.EditUser(data)),
        LoginOutUser: () => dispatch(actions.LoginOutUser()),
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditAllUser));
