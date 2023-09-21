import { Stack, Button, IconButton, ButtonGroup, ToggleButtonGroup, ToggleButton } from "@mui/material";

import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';

import FormatBoldOutlinedIcon from '@mui/icons-material/FormatBoldOutlined';
import FormatItalicOutlinedIcon from '@mui/icons-material/FormatItalicOutlined';
import FormatUnderlinedOutlinedIcon from '@mui/icons-material/FormatUnderlinedOutlined';

import FormatAlignLeftOutlinedIcon from '@mui/icons-material/FormatAlignLeftOutlined';
import FormatAlignCenterOutlinedIcon from '@mui/icons-material/FormatAlignCenterOutlined';
import FormatAlignRightOutlinedIcon from '@mui/icons-material/FormatAlignRightOutlined';
import FormatAlignJustifyOutlinedIcon from '@mui/icons-material/FormatAlignJustifyOutlined';

import { useState } from 'react';

const MuiButton = () => {
    const [formats, setFormats] = useState<string[]>([]);
    const [alignment, setAlignment] = useState<string|null>(null);
    console.log({formats, alignment})
    const handleFormatChange = (_event: React.MouseEvent<HTMLElement>, updatedFormats: string[]) => {
        setFormats(updatedFormats);
    }
    const handleAlignmentChange = (_event: React.MouseEvent<HTMLElement>, updatedAlignment: string|null) => {
        setAlignment(updatedAlignment);
    }
  return (
    <Stack spacing={4}>
        <Stack spacing={2} direction='row'>
            <Button variant="text">Text</Button>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button>
        </Stack>
        <Stack spacing={2} direction='row'>
            <Button variant="contained" color="primary">Primary</Button>
            <Button variant="contained" color="secondary">Secondary</Button>
            <Button variant="contained" color="success">Success</Button>
            <Button variant="contained" color="info">Info</Button>
            <Button variant="contained" color="warning">Warning</Button>
            <Button variant="contained" color="error">Error</Button>
        </Stack>
        <Stack spacing={2} direction='row'>
            <Button variant="outlined" color="primary">Primary</Button>
            <Button variant="outlined" color="secondary">Secondary</Button>
            <Button variant="outlined" color="success">Success</Button>
            <Button variant="outlined" color="info">Info</Button>
            <Button variant="outlined" color="warning">Warning</Button>
            <Button variant="outlined" color="error">Error</Button>
        </Stack>
        <Stack spacing={2} direction={'row'} display={'block'}>
            <Button variant="outlined" size="small">Small</Button>
            <Button variant="outlined" size="medium">Medium</Button>
            <Button variant="outlined" size="large">Large</Button>

            <Button variant="outlined" color="warning" startIcon={<CodeOutlinedIcon />}>
                Code
            </Button>

            <IconButton aria-label="Clear" color="error">
                <ClearOutlinedIcon />
            </IconButton>

            <Button variant="contained" size="medium" disableElevation>Disable Elevation</Button>

            <Button variant="contained" size="medium" disableRipple>Disable Ripple</Button>
        </Stack>
        <Stack direction={'row'}>
            <ButtonGroup variant="contained" orientation="horizontal" aria-label="aligment button group">
                <Button>Left</Button>
                <Button>Center</Button>
                <Button>Right</Button>
            </ButtonGroup>
        </Stack>
        <Stack direction={'row'}>
            <ButtonGroup variant="contained" orientation="vertical" aria-label="aligment button group">
                <Button>Left</Button>
                <Button>Center</Button>
                <Button>Right</Button>
            </ButtonGroup>
        </Stack>
        <Stack direction={'row'} spacing={2}>
            <ToggleButtonGroup aria-label="text formatting" value={formats} onChange={handleFormatChange} color="primary">
                <ToggleButton value={'bold'} aria-label="bold">
                    <FormatBoldOutlinedIcon />
                </ToggleButton>
                <ToggleButton value={'italic'} aria-label="italic">
                    <FormatItalicOutlinedIcon />
                </ToggleButton>
                <ToggleButton value={'underlined'} aria-label="underlined">
                    <FormatUnderlinedOutlinedIcon />
                </ToggleButton>
            </ToggleButtonGroup>

            <ToggleButtonGroup aria-label="text alignement" value={alignment} onChange={handleAlignmentChange} exclusive color="primary">
                <ToggleButton value={'left-align'} aria-label="left-align">
                    <FormatAlignLeftOutlinedIcon />
                </ToggleButton>
                <ToggleButton value={'center-align'} aria-label="center-align">
                    <FormatAlignCenterOutlinedIcon />
                </ToggleButton>
                <ToggleButton value={'right-align'} aria-label="right-align">
                    <FormatAlignRightOutlinedIcon />
                </ToggleButton>
                <ToggleButton value={'justified'} aria-label="justified">
                    <FormatAlignJustifyOutlinedIcon />
                </ToggleButton>
            </ToggleButtonGroup>
        </Stack>
    </Stack>
  )
}

export default MuiButton
