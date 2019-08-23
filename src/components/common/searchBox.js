import React, { Component, Fragment } from 'react';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import InputAutocomplete from 'components/form/inputAutocomplete';
import { withTranslation } from 'react-i18next';
import { searchProducts } from '../../actions';
import { connect } from 'react-redux';
import InputText from 'components/form/inputText';


class SearchBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            descProd: '',
            codProd: ''
        }
    }

    handleSearch = () => {
        const { descProd, codProd } = this.state;
        this.props.searchProducts({ desc_prod: descProd, cod_prod: codProd });
    }

    handleSelect = (selected) => {
        console.log(selected, 'cuando seleccion')
    }

    render() {
        const { productOptions, t } = this.props;
        const auoptions = [];

        const inputConfig = [
            { idcampo: 'desc_prod', label: false, visible: 1, requerido: 0, editable: 1 },
            { idcampo: 'cod_prod', label: false, visible: 1, requerido: 0, editable: 1 },
        ]
        return (
            <Fragment>
                <InputText
                    inputFormCol={{ sm: 6 }}
                    label={false}
                    fields={inputConfig}
                    inputId={'desc_prod'}
                    name={'desc_prod'}
                    styles={{ width: '100%' }}
                    placeholder={t('searchBox.form.insert_product')}
                    colLabel={"col-sm-2"}
                    colInput={"col-sm-10"}
                    handleSearch={this.handleSearch}
                    disable={false}
                    value={this.state.descProd}
                    onChange={(data) => {
                        this.setState({ descProd: data.target.value })
                    }}
                />
                <InputText
                    inputFormCol={{ sm: 3 }}
                    label={false}
                    fields={inputConfig}
                    placeholder={t('searchBox.form.insert_code')}
                    inputId={'cod_prod'}
                    name={'cod_prod'}
                    styles={{ width: '100%' }}
                    colLabel={"col-sm-2"}
                    colInput={"col-sm-10"}
                    disable={false}
                    value={this.state.codProd}
                    onChange={(data) => {
                        this.setState({ codProd: data.target.value })
                    }}
                />
                <Col sm={1}>
                    <input type="checkbox" className={"form-check-input"} value="1" /> <label className={"form-check-label pt-1"}>Con Stock</label>
                </Col>
                <Col sm={1} className={"text-left"}>
                    <a onClick={this.handleSearch}>
                        <FontAwesomeIcon icon={faSearch} />
                    </a>
                </Col>
            </Fragment>
        )
    }
}

const mapStateToProps = ({ product }) => {
    const { search } = product
    return { search }
}



export default connect(mapStateToProps, { searchProducts })(withTranslation()(SearchBox));   