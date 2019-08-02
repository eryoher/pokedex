import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import styles from "./inputButton.module.css";
import { themr } from "react-css-themr";

class InputButton extends Component {

  render() {
    const { theme, backButton, nextButton, valueButton, urlForm, search } = this.props;

    let labelButton =
      nextButton || backButton ? (
        nextButton ? (
          <FontAwesomeIcon icon={faAngleRight} />
        ) : backButton ? (
          <FontAwesomeIcon icon={faAngleLeft} />
        ) : (
              "Button"
            )
      ) : (
          valueButton
        );

    return (
      <Link className={theme.linkClass} to={
        {
          pathname: urlForm,
          search: search,
        }
      }>
        <div className={`btn btn-primary ${theme.formButton}`}>
          {labelButton}
        </div>
      </Link>
    );
  }
}

export default themr("InputButtonStyles", styles)(InputButton);
