import React from 'react';
import Details from '../components/Detail'
import { Image } from 'react-bootstrap';

const Section = ({ data }) => {
  return (
    <>
      {
        Object.keys(data).map((title, index) => {
          return (
            <div key={index} className="col-md-4">
              <Image src={`assets/${title}.jpg`} className="mb-4" alt={ title }/>
              {data[title].map((item, index) => {
                  return <Details key={index} id={ index } details={item} column={title} />
                })}
            </div>
          )
        })
      }
    </>
  )
};

export default Section;
