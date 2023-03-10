import React from 'react'
import Title from '../commons/Title/Title'
import HomeContent from '../Home/HomeContent/HomeContent'
import img1 from './img/1.jpg'
import img2 from './img/2.jpg'
import img3 from './img/3.jpg'
import Enquire from '../commons/Enquire/Enquire';
const Services = () => {
  return (
    <><div>
      <Title title="Our Services" />
      <HomeContent image={img1} heading="IMPORT-EXPORT" content="We export our diamond to around 50 countries including USA, Europe, South Africa, Gulf and Middle-Ease. Our partners and customers are present acroos the globe." />
      <HomeContent image={img1} heading="CUTTING DIAMONDS" content="We export our diamond to around 50 countries including USA, Europe, South Africa, Gulf and Middle-Ease. Our partners and customers are present acroos the globe." />
      <HomeContent image={img1} heading="DIAMOND-DESIGN" content="We export our diamond to around 50 countries including USA, Europe, South Africa, Gulf and Middle-Ease. Our partners and customers are present acroos the globe." />
    </div><Enquire /></>
  )
}

export default Services