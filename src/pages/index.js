import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Billboard from '../components/billboard'
import Gallery from '../components/gallery'
import homeLinks from '../data/homeData'

import { above, avenir } from '../utils'


const HomeWrapper = styled.div`
  padding-top: .5rem;

  margin-right: auto;
  margin-left: auto;

  &:before, &:after {
    content: " ";
    display: table;
  }
  &:after {
    clear: both;
  }
  & {
    *zoom: 1;
  }
`

const HomeImageWrapper = styled.div`
  border: 1px solid rebeccapurple;

  float: left;  
  _display: inline;
  width: 100%;
  ${above.mobileL`
    width: 50%;
  `}
  padding: .5rem .25rem;

  overflow: hidden;
  position: relative;
`

const Headings = styled.div`
  position: relative;
  z-index: 2;


  /* background: linear-gradient(to bottom, rgba(0, 0, 0, .5), rgba(0, 0, 0, .5));
  transition: .5s ease;
  &:hover { opacity: .8; } */


  text-align: center;
  padding-top: 4rem;
  padding-bottom: 4rem;
  ${above.laptop`
    padding-top: 16rem;
    padding-bottom: 16rem;
  `}

  h3 {
    color: #000;
    ${avenir};
    font-size: 1rem;
    font-weight: 400;
    text-transform: uppercase;

    ${above.laptop`
      font-size: 2.25rem;
    `}
  }
`




const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

      <Billboard />

      <HomeWrapper>
        {
          homeLinks.map(({ id, name, i }) => (
            <Link to={`/${id}`} key={id} >

              <HomeImageWrapper>
                <Headings>
                  <h3>{name}</h3>
                </Headings>

                <Gallery images={data.covers.edges} />

              </HomeImageWrapper>

            </Link>
          ))
        }
      </HomeWrapper>

    </Layout>
  )
}

export default IndexPage


export const pageQuery = graphql`
  query imageQuery {
    covers: allFile(filter: { absolutePath: {regex : "\/covers/"} }) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 1240) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`    









































// import React from 'react'
// import { Link, graphql } from 'gatsby'
// import styled from 'styled-components'

// import Layout from '../components/layout'
// import SEO from '../components/seo'
// import Billboard from '../components/billboard'
// import Gallery from '../components/gallery'
// import homeLinks from '../data/homeData'

// import { above, avenir } from '../utils'


// const HomeWrapper = styled.div`
//   padding-top: .5rem;

//   margin-right: auto;
//   margin-left: auto;

//   &:before, &:after {
//     content: " ";
//     display: table;
//   }
//   &:after {
//     clear: both;
//   }
//   & {
//     *zoom: 1;
//   }
// `

// const HomeImageWrapper = styled.div`
//   border: 1px solid rebeccapurple;

//   float: left;  
//   _display: inline;
//   width: 100%;
//   ${above.mobileL`
//     width: 50%;
//   `}
//   padding: .5rem .25rem;

//   overflow: hidden;
//   position: relative;
// `

// const Headings = styled.div`
//   position: relative;
//   z-index: 2;


//   /* background: linear-gradient(to bottom, rgba(0, 0, 0, .5), rgba(0, 0, 0, .5));
//   transition: .5s ease;
//   &:hover { opacity: .8; } */


//   text-align: center;
//   padding-top: 4rem;
//   padding-bottom: 4rem;
//   ${above.laptop`
//     padding-top: 16rem;
//     padding-bottom: 16rem;
//   `}

//   h3 {
//     color: #000;
//     ${avenir};
//     font-size: 1rem;
//     font-weight: 400;
//     text-transform: uppercase;

//     ${above.laptop`
//       font-size: 2.25rem;
//     `}
//   }
// `




// const IndexPage = ({ data }) => {
//   return (
//     <Layout>
//       <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

//       <Billboard />

//       <HomeWrapper>
//         {
//           homeLinks.map(({ id, name, i }) => (
//             <Link to={`/${id}`} key={id} >

//               <HomeImageWrapper>
//                 <Headings>
//                   <h3>{name}</h3>
//                 </Headings>

//                 <Gallery images={data.covers.edges} />

//               </HomeImageWrapper>

//             </Link>
//           ))
//         }
//       </HomeWrapper>

//     </Layout>
//   )
// }

// export default IndexPage


// export const pageQuery = graphql`
//   query imageQuery {
//     covers: allFile(filter: { absolutePath: {regex : "\/covers/"} }) {
//       edges {
//         node {
//           childImageSharp {
//             fluid(maxWidth: 1240) {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//       }
//     }
//   }
// `    
