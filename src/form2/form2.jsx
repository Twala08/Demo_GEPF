import React from 'react';
import AppBar from '../Components/AppBar';
import Start from '../Components/start';
import Paper from '@mui/material/Paper';
import { Divider, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { Link, useHistory } from 'react-router-dom';
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
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
//forward and back btns
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { red } from '@mui/material/colors';

//Alerts
import Swal from 'sweetalert2';


function Form2() {
    const [title, setTitle] = React.useState('');
    const [member, setMember] = React.useState('');
    const [campaign, setCampaign] = React.useState('');
    const [registration, setRegistration] = React.useState('');
    

    const handleTitle = (event) => {
        setTitle(event.target.value);
    };

    const handleMember = (event) => {
        setMember(event.target.value);
    };

    const handleCampaign = (event) => {
        setCampaign(event.target.value);
    };

    const handleregistration = (event) => {
        setRegistration(event.target.value);
    };


    const required = <Typography sx={{color: red}}>*</Typography>

  return (
    <React.Fragment>
    <AppBar />
    <Start />
    <Paper id = "Main-form"
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

        <Divider sx={{ borderBottomWidth: '2px', borderBottomColor: 'black' }} />
                <Typography sx={{ marginTop: '5%' }} gutterBottom variant="h5" component="h1">
                    Page 2
                </Typography>

        <FormControl sx={{ width: '50%', margin: 'auto', marginBottom: '2%', marginTop: '2%' }}>
            <InputLabel id="Title-label" >Title *</InputLabel>
            <Select
                labelId="Title-label"
                id="Title-required"
                value={title}
                label="Title *"
                onChange={handleTitle}
                sx={{
                    '& .MuiSelect-root': {
                        borderColor: 'green',
                    }}}
            >
                <MenuItem value="">
                    <em>- Choose -</em>
                </MenuItem>
                <MenuItem value={'Mr'}>Mr</MenuItem>
                <MenuItem value={'Miss'}>Miss</MenuItem>
                <MenuItem value={'Mrs'}>Mrs</MenuItem>
                <MenuItem value={'Ms'}>Ms</MenuItem>
                <MenuItem value={'Dr'}>Dr</MenuItem>
                <MenuItem value={'Prof'}>Prof.</MenuItem>
            </Select>
            <FormHelperText>Required</FormHelperText>
        </FormControl>

        <TextField id="outlined-basic" label="Initials *" variant="outlined" sx={{ width: '50%', margin: 'auto', marginBottom: '2%',marginTop: '2%' }}/>
        <TextField id="outlined-basic" label="First Name *" variant="outlined" sx={{ width: '50%', margin: 'auto', marginBottom: '2%',marginTop: '2%' }}/>
        <TextField id="outlined-basic" label="Last Name *" variant="outlined" sx={{ width: '50%', margin: 'auto', marginBottom: '2%',marginTop: '2%' }}/>

        <FormControl sx={{ width: '50%', margin: 'auto', marginBottom: '2px' }}>
                    <FormLabel id="popi_act_label">
                        <Typography sx={{ marginTop: '5%' }} gutterBottom>
                        Do you consent to providing your ID/Pension Number ? *
                        </Typography>
                    </FormLabel>
                    <RadioGroup
                        aria-labelledby="popi_act_label"
                        defaultValue=""
                        name="popi_act_agreement"
                    >
                        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                        <FormControlLabel value="No" control={<Radio />} label="No" />
                    </RadioGroup>
        </FormControl>

        <TextField id="outlined-basic" label="ID Number *" variant="outlined" sx={{ width: '50%', margin: 'auto', marginBottom: '2%',marginTop: '2%' }}/>
        <TextField id="outlined-basic" label="Pension Number *" variant="outlined" sx={{ width: '50%', margin: 'auto', marginBottom: '2%x',marginTop: '2%' }}/>
        <TextField id="outlined-basic" label="Department *" variant="outlined" sx={{ width: '50%', margin: 'auto', marginBottom: '2%',marginTop: '2%' }}/>
        <FormControl sx={{ width: '50%', margin: 'auto', marginBottom: '4px' }}>
            <InputLabel id="Member-label">Member Type *</InputLabel>
            <Select
                labelId="Member-label"
                id="Member-required"
                value={member}
                label="Event Type *"
                onChange={handleMember}
            >
                <MenuItem value="">
                    <em>- Choose -</em>
                </MenuItem>
                <MenuItem value={10}>Active Member</MenuItem>
                <MenuItem value={20}>Pensioner</MenuItem>
                <MenuItem value={20}>Beneficiary</MenuItem>
                <MenuItem value={20}>Spouse</MenuItem>
                <MenuItem value={20}>HR Representative</MenuItem>
            </Select>
            <FormHelperText>Required</FormHelperText>
        </FormControl>
        <TextField id="outlined-basic" label="Phone number *" variant="outlined" sx={{ width: '50%', margin: 'auto', marginBottom: '6px', marginTop: '2%' }}/>
        <TextField id="outlined-basic" label="Email Address *" variant="outlined" sx={{ width: '50%', margin: 'auto', marginBottom: '6px', marginTop: '2%'}}/>
        <TextField sx={{ width: '50%', margin: 'auto', marginBottom: '6px', marginTop: '2%'}}
          id="outlined-multiline-static"
          label="Physical Address *"
          multiline
          rows={4}
        />

        <FormControl sx={{ width: '50%', margin: 'auto', marginBottom: '2px' }}>
                    <FormLabel id="popi_act_label">
                        <Typography sx={{ marginTop: '5%' }} gutterBottom>
                        What do you need help with? *
                        </Typography>
                    </FormLabel>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox  />} value={'Overview of your Benefits'} label="Overview of your Benefits" />
                        <FormControlLabel control={<Checkbox  />} value={'Resignation'} label="Resignation" />
                        <FormControlLabel control={<Checkbox  />} value={'Normal Retirement'} label="Normal Retirement" />
                        <FormControlLabel control={<Checkbox  />} value={'Spounse Pension'} label="Spounse Pension" />
                        <FormControlLabel control={<Checkbox  />} value={'Childs Pension'} label="Child's Pension" />
                        <FormControlLabel control={<Checkbox  />} value={'Other'} label="Other" />
                        
                    </FormGroup>
                    
        </FormControl>

        <FormControl sx={{ width: '50%', margin: 'auto', marginBottom: '2%', marginTop: '2%' }}>
            <InputLabel id="area-label">How did you hear about the campaign? *</InputLabel>
            <Select
                labelId="campaign-label"
                id="campaign-required"
                value={campaign}
                label="campaign *"
                onChange={handleCampaign}
            >
                <MenuItem value="">
                    <em>- Choose -</em>
                </MenuItem>
                <MenuItem value={'Social Media'}>Social Media</MenuItem>
                <MenuItem value={'SMS'}>SMS</MenuItem>
                <MenuItem value={'Friend/colleague'}>Friend/colleague</MenuItem>
                <MenuItem value={'Radio'}>Radio</MenuItem>
                <MenuItem value={'HR/Department'}>HR/Department</MenuItem>
                <MenuItem value={'GEPF website'}>GEPF website</MenuItem>
                <MenuItem value={'Other'}>Other</MenuItem>
            </Select>
            <FormHelperText>Required</FormHelperText>
        </FormControl>
        
        <FormControl sx={{ width: '50%', margin: 'auto',marginBottom: '2%', marginTop: '2%' }}>
            <InputLabel id="area-label">registration Type *</InputLabel>
            <Select
                labelId="registration-label"
                id="registration-required"
                value={registration}
                label="registration *"
                onChange={handleregistration}
            >
                <MenuItem value="">
                    <em>- Choose -</em>
                </MenuItem>
                <MenuItem value={'Pre-Registration'}>Pre-Registration</MenuItem>
                <MenuItem value={'On-site Registration'}>On-site Registration</MenuItem>
            </Select>
            <FormHelperText>Required</FormHelperText>
        </FormControl>
        <div style={{ width: '50%', margin: 'auto', marginTop: '2rem', display: 'flex' }}>
    <Link to="/" style={{ flex: 1 }}>
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
    <Link to={registration === 'Pre-Registration' ? '/signature' : '/Site_reg'} style={{ flex: 1,textAlign: 'right' }}>
        <Button
            variant="contained"
            sx={{
                backgroundColor: '#93AB4F',
                color: '#FFFFFF',
                width: '40%',
                marginLeft: 'auto', // Pushes the button to the edge
                '&:hover': {
                    backgroundColor: '#DF6E46',
                }
            }}
            endIcon={<ArrowForwardIcon />}
        
        >
            Next
        </Button>
    </Link>
</div>


    </Paper>

</React.Fragment>
);
}

export default Form2