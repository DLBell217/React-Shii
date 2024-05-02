import * as React from "react";
import Card from "@mui/joy/Card";
import Typography from '@mui/joy/Typography';
import Input from "@mui/joy/Input";
import Button from '@mui/joy/Button';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import FormControl from '@mui/joy/FormControl';



export default function SignIn(){
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
                    <Typography level="h4" sx={theme => ({color: `#fff`, display: "block"})}>
                        Welcome to BoardX!
                    </Typography>
                    <Input type= "email" variant="outlined" placeholder="Email" color="neutral" required sx={{ 
                        backgroundColor: "#0B0D0E",
                        color: "#9FA6AD", 
                        borderColor: "#636b74"
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
                            display: 'flex',
                            alignItems: 'center', // Center vertically
                            justifyContent: 'center', // Center horizontally
                            backgroundColor: '#0B0D0E'
                        }}
                        >
                        {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                        </Button>
      }
                        sx={{ 
                            backgroundColor: "#0B0D0E",
                            color: "#9FA6AD",
                            borderColor: "#636b74"
                        }}/>
                    <Button variant="solid" sx={{
                        backgroundColor: "#F21D6B",
                        '&:hover': {
                            backgroundColor: '#A5184B'}
                    }}>
                        Log In
                    </Button>
                    <Button variant="plain" sx={{
                        color: "#F098B9", 
                        '&:hover': {
                        backgroundColor: '#f21d6b'}
                    }}>

                        Forgot Password
                    </Button>
                </FormControl>
            </Card>
        </div>
        
    );
}
