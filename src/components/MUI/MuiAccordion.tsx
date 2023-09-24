import React, { useState } from 'react'
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const MuiAccordion = () => {
    const [open, setOpen] = useState<number | false>(false)
    const handleChange = (isExpanded: boolean, panel: number) => {
        setOpen(isExpanded ? panel : false)
    }
  return (
    <div>
        <Accordion expanded={open === 1} onChange={(event, isExpanded) => handleChange(isExpanded, 1)}>
            <AccordionSummary id='panel-header-1' aria-controls='panel-header-1' expandIcon={<ExpandMoreIcon />} >
                <Typography>Accordion 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora commodi sunt dolorum iste non quos perferendis a, nihil hic reprehenderit nesciunt rerum laborum magni! Fugit nisi veritatis magni odit ipsa!</Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion expanded={open === 2} onChange={(event, isExpanded) => handleChange(isExpanded, 2)}>
            <AccordionSummary id='panel-header-2' aria-controls='panel-header-2' expandIcon={<ExpandMoreIcon />} >
                <Typography>Accordion 2</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora commodi sunt dolorum iste non quos perferendis a, nihil hic reprehenderit nesciunt rerum laborum magni! Fugit nisi veritatis magni odit ipsa!</Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion expanded={open === 3} onChange={(event, isExpanded) => handleChange(isExpanded, 3)}>
            <AccordionSummary id='panel-header-3' aria-controls='panel-header-3' expandIcon={<ExpandMoreIcon />} >
                <Typography>Accordion 3</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora commodi sunt dolorum iste non quos perferendis a, nihil hic reprehenderit nesciunt rerum laborum magni! Fugit nisi veritatis magni odit ipsa!</Typography>
            </AccordionDetails>
        </Accordion>


        <Accordion>
            <AccordionSummary id='panel-header-1' aria-controls='panel-header-1' expandIcon={<ExpandMoreIcon />} >
                <Typography>Accordion None</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora commodi sunt dolorum iste non quos perferendis a, nihil hic reprehenderit nesciunt rerum laborum magni! Fugit nisi veritatis magni odit ipsa!</Typography>
            </AccordionDetails>
        </Accordion>
    </div>
  )
}

export default MuiAccordion
