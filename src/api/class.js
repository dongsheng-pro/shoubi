import axios from '@/libs/api.request'

export const GetSNewsClasses = (pageSize, pageNum) => {
    return axios.request({
        url: 'SNewsClasses',
        method: 'get',
        params: {
            pageSize,
            pageNum
        }
    })
}

//获取 匹配ID
export const GetSNewsClassesID = (req) => {
    return axios.request({
        url: 'SNewsClasses/' + req,
        method: 'get'
    })
}

//更新单条数据
export const PutSNewsClasses = (paramsstr, Id) => {
    const data = paramsstr
    return axios.request({
        url: 'SNewsClasses/' + Id,
        data,
        method: 'put'
    })
}

//添加
export const PostSNewsClasses = (paramsstr) => {
    const data = paramsstr
    return axios.request({
        url: 'SNewsClasses',
        data,
        method: 'post'
    })
}

//删除
export const DeleteSNewsClasses = (req) => {
    return axios.request({
        url: 'SNewsClasses/' + req,
        method: 'delete'
    })
}
