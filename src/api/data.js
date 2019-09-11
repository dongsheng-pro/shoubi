import axios from '@/libs/api.request'

// export const getTableData = () => {
//   return axios.request({
//     url: 'get_table_data',
//     method: 'get'
//   })
// }

//获取错误信息列表 get
export const getErrorTableData = (pageSize,pageNum) => {
  return axios.request({
    url: 'Errorlogs',
    method: 'get',
    params: {
      pageSize,
      pageNum
    }
  })
}

//获取系统更新信息列表 get
export const getSystemTableData = (pageSize,pageNum) => {
  return axios.request({
    url: 'SystemLogs',
    method: 'get',
    params: {
      pageSize,
      pageNum
    }
  })
}


export const getDragList = () => {
  return axios.request({
    url: 'get_drag_list',
    method: 'get'
  })
}

export const errorReq = () => {
  return axios.request({
    url: 'error_url',
    method: 'post'
  })
}

export const saveErrorLogger = info => {
  return axios.request({
    url: 'Errorlogs',
    data: info,
    method: 'post'
  })
}

export const uploadImg = formData => {
  return axios.request({
    url: 'image/upload',
    data: formData
  })
}

export const getOrgData = () => {
  return axios.request({
    url: 'get_org_data',
    method: 'get'
  })
}

export const getTreeSelectData = () => {
  return axios.request({
    url: 'get_tree_select_data',
    method: 'get'
  })
}
