import * as React from 'react';
import Drawer from '@mui/joy/Drawer';
import Button from '@mui/joy/Button';
import List from '@mui/joy/List';
import Divider from '@mui/joy/Divider';
import Menu from '@mui/icons-material/Menu';
import Dashboard from '@mui/icons-material/Dashboard';
import Star from '@mui/icons-material/StarBorder';
import Delete from '@mui/icons-material/AutoDelete';

export default function MyDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer =
    (inOpen: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setOpen(inOpen);
    };

  return (
    <div style={{ display: 'flex' }}>
      <Button variant="plain" color="neutral" onClick={toggleDrawer(true)} sx={{'&:hover': {backgroundColor: "#272727"}}}>
        <Menu sx={{color: "#EAEAEA",}}/>
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)} sx={{color: "#121212",}}>
        <div
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
          style={{backgroundColor: "#121212", height: "100%"}}
        >
         
          <List sx={{padding: "15px 10px"}}>
            <div style={{alignItems: "center", padding: "10px 0px",
                display: "flex", color:"#EAEAEA"}}><Dashboard/> All Boards</div>
            <div style={{alignItems: "center", padding: "10px 0px",
                display: "flex", color:"#EAEAEA"}}><Star/>Favorites</div>
          </List>
          <Divider />
          <List sx={{padding: "15px 10px"}}>
          <div style={{color:"#EAEAEA"}}>ROOMS</div>
          </List>
          <Divider />
          <List sx={{padding: "15px 10px"}}>
          <div style={{alignItems: "center",
                padding: "10px 0px",
                display: "flex", color:"#EAEAEA"}}><Delete/>Deleted</div>
          </List>

        </div>
      </Drawer>
    </div>
  );
}