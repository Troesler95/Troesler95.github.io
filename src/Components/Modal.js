import React from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faTimes from '@fortawesome/fontawesome-free-solid/faTimes';

export default class Modal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: true
        };

        this.closeModal = this.closeModal.bind(this);
    }
    closeModal() {

    }
    render() {
        const projIms = require.context("../media/projectThumbnails", false, /\.jpe?g$/);
        var filename = this.props.projObj["full-filename"];

        if (this.state.isOpen) {
            return (
                <div id="Modal" onClick={this.closeModal}>
                    <div className="modal-cont">
                        <div className="modal-header">
                            <h1>{this.props.projObj["name"]}</h1>
                            <span><FontAwesomeIcon icon={faTimes} /*size="2x"*/ pull="right"/></span>
                        </div>
                        <div className="modal-content">
                            <img src={(filename === "") ? filename : projIms(`./${filename}`, true)}
                                 alt="Project Screenshot" />
                            <p>{this.props.projObj["description"]}</p>
                            <aside>
                                <h4>Required Skills:</h4>
                                <ul>
                                    {this.props.projObj["skills"].map((skill, i) => <li key={i}>skill</li>)}
                                </ul>
                            </aside>
                        </div>
                    </div>
                </div>
            );
        } else {
            return null;
        }
    }
}

Modal.propTypes = {
    projObj: PropTypes.object.isRequired
};