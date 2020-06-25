import React from "react";
import ListOfBreweries from "./Components/listOfBreweries";
import { CssBaseline, Container } from "@material-ui/core";

function App() {
  return (
    <CssBaseline>
      <Container>
        <div className="App">
          <ListOfBreweries />
        </div>
      </Container>
    </CssBaseline>
  );
}

export default App;
