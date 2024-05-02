import * as React from 'react';
import MenuButton from '@mui/joy/MenuButton';
import Menu from '@mui/joy/Menu';
import MenuItem from '@mui/joy/MenuItem';
import ArrowDropDown from '@mui/icons-material/KeyboardArrowDown';
import Dropdown from '@mui/joy/Dropdown';
import ListDivider from '@mui/joy/ListDivider';
import ArrowRight from '@mui/icons-material/ArrowRight';
import Search from '@mui/icons-material/Search';
import DarkMode from '@mui/icons-material/DarkMode';
import Person from '@mui/icons-material/Person';
import Input from "@mui/joy/Input";
import Button from '@mui/joy/Button';
import MyDrawer from "./MyDrawer"


export default function MainHead() {

    return (
        <div style={{ backgroundColor: "#121212", display: "flex", justifySelf: "center", alignSelf: "start"
          }}>
            <MyDrawer />
            <Dropdown style={{color: "#EAEAEA"}}>
                <MenuButton 
                    startDecorator= {<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="tabler-icon tabler-icon-users-group" font-size="20px"><path d="M10 13a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path><path d="M8 21v-1a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v1"></path><path d="M15 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path><path d="M17 10h2a2 2 0 0 1 2 2v1"></path><path d="M5 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path><path d="M3 13v-1a2 2 0 0 1 2 -2h2"></path></svg>}
                    variant="plain"
                    endDecorator={ <ArrowDropDown />}
                    sx={{
                        color: "#EAEAEA",
                        '&:hover': {
                            color: "#EAEAEA",
                            backgroundColor:"#272727"
                        }
                    }}
                >
                    Room Name
                </MenuButton>
                <Menu sx={{backgroundColor: "#121212"}}>
                    <MenuItem sx={{ color: "#EAEAEA"}}>
                        Room Name
                    </MenuItem>
                    
                    <MenuItem sx={{ color: "#EAEAEA"}}>
                        Manage Team
                    </MenuItem>

                    <ListDivider />
                        
                    <MenuItem sx={{ color: "#EAEAEA"}}>
                        Switch Team
                        <ArrowRight />
                    </MenuItem>
                    <MenuItem sx={{ color: "#EAEAEA"}}>
                        Create Team
                    </MenuItem>
                </Menu>
            </Dropdown>

            <div style={{
                justifySelf: "right",
                backgroundColor: "#121212", 
                justifyContent: "right", 
                alignItems: "center",
                boxSizing: "border-box",
                display: "flex",
                width: "100%"}}>
                    <Input variant="plain" placeholder="Search" startDecorator={ <Search style={{color: "#EAEAEA"}}/>} sx={{ 
                        backgroundColor: "#121212",
                        color: "#ffffff",
                        '&:hover': {
                            backgroundColor: "#121212",
                            color: "#eaeaea"
                        },
                        minWidth:"132px"
                    }}/>
                <Button sx={{backgroundColor: "#C22A4F", minWidth:"132px", '&:hover': {backgroundColor: "#84133C"}}}>Invite Members</Button>
                <Button variant= "plain" sx={{
                    color: "#f2f2f2",
                    marginLeft: "10px",
                    padding: "0px 5px",
                    '&:hover': {
                        backgroundColor:"#272727",
                        color: "#C22A4F",
                }}}>
                    <DarkMode style={{}}/>
                </Button>
                <Dropdown>
                    <MenuButton 
                        variant="plain"
                        endDecorator={ <div style={{
                            backgroundColor: "blue",
                            alignItems: "center",
                            borderRadius: "100px",
                            display: "flex",
                            padding: "3px"

                        }}>
                            <Person style={{color: "black"}}/>
                        </div>}
                        sx={{
                            '&:hover': {
                                backgroundColor:"#121212"
                            }
                        }}> 
                            <div style={{
                                backgroundColor: "#5A5A5A",
                                padding: "2px 10px",
                                borderRadius: "5px",
                                color: "#EAEAEA"

                            }}>
                                free
                            </div>
                    </MenuButton>
                    <Menu sx={{backgroundColor: "#121212"}}>
                        <MenuItem sx={{ color: "#EAEAEA"}}>
                            Room Name
                        </MenuItem>
                        
                        <MenuItem sx={{ color: "#EAEAEA"}}>
                            Manage Team
                        </MenuItem>

                        <ListDivider />
                        
                        <MenuItem sx={{ color: "#EAEAEA"}}>
                            Switch Team
                            <ArrowRight />
                        </MenuItem>
                        <MenuItem sx={{ color: "#EAEAEA"}}>
                            Create Team
                        </MenuItem>
                    </Menu>
                </Dropdown>
            </div>
        </div>
    )
};