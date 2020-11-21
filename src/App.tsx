import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";

import Home from "./screens/Home";
import Menu from "./screens/Menu";
import Favorites from "./screens/Favorites";
import Filter from "./screens/Filter";
import AddComment from "./screens/AddComment";

const Background = styled.div`
  min-height: 100vh;
  background-color: #f9fcff;
  display: flex;
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
export interface AppProps {}

const App: React.SFC<AppProps> = () => {
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
          </Switch>
        </Main>
      </Router>
    </Background>
  );
};

export default App;
