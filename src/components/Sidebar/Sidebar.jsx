import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, List, ListItem } from '@mui/material'
import SettingsIcon from '@mui/icons-material/Settings';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import SheetImage from "../../assets/sheets.png"
import DriveImage from "../../assets/drive.png"
import DocsImage from "../../assets/docs.png"
import GoogleImage from "../../assets/google.png"
import ForumIcon from '@mui/icons-material/Forum';
import LogoutIcon from '@mui/icons-material/Logout';
import "./sidebar.css"

const listItem = {
    marginLeft: "20px", fontSize: "14px", fontWeight: "500", color: "grey", fontFamily: "Poppins"
}

export const Sidebar = () => {
    const [open, setOpen] = useState({ left: false });
    const toggleDrawer = (anchor, open) => {
        setOpen({ ...open, [anchor]: open })
    }

    const list = (anchor) => (
        <div style={{ width: "250px" }} role='presentation'>
            <Divider />

            <List>
                <ListItem>
                    <img src={GoogleImage} alt="Google" height={120} width={200} />
                </ListItem>
            </List>
            <Divider />
            <List style={{ marginLeft: "30px", marginRight: "30px" }}>
                <ListItem className='list_item'>
                    <img src={DocsImage} style={{ height: "20px", width: "20px" }} alt='Docs' />
                    <div style={listItem}>Google Docs</div>
                </ListItem>
                <ListItem className='list_item'>
                    <img src={SheetImage} style={{ height: "20px", width: "20px" }} alt='Sheet' />
                    <div style={listItem}>Google Sheet</div>
                </ListItem>
                <ListItem className='list_item'>
                    <img src={DriveImage} style={{ height: "20px", width: "20px" }} alt='Drive' />
                    <div style={listItem}>Google Drive</div>
                </ListItem>
            </List>
            <Divider />
            <List style={{ marginLeft: "30px", marginRight: "30px" }}>
                <ListItem className='list_item'>
                    <SettingsIcon style={{ color: "grey" }} /><div style={listItem}>Settings</div>
                </ListItem>
                <ListItem className='list_item'>
                    <ForumIcon style={{ color: "grey" }} /><div style={listItem}>Feedback</div>
                </ListItem>
            </List>
            <Divider />
            <List style={{ marginLeft: "30px", marginRight: "30px" }}>
                <ListItem className='list_item'>
                    <LogoutIcon style={{ color: "grey" }} /><div style={listItem}>Logout</div>
                </ListItem>
            </List>
        </div >
    )
    return (
        <div>
            <IconButton onClick={() => toggleDrawer("left", true)}>
                <MenuIcon />
            </IconButton>
            <Drawer open={open.left} onClose={() => toggleDrawer("left", false)}>
                {list("left")}
            </Drawer>
        </div>
    )
}
