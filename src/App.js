import React from "react";
import jsonServerProvider from "ra-data-json-server";
import { Admin, Resource, Login } from "react-admin";
import { UserList } from "./users.js";
import { PostList, PostEdit, PostCreate } from "./posts.js";
import PostIcon from "@material-ui/icons/Book";
import UserIcon from "@material-ui/icons/Group";
import Dashboard from "./Dashboard.js";
import authProvider from "./authProvider";

const dataProvider = jsonServerProvider("http://jsonplaceholder.typicode.com");
const MyLoginPage = () => (
  <Login backgroundImage="https://images.unsplash.com/photo-1522920395281-1162f0a570b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1735&q=80" />
);

const App = () => (
  <Admin
    loginPage={MyLoginPage}
    title="Custom Title"
    dashboard={Dashboard}
    authProvider={authProvider}
    dataProvider={dataProvider}
  >
    <Resource
      name="posts"
      list={PostList}
      edit={PostEdit}
      create={PostCreate}
      icon={PostIcon}
    />
    <Resource name="users" list={UserList} icon={UserIcon} />
  </Admin>
);

export default App;
