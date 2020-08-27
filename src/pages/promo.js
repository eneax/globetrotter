import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Billboard from '../components/billboard'
import PromoList from '../components/promoList'

import { Title, Container } from '../elements'

const Promo = () => (
  <Layout>
    <SEO title="Offerte" />

    <Billboard />

    <Container>
      <Title>Offerte</Title>
      <PromoList />
    </Container>
  </Layout>
)

export default Promo
