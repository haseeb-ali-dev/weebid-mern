import http from 'utils/http'

export const createQuestion = async (message, receiverId, senderId) => {
  try {
    return await http.post(`ask/user/${receiverId}`, { message, senderId })
      .then(res => ({ status: 'success', msg: res.data.msg, data: res.data.data }))
  } catch (error) {
    return ({ status: 'error', msg: error.response.data.msg })
  }
}

export const allQuestions = async (page) => {
  const { data: { count, rows: data } } = await http.get(`app?page=${page}`)
  return { data, count }
}

export const profileQuestions = async (receiverId, page = 1) => {
  try {
    return await http.get('questions/user', { params: { receiverId, page } })
      .then(res => ({ data: res.data.rows, count: res.data.count }))
  } catch (error) {
    return ({ status: 'error', msg: error.response.data.msg })
  }
}

export const getQuestion = async (questionId) => {
  const response = await http.get(`question/${questionId}`)
  return response.data
}
