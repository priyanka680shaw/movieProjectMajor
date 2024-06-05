
import axios from 'axios'
export const ApiFetch = async(url , data) => {
  try{
    const resultData = await axios.get(url , data);
    return resultData;
  }
  catch(error){
    return (console.log(error))
  }
}
