import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Billboard from '../components/billboard'
import PromoList from '../components/promoList'
import { Title, Container } from '../elements'


const Promo = () => (
  <Layout>
    <SEO title="Offerte" />

    <Link to="/" title="Home" style={{ textDecoration: 'none' }}>
      <Billboard />
    </Link>

    <Container>
      <Title>Offerte</Title>
      <PromoList />
    </Container>
  </Layout>
)


export default Promo
