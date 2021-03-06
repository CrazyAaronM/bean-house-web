import request from '@/utils/request'

export function getHouseInfo(params) {
  return request({
    url: 'api/beadHouseInfo',
    method: 'get',
    params
  })
}

export function add(data) {
  return request({
    url: 'api/beadHouseInfo',
    method: 'post',
    data
  })
}

export function del(ids) {
  return request({
    url: 'api/beadHouseInfo/',
    method: 'delete',
    data: ids
  })
}

export function edit(data) {
  return request({
    url: 'api/beadHouseInfo',
    method: 'put',
    data
  })
}

export default { add, edit, del }
