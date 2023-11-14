import axios from "axios";

const url = process.env.REACT_APP_URL;
console.log(url);

const login = axios.create({
  baseURL: `${url}/auth/login`,
});
login.interceptors.request.use(
  (req) => {
    return req;
  },
  (err) => {
    return Promise.reject(err);
  }
);

const logout = axios.create({
  baseURL: `${url}/auth/register`,
});
logout.interceptors.request.use(
  (req) => {
    return req;
  },
  (err) => {
    return Promise.reject(err);
  }
);
const users = axios.create({
  baseURL: `${url}/users`,
});
users.interceptors.request.use(
  (req) => {
    return req;
  },
  (err) => {
    return Promise.reject(err);
  }
);
const course = axios.create({
  baseURL: `${url}/course`,
});
users.interceptors.request.use(
  (req) => {
    return req;
  },
  (err) => {
    return Promise.reject(err);
  }
);
const payment = axios.create({
  baseURL: `${url}/payment`,
});
users.interceptors.request.use(
  (req) => {
    return req;
  },
  (err) => {
    return Promise.reject(err);
  }
);
const blog = axios.create({
  baseURL: `${url}/blog`,
});
users.interceptors.request.use(
  (req) => {
    return req;
  },
  (err) => {
    return Promise.reject(err);
  }
);
const contactUs = axios.create({
  baseURL: `${url}/contactUs`,
});
users.interceptors.request.use(
  (req) => {
    return req;
  },
  (err) => {
    return Promise.reject(err);
  }
);
const accommodation = axios.create({
  baseURL: `${url}/accommodation`,
});
users.interceptors.request.use(
  (req) => {
    return req;
  },
  (err) => {
    return Promise.reject(err);
  }
);
const sendOtp = axios.create({
  baseURL: `${url}/otp`,
});
sendOtp.interceptors.request.use(
  (req) => {
    return req;
  },
  (err) => {
    return Promise.reject(err);
  }
);
const verifyOtp = axios.create({
  baseURL: `${url}/verifyotp`,
});
verifyOtp.interceptors.request.use(
  (req) => {
    return req;
  },
  (err) => {
    return Promise.reject(err);
  }
);
export {
  login,
  users,
  course,
  payment,
  blog,
  contactUs,
  accommodation,
  sendOtp,
  verifyOtp,
};
