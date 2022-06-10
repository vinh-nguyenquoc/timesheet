import { pink } from "@mui/material/colors";


export const sx = {
    main: {
        display: 'flex',
        justifyContent: 'space-between',
        position: 'fixed',
        width: '100%',
        height: '70px',
        alignItems: 'center',
        backgroundColor: 'rgb(244,67,54)',
        padding: '0 15px',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        zIndex:'9999'

    },
    logo: {
        display: 'flex',

    },
    select: {
        border: 'none',
    },
    
    moreHorizIcon: {
        transform: 'rotate(90deg)',
        marginRight:'30px',
        color:'#fff',
        cursor:'pointer'
    },
    headerNav: {
        display: 'flex',
        alignItems: 'center',

    },
    white: {
        color: 'white',

    },
}