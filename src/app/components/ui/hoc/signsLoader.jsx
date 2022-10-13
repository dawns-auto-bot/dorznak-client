import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadSigns, getSignsLoadingStatus } from "../../../../store/signs";
import Loader from "../../common/table/loader";
const SignsLoader = ({ children }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadSigns());
    }, [dispatch]);

    const loading = useSelector(getSignsLoadingStatus());
    if (loading) return <Loader />;
    return children;
};
export default SignsLoader;
