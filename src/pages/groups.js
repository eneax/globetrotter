import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Billboard from '../components/billboard'
import GroupList from '../components/groupList'
import { Title, Container } from '../elements'


const Group = () => (
  <Layout>
    <SEO title="Viaggi di Gruppo" />

    <Link to="/" title="Home" style={{ textDecoration: 'none' }}>
      <Billboard />
    </Link>

    <Container>
      <Title>Viaggi di Gruppo</Title>
      <GroupList />
    </Container>
  </Layout>
)


export default Group
