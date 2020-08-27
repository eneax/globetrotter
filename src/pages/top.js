import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Billboard from '../components/billboard'
import TopList from '../components/topList'

import { Title, Container } from '../elements'

const Top = () => (
  <Layout>
    <SEO title="Top Tours" />

    <Billboard />

    <Container>
      <Title>Top Tours</Title>
      <TopList />
    </Container>
  </Layout>
)

export default Top
