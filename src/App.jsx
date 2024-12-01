import PropTypes from 'prop-types';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './components/context/AuthContext';
import Login from './components/Login/Login';
import HomeAdmin from './components/Admin/Home/HomeAdmin';
import HomeInvestigator from './components/Investigator/Home/HomeInvestigator';
import ConnectWithInvestigators from './components/Admin/Home/ConnectWithInvestigator';
import ConnectToAdmin from './components/Investigator/Home/ConnectToAdmin';

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

function ConditionalRoute({ children }) {
  const { user } = useAuth();

  if (!user || (user.role !== 'Admin Head' && user.role !== 'Investigator')) {
    return <Navigate to="/" replace />;
  }

  return user.role === 'Admin Head' ? <ConnectWithInvestigators /> : <ConnectToAdmin />;
}

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
      <Route
        path="/connect/investigator"
        element={<ConditionalRoute />}
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
