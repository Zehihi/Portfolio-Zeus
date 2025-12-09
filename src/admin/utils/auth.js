// Simple authentication utility for admin panel
// In production, use proper backend authentication and JWT tokens

const ADMIN_CREDENTIALS = {
  email: 'admin@portfoliozeus.com',
  password: 'Zeus2024!' // Change this to your secure password
};

export const loginUser = (email, password) => {
  // Validate credentials (in production, call a backend API)
  if (email === ADMIN_CREDENTIALS.email && password === ADMIN_CREDENTIALS.password) {
    const authToken = btoa(`${email}:${Date.now()}`); // Simple token generation
    return {
      success: true,
      token: authToken,
      user: {
        email: email,
        role: 'admin'
      }
    };
  }
  return {
    success: false,
    error: 'Invalid email or password'
  };
};

export const logout = () => {
  localStorage.removeItem('adminToken');
  localStorage.removeItem('adminUser');
  localStorage.removeItem('rememberMe');
};

export const isAuthenticated = () => {
  return !!localStorage.getItem('adminToken');
};

export const getAuthToken = () => {
  return localStorage.getItem('adminToken');
};

export const setAuthData = (token, user, rememberMe) => {
  localStorage.setItem('adminToken', token);
  localStorage.setItem('adminUser', JSON.stringify(user));
  if (rememberMe) {
    localStorage.setItem('rememberMe', 'true');
  }
};
