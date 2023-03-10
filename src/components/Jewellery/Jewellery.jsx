import React from 'react'
import TripleImage from '../Home/TripleImage/TripleImage'
import Title from '../commons/Title/Title'
import J9 from './img/3.jpg';
import J1 from './img/4.jpg';
import J10 from './img/5.jpg';
import img1 from './img/img1.webp'
import img2 from './img/img2.webp'
import img3 from './img/img3.webp'
import HomeContent from '../Home/HomeContent/HomeContent';
import Enquire from '../commons/Enquire/Enquire';
const Jewellery = () => {
  return (
    <><div>
      <Title title="Luxury Jewellary" />
      <TripleImage image1={J10} image2={J1} image3={J9} />
      <Title title="Our Collection" />
      <HomeContent heading="SIGNATURE COLLECTION" content="Signature Collection features astonishing cuts, styles, and designs that bring out the inimitable beauty of every diamond embedded in the jewelry. Our spirit of innovation enables us to perceive inspiring and tasteful designs that showcase creativity and sophistication. Whether you prefer to make a traditional or a classy style statement, our creations are sure to resonate with the special moments in your life." image={img1} />
      <HomeContent heading="SIGNATURE COLLECTION" content="Signature Collection features astonishing cuts, styles, and designs that bring out the inimitable beauty of every diamond embedded in the jewelry. Our spirit of innovation enables us to perceive inspiring and tasteful designs that showcase creativity and sophistication. Whether you prefer to make a traditional or a classy style statement, our creations are sure to resonate with the special moments in your life." image={img2} />
      <HomeContent heading="SIGNATURE COLLECTION" content="Signature Collection features astonishing cuts, styles, and designs that bring out the inimitable beauty of every diamond embedded in the jewelry. Our spirit of innovation enables us to perceive inspiring and tasteful designs that showcase creativity and sophistication. Whether you prefer to make a traditional or a classy style statement, our creations are sure to resonate with the special moments in your life." image={img3} />
    </div><Enquire /></>
  )
}

export default Jewellery