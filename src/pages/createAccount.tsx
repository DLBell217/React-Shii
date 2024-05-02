import * as React from "react";
import Card from "@mui/joy/Card";
import Typography from '@mui/joy/Typography';
import Input from "@mui/joy/Input";
import Button from '@mui/joy/Button';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import FormControl from '@mui/joy/FormControl';
import Checkbox from '@mui/joy/Checkbox';




export default function SignUp(){
    const [showPassword, setShowPassword] = React.useState(false);

  const passVis = () => {
    setShowPassword(!showPassword);
  };

    return(
        <div style={{
            flexDirection: "column",
            boxSizing: "border-box",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
            backgroundColor: "#121212",
            padding: "100px",
          }}>
            <Card variant ="solid" sx={{ maxWidth: 400,  
            display: "flex", 
            width: "60vw", 
            backgroundColor: "#121212",
            borderRadius: "8px",
            padding: "48px 28px 36px",
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.6)",
            zIndex: 5,
            overflow: "hidden"}}>
                    <div style={{alignSelf: "center",
                        display: "block",
                        width: "full"
                    }}>
                        <img src="https://app.boardx.us/images/logo_1.svg" alt="Boardx" />
                    </div>
                <FormControl style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                    width: "100%"}}>
                    <Typography level="h3" sx={theme => ({color: `#fff`, display: "block"})}>
                        Collaboration starts here 🚀
                    </Typography>

                    <Input variant="outlined" placeholder="Name" color="neutral" required sx={{ 
                        backgroundColor: "#121212",
                        color: "#EAEAEA", 
                        borderColor: "#636b74",
                        padding: "16.5px 14px",
                        '&:hover': {
                            borderColor: "#A8AFC9",
                            borderWidth: "2px"
                        }
                         }}/>

                    <Input type= "email" variant="outlined" placeholder="Email" color="neutral" required sx={{ 
                        backgroundColor: "#121212",
                        color: "#EAEAEA", 
                        padding: "16.5px 14px",
                        borderColor: "#636b74",
                        '&:hover': {
                            borderColor: "#A8AFC9",
                            borderWidth: "2px"
                        }
                         }}/>
                    <Input 
                        type="password" 
                        variant="outlined" 
                        placeholder="Password" 
                        color="neutral" 
                        required 
                        endDecorator={
                        <Button
                        onClick={passVis}
                        color="neutral"
                        size="sm"
                        sx={{
                            backgroundColor: '#0B0D0E'
                        }}
                        >
                        {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                        </Button>
                        }
                        sx={{ 
                            backgroundColor: "#0B0D0E",
                            color: "#EAEAEA",
                            borderColor: "#636b74",
                            padding: "16.5px 14px",
                            '&:hover': {
                                borderColor: "#A8AFC9",
                                borderWidth: "2px"
                            }
                        }}/>

                    <Checkbox 
                        label={
                            <React.Fragment>
                                I agree to
                                <Typography sx={{color:"#F21D6B"}}> Terms of Service </Typography>
                                and 
                                <Typography sx={{color:"#F21D6B"}}> Privacy Policy</Typography>.
                            </React.Fragment>
                        } 
                        variant="outlined" 
                        sx={{color: "#EAEAEA",}}/>

                    <Button variant="solid" sx={{
                        backgroundColor: "#F21D6B",
                        padding: "15px 0px",
                        '&:hover': {
                            backgroundColor: '#A5184B'
                        }
                    }}>
                        Create Account
                    </Button>

                    <Typography sx={theme => ({color: `#fff`, display: "block"})}>
                        Already have an account? 
                        <a style={{color: "#F21D6B",}}> Sign in instead</a>
                        </Typography>
                </FormControl>
            </Card>
        </div>
        
    );
}


