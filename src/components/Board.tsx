import * as React from "react";
import Card from "@mui/joy/Card";
import Typography from '@mui/joy/Typography';

export default function Board(){
    return(
        <Card sx={{display: "flex", width: "400px", minWidth: "350px", height: "200px", backgroundColor: "#272727",}}>
            <div 
            style={{ alignSelf: "center", width: "108.5%", height: "80%", backgroundColor: "#EAEAEA", marginTop: "-4.2%", borderRadius: "6px",}}>
            </div>
            <Typography style= {{alignSelf: "center", width: "100%", color: "#EAEAEA"}}>
                This could be a board name
            </Typography>
        </Card>
    )

}