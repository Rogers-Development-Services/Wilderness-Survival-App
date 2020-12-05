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

function customPlantModal(props) {

    return (
        <Modal
            actions={[
                <Button flat modal="close" node="button" waves="green">Close</Button>
            ]}
            bottomSheet={false}
            fixedFooter={false}
            id="Modal-1"
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
                        <h2 style={{color: "black"}}className="modal-header">{props.modalName}</h2>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <img
                            alt={props.modalName}
                            src={props.modalPlantImage}
                            style={styles.imageStyle}>
                        </img>
                        <p>{props.modalInfo}</p>
                        <p>{props.modalUsefullness}</p>
                        <p>{props.modalCaution}</p>
                    </Col>
                </Row>
            </Row>
        </Modal>
    );
};

export default customPlantModal;