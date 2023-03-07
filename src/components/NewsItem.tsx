import { Card, Col, Empty, Typography } from "antd"
import React from "react"
import { country } from "./api/newsApi"

const { Paragraph, Title, Text } = Typography
const { Meta } = Card

const NewsItem = (props: { item: any; country: string | number }) => {
  const item = props.item
  const link = country[props.country]
  return (
    <Col style={{ padding: "1rem" }}>
      <a href={item.url}>
        <Card
          hoverable
          style={{ width: 350, height: 350 }}
          cover={
            item.urlToImage ? (
              <img
                src={item.urlToImage}
                alt="Cover Images"
                style={{
                  height: 200,
                  width: 350,
                  objectFit: "contain",
                }}
              />
            ) : (
              <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
            )
          }
        >
          <Meta
            title={<Text>{item.title}</Text>}
            description={<Text ellipsis>{item.description}</Text>}
          />
        </Card>
      </a>
    </Col>
  )
}

export default NewsItem
