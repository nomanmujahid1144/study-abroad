import './assets/css/App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import AuthLayout from './layouts/auth';
import AdminLayout from './layouts/admin';
import UserLayout from './layouts/user';
import EmployeeLayout from './layouts/employee';
import ContentLayout from './layouts/content';
import {
  ChakraProvider,
  // extendTheme
} from '@chakra-ui/react';
import initialTheme from './theme/theme'; //  { themeGreen }
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { adminLogin } from 'redux/Actions/ProfileActions';
import SignInDefault from 'views/auth/signIn/SignInDefault';
import SigUpDefault from 'views/auth/signUp/SignUpDefault';
import OtpDefault from 'views/auth/OtpValidation/OtpValidation';
import ForgotDefault from 'views/auth/forgotPassword/ForgotPasswordDefault';
import ProfileSettings from 'views/admin/main/profile/settings';
import { getSingleUser } from 'redux/Actions/UserActions';
// Chakra imports

export default function Main() {
  // eslint-disable-next-line
  const [currentTheme, setCurrentTheme] = useState(initialTheme);

  const dispatch = useDispatch();
  const token = useSelector((state) => state.ProfileReducer);

  const { user } = useSelector((state) => state.userReducer);

  useEffect(() => {
    dispatch(getSingleUser());
    const tokens = localStorage.getItem('token');
    if (tokens) {
      dispatch(adminLogin(tokens));
    }
  }, [token]);

  return (
    <ChakraProvider theme={currentTheme}>
      <Routes>
        <Route
          path="admin/*"
          element={
            token ? (
              <>
                {user?.roles?.user ? (
                  <UserLayout theme={currentTheme} setTheme={setCurrentTheme} />
                ) : user?.roles?.admin ? (
                  <AdminLayout
                    theme={currentTheme}
                    setTheme={setCurrentTheme}
                  />
                ) : user?.roles?.employee ? (
                  <EmployeeLayout
                    theme={currentTheme}
                    setTheme={setCurrentTheme}
                  />
                ) : (
                  <ContentLayout
                    theme={currentTheme}
                    setTheme={setCurrentTheme}
                  />
                )}
              </>
            ) : (
              <AuthLayout />
            )
          }
        />
        <Route
          path="admin/profile/profile-setting"
          element={<ProfileSettings />}
        />
        <Route path="auth/forgot-password" element={<ForgotDefault />} />
        {/* <Route path="auth/user/sign-up" element={<SigUpDefault />} />
        <Route path="auth/user/otp-verification" element={<OtpDefault />} /> */}
        <Route path="auth/sign-in" element={<SignInDefault />} />
        <Route path="auth/*" element={<AuthLayout />} />

        <Route path="/" element={<Navigate to="/admin" replace />} />
      </Routes>
    </ChakraProvider>
  );
}
