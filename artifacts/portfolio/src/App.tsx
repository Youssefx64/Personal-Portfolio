import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import SinglePage from './pages/SinglePage';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="*" element={<SinglePage />} />
      </Route>
    </Routes>
  );
}
