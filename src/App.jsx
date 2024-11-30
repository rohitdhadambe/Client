import PropTypes from 'prop-types';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './components/context/AuthContext';
import Login from './components/Login/Login';
import HomeAdmin from './components/Admin/Home/HomeAdmin';
import HomeInvestigator from '../src/components/Investigator/Home/HomeInvestigator'

function ProtectedRoute({ children, allowedRole }) {
  const { user } = useAuth();

  if (!user || user.role !== allowedRole) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
}

// Prop validation for ProtectedRoute
ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
  allowedRole: PropTypes.string.isRequired,
};

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route 
        path="/admin" 
        element={
          <ProtectedRoute allowedRole="Admin Head">
            <HomeAdmin />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/investigator" 
        element={
          <ProtectedRoute allowedRole="Investigator">
            <HomeInvestigator />
          </ProtectedRoute>
        } 
      />
       
    </Routes>
  );
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
