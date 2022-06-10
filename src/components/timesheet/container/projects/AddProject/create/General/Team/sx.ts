export const sx = {
  container: {
    display: "flex",
    height: "587px",
  },
  listTeam: {
    width: "60%",
    px: "24px",
    pb: "16px",
  },
  search: {
    px: "15px",
    display: "flex",
    width: "60%",
  },
  listMember: {
    width: "40%",
  },
  list: {
    overflowY: "auto",
    height: "500px",
  },
  containerSearch: {},
  listContainer: (index: number) => ({
    alignItems: "center",
    display: "flex",
    width: "100%",
    gap: "4px",
    borderBottom: "1px solid #aaa",
    padding: "10px",
    backgroundColor: index % 2 === 0 ? "rgb(238, 238, 238)" : "#fff",
  }),
  content: {
    display: "flex",
    width: "100%",
    gap: "1px",
  },
};
// /boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
