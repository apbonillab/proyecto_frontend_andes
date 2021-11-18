import { AxiosInstance } from "axios";

export  default interface IUseFetch{
    method:("get"|"post"|"put"),
    url: string, 
    data?:unknown
}