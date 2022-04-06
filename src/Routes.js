import * as React from 'react';
import {
  Route,
  Routes
} from "react-router-dom";
import { GiveConsents, ListConsents } from './pages';

const Router = () => (
  <Routes>
    <Route path="/" element={<ListConsents />} />
    <Route path="/consent" element={<GiveConsents />} />
  </Routes>
);

export default Router
