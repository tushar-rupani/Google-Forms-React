import React, { useState, useEffect } from 'react'
import CropOriginalIcon from '@mui/icons-material/CropOriginal';
import Select from '@mui/material/Select';
import Switch from '@mui/material/Switch';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import ShortTextIcon from '@mui/icons-material/ShortText';
import SubjectIcon from '@mui/icons-material/Subject';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FilterNoneIcon from '@mui/icons-material/FilterNone';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import { BsFileText } from "react-icons/bs"
import { BsFileTrash } from "react-icons/bs"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import { Button } from '@mui/material/Button';
import { FcRightUp } from "react-icons/fc"
import CloseIcon from '@mui/icons-material/Close'
import { Radio } from '@mui/material/Radio';
import { FormControlLabel } from '@mui/material/FormControlLabel';
import './question_form.css'
export const QuestionFrom = () => {
    return (
        <div>
            <div className='question_form'>
                <div className='section'>
                    <div className='question_title_section'>
                        <div className='question_form_top'>
                            <input type='text' className='question_form_top_name' style={{ color: "black" }} placeholder='Untitled Document' />
                            <input type='text' className='question_form_top_desc' style={{ color: "black" }} placeholder='Form Description' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
