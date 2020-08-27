import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { Title, Container, InternalLink } from '../elements'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Container style={{ marginTop: '4rem', paddingBottom: '15rem' }}>
      <Title style={{ paddingRight: 0, paddingLeft: 0 }}>NOT FOUND</Title>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <InternalLink to="/">Go back to the homepage</InternalLink>
    </Container>
  </Layout>
)

export default NotFoundPage
