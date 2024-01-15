import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../css/EditProduct/EditProduct.css';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'

import * as actions from '../store/actions'
import { CRUD_ACTIONS } from '../constant/constant';
import AllProduct from './AllProduct';
import CommonUtil from '../commonUtil/CommonUtil';
import { Buffer } from 'buffer';

class EditAllUser extends Component {
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
            ImageUrl: '',
            isOpen: false,

            action: 'CREATE'

        }
    }
    async componentDidMount() {
        await this.props.getAllProduct();
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
            this.props.createAllProduct({
                email: this.state.email,
                KeyProduct: this.state.KeyProduct,
                NameProduct: this.state.NameProduct,
                Screen: this.state.Screen,
                OperatingSystem: this.state.OperatingSystem,
                RAM: this.state.RAM,
                Capacity: this.state.Capacity,
                Battery: this.state.Battery,
                avatar: this.state.avatar,
                Price: this.state.Price,
                DetailInfor: this.state.DetailInfor


            })
            this.setState({
                email: '',
                KeyProduct: '',
                NameProduct: '',
                Screen: '',
                OperatingSystem: '',
                RAM: '',
                Capacity: '',
                Battery: '',
                avatar: '',
                Price: '',
                ImageUrl: '',
                DetailInfor: ''

            })
        }

        if (this.state.action === 'EDIT') {

            this.props.EditProduct({
                id: this.state.id,
                KeyProduct: this.state.KeyProduct,
                NameProduct: this.state.NameProduct,
                Screen: this.state.Screen,
                OperatingSystem: this.state.OperatingSystem,
                RAM: this.state.RAM,
                Capacity: this.state.Capacity,
                Battery: this.state.Battery,
                avatar: this.state.avatar,
                Price: this.state.Price,
                avatar: this.state.avatar,
                DetailInfor: this.state.DetailInfor,
            })
        }
        this.setState({
            id: '',
            KeyProduct: '',
            NameProduct: '',
            Screen: '',
            OperatingSystem: '',
            RAM: '',
            Capacity: '',
            Battery: '',
            avatar: '',
            Price: '',
            ImageUrl: '',
            DetailInfor: '',

            action: 'CREATE'
        })



    }

    handleEditUserFromAllUser = (data) => {
        let imageBase64 = '';
        if (data.Image) {
            imageBase64 = new Buffer(data.Image, 'base64').toString('binary')

        }
        console.log('imageBase64', imageBase64)
        this.setState({
            id: data.id,
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


            action: 'EDIT'
        })
        console.log(' handleEditUserFromAllUser', data)
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
        let { KeyProduct, NameProduct, Screen, OperatingSystem
            , RAM, Capacity, Battery, avatar, Price, DetailInfor, action } = this.state;
        console.log('this.state.editProduct', this.state)
        console.log('this.state.avatarcdafdfasdfa', avatar)


        return (
            <>
                <div className='edit'>
                    <div className='edit-header'>
                        <div>Edit Product infor</div>
                        <div>
                            <button
                                onClick={() => this.handleLogout()}
                            > Logout</button>
                        </div>

                    </div>
                    <div className='edit-all-body'>
                        <div className='edit-body'>
                            <div className='all'>
                                <label>KeyProduct:</label>
                                <input type="text"
                                    value={KeyProduct}
                                    onChange={(event) => { this.onChangeInput(event, 'KeyProduct') }}
                                />
                            </div >
                            <div className='all'>
                                <label>NameProduct:</label>
                                <input type="text"
                                    value={NameProduct}
                                    onChange={(event) => { this.onChangeInput(event, 'NameProduct') }}
                                />
                            </div>
                            <div className='all'>
                                <label>Screen:</label>
                                <input type="text"
                                    value={Screen}
                                    onChange={(event) => { this.onChangeInput(event, 'Screen') }}
                                />
                            </div>
                            <div className='all'>
                                <label>OperatingSystem</label>
                                <input type="text"
                                    value={OperatingSystem}
                                    onChange={(event) => { this.onChangeInput(event, 'OperatingSystem') }}
                                /></div>
                            <div className='all'>
                                <label>RAM:</label>
                                <input type="text"
                                    value={RAM}
                                    onChange={(event) => { this.onChangeInput(event, 'RAM') }}
                                />
                            </div>
                            <div className='all'>
                                <label>Capacity:</label>

                                <input type="text"
                                    value={Capacity}
                                    onChange={(event) => { this.onChangeInput(event, 'Capacity') }}
                                />
                            </div>
                            <div className='all'>
                                <label>Battery:</label>
                                <input type="text"
                                    value={Battery}
                                    onChange={(event) => { this.onChangeInput(event, 'Battery') }}
                                />
                            </div>

                            <div className='all'>
                                <label>Price:</label>
                                <input type="text"
                                    value={Price}
                                    onChange={(event) => { this.onChangeInput(event, 'Price') }}
                                />

                            </div>
                            <div className='all'>
                                <label>DetailInfor:</label>
                                <input type="text"
                                    value={DetailInfor}
                                    onChange={(event) => { this.onChangeInput(event, 'DetailInfor') }}
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
                                {CRUD_ACTIONS.CREATE === action ? 'Add' : 'Edit'}
                            </button>

                        </div>
                        <div>
                            <AllProduct handle={this.handleEditUserFromAllUser} />
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
                </div>

            </>
        )
    }
}



const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        errMessage: state.user.errMessage,
        createProduct: state.admin.createProduct
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getAllProduct: () => dispatch(actions.getAllProduct()),
        createAllProduct: (data) => dispatch(actions.createAllProduct(data)),
        LoginOutUser: () => dispatch(actions.LoginOutUser()),
        EditProduct: (data) => dispatch(actions.EditProduct(data)),

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditAllUser);
