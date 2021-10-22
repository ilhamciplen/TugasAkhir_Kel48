import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';

function getModalStyle() {
    return {
        top: "50%",
        left: "50%",
        transform: `translate(-50%, -50%)`,
    };
}

const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        position: 'absolute',
        width: 450,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

export default function SimpleModal(props) {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="contained" color="primary" onClick={handleOpen}>
                Daftar
            </Button>

            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleClose}
            >
                <div style={modalStyle} className={classes.paper}>
                    <div style={{backgroundColor:"#efdbff", padding:"10px", color:"#4b0082"}}>
                        <h2>Nama : {props.nama}</h2>
                        <h2>Alamat: {props.alamat}</h2>
                        <h2>Nomor Hp: {props.hp}</h2>
                    </div>
                    <div style={{display:"flex", justifyContent:"space-between"}}>
                        <h3>Anda Mendaftar di : </h3>
                        <h3 style={{fontSize:"20px"}}>{props.produk}</h3>
                    </div>
                </div>
            </Modal>
        </div>
    );
}