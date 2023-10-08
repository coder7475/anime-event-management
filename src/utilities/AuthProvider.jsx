import AuthContext from "../contexts/AuthContext";
import PropTypes from 'prop-types';

function AuthProvider({ children }) {
  const authInfo = {};
  return (
    <div>
      <AuthContext.Provider value={authInfo}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}

AuthProvider.propTypes = {
  children: PropTypes.object,
}

export default AuthProvider;
