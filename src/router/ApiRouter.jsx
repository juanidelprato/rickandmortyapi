import { Route, Routes, Navigate } from 'react-router-dom';
import { Rickymorty } from '../Rickymorty';

export const ApiRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Rickymorty />} />
      <Route path='/pages/:page' element={<Rickymorty />} />
    </Routes>
  );
};
