import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../css/ProductInfor/ProducInfor.css';
import { withRouter } from 'react-router';
import * as actions from '../store/actions';
import { Buffer } from 'buffer';

class ProductInfor extends Component {
    constructor(props) {
        super(props)
        this.state = {
            KeyProduct: '',
            NameProduct: '',
            Screen: '',
            OperatingSystem: '',
            RAM: '',
            Capacity: '',
            Battery: '',
            avatar: '',
            Price: '',
            DetailInfor: '',



        }
    }
    async componentDidMount() {
        await this.props.getProduct(this.props.match.params.id)
        console.log('this.props.match.params.id.ProductInfor', this.props.match.params.id)
        let data = this.props.oneProduct;
        let imageBase64 = '';
        if (data.Image) {
            imageBase64 = new Buffer(data.Image, 'base64').toString('binary')

        }
        this.setState({

            KeyProduct: data.KeyProduct,
            NameProduct: data.NameProduct,
            Screen: data.Screen,
            OperatingSystem: data.OperatingSystem,
            RAM: data.RAM,
            Capacity: data.Capacity,
            Battery: data.Battery,
            avatar: imageBase64,
            Price: data.Price,
            DetailInfor: data.DetailInfor,

        })




    }
    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.allUsersRedux !== this.props.allUsersRedux) {
            this.setState({

            })
        }

    }

    handleProductInforRedirect = (data) => {
        this.props.history.push(`/orderconfir/${data}`);
    }





    render() {
        console.log(this.props.match.params.id)
        return (
            <div className='main'>
                <div className='productInfor'>
                    <div className='productInfor-up'>
                        <div className='productInfor-up-up'>
                            <div className='imageProduct'>

                            </div>

                        </div>
                        <div className='productInfor-up-down'>
                            <div className='imageInfor'>
                                <div className='imageInfor-Infor-a'>
                                    <span className='edit-title'>Cấu hình {this.state.NameProduct}</span>

                                </div>
                                <div className='imageInfor-Infor-b'>
                                    <div className='text-a'>
                                        <span className='edit-span'>Màn hình</span>
                                    </div>
                                    <div className='text-b'>
                                        <span className='edit-span'>{this.state.Screen}</span>
                                    </div>
                                </div>
                                <div className='imageInfor-Infor-a'>
                                    <div className='text-a'>
                                        <span className='edit-span'>Hệ điều hành</span>
                                    </div>
                                    <div className='text-b'>
                                        <span className='edit-span'>{this.state.OperatingSystem}</span>
                                    </div>
                                </div>
                                <div className='imageInfor-Infor-b'>
                                    <div className='text-a'>
                                        <span className='edit-span'>RAM</span>
                                    </div>
                                    <div className='text-b'>
                                        <span className='edit-span'>{this.state.RAM}</span>
                                    </div>
                                </div>
                                <div className='imageInfor-Infor-a'>
                                    <div className='text-a'>
                                        <span className='edit-span'>Dung lượng lưu trữ</span>
                                    </div>
                                    <div className='text-b'>
                                        <span className='edit-span'>{this.state.Capacity}</span>
                                    </div>
                                </div>
                                <div className='imageInfor-Infor-b'>
                                    <div className='text-a'>
                                        <span className='edit-span'>Pin</span>
                                    </div>
                                    <div className='text-b'>
                                        <span className='edit-span'>{this.state.Battery}</span>
                                    </div>
                                </div>
                                <div className='imageInfor-Infor-a'>

                                    <div className='text-bb'>
                                        <span className='edit-span-price'>{this.state.Price}</span>
                                    </div>
                                </div>


                                <div className='imageInfor-Infor-aa'
                                    onClick={() => { this.handleProductInforRedirect(this.props.match.params.id) }}
                                >
                                    <div className='text-bbb'>
                                        <span className='edit-span-buy'>Mua</span>

                                    </div>



                                </div>

                            </div>

                        </div>

                    </div>
                    <div className='productInfor-down'>
                        <div className='productInfor-down-up'>
                            <span className='infor-product'>
                                {this.state.DetailInfor}
                            </span>
                        </div>

                    </div>
                </div>
                <div className='update'></div>
            </div>

        )
    }
}



const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        oneProduct: state.admin.oneProduct
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getProduct: (data) => dispatch(actions.getProduct(data)),
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductInfor));