import React from 'react'
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import { IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './template.css'
import Blank from '../../assets/blank.png'
import Party from "../../assets/party.png"
import Contact from "../../assets/Contact.png"
import RSVP from "../../assets/rsvp.png"
import Tshirt from "../../assets/tshirt.png"
import uuid from "react-uuid"
import { useNavigate } from 'react-router-dom';
export const Template = () => {
    const navigate = useNavigate();
    const handleOpen = () => {
        let id = uuid();
        navigate(`/form/${id}`)
    }
    return (
        <div className='template-section'>
            <div className="template_top">
                <div className="template_left">
                    <span style={{ fontSize: "16px", color: "#202124" }}> <div className='list_item'>Hello Tushar, Let's Make a New Form!</div></span>
                </div>
                <div className="template_right">
                    <div className="gallery_button">
                        <div style={{ color: "#434343" }}>Template Gallery</div>
                        <IconButton><UnfoldMoreIcon /></IconButton>
                    </div>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className="template-body">
                <div className="card" onClick={handleOpen}>
                    <img src={Blank} alt="error" />
                    <p>Create New Form</p>
                </div>
                <div className="card">
                    <img src={Party} alt="error" />
                    <p>Party Invite</p>
                </div>
                <div className="card">
                    <img src={Contact} alt="error" />
                    <p>Contact Form</p>
                </div>
                <div className="card">
                    <img src={Tshirt} alt="error" />
                    <p>Tshirt Form</p>
                </div>
                <div className="card">
                    <img src={RSVP} alt="error" />
                    <p>RSVP Form</p>
                </div>

            </div>
        </div>
    )
}
