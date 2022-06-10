import { red } from "@mui/material/colors";

export const sx = {
    container:{
        position: 'relative',
        width: 'calc(100% - 360px)',
        top:'100px',
        marginLeft:'315px',
        padding: '0 15px',
    },
    c:{
        backgroundColor: 'white',    
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    },
    header:{
        display: 'flex',
        justifyContent: 'space-between',
        padding:'15px',
        borderBottom: '1px solid rgba(204,204,204,.35)'
    },
    p:{
        padding:'20px',
    },
    AS:{
        display: 'flex',
    },
    moreHorizIcon:{
        transform: 'rotate(90deg)'
    },
    bluegrey:{
        color:red[50],
    },
    search:{
        border:'1px solid black'
    },
    searchIcon:{
        
    },
    TFSearch:{
        width:'450px',
        marginLeft:"300px",
        marginBottom: '40px',
    },
    commonTask:{
    },
    formAdd:{
        width:'500px'
    }
}