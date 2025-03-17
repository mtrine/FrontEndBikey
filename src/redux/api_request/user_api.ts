import axiosInstance from "../../axios/axios.interceptor";
import { getErrorMessage } from "../../utils/errorMessage";
import { getUserFailure, getUserStart, getUserSuccess } from "../slice/userSlice";

export const getUser = async(dispatch:any)=>{
    dispatch(getUserStart());
    try{
        const res = await axiosInstance.get('/v1/users/get-my-info')
        console.log(res.data);
        dispatch(getUserSuccess(res.data));

    }catch(err:any){
        const errorCode = err.response?.data?.code;
        console.log(errorCode) 
        dispatch(getUserFailure());
    }
}