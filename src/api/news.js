import axios from '@/libs/api.request'

export const GetSNews = (pageSize, pageNum) => {
    return axios.request({
        url: 'SNews',
        method: 'get',
        params: {
            pageSize,
            pageNum
        }
    })
}

//获取 匹配ID
export const GetSNewsID = (req) => {
    return axios.request({
        url: 'SNews/' + req,
        method: 'get'
    })
}

//更新单条数据
export const PutSNews = (paramsstr, Id) => {
    const data = paramsstr
    return axios.request({
        url: 'SNews/' + Id,
        data,
        method: 'put'
    })
}

//添加
export const PostSNews = (paramsstr) => {
    const data = paramsstr
    return axios.request({
        url: 'SNews',
        data,
        method: 'post'
    })
}

//删除
export const DeleteSNews = (req) => {
    return axios.request({
        url: 'SNews/' + req,
        method: 'delete'
    })
}
