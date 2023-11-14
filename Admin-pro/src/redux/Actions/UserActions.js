import { handleApiError } from 'constants/helperFunction';
import { axiosInstance } from '../../constants/axiosInstance';
import { ACTION_TYPES } from '../ActionTypes/ActionTypes';
import { adminLogin } from './ProfileActions';
import { selectProgressBarState } from './ProgressBarActions';

export const sendOTPCode = (phoneNumber, navigate, message) => {
  return async (dispatch) => {
    try {
      await axiosInstance
        .post('/api/v1/user/sendotp', { phoneNumber: phoneNumber })
        .then((res) => {
          message.success('OTP Send to your Phone No');
          navigate('/auth/user/otp-verification');
        })
        .catch((err) => {
          const error = handleApiError(err);
          message.error(
            error.length > 0 ? error[0].message : 'Something went wrong',
          );
        });
    } catch (err) {}
  };
};

export const verifyOTPCode = (otp, navigate, message) => {
  return async (dispatch) => {
    try {
      await axiosInstance
        .post('/api/v1/user/verify-otp', { otp })
        .then((res) => {
          navigate('/');
        })
        .catch((err) => {
          const error = handleApiError(err);
          message.error(
            error.length > 0 ? error[0].message : 'Something went wrong',
          );
        });
    } catch (err) {}
  };
};

export const adminSignUp = (username, email, role, navigate, alert) => {
  return async (dispatch) => {
    try {
      dispatch(selectProgressBarState(true));
      const res = await axiosInstance.post('/api/v1/user/adminsignup', {
        fullName: username,
        email,
        roles: role,
      });
      if (res.data.success) {
        dispatch(selectProgressBarState(false));
        alert.show(res.data.message);
      } else {
        dispatch(selectProgressBarState(false));
        alert.show('Something Went Wrong');
      }
    } catch (err) {
      const error = handleApiError(err);
      alert.show(error.length > 0 ? error[0].message : 'Something went wrong');
    }
  };
};

export const userSignUp = (
  name,
  email,
  password,
  role,
  value,
  navigate,
  message,
) => {
  return async (dispatch) => {
    try {
      dispatch(selectProgressBarState(true));
      const res = await axiosInstance.post('/api/v1/user/signup', {
        fullName: name,
        email,
        password,
        role: role,
        phoneNumber: value,
      });
      if (res.data.success) {
        setTimeout(() => {
          dispatch(selectProgressBarState(false));
          dispatch(adminLogin(res.data.token));
          localStorage.setItem('token', res.data.token);
          dispatch(sendOTPCode(value, navigate, message));
        }, 500);
      } else {
        dispatch(selectProgressBarState(false));
        message.error('Something went wrong');
      }
    } catch (err) {
      dispatch(selectProgressBarState(false));
      const error = handleApiError(err);
      message.error(
        error.length > 0 ? error[0].message : 'Something went wrong',
      );
    }
  };
};

export const userSocialSignUp = (name, email, role, navigate, message) => {
  return async (dispatch) => {
    try {
      dispatch(selectProgressBarState(true));
      console.log('here');
      const res = await axiosInstance.post('/api/v1/user/usersocialsignup', {
        fullName: name,
        role: role,
        email,
      });
      if (res.data.success) {
        setTimeout(() => {
          dispatch(adminLogin(res.data.data.token));
          localStorage.setItem('token', res.data.data.token);
          message.success(res.data.message.toString());
          dispatch(selectProgressBarState(false));
          navigate('/');
        }, 500);
      } else {
        dispatch(selectProgressBarState(false));
        message.show('Something Went Wrong');
      }
    } catch (err) {
      const error = handleApiError(err);
      message.error(
        error.length > 0 ? error[0].message : 'Something went wrong',
      );
    }
  };
};

export const userLoginFun = (email, password, navigate, alert, targetUrl) => {
  return async (dispatch) => {
    try {
      dispatch(selectProgressBarState(true));
      const res = await axiosInstance.post('/api/v1/user/login', {
        email,
        password,
      });
      if (res.data.success) {
        setTimeout(() => {
          dispatch(adminLogin(res.data.data.token));
          localStorage.setItem('token', res.data.data.token);
          alert.show(res.data.message.toString());
          dispatch(selectProgressBarState(false));
          if (targetUrl) {
            navigate(targetUrl);
          } else {
            navigate('/');
          }
        }, 500);
      } else {
        dispatch(selectProgressBarState(false));
        alert.show(res.data.message.toString());
      }
    } catch (err) {
      const error = handleApiError(err);
      alert.show(error.length > 0 ? error[0].message : 'Something went wrong');
    }
  };
};

export const getAdminCreatedUsers = (alert) => {
  return async (dispatch) => {
    dispatch(selectProgressBarState(true));
    const res = await axiosInstance.get('/api/v1/user/getadmincreatedusers');
    if (res.data.success === true) {
      dispatch(selectProgressBarState(false));
      dispatch({
        type: ACTION_TYPES.GET_ADMIN_CREATED_USERS,
        payload: res.data.data,
      });
    } else {
      dispatch(selectProgressBarState(false));
      alert.show('No Message Found');
      dispatch({
        type: ACTION_TYPES.GET_ADMIN_CREATED_USERS,
        payload: [],
      });
    }
  };
};

