import { AxiosInstance } from "axios";

export  default interface IUseFetch{
    api:AxiosInstance,
    method:("get"|"post"|"put"),
    url: string, 
    data?:unknown
}