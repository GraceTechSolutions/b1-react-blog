import { Grid, Item } from "@mui/material";

function App() {
  return (
    <div>
      <Grid container spacing={1} columns={12}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Grid container>
            <Grid xs={1} md>sub grid 1</Grid>
            <Grid xs={1} md>sub grid 2</Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>item 2</Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>item 3</Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>item 4</Grid>
      </Grid>
    </div>
  );
}

export default App;
