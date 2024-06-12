import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { useThemeProps } from '@mui/material';



export default function BasicBreadcrumbs(props) {
    return (
        <div role="presentation" className='breadcrumbs'>
            <Breadcrumbs aria-label="breadcrumb">
                <Link underline="hover" color="inherit" href="/">
                    Home
                </Link>
                <Typography color="text.primary">{props.name}</Typography>
            </Breadcrumbs>
        </div>
    );
}
