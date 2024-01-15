import axios from "axios";

const fetchData=async (url) =>{
    try{
        const response = await axios.get(url);
        const data = response.data;
        return data;
    }
    catch(err){
        return false;
    }
}

export default fetchData;