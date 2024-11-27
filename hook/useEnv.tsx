import axios from "axios";
import { API } from "./useEnv"; 

export const useAxios = () => axios.create(API); 
