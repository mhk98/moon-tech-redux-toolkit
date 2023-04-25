import instance from "../../utils/axios.config";


export const fetchProducts = async () => {
    const data = await instance.get("/products");


    return data.data.data;
}