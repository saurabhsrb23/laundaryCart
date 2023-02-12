import React, { useContext, useReducer, useEffect } from "react";


const API = "http://localhost:8080/products"

const initializeState = {
    orders:[],
    _id: "",
    washtype: [],
    totalquantity: 0,
    orderdate: "",
    subtotalcost: 0,
    totalcost: 0,
    storelocation: "",
    phonenumber: 0,
    createdAt: "",
    updatedAt: ""
}
const AppContext = React.createContext();

const AppProvider = ({ child }) => {

    const [state, dispatch] = useReducer(reducer, initializeState)

    const fetchData = async (url) => {

        try {
            const res = await fetch(url);
            const data = await res.json()
            console.log(data)

        } catch (err) {
            console.log(err)
        }

    }
useEffect(()=>{
fetchData(API)
},[])

    return (
        <AppContext.Provider value={...state}>

            {child}
        </AppContext.Provider>

    )
};

const useGlobalContext=()=>{
    return useContext(AppContext);
}

export {AppProvider,AppContext,useGlobalContext};



