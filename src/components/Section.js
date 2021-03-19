import React from 'react';
import Details from '../components/Detail'
import { Col, Image } from 'react-bootstrap';

const Section = ({ data }) => {
  return (
    <>
      {
        Object.keys(data).map((title, index) => {
          return (
            <Col key={ index } md={4}>
              <Image src={`assets/${title}.jpg`} className="mb-4" />
              {data[title].map((item, index) => {
                  return <Details key={index} id={ index } details={item} column={title} />
                })}
            </Col>
          )
        })
      }
    </>
  )
};

export default Section;
