import React from "react";
import BreweryList from "./components/listOfBreweries";
import { CssBaseline, Container } from "@material-ui/core";

function App() {
  return (
    <CssBaseline>
      <Container>
        <div className="App">
          <BreweryList />
        </div>
      </Container>
    </CssBaseline>
  );
}

export default App;
