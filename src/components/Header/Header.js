import { IconButton } from '@mui/material'
import GoogleForm from '../../assets/forms-icon.png'
import SearchIcon from '@mui/icons-material/Search';
import AppsIcon from '@mui/icons-material/Apps';
import React from 'react'
import Avatar from '@mui/material/Avatar';
import tushar from '../../assets/tushar.jpg'
import './Header.css'
import { Sidebar } from '../Sidebar/Sidebar';
export const Header = () => {
    return (
        <div className='header'>
            <div className='header-info'>
                <Sidebar />
                <img src={GoogleForm} alt='icon' height={30} width={30} />
                <div className="info">Forms</div>
            </div>
            <div className="header-search">
                <IconButton><SearchIcon /></IconButton>
                <input type="text" name="search" placeholder='Search Here' />
            </div>
            <div className="headers-right">
                <IconButton>
                    <AppsIcon />
                </IconButton>
                <IconButton>
                    <Avatar src={tushar} />
                </IconButton>
            </div>
        </div>
    )
}
