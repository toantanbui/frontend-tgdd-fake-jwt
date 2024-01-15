import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../css/HomePage/HomeContent/HomeContent.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as actions from '../../store/actions';
import { Buffer } from 'buffer';

class HomeContentLaptop extends Component {
    constructor(props) {
        super(props)
        this.state = {
            arrProduct: []
        }
    }
    async componentDidMount() {
        this.props.getAllProduct()


    }
    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.allProduct !== this.props.allProduct) {
            this.setState({
                arrProduct: this.props.allProduct
            })
        }

    }

    render() {
        let arrProduct = this.state.arrProduct;
        console.log('arrProduct', arrProduct)
        const settings = {

            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 3,


        };
        return (

            <div className='slick'>

                <Slider {...settings}>
                    {arrProduct && arrProduct.length > 0 &&
                        arrProduct.map((item, index) => {
                            let imageBase64 = '';
                            if (item.Image) {
                                imageBase64 = new Buffer(item.Image, 'base64').toString('binary')
                            }
                            return (
                                <div className='slick-child'>
                                    <div className='image'>
                                        <div className='image-image'
                                            style={{ backgroundImage: `url(${imageBase64})` }}
                                        >

                                        </div>

                                    </div>
                                    <div className='name'>
                                        <span>
                                            {item.NameProduct}
                                        </span>
                                    </div>
                                    <div className='price'>
                                        <span>
                                            {item.Price}
                                        </span>

                                    </div>
                                </div>
                            )



                        })
                    }

                </Slider>
            </div>




        )
    }
}



const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        allProduct: state.admin.allProduct
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getAllProduct: () => dispatch(actions.getAllProduct()),

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContentLaptop);