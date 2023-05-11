import React, { useState } from 'react'
import Paper from '@mui/material/Paper'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
export const FormTab = () => {
    const [value, setValue] = useState(0)
    const customStyle = {
        root: {
            flexGrow: 1,
            padding: "1px"
        },
        tab: {
            fontSize: 14,
            color: "#5f6368",
            textTransform: "capitalize",
            height: 10,
            fontWeight: "600",
            fontFamily: "Poppins"
        },
        tabs: {
            height: 10
        }
    }
    return (
        <Paper style={customStyle.root}>
            <Tabs value={value} textColor='primary' indicatorColor='secondary' centered>
                <Tab label="Questions" style={customStyle.tab} onClick={() => setValue(0)} />
                <Tab label="Responses" style={customStyle.tab} onClick={() => setValue(1)} />
            </Tabs>
        </Paper>
    )
}
