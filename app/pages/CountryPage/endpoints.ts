import request, { ResponseError } from 'utils/request';

export function getSingleData(data: string): Promise<{} | { err: ResponseError }> {
  return request.GET({ endpoint: `https://restcountries.com/v3.1/alpha/${data}` });
}
