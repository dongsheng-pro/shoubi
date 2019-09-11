import axios from '@/libs/api.request'

export const GetSBanner = (pageSize, pageNum) => {
    return axios.request({
        url: 'SBanners',
        method: 'get',
        params: {
            pageSize,
            pageNum
        }
    })
}

//获取 匹配ID
export const GetSBannerID = (req) => {
    return axios.request({
        url: 'SBanners/' + req,
        method: 'get'
    })
}

//更新单条数据
export const PutSBanner = (paramsstr, Id) => {
    const data = paramsstr
    return axios.request({
        url: 'SBanners/' + Id,
        data,
        method: 'put'
    })
}

//添加
export const PostSBanner = (paramsstr) => {
    const data = paramsstr
    return axios.request({
        url: 'SBanners',
        data,
        method: 'post'
    })
}

//删除
export const DeleteSBanner = (req) => {
    return axios.request({
        url: 'SBanners/' + req,
        method: 'delete'
    })
}
