import React, { useState } from 'react';
import AppBar from '../Components/AppBar';
import Start from '../Components/start';
import Paper from '@mui/material/Paper';
import { Divider, Typography } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { Link, useHistory } from 'react-router-dom';

//form
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
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

// Customizing the theme
const theme = createTheme({
    components: {
        MuiInputBase: {
            styleOverrides: {
                root: {
                    '&.Mui-focused': {
                        borderColor: '#93AB4F',
                    },
                },
            },
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    '&.Mui-focused': {
                        color: '#93AB4F',
                    },
                },
            },
        },
        MuiFormLabel: {
            styleOverrides: {
                root: {
                    '&.Mui-focused': {
                        color: '#93AB4F',
                    },
                },
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#93AB4F',
                    },
                },
            },
        },
        MuiRadio: {
            styleOverrides: {
                root: {
                    color: '#93AB4F',
                    '&.Mui-checked': {
                        color: '#93AB4F',
                    },
                },
            },
        },
        MuiCheckbox: {
            styleOverrides: {
                root: {
                    color: '#93AB4F',
                    '&.Mui-checked': {
                        color: '#93AB4F',
                    },
                },
            },
        },
    },
});

function Form2() {
    const [title, setTitle] = useState('');
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastname] = useState('');
    const [initials, setInitials] = useState('');
    const [member, setMember] = useState('');
    const [campaign, setCampaign] = useState('');
    const [registration, setRegistration] = useState('');
    const [idNumber, setIdNumber] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [physicalAddress, setPhysicalAddress] = useState('');
    const [checkedBoxes, setCheckedBoxes] = useState([]);
    const [isRadioClicked, setIsRadioClicked] = useState('');

    const handleTitle = (event) => {
        setTitle(event.target.value);
    };
    const handleFirstName = (event) => {
        setFirstName(event.target.value);
    };
    const handleLastname = (event) => {
        setLastname(event.target.value);
    };
    const handleInitials = (event) => {
        setInitials(event.target.value);
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

    const handleIdNumber = (event) => {
        setIdNumber(event.target.value);
    };

    const handlePhoneNumber = (event) => {
        setPhoneNumber(event.target.value);
    };

    const handleEmail = (event) => {
        setEmail(event.target.value);
    };

    const handlePhysicalAddress = (event) => {
        setPhysicalAddress(event.target.value);
    };

    const handleCheckboxChange = (event) => {
        const value = event.target.value;
        const isChecked = event.target.checked;

        if (isChecked) {
            setCheckedBoxes((prevChecked) => [...prevChecked, value]);
        } else {
            setCheckedBoxes((prevChecked) =>
                prevChecked.filter((item) => item !== value)
            );
        }
    };

    const handleRadioChange = (event) => {
        setIsRadioClicked(event.target.value);
    };

    const handleNextClick = () => {
        // Check if all fields are filled
        if (
            !title ||
            !firstname ||
            !lastname ||
            !initials ||
            !idNumber ||
            !phoneNumber ||
            !email ||
            !physicalAddress ||
            !checkedBoxes.length ||
            !campaign ||
            !registration ||
            !isRadioClicked
        ) {
            let errorMessage = 'Please fill in all required fields:';
            if (!title) errorMessage += '\n- Title';
            if (!firstname) errorMessage += '\n- Firstname';
            if (!lastname) errorMessage += '\n- Lastname';
            if (!initials) errorMessage += '\n- Initials';
            if (!idNumber) errorMessage += '\n- ID Number';
            if (!phoneNumber) errorMessage += '\n- Phone Number';
            if (!email) errorMessage += '\n- Email Address';
            if (!physicalAddress) errorMessage += '\n- Physical Address';
            if (!checkedBoxes.length) errorMessage += '\n- Help Options';
            if (!campaign) errorMessage += '\n- Campaign';
            if (!registration) errorMessage += '\n- Registration Type';
            if (!isRadioClicked)
                errorMessage += '\n- Consent to Providing ID/Pension Number';

            Swal.fire({
                icon: 'error',
                title: 'Validation Error',
                text: errorMessage,
            });
        } else {
            // Check specific validation rules
            const idNumberRegex = /^\d{13}$/;
            const phoneNumberRegex = /^\d{10}$/;
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!idNumber.match(idNumberRegex)) {
                Swal.fire({
                    icon: 'error',
                    title: 'Validation Error',
                    text: 'ID Number must be 13 numbers.',
                });
                return;
            }

            if (!phoneNumber.match(phoneNumberRegex)) {
                Swal.fire({
                    icon: 'error',
                    title: 'Validation Error',
                    text: 'Phone Number must be 10 numbers.',
                });
                return;
            }

            if (!email.match(emailRegex)) {
                Swal.fire({
                    icon: 'error',
                    title: 'Validation Error',
                    text: 'Invalid Email Address format.',
                });
                return;
            }

            // // If all validation passes, proceed to the next page
            // history.push(
            //     registration === 'Pre-Registration' ? '/signature' : '/Site_reg'
            // );
        }
    };

    const required = <Typography sx={{ color: red }}>*</Typography>

    return (
        <ThemeProvider theme={theme}>
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
                    <Divider sx={{ borderBottomWidth: '2px', borderBottomColor: 'black' }} />
                    <Typography sx={{ marginTop: '5%' }} gutterBottom variant="h5" component="h1">
                        Page 2
                    </Typography>

                    <FormControl sx={{ width: '50%', margin: 'auto', marginBottom: '2%', marginTop: '2%' }}>
                        <InputLabel id="Title-label">Title *</InputLabel>
                        <Select
                            labelId="Title-label"
                            id="Title-required"
                            value={title}
                            label="Title *"
                            onChange={handleTitle}
                            sx={{
                                '& .MuiSelect-root': {
                                    borderColor: 'green',
                                },
                            }}
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

                    <TextField
                        id="outlined-basic"
                        label="Initials *"
                        variant="outlined"
                        sx={{ width: '50%', margin: 'auto', marginBottom: '2%', marginTop: '2%' }}
                        helperText="Required"
                        onChange={handleInitials}
                    />
                    <TextField
                        id="outlined-basic"
                        label="First Name *"
                        variant="outlined"
                        sx={{ width: '50%', margin: 'auto', marginBottom: '2%', marginTop: '2%' }}
                        helperText="Required"
                        onChange={handleFirstName}
                    />
                    <TextField
                        id="outlined-basic"
                        label="Last Name *"
                        variant="outlined"
                        sx={{ width: '50%', margin: 'auto', marginBottom: '2%', marginTop: '2%' }}
                        helperText="Required"
                        onChange={handleLastname}
                    />

                    <FormControl sx={{ width: '50%', margin: 'auto', marginBottom: '2px' }}>
                        <FormLabel id="popi_act_label">
                            <Typography sx={{ marginTop: '5%' }} gutterBottom>
                                Do you consent to providing your ID/Pension Number ? *
                            </Typography>
                        </FormLabel>
                        <RadioGroup
                            aria-labelledby="popi_act_label"
                            value={isRadioClicked}
                            name="popi_act_agreement"
                            onChange={handleRadioChange}
                        >
                            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                            <FormControlLabel value="No" control={<Radio />} label="No" />
                            <FormHelperText>Required</FormHelperText>
                        </RadioGroup>
                    </FormControl>

                    <TextField
                        id="outlined-basic"
                        label="ID Number *"
                        variant="outlined"
                        sx={{ width: '50%', margin: 'auto', marginBottom: '2%', marginTop: '2%' }}
                        helperText="Required"
                        onChange={handleIdNumber}
                    />

                    <TextField
                        id="outlined-basic"
                        label="Pension Number"
                        variant="outlined"
                        sx={{ width: '50%', margin: 'auto', marginBottom: '2%', marginTop: '2%' }}
                    />

                    <TextField
                        id="outlined-basic"
                        label="Department *"
                        variant="outlined"
                        sx={{ width: '50%', margin: 'auto', marginBottom: '2%', marginTop: '2%' }}
                        helperText="Required"
                    />

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
                            <MenuItem value={'Active Member'}>Active Member</MenuItem>
                            <MenuItem value={'Pensioner'}>Pensioner</MenuItem>
                            <MenuItem value={'Beneficiary'}>Beneficiary</MenuItem>
                            <MenuItem value={'Spouse'}>Spouse</MenuItem>
                            <MenuItem value={'HR Representative'}>HR Representative</MenuItem>
                        </Select>
                        <FormHelperText>Required</FormHelperText>
                    </FormControl>

                    <TextField
                        id="outlined-basic"
                        label="Phone number *"
                        variant="outlined"
                        sx={{ width: '50%', margin: 'auto', marginBottom: '6px', marginTop: '2%' }}
                        helperText="Required"
                        onChange={handlePhoneNumber}
                    />

                    <TextField
                        id="outlined-basic"
                        label="Email Address *"
                        variant="outlined"
                        sx={{ width: '50%', margin: 'auto', marginBottom: '6px', marginTop: '2%' }}
                        helperText="Required"
                        onChange={handleEmail}
                    />

                    <TextField
                        sx={{ width: '50%', margin: 'auto', marginBottom: '6px', marginTop: '2%' }}
                        helperText="Required"
                        id="outlined-multiline-static"
                        label="Physical Address *"
                        multiline
                        rows={4}
                        onChange={handlePhysicalAddress}
                    />

                    <FormControl sx={{ width: '50%', margin: 'auto', marginBottom: '2px' }}>
                        <FormLabel id="popi_act_label">
                            <Typography sx={{ marginTop: '5%' }} gutterBottom>
                                What do you need help with? *
                            </Typography>
                        </FormLabel>
                        <FormGroup>
                            <FormControlLabel
                                control={<Checkbox />}
                                value={'Overview of your Benefits'}
                                label="Overview of your Benefits"
                                onChange={handleCheckboxChange}
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                value={'Resignation'}
                                label="Resignation"
                                onChange={handleCheckboxChange}
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                value={'Normal Retirement'}
                                label="Normal Retirement"
                                onChange={handleCheckboxChange}
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                value={'Spouse Pension'}
                                label="Spouse Pension"
                                onChange={handleCheckboxChange}
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                value={'Childs Pension'}
                                label="Child's Pension"
                                onChange={handleCheckboxChange}
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                value={'Other'}
                                label="Other"
                                onChange={handleCheckboxChange}
                            />
                        </FormGroup>
                    </FormControl>

                    <FormControl sx={{ width: '50%', margin: 'auto', marginBottom: '2%', marginTop: '2%' }}>
                        <InputLabel id="area-label">How did you hear about the campaign? *</InputLabel>
                        <Select
                            labelId="campaign-label"
                            id="campaign-required"
                            value={campaign}
                            label="Campaign *"
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

                    <FormControl sx={{ width: '50%', margin: 'auto', marginBottom: '2%', marginTop: '2%' }}>
                        <InputLabel id="area-label">Registration Type *</InputLabel>
                        <Select
                            labelId="registration-label"
                            id="registration-required"
                            value={registration}
                            label="Registration *"
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
                            onClick={handleNextClick}
                        >
                            Next
                        </Button>
                    </div>

                </Paper>
            </React.Fragment>
        </ThemeProvider>
    );
}

export default Form2;

