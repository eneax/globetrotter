import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Billboard from '../components/billboard'
import { Container, ImageWrapper } from '../elements'

const About = ({ data }) => (
  <Layout>
    <SEO title="Chi Siamo" />

    <Billboard />

    <Container>
      <ImageWrapper>
        <Img
          fluid={data.profilePic.childImageSharp.fluid}
          alt="'Il vero viaggio non consiste nel vedere paesaggi nuovi, ma nell'avere occhi nuovi' - Marcel Proust"
        />
      </ImageWrapper>

      <p>Questa in sintesi la nostra filosofia del viaggio.</p>

      <p>
        Il <b>nostro mondo</b> è fatto di piccoli particolari, di luoghi
        esclusivi, di itinerari elaborati nei minimi dettagli, fatti di “lusso”
        o di “semplicità”, per farVi assaporare al meglio e vivere a fondo il
        luogo in cui Vi trovate.
      </p>

      <p>
        <b>Al Centro del Mondo * Viaggi e Turismo</b> nasce nel 2001, ma
        l’esperienza nel mondo del turismo proviene da molto più lontano: oltre
        30 anni tra studi e lavoro! Uno staff giovane ma intraprendente e molto
        esperto farà di ogni Vostro desiderio un <b>SOGNO CHE SI REALIZZA</b>.
      </p>

      <p>
        Grazie ad un team di veri e propri professionisti con approfondita
        padronanza delle diverse destinazioni, in grado di interpretare ogni
        singola richiesta come un’esperienza unica, con uno stile
        inconfondibile, è in grado di offrirVi consulenza tecnica a 360°.
      </p>

      <p>
        Chi del <b>“viaggio”</b> ne ha fatto più che una professione{' '}
        <b>“uno stile di vita”</b> sarà pronto ad accogliere ogni Vostra
        richiesta, elaborandola, trasformandola in un tutt’uno con la Vostra
        personalità come fosse un abito cucito addosso. La politica è quella di
        trasformare ognuno di Voi da turista in viaggiatore, amante e
        soprattutto conoscitore attento dei luoghi che si appresta a visitare;
        puntando lo sguardo sulla destinazione intesa come luogo da apprezzare,
        conoscere, ascoltare e soprattutto far entrare all’interno del proprio
        animo.
      </p>

      <p>
        Tutto questo e molto altro è <b>AL CENTRO DEL MONDO</b>.
      </p>
    </Container>
  </Layout>
)

export default About

export const query = graphql`
  query profilePic {
    profilePic: file(relativePath: { regex: "/frase.png/" }) {
      childImageSharp {
        fluid(maxWidth: 1240) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
