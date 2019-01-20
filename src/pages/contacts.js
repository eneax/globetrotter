import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Billboard from '../components/billboard'
import { Container, Title, ExternalLink, HeadingThree } from '../elements'
import { above } from '../utils'


export const ContactsWrapper = styled.div`
	border-top-style: solid; 
  border-top-width: 1px;
  border-bottom-style: solid; 
  border-bottom-width: 1px;
  border-color: rgba(0,0,0,.1);
`

export const ContactsContentWrapper = styled.div`
	display: block;
  color: #000;
  padding: 2rem 1rem;
  ${above.laptop`
    padding-right: 0;
    padding-left: 0;
  `}
  text-decoration: none;
`

export const Row = styled.div`
	display: flex;
  flex-direction: column;
  ${above.tablet`
    flex-direction: row;
  `}
`

export const Col = styled.div`
  width: 100%;
  ${HeadingThree};

  p {
    font-size: .875rem;
    ${above.laptop`
      font-size: 1.25rem;
    `}
    line-height: 1.5;
    margin-bottom: .5rem;
  }

  ${ExternalLink};
`

export const ColOne = styled(Col)`
  margin-bottom: 2rem;
  ${above.tablet`
    width: 40%;
    margin-bottom: 0;
    padding-right: 1rem;
  `}
`

export const ColTwo = styled(Col)`
  ${above.tablet`
    width: 60%;
    padding-left: 1rem;
    text-align: right;
  `}
`

export const LastCol = styled(Col)`
  ${above.tablet`
    text-align: center;    
  `}
`


const Contact = () => (
  <Layout>
    <SEO title="Contatti" />

    <Link to="/" title="Home" style={{ textDecoration: 'none' }}>
      <Billboard />
    </Link>
    
    <Container>
      <Title>Contatti</Title>

      <ContactsWrapper>
        <ContactsContentWrapper>
          <Row>
            <ColOne>
              <HeadingThree>Via Pasubio, 30/32</HeadingThree>
              <p>53043 Chiusi Scalo (SI)</p>
              <ExternalLink href="tel:+39 0578 21971">Tel. +39 0578 21971</ExternalLink>
              <ExternalLink href="tel:+39 0578 21975">Fax +39 0578 21975</ExternalLink>
            </ColOne>
            <ColTwo>
              <HeadingThree>Filiale: Viale Roma, 35</HeadingThree>
              <p>53042 Chianciano Terme (SI)</p>
              <ExternalLink href="tel:+39 0578 62003" >Tel. +39 0578 62003</ExternalLink>
              <ExternalLink href="tel:+39 0578 62563" >Fax +39 0578 62563</ExternalLink>
            </ColTwo>
          </Row>
        </ContactsContentWrapper>
      </ContactsWrapper>


      <ContactsWrapper>
        <ContactsContentWrapper>
          <Row>
            <ColOne>
              <HeadingThree>Orari di apertura</HeadingThree>
              <p>Dal Lunedì al Sabato</p>
              <p>Dalle 9:00 alle 13:00</p>
              <p>Dalle 16:00 alle 19:00</p>
              <ExternalLink href="mailto:info@alcentrodelmondo.it">info@alcentrodelmondo.it</ExternalLink>
            </ColOne>
            <ColTwo>
              <HeadingThree>Direzione tecnica</HeadingThree>
              <ExternalLink href="mailto:direzione@alcentrodelmondo.it">direzione@alcentrodelmondo.it</ExternalLink>
            </ColTwo>
          </Row>
        </ContactsContentWrapper>
      </ContactsWrapper>


      <ContactsWrapper>
        <ContactsContentWrapper>
          <Row>
            <ColOne>
              <HeadingThree>Ufficio Gruppi</HeadingThree>
              <ExternalLink href="mailto:direzione@alcentrodelmondo.it">direzione@alcentrodelmondo.it</ExternalLink>
              <ExternalLink href="mailto:sabrina@alcentrodelmondo.it">sabrina@alcentrodelmondo.it</ExternalLink>
              <ExternalLink href="mailto:federico@alcentrodelmondo.it">federico@alcentrodelmondo.it</ExternalLink>
              <ExternalLink href="mailto:mondidiversi@alcentrodelmondo.it">mondidiversi@alcentrodelmondo.it</ExternalLink>
            </ColOne>
            <ColTwo>
              <HeadingThree>Ufficio amministrazione</HeadingThree>
              <ExternalLink href="mailto:samanta@alcentrodelmondo.it">samanta@alcentrodelmondo.it</ExternalLink>
              <ExternalLink href="mailto:federico@alcentrodelmondo.it">federico@alcentrodelmondo.it</ExternalLink>
            </ColTwo>
          </Row>
        </ContactsContentWrapper>
      </ContactsWrapper>


      <ContactsWrapper>
        <ContactsContentWrapper>
          <Row>
            <LastCol>
              <HeadingThree>Viaggi individuali - Viaggi di nozze - Crociere</HeadingThree>
              <ExternalLink href="mailto:manolina@alcentrodelmondo.it">manolina@alcentrodelmondo.it</ExternalLink>
              <ExternalLink href="mailto:alessandra@alcentrodelmondo.it">alessandra@alcentrodelmondo.it</ExternalLink>
              <ExternalLink href="mailto:manuela@alcentrodelmondo.it">manuela@alcentrodelmondo.it</ExternalLink>
              <ExternalLink href="mailto:federico@alcentrodelmondo.it">federico@alcentrodelmondo.it</ExternalLink>
            </LastCol>
          </Row>
        </ContactsContentWrapper>
      </ContactsWrapper>
    </Container>
  </Layout>
)

export default Contact
