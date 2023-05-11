import React from 'react'
import { IconButton } from '@mui/material'
import StorageIcon from '@mui/icons-material/Storage';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Event from '../../assets/event.png'
import MoreVertIcon from '@mui/icons-material/MoreVert';

import './body.css'

export const Body = () => {
  return (

    <div className='body'>
        <div className='body-top'>
            <div className='body-top-left' style={{fontSize: "16px", fontWeight: "500"}}>
                Recent Forms
            </div>
            <div className='body-top-right'>
                <div className='body-top-center' style={{fontSize: "14px", marginRight: "125px"}}>
                    Owned By Anyone <ArrowDropDownIcon />
                </div>

                <IconButton>
                    <StorageIcon style={{fontSize: "16px", color: "black"}} />
                </IconButton>

                <IconButton>
                    <FolderOpenIcon style={{fontSize: "16px", color: "black"}} />
                </IconButton>
            </div>
        </div>

        <div className='body-docs'>
            <div className='doc-card'>
                <img src={Event} className='doc-image' alt='error'/>
                <div className='doc-card-content'>
                    <h5>Event Testing Form</h5>
                    <div className='doc-content' style={{fontSize: "12px", color: "grey"}}>
                        <div className='content-left'>
                            <StorageIcon style={{color: "white", fontSize: "12px", backgroundColor: "#6E2594", padding: "3px", marginRight: "3px", borderRadius: "2px" }} /> Opened on 10th May
                        </div>
                        <MoreVertIcon style={{fontSize: "16px", color:"grey" }} />
                    </div>
                </div>
            </div>

            <div className='doc-card'>
                <img src={Event} className='doc-image' alt='error'/>
                <div className='doc-card-content'>
                    <h5>Event Testing Form</h5>
                    <div className='doc-content' style={{fontSize: "12px", color: "grey"}}>
                        <div className='content-left'>
                            <StorageIcon style={{color: "white", fontSize: "12px", backgroundColor: "#6E2594", padding: "3px", marginRight: "3px", borderRadius: "2px" }} /> Opened on 10th May
                        </div>
                        <MoreVertIcon style={{fontSize: "16px", color:"grey" }} />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
