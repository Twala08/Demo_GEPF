import React from 'react';
import AppBar from '../Components/AppBar';
import Start from '../Components/start';
import Paper from '@mui/material/Paper';
import { Divider, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
//form
import ReactDOM from 'react-dom'
import TextField from '@mui/material/TextField';
import SignatureCanvas from 'react-signature-canvas'
//forward and back btns
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SendIcon from '@mui/icons-material/Send';
import { BorderAll } from '@mui/icons-material';

function Signature() {
    const [sign, setSign] = React.useState('');
    const [url, setUrl] = React.useState('');

   

    const handleSubmit = () => {
        setUrl(sign.getTrimmedCanvas().toDataURL());
    }

    return (
        <React.Fragment>
            <AppBar />
            <Start />
            <Paper
                id="Main-form"
                sx={{
                    p: 2,
                    marginTop: '5%',
                    marginLeft: '5%',
                    marginRight: '5%',
                    marginBottom: '5%', // Added margin bottom
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    bgcolor: '#FFFFFF',
                }}
            >

                <Typography sx={{ marginTop: '5%' }} gutterBottom variant="h5" component="h1">
                Ticket Section
                </Typography>
                <TextField id="outlined-basic" label="Ticket *" variant="outlined" sx={{ width: '50%', margin: 'auto', marginBottom: '6px', marginTop: '2%' }} />
                <div style={{ position: 'relative', marginTop: '1rem', width: '50%' }}>
                <div style={{ border: 'solid black 2px', width:'100%', height: 200, position: 'relative' }}>
                        <SignatureCanvas
                            penColor='green'
                            canvasProps={{ width: 500, height: 200, className: 'sigCanvas' }}
                            ref={data => setSign(data)}
                        />
                        <Button
                            size="small"
                            onClick={() => sign.clear()} // Clear the signature when clicked
                            style={{ position: 'absolute', bottom: 0, right: 0, color: 'grey' }} sx={{
                                '&:hover': {
                                    color: '#DF6E46', // Change hover color
                                }
                            }}
                        >
                            CLEAR
                        </Button>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem', width: '100%' }}>
                        <Link to="/form2" style={{ flex: 1 }}>
                            <Button
                                variant="contained"
                                sx={{
                                    backgroundColor: 'GREY',
                                    color: 'BLACK',
                                    width: '40%',
                                    marginRight: '5px',
                                    '&:hover': {
                                        backgroundColor: '#DF6E46',
                                    }
                                }}
                                startIcon={<ArrowBackIcon />}
                            >
                                Back
                            </Button>
                        </Link>
                        <Link style={{ flex: 1, textAlign: 'right' }}>
                            <Button
                                variant="contained"
                                sx={{
                                    backgroundColor: '#93AB4F',
                                    color: '#FFFFFF',
                                    width: '40%',
                                    marginLeft: '5px',
                                    '&:hover': {
                                        backgroundColor: '#DF6E46',
                                    }
                                }}
                                endIcon={<SendIcon />}
                                onClick={handleSubmit}
                            >
                                Submit
                            </Button>
                        </Link>
                    </div>
                </div>

            </Paper>

        </React.Fragment>
    )
}

export default Signature
