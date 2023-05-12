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
import { BsFileText, BsTrash } from "react-icons/bs"
import { BsFileTrash } from "react-icons/bs"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import Button from '@mui/material/Button';
import { FcRightUp } from "react-icons/fc"
import CloseIcon from '@mui/icons-material/Close'
import FormControlLabel from '@mui/material/FormControlLabel';
import './question_form.css'
import { AccordionDetails, Divider, IconButton, MenuItem, Typography } from '@mui/material';
export const QuestionFrom = () => {
    const dummyData = [{
        questionText: "What is Redux and Context?",
        questionType: "radio",
        options: [
            { optionText: "Global State Management Techniques" },
            { optionText: "React Hook" },
            { optionText: "Variables" },
            { optionText: "State Variable" }
        ],
        open: false,
        required: true
    }, {
        questionText: "What is Redux and Context?",
        questionType: "radio",
        options: [
            { optionText: "Global State Management Techniques" },
            { optionText: "React Hook" },
            { optionText: "Variables" },
            { optionText: "State Variable" }
        ],
        open: false,
        required: false
    }]

    const handleChange = (text, index) => {
        const cloneOfQuestions = [...questions];
        cloneOfQuestions[index].questionText = text;
        setQuestions(cloneOfQuestions)
    }

    const handleSelectBox = (type, index) => {
        const cloneOfQuestions = [...questions];
        cloneOfQuestions[index].questionType = type;
        setQuestions(cloneOfQuestions)
    }

    const handleOptionChange = (value, parent, child) => {
        const cloneOfQuestions = [...questions];
        const options = cloneOfQuestions[parent].options;
        const getOption = options[child];
        getOption.optionText = value;
        setQuestions(cloneOfQuestions)
    }

    const handleCopy = (index) => {
        const cloneOfQuestions = [...questions];
        cloneOfQuestions.push(cloneOfQuestions[index]);
        setQuestions(cloneOfQuestions)
    }

    const handleDelete = (index) => {
        const cloneOfQuestions = [...questions];
        cloneOfQuestions.splice(index, 1);
        console.log(cloneOfQuestions);
        setQuestions(cloneOfQuestions);
    }

    const handleSwitch = (index, state) => {
        const cloneOfQuestions = [...questions];
        cloneOfQuestions[index].required = !state;
        setQuestions(cloneOfQuestions)
        console.log(cloneOfQuestions);
    }

    const handleOptionDelete = (parent, child) => {
        const cloneOfQuestions = [...questions];
        const options = cloneOfQuestions[parent].options;
        options.splice(child, 1)
        setQuestions(cloneOfQuestions)
    }
    const [questions, setQuestions] = useState(dummyData)
    const questionUi = () => {
        return questions.map((que, index) => (
            <Accordion expanded={true} className={que.open ? "add_border" : ""}>
                <AccordionSummary aria-controls="panel1a-content" id="panel1a-header" >
                    {que.open ? (
                        <div className="saved_question">
                            <Typography style={{ fontSize: "15px", fontWeight: "700", letterSpacing: ".1px", lineHeight: "24px", paddingBottom: "8px" }}>
                                {que.questionText}
                            </Typography>

                            {que.questionType !== "text" && que.options.map((op, index) => (
                                <div key={index}>
                                    <div style={{ display: "flex" }}>
                                        <FormControlLabel style={{ marginLeft: "5px", marginBottom: "5px" }} disabled control={<input type={que.questionType} color="primary" style={{ marginRight: "3px" }} required={que.required} />} label={
                                            <Typography style={{ fontFamily: "Poppins", fontSize: "13px", fontWeight: "400", letterSpacing: ".2px", lineHeight: "20px", color: "#202124" }}>
                                                {op.optionText}
                                            </Typography>
                                        }>

                                        </FormControlLabel>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : ""}
                </AccordionSummary>

                <div className="question_boxes">
                    <AccordionDetails className='add_question'>
                        <div className="add_question_top">
                            <input type="text" className='question' placeholder='Question' onChange={(e) => handleChange(e.target.value, index)} value={que.questionText} />
                            <CropOriginalIcon style={{ color: "#5f6368" }} />
                            <Select className='select' style={{ color: "#5f6368", fontSize: "13px" }} defaultValue={"text"}>
                                <MenuItem id="text" value="Text" className='menu-item' style={{ display: "flex", alignItems: "center" }} onClick={() => handleSelectBox("text", index)}> <SubjectIcon style={{ marginRight: "10px", color: "#70757a" }} />
                                    Paragraph
                                </MenuItem>
                                <MenuItem id="checkbox" value="Checkbox" className='menu-item' onClick={() => handleSelectBox("checkbox", index)}> <CheckBoxIcon style={{
                                    marginRight: "10px", color: "#70757a"
                                }} checked />
                                    Checkbox
                                </MenuItem>
                                <MenuItem id="radio" value="Radio" className='menu-item' onClick={() => handleSelectBox("radio", index)}> <RadioButtonCheckedIcon style={{ marginRight: "10px", color: "#70757a" }} checked />
                                    Multiple Choice
                                </MenuItem>
                            </Select>
                        </div>
                        {que.options.map((op, child) => (
                            <div className="add_question_body" key={child}>
                                {
                                    que.questionType !== "text" ?
                                        <input type={que.questionType} style={{ marginRight: "10px" }} /> : <ShortTextIcon style={{ marginRight: "10px" }} />
                                }
                                <div>
                                    <input type="text" className='text_input' placeholder='Option' onChange={(e) => handleOptionChange(e.target.value, index, child)} value={op.optionText} />
                                </div>
                                <CropOriginalIcon style={{ color: "#5f6368" }} />
                                <IconButton aria-label='delete' onClick={() => handleOptionDelete(index, child)}>
                                    <CloseIcon></CloseIcon>
                                </IconButton>
                            </div>
                        ))}
                        {/* <Divider />  */}

                        {que.options.length < 5 ? (
                            <div className="add_question_body">
                                <FormControlLabel disabled control={(que.questionType !== "text") ?
                                    <input type={que.questionType} color='primary' inputProps={{ 'aria-label': 'secondary checkbox' }}
                                        style={{ marginLeft: "10px", marginRight: "10px" }} disabled /> : <ShortTextIcon style={{
                                            marginRight: "10px"
                                        }} />
                                } label={
                                    <div className='input-add'>
                                        <input type="text" className='text_input' style={{ fontSize: "13px", width: "70px" }} placeholder='Add more' />
                                        <Button size='small' style={{ textTransform: "none", color: "#4285f4", fontSize: "13px", fontWeight: "600" }}>
                                            Add Option
                                        </Button>
                                    </div>
                                }>

                                </FormControlLabel>
                            </div>
                        ) : ""}
                        <div className="add_footer">
                            <div className="add_question_bottom_left">
                                <Button size='small' style={{ textTransform: "none", color: "#4285f4", fontSize: "13px", fontWeight: "600" }}><FcRightUp style={{ border: "2px solid #4285f4", padding: "2px", marginRight: "8px" }} />Answer Key</Button>
                            </div>
                            <div className="add_question_bottom">
                                <IconButton aria-label='Copy' onClick={() => handleCopy(index)}>
                                    <FilterNoneIcon />
                                </IconButton>

                                <IconButton aria-label='Delete' onClick={() => handleDelete(index)}>
                                    <BsTrash />
                                </IconButton>

                                <IconButton>
                                    <MoreVertIcon />
                                </IconButton>

                                <IconButton>
                                    <div style={{ fontSize: "15px", fontFamily: "Poppins" }}>Required</div> <Switch defaultChecked={que.required} onClick={() => handleSwitch(index, que.required)} />
                                </IconButton>
                            </div>
                        </div>
                    </AccordionDetails>
                    <div className="question_edit">
                        <AddCircleOutlineIcon className='edit' />
                        <OndemandVideoIcon className='edit' />
                        <CropOriginalIcon className='edit' />
                        <TextFieldsIcon className='edit' />
                    </div>
                </div>
            </Accordion >
        ))
    }
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
                    {questionUi()}

                </div>
            </div>
        </div>
    )
}
