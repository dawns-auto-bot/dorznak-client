import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    loadCurrentSign,
    getCurrentSignsLoadingStatus,
} from "../../../../store/signs";
import { useParams } from "react-router";
import Loader from "../../common/table/loader";
const SignLoader = ({ children }) => {
    const dispatch = useDispatch();
    const { id } = useParams();
    useEffect(() => {
        dispatch(loadCurrentSign(id));
    }, []);

    const loading = useSelector(getCurrentSignsLoadingStatus());

    if (loading) {
        return <Loader />;
    }
    return children;
};
export default SignLoader;
