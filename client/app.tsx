import { ThemeOptions, ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useEffect } from 'react';


export const themeOptions: ThemeOptions = {
    palette: {
        mode: 'light',
        primary: {
            main: '#9f7d23',
        },
        secondary: {
            main: '#2ec5d3',
        },
        background: {
            default: '#194734',
            paper: '#ffffff',
        },
    },
};


export function App(): JSX.Element {
    useEffect(() => {
        document.title = "Art Quiz";
    });
    return (
        <div id="app-container">
            <ThemeProvider theme={createTheme(themeOptions)} >
                <CssBaseline />
                <Outlet />
            </ThemeProvider>
        </div >
    );
}
