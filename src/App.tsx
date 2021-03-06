import "./App.css";
import { User } from "./components/user/User";
import { Container, CssBaseline, Grid } from "@mui/material";
import { QueryProvider } from "./providers/QueryProvider";
import { defaultQuery } from "./contants/defaultQuery";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "Anak Ajaib";
  }, []);
  return (
    <>
      <CssBaseline />
      <Container>
        <Grid container justifyContent={"center"} alignItems={"center"}>
          <Grid item xs={12} mt={3}>
            <QueryProvider defaultQuery={defaultQuery}>
              <User />
            </QueryProvider>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default App;
