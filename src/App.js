import React from "react";
import jsonServerProvider from "ra-data-json-server";
import { Admin, Resource } from "react-admin";
import { UserList } from "./users.js";
import { PostList } from "./posts.js";

const dataProvider = jsonServerProvider("http://jsonplaceholder.typicode.com");

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="posts" list={PostList} />
    <Resource name="users" list={UserList} />
  </Admin>
);

export default App;
