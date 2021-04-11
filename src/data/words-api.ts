/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosResponse } from 'axios';
import { WordsRequest } from './request';


export async function getWordDef(word:string):Promise<AxiosResponse<any>> {
  try {
    const requestConfig = WordsRequest.makeRequest();
    const result = await axios.get(`/${word}`, requestConfig);
    return result;
  } catch (error) {
    console.error(error);
  }
  return null as any;
}