import http from 'utils/http'

export const userProfile = async (id) => {
  try {
    return await http.get(`user/${id}`)
      .then(res => ({ data: res.data }))
  } catch (error) {
    return ({ status: 'error', msg: error.response.data.msg })
  }
}

export const searchInfluencers = async (name) => {
  try {
    return await http.get(`search/user?name=${name}`)
      .then(res => ({ data: res.data }))
  } catch (error) {
    return ({ status: 'error', msg: error.response.data.msg })
  }
}
