import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../css/HomePage/HomeHeaderrightup.css'

class HomeHeaderrightup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            arrUsers: {}
        }
    }
    // async componentDidMount() {


    //     this.setState({
    //         arrUsers: this.props.userInfo
    //     })

    // }

    render() {
        let userInfo1 = this.props.userInfo
        console.log('test', userInfo1)
        console.log('testdsadfsdasda', this.props.userInfo)

        return (
            <>
                <span className='hiName'>Hello, {userInfo1 && userInfo1.firstName}</span>
            </>
        )
    }
}



const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        userInfo: state.user.userInfo,

    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeaderrightup);