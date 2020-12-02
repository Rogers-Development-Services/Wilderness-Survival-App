import React from "react";
import { Modal, Row, Col, Button } from 'react-materialize';

const styles = {
    modalStyle: {
        display: "flex",
        justifyContent: "center"
    },
    rowStyle: {
        display: "flex",
        justifyContent: "center"
    },
    imageStyle: {
        maxWidth: "100%",
        maxHeight: "100%",
        objectFit: "contain",
    }
};

function customAnimalModal(props) {

    return (
        <Modal
            actions={[
                <Button flat modal="close" node="button" waves="green">Close</Button>
            ]}
            bottomSheet={false}
            fixedFooter={false}
            id="Modal-0"
            open={false}
            options={{
                dismissible: true,
                endingTop: '10%',
                inDuration: 250,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                opacity: 0.5,
                outDuration: 250,
                preventScrolling: true,
                startingTop: '4%'
            }}
        >
            <Row className="container">
                <Row style={styles.rowStyle}>
                    <Col>
                        <h2>{props.modalAltText}</h2>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <img
                            alt={props.modalAltText}
                            src={props.modalImage}
                            style={styles.imageStyle}></img>
                    </Col>
                </Row>

                <Row >
                    <Col>
                        <p>{props.modalDescription}</p>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <img
                            alt="Location of White Tailed Deer"
                            src={props.modalMap}
                            style={styles.imageStyle}></img>
                    </Col>
                </Row>

                <Row style={styles.rowStyle}>
                    <Col>
                        <img
                            alt="Footprint of White Tailed Deer"
                            src={props.modalFootprint}
                            style={styles.imageStyle}></img>
                    </Col>
                </Row>

                <Row style={styles.rowStyle}>
                    <Col>
                        <img
                            alt="Endangered Status of White Tailed Deer"
                            src={props.modalStatus}
                            style={styles.imageStyle}></img>
                    </Col>
                </Row>
            </Row>
        </Modal>
    );
};

export default customAnimalModal;