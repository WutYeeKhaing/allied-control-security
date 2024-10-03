import React from 'react'
import img1 from '../Assets/img1.png'
import img2 from '../Assets/img2.png'
import img3 from '../Assets/img3.png'
import img4 from '../Assets/img4.png'
import img5 from '../Assets/img5.png'
import img6 from '../Assets/img6.png'
import img7 from '../Assets/img7.png'
import img8 from '../Assets/img8.png'
import img9 from '../Assets/img9.png'
const serviceData = [
  {
    id: 1,
    imgSrc: img1, 
    title: (
      <>
        Event Security<br />
        Guards
      </>
    ),
    description: (
      <>
        Professional security for your<br />
        events
      </>
    ),
  },
  {
    id: 2,
    imgSrc: img2,
    title: (
      <>
        Armed & Unarmed<br />
        Security
      </>
    ),
    description: (
      <>
        Flexible security options
        to suit <br /> needs
      </>
    ),
  },
  {
    id: 3,
    imgSrc: img3,
    title: (
      <>
        Residential/ Multifamily 
        <br />Security
      </>
    ),
    description: (
      <>
        Protecting homes and
        residential <br />complexes
      </>
    ),
  },
  {
    id: 4,
    imgSrc: img4,
    title: (
      <>
        Construction Site<br />
        Security
      </>
    ),
    description: (
      <>
        Safeguarding your
        construction <br />sites
      </>
    ),
  },
  {
    id: 5,
    imgSrc: img5,
    title: (
      <>
        Parking Lot<br />
        Security
      </>
    ),
    description: (
      <>
        Ensuring safety in
        parking areas.
      </>
    ),
  },
  {
    id: 6,
    imgSrc: img6,
    title: (
      <>
        Private
        Security
      </>
    ),
    description: (
      <>
        Personalized protection
        for <br /> individuals
      </>
    ),
  },
  {
    id: 7,
    imgSrc: img7,
    title: (
      <>
        Mobile Patrol<br />
        Security
      </>
    ),
    description: (
      <>
        Regular patrols for
        enhanced<br /> security
      </>
    ),
  },
  {
    id: 8,
    imgSrc: img8,
    title: (
      <>
        Firewatch
        Security
      </>
    ),
    description: (
      <>
        Preventing and
        monitoring fire<br /> hazards
      </>
    ),
  },
  {
    id: 9,
    imgSrc: img9,
    title: (
      <>
        Commercial /
        <br /> Retail
        Security
      </>
    ),
    description: (
      <>
        Securing businesses and
        retail<br /> spaces
      </>
    ),
  },
];

const ServiceSection = () => {

  return (
    <section className="py-16">
    <div className="container mx-auto text-center mb-12">
      <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Services</h2>
      <p className="text-lg text-custom-gray">Your safety is our priority. Here's why you can trust us.</p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto">
      {serviceData.map(({ id, imgSrc, title, description }) => (
        <div key={id} className="flex flex-col items-center bg-white p-4 rounded">
          <img src={imgSrc} alt={title} className="w-16 h-16 object-cover mb-4" />
          <h4 className="text-xl font-semibold mb-2 w-[254px] h-[64px] break-words">{title}</h4>
          <p className="text-custom-gray w-[296px] h-[56px] break-words">{description}</p>
        </div>
      ))}
    </div>
  </section>
  )
}

export default ServiceSection