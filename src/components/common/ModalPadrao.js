import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

export default function ModalPadrao({ onClose, titulo, children }) {
    const [errorMessage, setErrorMessage] = useState('');

    const handleModalClose = () => {
        onClose(null);
        setErrorMessage("TESTE");
    };

    return (
        <div >
            <Modal open={true} onClose={handleModalClose} >
                <div style={styles.divPricipal}>
                    <div style={styles.flexRow}>
                        <span style={styles.title}>{titulo}</span>
                        <button className="waves-effect waves-lights btn red dark-4"
                            onClick={handleModalClose}>X</button>
                    </div>

                    {children}

                    <div style={styles.flexRow}>
                        <button className="waves-effect waves-light btn"
                            disabled={errorMessage.trim() !== ''}> Salvar</button>
                        <span style={styles.errorMessage}>{errorMessage}</span>
                    </div>

                </div>
            </Modal>
        </div>
    )
}

const styles = makeStyles((theme) => ({
    divPricipal: {
        width: "500px",
        background: "white",
        border: "1px solid #ccc",
        transition: "1.1s ease- out",
        boxShadow: "-2rem 2rem 2rem rgba(black, 0.2)",
        filter: "blur(0)",
        transform: "scale(1)",
        opacity: "1",
        visibility: "visible",
    },

    flexRow: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '40px',
    },

    title: {
        fontSize: '1.3rem',
        fontWeight: 'bold',
    },

    errorMessage: {
        color: 'red',
        fontWeight: 'bold',
    },
}));


