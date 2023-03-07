import axios from "axios"
import React, { useState, useEffect } from "react"
import NewsItem from "./NewsItem"
import { Row } from "antd"
import newsApi, { country } from "./api/newsApi"

const NewsList = (props) => {
  const [articles, setArticles] = useState([])
  const apiURL = "https://newsapi.org/v2/top-headlines/sources"
  const apiKey = "46210103a632483e8e9964030731c36c"

  useEffect(() => {
    const getList = async () => {
      let response = null

      switch (props.country) {
        case country.indonesia:
          response = await newsApi.getIndonesiaNews()
          break

        default:
          country.unitedStates
          response = await newsApi.getUnitedStatesNews()
          break
      }
      console.log(response)
      setArticles(response.articles)
    }
    getList()
  }, [])

  return (
    <>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        {articles.map((item, i) => (
          <div key={i}>
            <NewsItem item={item} country={props.country} />
          </div>
        ))}
      </Row>
    </>
  )
}

export default NewsList
