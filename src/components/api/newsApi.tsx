import axiosClient from "./axiosClient"

export const country = { indonesia: "id", unitedStates: "us" }
const apiKey = "46210103a632483e8e9964030731c36c"

const newsApi = {
  getIndonesiaNews: () => {
    const url = ""
    return axiosClient.get(url + "/top-headlines", {
      params: { country: "id", apiKey: apiKey },
    })
  },
  getUnitedStatesNews: () => {
    const url = ""
    return axiosClient.get(url + "/top-headlines", {
      params: { country: "us", apiKey: apiKey },
    })
  },
  getEverythingNews: () => {
    const url = ""
    return axiosClient.get(url + "/everything", {
      params: { apiKey: apiKey },
    })
  },
}

export default newsApi
