import axios from "axios";

const apiItems = "http://localhost:5000/api/items";


export const ApiItems = axios.create({

  
  baseURL:apiItems
});
