import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../Screen/LandingPage/index";
import BlogPage from "../Screen/BlogPage";
import {ArticleMain} from "../Screen/Articlemain";
import Finder from "../Components/finder";
import FinderOne from "../Components/finderOne";
import FinderTwo from "../Components/finderTwo";
import FinderThree from "../Components/finderThree";
import Ielts from "../Screen/Ielts";
import FinderFour from "../Components/finderFour";
import FinderFive from "../Components/finderFive";
import FinderSix from "../Components/finderSix";
import FinderSeven from "../Components/finderSeven";
import AboutUs from "../Screen/aboutus";
import Accommodation from "../Components/accommodation";
import AccommodationOne from "../Components/AccommodationOne";
import AccommodationTwo from "../Components/AccommodationTwo";
import Scholarships from "../Components/Scholarships";
import ScholarshipsOne from "../Components/ScholarshipsOne";
import ScholarshipsTwo from "../Components/ScholarshipsTwo";
import ScholarshipsThree from "../Components/ScholarshipsThree";
import ContactUs from "../Screen/contactUs";
import ErrorPage from "../Screen/404Page";
import Login from "../Components/login/Login";
import SendOtp from "../Screen/otp/sendOtp";
import Signup from "../Components/login/SignUp";
import ForgetPassword from "../Components/login/ForgetPassword";
import ChangePassword from "../Components/login/ChangePassword";
import { Profile } from "../Components/profile/Profile";
import Layout from "../Components/layout/Layout";


function MainRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/sign-up" element={<Signup />}></Route>
      <Route path="/otp-verification" element={<SendOtp />}></Route>
      <Route path="/reset-password" element={<ForgetPassword />}></Route>
      <Route path="/confirm-password/:token" element={<ChangePassword />} />
      <Route path="*" element={<ErrorPage />}></Route>
      <Route path="/not-found" element={<ErrorPage />}></Route>

      
      <Route path="/finder" element={<Finder />}></Route>
      <Route path="/finderOne" element={<FinderOne />}></Route>
      <Route path="/finderTwo" element={<FinderTwo />}></Route>
      <Route path="/finderThree" element={<FinderThree />}></Route>
      <Route path="/finderFour" element={<FinderFour />}></Route>
      <Route path="/finderFive" element={<FinderFive />}></Route>
      <Route path="/finderSix" element={<FinderSix />}></Route>
      <Route path="/finderSeven" element={<FinderSeven />}></Route>

      
      <Route path="/accommodation" element={<Accommodation />}></Route>
      <Route path="/accommodationOne" element={<AccommodationOne />}></Route>
      <Route path="/accommodationTwo" element={<AccommodationTwo />}></Route>

      <Route path="/scholarships" element={<Scholarships />}></Route>
      <Route path="/scholarshipsOne" element={<ScholarshipsOne />}></Route>
      <Route path="/scholarshipsTwo" element={<ScholarshipsTwo />}></Route>
      <Route path="/scholarshipsThree" element={<ScholarshipsThree />}></Route>
      
      <Route path="/" element={<Layout />}> 
          <Route index path="/" element={<LandingPage />}></Route>
          <Route path="/blogs" element={<BlogPage />}></Route>
          <Route path="/blog/:url" element={<ArticleMain />}></Route>
          
          <Route path="/profile" element={<Profile />}></Route>

          <Route path="/ielts" element={<Ielts />}></Route>
          <Route path="/about-us" element={<AboutUs />}></Route>
          
          <Route path="/contact-us" element={<ContactUs />}></Route>
      </Route>
    </Routes>
  );
}

export default MainRoutes;
