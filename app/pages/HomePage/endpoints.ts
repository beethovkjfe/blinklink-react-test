import request, { ResponseError } from 'utils/request';

export function getCountryData(): Promise<{} | { err: ResponseError }> {
  return request.GET({ endpoint: 'https://restcountries.com/v3.1/all' });
}

export function getSearchData(data: string): Promise<{} | { err: ResponseError }> {
  return request.GET({ endpoint: `https://restcountries.com/v3.1/name/${data}` });
}
