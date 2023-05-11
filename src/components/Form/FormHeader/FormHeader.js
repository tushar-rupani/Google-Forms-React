import React from 'react'
import FormIcon from '../../../assets/forms-icon.png'
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import VisibilityIcon from '@mui/icons-material/Visibility';
import SettingsIcon from '@mui/icons-material/Settings';
import tushar from "../../../assets/tushar.jpg"
import { Avatar, Button, IconButton } from '@mui/material';
import './form_header.css'
import { Link } from 'react-router-dom';
export const FormHeader = () => {
    return (
        <div className='form-header'>
            <div className='form-header-left'>
                <Link to="/"><img src={FormIcon} alt='Error' width={35} height={35} /></Link>
                <input type='text' placeholder='Untitled Form' className='form-name' />
                <IconButton><FolderOpenIcon className='form-header-icon' style={{ marginRight: "10px" }} /></IconButton>
                <IconButton><StarBorderIcon className='form-header-icon' style={{ marginRight: "10px" }} /></IconButton>
                <span style={{ fontSize: "12px", fontWeight: "600" }}>All changes saved in drive</span>
            </div>

            <div className='form_header_right'>
                <IconButton>
                    <ColorLensIcon className='form-header-icon' />
                </IconButton>

                <IconButton>
                    <VisibilityIcon className='form-header-icon' />
                </IconButton>

                <IconButton>
                    <SettingsIcon className='form-header-icon' />
                </IconButton>

                <Button variant='contained' color='secondary'>Send</Button>
                <IconButton>
                    <Avatar height={30} width={30} src={tushar} />
                </IconButton>

            </div>
        </div>
    )
}
