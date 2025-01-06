import http from 'utils/http'

export const createBid = async ({ cents, questionId, userId }) => {
  const response = await http.post(`make/pledge/${questionId}`, { cents, userId })
  return response.data
}

export const updateBid = async ({ cents, questionId, userId }) => {
  const response = await http.patch(`edit/pledge/${questionId}/${userId}`, { cents })
  return response.data
}

export const questionPledges = async (questionId, page = 1) => {
  try {
    return await http.get('bids/question', { params: { questionId, page } })
      .then(res => ({ bids: res.data }))
  } catch (error) {
    return ({ status: 'error', msg: error.response.data.msg })
  }
}

export const deleteBid = async ({ id }) => {
  const response = await http.delete(`delete/pledge/${id}`)
  console.log(response.data)
  return response.data
}
