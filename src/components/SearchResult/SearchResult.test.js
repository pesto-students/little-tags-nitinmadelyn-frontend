import React from "react";
import renderer from "react-test-renderer";
import { Router, Route, Switch } from "react-router-dom";
import { createMemoryHistory } from "history";
import SearchResult from "./SearchResult";

it("renders correctly when search by text", () => {
  const language = 'en';
  const tree = renderer
    .create(
      <Router history={createMemoryHistory({ initialEntries: ["/"] })}>
        <Route path="/search/shirt" component={SearchResult}>
          <SearchResult language={language} />
        </Route>
      </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
