import { red } from "@mui/material/colors";

export const sx = {
  container: {
    position: "relative",
    width: "calc(100% - 360px)",
    top: "100px",
    marginLeft: "315px",
    padding: "0 15px",
  },
  c: {
    backgroundColor: "white",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px",
    borderBottom: "1px solid rgba(204,204,204,.35)",
  },
  bluegrey: {
    color: red[50],
  },
  moreHorizIcon: {
    transform: "rotate(90deg)",
  },
  nav: {
    p: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  search: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  iSearch: {
    display: "flex",
    alignItems: "flex-end",
  },
  textSearch: {
    width: "450px",
  },
  pms: {
    color: "white",
    backgroundColor: "rgb(46, 149, 234)",
    borderRadius: 10,
    px: "12px",
  },
  member: {
    color: "white",
    backgroundColor: "rgb(244, 67, 54)",
    borderRadius: 10,
    px: "12px",
  },
  time: {
    color: "white",
    backgroundColor: "rgb(76, 175, 80)",
    borderRadius: 10,
    px: "12px",
  },
  flex: {
    display: "flex",
    alignItems: "center",

    gap: 2,
  },
  table: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    header: "43px"
  },
  Active: {
    backgroundColor: "rgb(76, 175, 80)",
    px: "12px",
    color:"white",
    borderRadius:"5px"
  },
  Inactive: {
    backgroundColor: "rgb(158, 158, 158)",
    color:"white",
    px: "12px",
    borderRadius:"5px"
  },
  iconAction:{
    color:"rgba(0, 0, 0, 0.54)",
    gap:3,
    p:"20px"
  },
};
