import axios from "axios"
export const commonapi=async(method,url,data)=>
{
    const reqconfig={
        method,
        url,
        data,
        Headers:{
            "Content-Type":"application/json"
        }
    }
    return await axios(reqconfig).then((result)=>
    {
        return result
    }).catch((err)=>
    {
        return err
    })
}