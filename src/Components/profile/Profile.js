import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUniversityFinders } from "../../redux/Actions/UniversityFinderAction";

export const Profile = () => {

    const dispatch = useDispatch();

    const { universityFinders } = useSelector(
        (state) => state.universityFinderReducer
    )

    useEffect(() => {
        dispatch(getUniversityFinders());
    }, [])

    return (
        <>
            <div className="cart-area pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <form action="#">
                                <div className="mb-2">
                                    <p className="test-text23">Find University</p>
                                    <h1 className="hear-text">Find University Near you</h1>
                                </div>
                                <div className="table-content table-responsive">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                            <th className="product-thumbnail"></th>
                                            <th className="product-thumbnail">Country</th>
                                            <th className="product-thumbnail">Degree</th>
                                            <th className="product-thumbnail">Field</th>
                                            <th className="product-thumbnail">Education Degree / Marks (%)</th>
                                            <th className="product-thumbnail">Intake</th>
                                            <th className="product-thumbnail">English Test / Bands</th>
                                            <th className="product-thumbnail">Apptitude Test / Bands</th>
                                            <th className="product-thumbnail">Work Experience</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {universityFinders.map((finder, index) => (
                                                <tr>
                                                    <td className="product-thumbnail">
                                                        <span className="amount">
                                                            {index + 1}
                                                        </span>
                                                    </td>
                                                    <td className="product-thumbnail">
                                                        <span className="amount">
                                                            {finder.country}
                                                        </span>
                                                    </td>
                                                    <td className="product-name">
                                                        <span className="amount">
                                                            {finder.degree}
                                                        </span>
                                                    </td>
                                                    <td className="product-name">
                                                        <span className="amount">
                                                            {finder.field}
                                                        </span>
                                                    </td>
                                                    <td className="product-name">
                                                        <span className="amount">
                                                            {finder.education.degree} / {finder.education.marks ? finder.education.marks : 0} 
                                                        </span>
                                                    </td>
                                                    <td className="product-name">
                                                        <span className="amount">
                                                            {finder.intake} 
                                                        </span>
                                                    </td>
                                                    <td className="product-name">
                                                        <span className="amount">
                                                            {finder.englishTest.testName} / {finder.englishTest.bands ? finder.englishTest.bands : 0} 
                                                        </span>
                                                    </td>
                                                    <td className="product-name">
                                                        <span className="amount">
                                                            {finder.apptitudeTest.testName} / {finder.apptitudeTest.bands ? finder.apptitudeTest.bands : 0} 
                                                        </span>
                                                    </td>
                                                    <td className="product-name">
                                                        <span className="amount">
                                                            {finder.workExperience.isExperience ?
                                                                <>
                                                                    {finder.workExperience.yearsOfExperience} {" Year of Experience"}
                                                                </>
                                                                :
                                                                <>
                                                                    {"Don't have any experience"}
                                                                </>
                                                            }
                                                        </span>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}