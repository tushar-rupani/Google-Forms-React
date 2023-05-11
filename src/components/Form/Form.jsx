import React from 'react'
import { FormHeader } from './FormHeader/FormHeader'
import { FormTab } from './FormTabs/FormTab'
import { QuestionFrom } from './QuestionForm/QuestionFrom'
export const Form = () => {
    return (
        <>
            <FormHeader />
            <FormTab />
            <QuestionFrom />
        </>
    )
}
