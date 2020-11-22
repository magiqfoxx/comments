import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";

import Home from "./screens/Home";
import Menu from "./screens/Menu";
import Favorites from "./screens/Favorites";
import Filter from "./screens/Filter";
import AddComment from "./screens/AddComment";
import NotFound from "./screens/NotFound";

const Background = styled.div`
  min-height: 100vh;
  background-color: #f9fcff;
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: 600px) {
    flex-direction: row;
  }
`;
const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: baseline;
  flex-wrap: wrap;
  padding: 4rem 1rem;
  width: 100%;
`;

const App: React.SFC = () => {
  return (
    <Background>
      <Router>
        <Menu />
        <Main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/filter" component={Filter} />
            <Route path="/favorites" component={Favorites} />
            <Route path="/add-comment" component={AddComment} />
            <Route component={NotFound} />
          </Switch>
        </Main>
      </Router>
    </Background>
  );
};

export default App;
