import envConfig from "@/src/config/envConfig"

 export const getResentPost = async () =>{
    const res = await fetch(`${envConfig.baseUrl}/items?sortBy=-createdAt&limit=9`)
    return res.json()
}