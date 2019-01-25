import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Billboard from '../components/billboard'
import TopList from '../components/topList'
import { Title, Container } from '../elements'


const Top = () => (
  <Layout>
    <SEO title="Top Tours" />

    <Link to="/" title="Home" style={{ textDecoration: 'none' }}>
      <Billboard />
    </Link>

    <Container>
      <Title>Top Tours</Title>
      <TopList />
    </Container>
  </Layout>
)

export default Top