export const getWebsitessContactedUsers = (alert) => {
  return async (dispatch) => {
    dispatch(selectProgressBarState(true));
    const res = await axiosInstance.get(
      '/api/v1/user/get-websites-contacted-users',
    );
    if (res.data.success === true) {
      dispatch(selectProgressBarState(false));
      dispatch({
        type: ACTION_TYPES.GET_WEBSITE_CONTACTED_USERS,
        payload: res.data.data,
      });
    } else {
      dispatch(selectProgressBarState(false));
      alert.show('Contacted Users Not Found');
      dispatch({
        type: ACTION_TYPES.GET_WEBSITE_CONTACTED_USERS,
        payload: [],
      });
    }
  };
};
export const getWebsitessUnContactedUsers = (alert) => {
  return async (dispatch) => {
    dispatch(selectProgressBarState(true));
    const res = await axiosInstance.get(
      '/api/v1/user/get-websites-uncontacted-users',
    );
    if (res.data.success === true) {
      dispatch(selectProgressBarState(false));
      dispatch({
        type: ACTION_TYPES.GET_WEBSITE_UNCONTACTED_USERS,
        payload: res.data.data,
      });
    } else {
      dispatch(selectProgressBarState(false));
      alert.show('No Message Found');
      dispatch({
        type: ACTION_TYPES.GET_WEBSITE_UNCONTACTED_USERS,
        payload: [],
      });
    }
  };
};

export const getSingleUser = (navigate, alert) => {
  return async (dispatch) => {
    dispatch(selectProgressBarState(true));
    try {
      const res = await axiosInstance.get('/api/v1/user/getsingleuser');
      if (res.data.success) {
        dispatch(selectProgressBarState(false));
        dispatch({
          type: ACTION_TYPES.GET_SINGLE_USER,
          payload: res.data.data,
        });
      } else {
        dispatch(selectProgressBarState(false));
        dispatch({
          type: ACTION_TYPES.GET_SINGLE_USER,
          payload: {},
        });
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        dispatch({
          type: ACTION_TYPES.GET_SINGLE_USER,
          payload: {},
        });
      } else {
        console.error(error);
      }
    }
  };
};

export const getSingleUserByID = (id) => {
  return async (dispatch) => {
    dispatch(selectProgressBarState(true));
    try {
      const res = await axiosInstance.get('/api/v1/user/getsingleuserbyid', {
        params: {
          id,
        },
      });
      if (res.data.success) {
        dispatch(selectProgressBarState(false));
        dispatch({
          type: ACTION_TYPES.GET_SINGLE_USER_BY_ID,
          payload: res.data.data,
        });
      } else {
        dispatch(selectProgressBarState(false));
        dispatch({
          type: ACTION_TYPES.GET_SINGLE_USER_BY_ID,
          payload: {},
        });
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        dispatch({
          type: ACTION_TYPES.GET_SINGLE_USER,
          payload: {},
        });
      } else {
        console.error(error);
      }
    }
  };
};

export const updateUser = (username, email, alert, update, setUpdate) => {
  return async (dispatch) => {
    try {
      dispatch(selectProgressBarState(true));
      const res = await axiosInstance.patch('/api/v1/user/updateuser', {
        fullName: username,
        email,
      });
      if (res.data.success) {
        dispatch(selectProgressBarState(false));
        alert.show(res.data.message);
        setUpdate(!update);
      } else {
        dispatch(selectProgressBarState(false));
        alert.show('Something Went Wrong');
        setUpdate(!update);
      }
    } catch (err) {
      const error = handleApiError(err);
      alert.show(error.length > 0 ? error[0].message : 'Something went wrong');
      setUpdate(!update);
    }
  };
};

export const updateAdminUser = (
  username,
  email,
  role,
  id,
  alert,
  update,
  setUpdate,
) => {
  return async (dispatch) => {
    try {
      dispatch(selectProgressBarState(true));
      const res = await axiosInstance.patch('/api/v1/user/updateuserbyid', {
        fullName: username,
        email,
        roles: role,
        id: id,
      });
      if (res.data.success) {
        dispatch(selectProgressBarState(false));
        alert.show(res.data.message);
        setUpdate(!update);
      } else {
        dispatch(selectProgressBarState(false));
        alert.show('Something Went Wrong');
        setUpdate(!update);
      }
    } catch (err) {
      const error = handleApiError(err);
      alert.show(error.length > 0 ? error[0].message : 'Something went wrong');
      setUpdate(!update);
    }
  };
};

export const updateSocial = (social, alert) => {
  return async (dispatch) => {
    try {
      dispatch(selectProgressBarState(true));
      const res = await axiosInstance.patch('/api/v1/user/updateuser', social);
      if (res.data.success) {
        dispatch(selectProgressBarState(false));
        alert.show(res.data.message);
      } else {
        dispatch(selectProgressBarState(false));
        alert.show('Something Went Wrong');
      }
    } catch (err) {
      const error = handleApiError(err);
      alert.show(error.length > 0 ? error[0].message : 'Something went wrong');
    }
  };
};

export const updateUserToContacted = (id, alert) => {
  return async (dispatch) => {
    try {
      console.log(id);
      dispatch(selectProgressBarState(true));
      const res = await axiosInstance.patch(
        '/api/v1/user/update-to-contacted',
        { id },
      );
      console.log(res, 'RESPONSE');
      if (res.data.success) {
        dispatch(selectProgressBarState(false));
        alert.show(res.data.message);
      } else {
        dispatch(selectProgressBarState(false));
        alert.show('Something Went Wrong');
      }
    } catch (err) {
      const error = handleApiError(err);
      alert.show(error.length > 0 ? error[0].message : 'Something went wrong');
    }
  };
};

export const changeUserPassword = (password, navigate, alert) => {
  return async (dispatch) => {
    dispatch(selectProgressBarState(true));
    const res = await axiosInstance.patch('/api/v1/user/changeUserPassword', {
      password,
    });
    if (res.data.success) {
      setTimeout(() => {
        alert.show('Password Succesfully Changed');
        dispatch(selectProgressBarState(false));
      }, 500);
    } else {
      dispatch(selectProgressBarState(false));
      alert.show('Something Went Wrong');
    }
  };
};
