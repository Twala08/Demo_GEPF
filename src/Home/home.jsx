import React, { useRef } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppBar from '../Components/AppBar';
import Start from '../Components/start';
import Paper from '@mui/material/Paper';
import { Divider, Typography } from '@mui/material';
import Button from '@mui/material/Button';
// Form components
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormHelperText from '@mui/material/FormHelperText';
// Forward button icon
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// Alerts
import Swal from 'sweetalert2';
// Router
import { Link } from 'react-router-dom';

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
  },
});

function Home() {
  const mainFormRef = useRef(null);

  const [popiAct, setPOPI] = React.useState('');
  const [province, setProvince] = React.useState('');
  const [area, setArea] = React.useState('');
  const [event, setEvent] = React.useState('');

  const handlePopi = (event) => {
    setPOPI(event.target.value);
  };
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
    // Check if the radio button is clicked
    const isRadioClicked = document.querySelector('input[type="radio"]:checked');

    // Check if all fields are filled
    if (!province || !event || !area || !isRadioClicked) {
      let errorMessage = "Please fill in all required fields:";
      if (!province) errorMessage += "\n- Province";
      if (!event) errorMessage += "\n- Event Type";
      if (!area) errorMessage += "\n- Area";
      if (!isRadioClicked) errorMessage += "\n- Consent to POPI Act";

      Swal.fire({
        icon: 'error',
        title: 'Validation Error',
        text: errorMessage,
      });
    } else {
      // Navigate to the next page
      window.location.href = "/form2";
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <AppBar />
        <Start />
        <Paper
          id="main-form"
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
              <Typography sx={{ marginTop: '5%', color: 'primary' }} gutterBottom>
                DISCLAIMER : Please note, the collection of personal information is protected by the POPI Act.
              </Typography>
            </FormLabel>
            <RadioGroup aria-labelledby="popi_act_label" defaultValue="" name="popi_act_agreement">
              <FormControlLabel labelId="PoPi-label"
                                id="PoPi-required"
                                value={popiAct}
                                control={<Radio />} 
                                label="Yes" 
                                onChange={handlePopi}
                                />
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
          <Link to={province && event && area && popiAct ? "/form2" : ""}>
            <Button
              variant="contained"

            

              sx={{
                backgroundColor: '#93AB4F',
                color: '#FFFFFF',
                marginTop: '1rem',
                marginBottom: '1rem',
                '&:hover': {
                  backgroundColor: '#DF6E46',
                },
              }}
              endIcon={<ArrowForwardIcon />}
              onClick={handleNextClick}
            >
              Next
            </Button>
          </Link>
        </Paper>
      </React.Fragment>
    </ThemeProvider>
  );
}

export default Home;
