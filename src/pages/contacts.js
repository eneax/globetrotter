import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Billboard from '../components/billboard'
import { Container, Title } from '../elements'
import { above, avenir } from '../utils'



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

export const ColOne = styled.div`
  width: 100%;
  margin-bottom: 2rem;
  ${above.tablet`
    width: 40%;
    margin-bottom: 0;
    padding-right: 1rem;
  `}

  h3 {
    ${avenir};
    font-size: 1rem;
    ${above.tablet`
      font-size: 1.5rem;
    `}
    margin-top: 0;
    line-height: 1.25;
  }

  p {
    font-size: .875rem;
    ${above.laptop`
      font-size: 1.25rem;
    `}
    line-height: 1.5;
    margin-bottom: .5rem;
  }

  a {
    display: block;
    font-size: .875rem;
    ${above.laptop`
      font-size: 1.25rem;
    `}
    line-height: 1.25;
    margin-top: .5rem;
    margin-bottom: .5rem;
    color: #00449E;

    /* link */
    text-decoration: none;
    transition: color .15s ease-in;
    &:link, 
    &:visited {
      transition: color .15s ease-in;
    }
    &:hover {
      transition: color .15s ease-in;
    }
    &:active {
      transition: color .15s ease-in;
    }
    &:focus {
      transition: color .15s ease-in;
      outline: 1px dotted currentColor;
    }
    &:hover,
    &:focus {
      text-decoration: underline;
    }
    &:nth-child(2) {
      margin-top: 0;
      margin-bottom: 0;
    }
  }
`


export const ColTwo = styled.div`
  width: 100%;
  ${above.tablet`
    width: 60%;
    padding-left: 1rem;
    text-align: right;
  `}

  h3 {
    ${avenir};
    font-size: 1rem;
    ${above.tablet`
      font-size: 1.5rem;
    `}
    margin-top: 0;
    line-height: 1.25;
  }

  p {
    font-size: .875rem;
    ${above.laptop`
      font-size: 1.25rem;
    `}
    line-height: 1.5;
    margin-bottom: .5rem;
  }

  a {
    display: block;
    font-size: .875rem;
    ${above.laptop`
      font-size: 1.25rem;
    `}
    line-height: 1.25;
    margin-top: .5rem;
    margin-bottom: .5rem;
    color: #00449E;

    /* link */
    text-decoration: none;
    transition: color .15s ease-in;
    &:link, 
    &:visited {
      transition: color .15s ease-in;
    }
    &:hover {
      transition: color .15s ease-in;
    }
    &:active {
      transition: color .15s ease-in;
    }
    &:focus {
      transition: color .15s ease-in;
      outline: 1px dotted currentColor;
    }
    &:hover,
    &:focus {
      text-decoration: underline;
    }
    &:nth-child(2) {
      margin-top: 0;
      margin-bottom: 0;
    }
  }
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
              <h3>Via Pasubio, 30/32</h3>
              <p>53043 Chiusi Scalo (SI)</p>
              <a href="tel:+39 0578 21971">Tel. +39 0578 21971</a>
              <a href="tel:+39 0578 21975">Fax +39 0578 21975</a>
            </ColOne>
            <ColTwo>
              <h3>Filiale: Viale Roma, 35</h3>
              <p>53042 Chianciano Terme (SI)</p>
              <a href="tel:+39 0578 62003" >Tel. +39 0578 62003</a>
              <a href="tel:+39 0578 62563" >Fax +39 0578 62563</a>
            </ColTwo>
          </Row>
        </ContactsContentWrapper>
      </ContactsWrapper>


      <ContactsWrapper>
        <ContactsContentWrapper>
          <Row>
            <ColOne>
              <h3 >Orari di apertura</h3>
              <p>Dal Lunedì al Sabato</p>
              <p>Dalle 9:00 alle 13:00</p>
              <p>Dalle 16:00 alle 19:00</p>
              <a href="mailto:info@alcentrodelmondo.it">info@alcentrodelmondo.it</a>
            </ColOne>
            <ColTwo>
              <h3>Direzione tecnica</h3>
              <a href="mailto:direzione@alcentrodelmondo.it">direzione@alcentrodelmondo.it</a>
            </ColTwo>
          </Row>
        </ContactsContentWrapper>
      </ContactsWrapper>


      <ContactsWrapper>
        <ContactsContentWrapper>
          <Row>
            <ColOne>
              <h3>Ufficio Gruppi</h3>
              <a href="mailto:direzione@alcentrodelmondo.it">direzione@alcentrodelmondo.it</a>
              <a href="mailto:sabrina@alcentrodelmondo.it">sabrina@alcentrodelmondo.it</a>
              <a href="mailto:federico@alcentrodelmondo.it">federico@alcentrodelmondo.it</a>
              <a href="mailto:mondidiversi@alcentrodelmondo.it">mondidiversi@alcentrodelmondo.it</a>
            </ColOne>
            <ColTwo>
              <h3>Ufficio amministrazione</h3>
              <a href="mailto:samanta@alcentrodelmondo.it">samanta@alcentrodelmondo.it</a>
              <a href="mailto:federico@alcentrodelmondo.it">federico@alcentrodelmondo.it</a>
            </ColTwo>
          </Row>
        </ContactsContentWrapper>
      </ContactsWrapper>


      <ContactsWrapper>
        <ContactsContentWrapper>
          <Row>
            <ColOne>
              <h3>Viaggi individuali - Viaggi di nozze - Crociere</h3>
              <a href="mailto:manolina@alcentrodelmondo.it">manolina@alcentrodelmondo.it</a>
              <a href="mailto:alessandra@alcentrodelmondo.it">alessandra@alcentrodelmondo.it</a>
              <a href="mailto:manuela@alcentrodelmondo.it">manuela@alcentrodelmondo.it</a>
              <a href="mailto:federico@alcentrodelmondo.it">federico@alcentrodelmondo.it</a>
            </ColOne>
          </Row>
        </ContactsContentWrapper>
      </ContactsWrapper>
    </Container>
  </Layout>
)

export default Contact
