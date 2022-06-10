export const sx = {
  header: {
    display: "flex",
    width: "100%",
    height: "60px",
    backgroundColor: "rgb(238, 238, 238)",
  },
  container: {
    display: "flex",
    width: "50%",
    alignItems: "center",
  },
  containerTask: (index: number) => ({
    display: "flex",
    borderBottom: "1px solid rgb(238, 238, 238)",
    backgroundColor: index % 2 === 0 ? "#fff" : "rgb(238, 238, 238)",
  }),
};
