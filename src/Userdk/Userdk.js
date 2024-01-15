import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import '../css/Userdk/Userdk.css';
import * as actions from '../store/actions'

class Userdk extends Component {
    constructor(props) {
        super(props)
        this.state = {
            arrUsers: [],
            email: '',
            password: '',
            lastName: '',
            firstName: '',
            phonenumber: '',

        }
    }
    async componentDidMount() {


        this.setState({

        })

    }
    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.allUsersRedux !== this.props.allUsersRedux) {
            this.setState({

            })
        }

    }


    handleOnChangeUserdk = (event, id) => {
        console.log('onChangeusers', event.target.value)
        let copyState = { ...this.state };
        copyState[id] = event.target.value;

        this.setState({
            ...copyState
        })

    }

    handleCreateUserdk = () => {
        this.props.CreateUserdk({
            email: this.state.email,
            password: this.state.password,
            lastName: this.state.lastName,
            firstName: this.state.firstName,
            phonenumber: this.state.phonenumber,

        })
    }





    render() {

        console.log('this.state.userdk', this.state)
        return (
            <div className='userdk'>
                <div className='userdk-up'>
                    <div className='userdk-up-text-title'>
                        <span className='userdk-up-text-title-span'>
                            Đăng kí tài khoản
                        </span>
                    </div>

                    <div className='userdk-up-text'>
                        <div className='userdk-up-text-aa'>

                            <span className='userdk-up-text-aa-span'>
                                Email
                            </span>

                        </div>
                        <div className='userdk-up-text-ab'>
                            <input type='text'
                                onChange={(event) => { this.handleOnChangeUserdk(event, 'email') }}
                                className='userdk-up-text-ab-input'
                            ></input>
                        </div>

                    </div>
                    <div className='userdk-up-text'>
                        <div className='userdk-up-text-aa'>

                            <span className='userdk-up-text-aa-span'>
                                Mật khẩu
                            </span>

                        </div>
                        <div className='userdk-up-text-ab'>
                            <input type='password'
                                onChange={(event) => { this.handleOnChangeUserdk(event, 'password') }}
                                className='userdk-up-text-ab-input'
                            ></input>
                        </div>
                    </div>
                    <div className='userdk-up-text'>
                        <div className='userdk-up-text-aa'>

                            <span className='userdk-up-text-aa-span'>
                                Họ
                            </span>

                        </div>
                        <div className='userdk-up-text-ab'>
                            <input type='text'
                                onChange={(event) => { this.handleOnChangeUserdk(event, 'lastName') }}
                                className='userdk-up-text-ab-input'
                            ></input>
                        </div>
                    </div>
                    <div className='userdk-up-text'>
                        <div className='userdk-up-text-aa'>

                            <span className='userdk-up-text-aa-span'>
                                Tên
                            </span>

                        </div>
                        <div className='userdk-up-text-ab'>
                            <input type='text'
                                className='userdk-up-text-ab-input'
                                onChange={(event) => { this.handleOnChangeUserdk(event, 'firstName') }}
                            ></input>
                        </div>
                    </div>
                    <div className='userdk-up-text'>
                        <div className='userdk-up-text-aa'>

                            <span className='userdk-up-text-aa-span'>
                                Số điện thoại
                            </span>

                        </div>
                        <div className='userdk-up-text-ab'>
                            <input type='number'
                                onChange={(event) => { this.handleOnChangeUserdk(event, 'phonenumber') }}
                                className='userdk-up-text-ab-input'
                            ></input>
                        </div>
                    </div>
                    <div className='userdk-up-text-foot-table'>
                        <div className='userdk-up-text-foot-table-right'>
                            <div className='userdk-up-text-foot-table-right-text'>
                                Đăng nhập
                            </div>

                        </div>
                        <div className='userdk-up-text-foot-table-left'>
                            <div className='userdk-up-text-foot-table-left-text'
                                onClick={() => this.handleCreateUserdk()}
                            >
                                Đăng kí
                            </div>
                        </div>
                    </div>
                </div>
                <div className='userdk-down'>
                    {this.props.errMessageUserdk}
                </div>
            </div>
        )
    }
}



const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        errMessageUserdk: state.admin.errMessageUserdk
    };
};

const mapDispatchToProps = dispatch => {
    return {
        CreateUserdk: (data) => dispatch(actions.CreateUserdk(data)),
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Userdk));