import React, { Component } from 'react'
import { Col, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { likedImage, dislikedImage } from '../../actions';


class ImagenItem extends Component {

    constructor(props) {
        super(props)
        this.state = {
            disLikedButton: false
        }
    }

    handleLiked = (params) => {
        this.props.likedImage(params)
        this.setState({ disLikedButton: true });
    }

    handleDislike = (params) => {
        this.props.dislikedImage(params);
        this.setState({ disLikedButton: false });
    }


    render() {
        const { item, disableLikeButton, seller } = this.props;
        const { disLikedButton } = this.state;
        const customDisable = (disLikedButton && disableLikeButton) ? false : true;
        return (
            <Col sm={4} className={"imageContainer text-center"}>
                <Col className={"titleImage mb-1"} >
                    {seller.name}
                </Col>
                <Col sm={12} className={"imageBody mb-1"} style={{ backgroundImage: `url(${item.image.thumbnailLink})` }} />

                <Col sm={12} className={'imageFooter'}>
                    <Button disabled={customDisable} className={"mr-2"} title={'No me gusta'} variant="primary" onClick={() => {
                        this.handleDislike({ sellerId: seller.id, pluss:false })
                    }}>
                        <FontAwesomeIcon icon={faThumbsDown} />
                    </Button>

                    <Button disabled={disableLikeButton} title={'Me gusta'} variant="primary" onClick={() => {
                        this.handleLiked({ sellerId: seller.id, pluss:true })
                    }}>
                        <FontAwesomeIcon icon={faThumbsUp} />
                    </Button>
                </Col>
            </Col>
        )
    }
}

const mapStateToProps = ({ imagesRedux }) => {
    const { imagesSearch, disableLikeButton } = imagesRedux;

    return { imagesSearch, disableLikeButton }
}

export default connect(mapStateToProps, { likedImage, dislikedImage })(ImagenItem);   