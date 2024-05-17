import React, { useRef } from 'react';
import AppBar from '../Components/AppBar';
import Start from '../Components/start';
import Paper from '@mui/material/Paper';
import { Divider, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
//form
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormHelperText from '@mui/material/FormHelperText';
//forward btn
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

//Alerts
import Swal from 'sweetalert2';

function Home() {
    const mainFormRef = useRef(null);

    const [province, setProvince] = React.useState('');
    const [area, setArea] = React.useState('');
    const [event, setEvent] = React.useState('');

    const handleProvince = (event) => {
    setProvince(event.target.value);
    };

    const handleEvent = (event) => {
        setEvent(event.target.value);
    };

    const handleArea = (event) => {
        setArea(event.target.value);
    };

    const handleNextClick = () => {
        if (!province && !event && !area) {
            Swal.fire({
                icon: 'error',
                title: 'Validation Error',
                text: 'Please fill in all required fields.',
            });
        } else if (!province && event && !area) {
            Swal.fire({
                icon: 'error',
                title: 'Validation Error',
                text: 'Please fill the Province and Area fields.',
            });
        } else if (!province && !event && area) {
            Swal.fire({
                icon: 'error',
                title: 'Validation Error',
                text: 'Please fill the Province and Event fields.',
            });
        } else if (!province && event && area) {
            Swal.fire({
                icon: 'error',
                title: 'Validation Error',
                text: 'Please fill the Province field.',
            });
        } else if (province && !event && area) {
            Swal.fire({
                icon: 'error',
                title: 'Validation Error',
                text: 'Please fill the Event field.',
            });
        } else if (province && event && !area) {
            Swal.fire({
                icon: 'error',
                title: 'Validation Error',
                text: 'Please fill the Area field.',
            });
        } else {
            // Your code for handling the next step
        }
        // Change button color
        document.querySelector('.swal2-confirm').style.backgroundColor = '#93AB4F';
    };
    
    

    return (
        <React.Fragment>
            <AppBar />
            <Start />
            <Paper  id="main-form"
                    ref={mainFormRef}
                sx={{
                    p: 2,
                    marginTop: '5%',
                    marginLeft: '5%',
                    marginRight: '5%',
                    marginBottom: '5%', 
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    bgcolor: '#FFFFFF',
                }}
            >

                <Divider sx={{ borderBottomWidth: '2px', borderBottomColor: 'black' }} />

                <FormControl sx={{ width: '50%', margin: 'auto', marginBottom: '2px' }}>
                    <FormLabel id="popi_act_label">
                        <Typography sx={{ marginTop: '5%' }} gutterBottom>
                            DISCLAIMER : Please note, the collection of personal information is protected by the POPI Act.
                        </Typography>
                    </FormLabel>
                    <RadioGroup
                        aria-labelledby="popi_act_label"
                        defaultValue=""
                        name="popi_act_agreement"
                    >
                        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                    </RadioGroup>
                </FormControl>

                <FormControl sx={{ width: '50%', margin: 'auto', marginBottom: '8px' }}>
                    <InputLabel id="Province-label">Province *</InputLabel>
                    <Select
                        labelId="Province-label"
                        id="Province-required"
                        value={province}
                        label="Province *"
                        onChange={handleProvince}
                        
                    >
                        <MenuItem value="">
                            <em>- Choose -</em>
                        </MenuItem>
                        <MenuItem value={'Eastern Cape'}>Eastern Cape</MenuItem>
                        <MenuItem value={'Free State'}>Free State</MenuItem>
                        <MenuItem value={'Gauteng'}>Gauteng</MenuItem>
                        <MenuItem value={'Kwazulu-Natal'}>Kwazulu-Natal</MenuItem>
                        <MenuItem value={'Limpopo'}>Limpopo</MenuItem>
                        <MenuItem value={'Mpumalanga'}>Mpumalanga</MenuItem>
                        <MenuItem value={'Northern Cape'}>Northern Cape</MenuItem>
                        <MenuItem value={'North West'}>North West</MenuItem>
                       <MenuItem value={'Western Cape'}>Western Cape</MenuItem>
                    </Select>
                    <FormHelperText>Required</FormHelperText>
                </FormControl>

                {/* Additional FormControl */}
                {/* Apply marginBottom: '2px' */}
                <FormControl sx={{ width: '50%', margin: 'auto', marginBottom: '4px' }}>
                    <InputLabel id="Event-label">Event Type *</InputLabel>
                    <Select
                        labelId="Event-label"
                        id="Event-required"
                        value={event}
                        label="Event Type *"
                        onChange={handleEvent}
                    >
                        <MenuItem value="">
                            <em>- Choose -</em>
                        </MenuItem>
                        <MenuItem value={'Retirement Member Campaign(RMC)'}>Retirement Member Campaign(RMC)</MenuItem>
                        <MenuItem value={'GEPF Day'}>GEPF Day</MenuItem>
                    </Select>
                    <FormHelperText>Required</FormHelperText>
                </FormControl>

                {/* Additional FormControl */}
                {/* Apply marginBottom: '2px' */}
                <FormControl sx={{ width: '50%', margin: 'auto', marginBottom: '4px' }}>
                    <InputLabel id="area-label">Area *</InputLabel>
                    <Select
                        labelId="area-label"
                        id="area-required"
                        value={area}
                        label="Area *"
                        onChange={handleArea}
                    >
                        <MenuItem value="">
                            <em>- Choose -</em>
                        </MenuItem>
                        <MenuItem value={'Springbok'}>Springbok</MenuItem>
                        <MenuItem value={'Upington'}>Upington</MenuItem>
                        
                    </Select>
                    <FormHelperText>Required</FormHelperText>
                </FormControl>
                <Link to={province && event && area ? "/form2" : ""}>
                    <Button variant="contained" 
                    sx={{
                    backgroundColor: '#93AB4F',
                    color: '#FFFFFF',
                    marginTop: '1rem',
                    marginBottom: '1rem','&:hover': {
                        backgroundColor: '#DF6E46',
                    }
                
                    
                    }}
                    endIcon={<ArrowForwardIcon />}
                    onClick={handleNextClick}
                    >
                        
                    Next
                    </Button>
                </Link>
            </Paper>

        </React.Fragment>
    );
}

export default Home;
