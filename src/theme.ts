import {createTheme} from "@mui/material";

export const theme = createTheme({
    typography: {
      fontFamily: '"GothamBook", sans-serif',
    },
    palette: {
        primary: {
            main: '#00ADD8',
            contrastText: '#fff'
        },
        mode: 'dark'
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    fontSize: 10,
                    boxShadow: 'none',
                    borderRadius: 10,
                    ':focus': { outline: 'none' }
                    // color: '#fff'
                }
            }
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    background: '#403C3C',
                    borderRadius: 10,
                    boxShadow: '0 3px 6px #00000029'
                }
            }
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    color: 'white',
                    lineHeight: 1.5
                }
            }
        },
    }
})
