import { createTheme, PaletteColorOptions, Palette, PaletteColor } from "@mui/material";

export const primary: Color = {
    main: "#ab2fd6",
    light: "#e065ff",
    dark: "#7700a4"
}

export const secondary: Color = {
    main: "#ffe2a7",
    light: "#ffffd9",
    dark: "#cbb078"
}


export const theme = createTheme({
    palette: {
        primary,
        secondary,
    },
    typography: {
        allVariants: {
            fontFamily: "Inter",
        },
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 600,
        h6: {
            fontWeight: "bold"
        }
    },
    components: {
        MuiButton: {
            defaultProps: {
                disableElevation: true,
                disableRipple: true,
                variant: "contained"
            },
            styleOverrides: {
                contained: ({ ownerState }) => ({
                    color: ownerState.color === "primary" ? "white" : "#3F2525",
                }),
                root: {
                    borderRadius: "50px",
                    textTransform: "initial"
                }
            }
        },
        MuiCssBaseline: {
            styleOverrides: {
                "html , body": {
                    margin: 0,
                    padding: 0
                },
                ".slick-list": { margin: "0 -10px", paddingTop: "4px", paddingBottom: "4px" },
                ".slick-slide>div": { padding: "0 10px" },
                "&": {
                    scrollbarWidth: "thin",
                    scrollbarColor: "#bfbfbf transparent",
                },
                "&::-webkit-scrollbar": {
                    width: "7px",
                    height: "7px",
                },
                "&::-webkit-scrollbar-track": {
                    background: "transparent",
                    borderRadius: "20px",
                },
                "&::-webkit-scrollbar-thumb": {
                    backgroundColor: "#bfbfbf",
                    borderRadius: "20px",
                },
            },
        },
        MuiTextField: {
            defaultProps: {
                variant: "standard"
            },
            variants: [{
                props: {
                    variant: "outlined",
                    color: "secondary"
                },
                style: {
                    minWidth: "350px",
                    "& fieldset": {
                        border: `1px solid ${secondary.main} !important`,
                    },
                    "&:hover": {
                        "& fieldset": {
                            border: `1px solid ${secondary.dark} !important`
                        }
                    },
                    "& .MuiInputBase-root": {
                        paddingTop: "4px",
                        paddingBottom: "4px",
                        borderRadius: "11px"
                    },
                    color: "#3F2525"
                }
            }]
        },
        MuiFormLabel: {
            styleOverrides: {
                root: {
                    color: "#302D2D !important",
                }
            }
        },
        MuiDialog: {
            styleOverrides: {
                root: ({ theme }) => ({
                    "& .MuiDialogContent-root": {
                        padding: theme.spacing(2),
                    },
                    "& .MuiDialogActions-root": {
                        padding: theme.spacing(1),
                    },
                })
            }
        }
    }
})

type Color = PaletteColorOptions