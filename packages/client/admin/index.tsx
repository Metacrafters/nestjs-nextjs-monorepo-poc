import * as React from "react";
import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import simpleRestProvider from 'ra-data-simple-rest';

// const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const dataProvider = simpleRestProvider('http://localhost:8081', undefined, 'X-Total-Count');

const AdminApp = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="users" list={ListGuesser} />
    {/* <Resource name="posts" list={ListGuesser} /> */}
  </Admin>
);

export default AdminApp;