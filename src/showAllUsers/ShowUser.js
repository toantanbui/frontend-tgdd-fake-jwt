import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../css/showAllUsers/EditAllUser.css';

import * as actions from '../store/actions'

import Lightbox from 'react-image-lightbox';
import { Buffer } from 'buffer';
import CommonUtil from '../commonUtil/CommonUtil';
import { withRouter } from 'react-router';

class ShowUser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            phonenumber: '',
            address: '',
            roleId: '',
            gender: '',
            isOpen: false,
            ImageUrl: '',
            avatar: '',




        }
    }
    async componentDidMount() {
        console.log('this.props.userInfo.componentDidMount', this.props.userInfo)
        console.log('this.props.match.params.id', this.props.match.params.id)
        await this.props.getUser(this.props.match.params.id);
        let data = this.props.oneUser;
        console.log('check data', this.props.oneUser)
        let imageBase64 = '';
        if (data.image) {
            imageBase64 = new Buffer(data.image, 'base64').toString('binary')

        }
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
            avatar: imageBase64

        })

    }
    componentDidUpdate(prevProps, prevState, snapshot) {

        console.log('this.props.userInfo.componentDidUpdate', this.props.userInfo)

        let data = this.props.userInfo
        if (prevProps.userInfo !== this.props.userInfo) {
            let imageBase64 = '';
            if (data.image) {
                imageBase64 = new Buffer(data.image, 'base64').toString('binary')

            }
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
                avatar: imageBase64

            })
        }
    }

    onChangeInput = (event, abc) => {
        let copyState = { ...this.state };
        copyState[abc] = event.target.value;

        this.setState({
            ...copyState
        })

    }
    handleCreateOrEditUser = () => {



        this.props.EditUser({
            id: this.state.id,
            password: this.state.password,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            address: this.state.address,
            roleId: this.state.roleId,
            gender: this.state.gender,
            phonenumber: this.state.phonenumber,
            image: this.state.avatar
        })





    }


    handleLogout = () => {
        this.props.LoginOutUser();
    }
    onChangeInputImge = async (event) => {
        let data = event.target.files;
        console.log('data', data)
        let file = data[0];

        if (file) {
            let base64 = await CommonUtil.getbase64(file);
            let Url = URL.createObjectURL(file);
            this.setState({
                ImageUrl: Url,
                avatar: base64
            })

        }
    }

    openPreviewImge = () => {
        if (!this.state.ImageUrl) { return; }
        this.setState({
            isOpen: true
        })

    }


    render() {
        let { email, password, firstName, lastName, address, roleId, gender,
            phonenumber } = this.state;
        console.log('this.props.match.params.id', this.props.match.params.id)
        console.log('this.props.oneUser', this.props.oneUser)



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
                                <label>avatar:</label>
                                <input type="file"

                                    onChange={(event) => { this.onChangeInputImge(event) }}
                                />
                                <label htmlFor="previewImg" >Show ảnh</label>

                                <div className='previewImge'
                                    style={{ backgroundImage: `url(${this.state.avatar})` }}
                                    onClick={() => this.openPreviewImge()}


                                ></div>
                            </div>


                        </div>
                        <div className='edit-button'>
                            <button onClick={() => {
                                this.handleCreateOrEditUser()
                            }}>
                                Edit
                            </button>

                        </div>
                        <div style={{ color: 'red' }}>
                            {this.props.errMessage}
                        </div>


                    </div>
                </div>
                <div>
                    {this.state.isOpen === true &&
                        <Lightbox
                            mainSrc={this.state.ImageUrl}
                            onCloseRequest={() => this.setState({
                                isOpen: false
                            })} />
                    }
                </div>

            </>
        )
    }
}



const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        errMessage: state.user.errMessage,
        // oneUser: state.user.oneUser,
        userInfo: state.user.userInfo,
        oneUser: state.admin.oneUser,
        errMessage: state.admin.errMessage,
    };
};

const mapDispatchToProps = dispatch => {
    return {

        getUser: (data) => dispatch(actions.getUser(data)),
        EditUser: (data) => dispatch(actions.EditUser(data)),
        LoginOutUser: () => dispatch(actions.LoginOutUser()),
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ShowUser));
