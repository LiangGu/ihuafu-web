// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 发送验证码 POST /api/workbench/getSDImg */
export async function getSDImg(
  params: {
    // query
    /** test */
    test?: string;
  },
  options?: { [key: string]: any },
) {
  return request<WORKBENCHAPI.SDImg>('/api/workbench/getSDImg', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
