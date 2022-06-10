import { pink } from "@mui/material/colors";

export const sx = {
    all: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '674px',

    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        height: '545px',
        justifyContent: 'space-between',
    },
    header: {
        fontSize: '36px',
        textAlign: 'center',
        color: '#fff',
        width: '100%',
        height: '51px'
    },
    title: {
        textAlign: 'center',
        my: '10px'
    },
    container: {
        width: '100%',
        height: '100vh',
        backgroundColor: 'rgb(0,188,212)',
    },
    wrapper: {
        padding: '20px',
        width: '320px',
        backgroundColor: '#fff',

    },
    checkBox: {
        color: "success",
        '&.Mui-checked': {
            color: pink[600],
        },
    },
    formLogin: {
        height: '154px',
        marginBottom: '20px',
    },
    input: {
        width: '100%',
        paddingBottom: '17.5px'
    },
    login: {
        display: 'flex',
        alignItems: 'center',
    },
    icon: {
        padding: '6px 6px 12px 0',
        fontSize: 'large',
        color: '#555555',
    },
    rememberme: {
        display: 'flex', 
        alignItems: 'center',
        marginLeft: '-9px'
    }
    ,
    boxLogin: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom:'20px',
    },
    loginWGG:{
        width: '100%',
        color: 'rgb(63,81,181)',
    },
    btnLogin:{
        padding:'0 16px',
        marginRight: '15px'
    },
    btnLoginWGG:{
        height: '56px'

    },
    color:{
        color:'#fff',
        fontSize:'11.9px',
        display:'flex',
        justifyContent: 'center'
    }
}