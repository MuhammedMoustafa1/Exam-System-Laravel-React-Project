import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';

export function MyNav() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear local storage (remove tokens and user info)
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user_name');
    localStorage.removeItem('user_type');
    localStorage.removeItem('user_id');

    // Redirect to login page
    navigate('/login');
  };

  // Check if user is authenticated
  const isLoggedIn = localStorage.getItem('auth_token');

  return (
    <Navbar bg="light" data-bs-theme="light">
      <Container>
        <h3>Exam System</h3>
        <Nav className="ms-auto">
          {isLoggedIn ? (
            <>
              <NavLink
                className={({ isActive }) =>
                  isActive ? 'text-success nav-link' : 'nav-link'
                }
                to="/userexams"
              >
                Exams
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? 'text-success nav-link' : 'nav-link'
                }
                to="/userresults"
              >
                Results
              </NavLink>
              <Nav.Link className="nav-link" onClick={handleLogout}>
                Logout
              </Nav.Link>
            </>
          ) : (
            <>
              <NavLink
                className={({ isActive }) =>
                  isActive ? 'text-success nav-link' : 'nav-link'
                }
                to="/login"
              >
                Login
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? 'text-success nav-link' : 'nav-link'
                }
                to="/register"
              >
                Register
              </NavLink>
            </>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
}
