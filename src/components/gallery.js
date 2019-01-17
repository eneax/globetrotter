import React from 'react'
import Img from 'gatsby-image'

class Gallery extends React.Component {    
  render() {
    const { images } = this.props
    return (
      <>
        {images.map((img, i) => (
          <Img 
            key={i}
            fluid={img.node.childImageSharp.fluid}   
          />
        ))}
      </>
    );
  }
}

export default Gallery








// import React from 'react'
// import Img from 'gatsby-image'

// class Gallery extends React.Component {    
//   render() {
//     const { images } = this.props
//     return (
//       <>
//         {images.map((img, i) => (
//           <Img 
//             key={i}
//             fluid={img.node.childImageSharp.fluid}   
//           />
//         ))}
//       </>
//     );
//   }
// }

// export default Gallery
