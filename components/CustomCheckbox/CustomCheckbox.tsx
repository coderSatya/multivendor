import styled from '@emotion/styled';
import { Checkbox, FormControlLabel } from '@mui/material';
import { Box } from '@mui/system';
import React, { SyntheticEvent } from 'react'

interface checkboxProps {
    handleChange:(event: SyntheticEvent<Element, Event>, checked: boolean)=>void;
    checked:boolean;
    label: string;
}
const FormControlLabelWpr = styled(Box)`
    .MuiSvgIcon-root {
        fill: rgba(255, 255, 255, 0.3);
        border-radius: 3px;
        width: 22px;
        height: 22px;
    }
    .MuiTypography-root{
        color: var(--white);
        font-size: 12px;
        text-transform: capitalize;
    }
    .Mui-checked{
        .MuiSvgIcon-root {
        fill: var(--color0BD3D3);

    }
    }
`

const CustomCheckbox = (props: checkboxProps) => {
    const { label } = props
    return (
        <FormControlLabelWpr>
            <FormControlLabel control={<Checkbox />} label={label} onChange={props.handleChange} checked={props.checked}/>
        </FormControlLabelWpr>
    )
}

export default CustomCheckbox