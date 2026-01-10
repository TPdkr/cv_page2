import { createContext, useState, useContext, useEffect } from 'react';
  
const MyContext = createContext();

export const getCheck = () => {
    return useContext(MyContext);
};

async function checkCountry(){
    try{
        //data is fetched
        const response = await fetch('https://api.country.is/');
        const data = await response.json();
        const country = data.country;

        console.log("data fetched successfully");

        console.log(country);
        //results are checked
        const banned = ["RU", "BY"];
        return !banned.includes(country);

    } catch (error){
        console.error("Geolocation error uwu, try again later :3", error);
        return false
    }
}

export const MyContextProvider = ({ children }) => {
    const [isSafe, setSafeState] = useState("not set");

    useEffect(()=>{
        if (isSafe === "not set"){
            checkCountry().then((safety)=>{
                if(!safety){
                    console.log("you are banned sucker");
                }
                setSafeState(safety)
            });
        }
    },[]);

    return (
        <MyContext.Provider value={{ isSafe }}>
        {children}
        </MyContext.Provider>
    );
};