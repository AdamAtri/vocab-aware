import { AxiosRequestConfig } from "axios";
import { WORD_API_KEY } from '../../config/api';

export class WordsRequest {
  private static _defaultValues:AxiosRequestConfig = {  
    // `method` is the request method to be used when making the request
    method: 'get', // default
  
    // `baseURL` will be prepended to `url` unless `url` is absolute.
    // It can be convenient to set `baseURL` for an instance of axios to pass relative URLs
    // to methods of that instance.
    baseURL: 'https://wordsapiv1.p.rapidapi.com/words',
  
    // `headers` are custom headers to be sent
    headers: {
      "x-rapidapi-key": WORD_API_KEY,
    },
  
    // `timeout` specifies the number of milliseconds before the request times out.
    // If the request takes longer than `timeout`, the request will be aborted.
    timeout: 1000, // default is `0` (no timeout)    
  
    // `responseType` indicates the type of data that the server will respond with
    // options are: 'arraybuffer', 'document', 'json', 'text', 'stream'
    //   browser only: 'blob'
    responseType: 'json', // default    
  
  }

  public static makeRequest(overrides?:AxiosRequestConfig):AxiosRequestConfig {
    return Object.assign({}, WordsRequest._defaultValues, overrides || {}) as AxiosRequestConfig;
  }

}