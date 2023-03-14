import React, { createContext,useState } from "react";
export const IpContext = createContext(null);

export default function IpContextProvider(props) {
   const [ip, setIp] = useState("");
  const setIpAddress=(ip)=>{
    setIp(ip);
  }
  return <IpContext.Provider value={{ip,setIpAddress}}>{props.children}</IpContext.Provider>;
}
 