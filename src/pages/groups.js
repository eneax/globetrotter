import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Billboard from '../components/billboard'
import GroupList from '../components/groupList'

import { Title, Container } from '../elements'

const Group = () => (
  <Layout>
    <SEO title="Viaggi di Gruppo" />

    <Billboard />

    <Container>
      <Title>Viaggi di Gruppo</Title>
      <GroupList />
    </Container>
  </Layout>
)

export default Group
