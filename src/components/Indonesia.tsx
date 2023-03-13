import { Row } from "antd"
import React, { useEffect, useState } from "react"
import NewsItem from "./NewsItem"
import axios from "axios"

const Indonesia = () => {
  const [articles, setArticles] = useState([])
  const apiURL = "https://newsapi.org/v2/top-headlines"
  const apiKey = "46210103a632483e8e9964030731c36c"

  useEffect(() => {
    const getArticle = async () => {
      const res = await axios.get(apiURL, {
        params: { country: "id", apiKey: apiKey },
      })
      setArticles(res.data.articles)
      console.log(res.data.articles)
    }

    getArticle()
  }, [])
  return (
    <>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        {articles.map((item, i) => (
          <NewsItem key={i} item={item} country="id" />
        ))}
      </Row>
    </>
  )
}

export default Indonesia
