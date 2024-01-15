
import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../css/login/login.css';
import reduxStore from '../redux';
import * as actions from '../store/actions'

class login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''

        }

    }

    async componentDidMount() {



    }

    // async componentDidUpdate(prevProps, prevState, snapshot) {
    //     if (prevProps.token !== this.props.token) {
    //         this.props.token = reduxStore.getState().user.tokenRedux;
    //         console.log('login can tim', this.props.token)
    //     }

    // }




    handleInput = (event, id) => {
        let copyState = { ...this.setState };
        copyState[id] = event.target.value;
        this.setState({
            ...copyState
        })
        console.log('this.state', this.state)

    }

    handleLogin = () => {

        this.props.LoginUser({
            email: this.state.email,
            password: this.state.password
        })


    }
    handledk = () => {
        this.props.history.push('/userdk')
    }



    render() {
        return (
            <>
                <div className='login'>
                    <div>
                        <label>Tài khoản</label>
                        <input type='text'
                            onChange={(event) => { this.handleInput(event, 'email') }}
                        />
                    </div>
                    <div>
                        <label>Mật khẩu</label>
                        <input type='text'
                            onChange={(event) => { this.handleInput(event, 'password') }}
                        />
                    </div>
                    <div>
                        <button onClick={() => { this.handleLogin() }}
                            style={{ cursor: 'pointer' }}
                        >
                            Đăng nhập
                        </button>

                        <span style={{ margin: '50px', color: 'blue', cursor: 'pointer' }}
                            onClick={() => { this.handledk() }}
                        >Đăng kí tài khoản</span>
                        <span style={{ margin: '15px', color: 'blue' }}

                        >Quên tài khoản</span>


                    </div>
                    <div style={{ color: 'red' }}>
                        {this.props.errMessage}
                    </div>
                </div>


            </>
        )
    }
}



const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        errMessage: state.user.errMessage,
        token: state.admin.tokenRedux
    };
};

const mapDispatchToProps = dispatch => {
    return {
        LoginUser: (data) => dispatch(actions.LoginUser(data)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(login);