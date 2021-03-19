import React, { useState } from 'react';
import data from './data.json'
import Section from './components/Section'
import { Container, Card, Row, Form, Image } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const App = () => {
  const { t, i18n } = useTranslation();
  let [selectedOption, setSelectedOption] = useState("en")

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.id)
  }

  return (
    <Container className="p-3">
      <Row className="mb-2 justify-content-center" ><Image src="assets/logo.jpg" /></Row>
      <Form.Row className="justify-content-center">
        <Form.Group onChange={(event) => i18n.changeLanguage(event.target.id)}>
          <Form.Check
            inline
            type="radio"
            label="English"
            name="languages"
            id="en"
            checked={selectedOption === 'en'}
            onChange={handleOptionChange}
          />
          <Form.Check
            inline
            type="radio"
            label="Deutsch"
            name="languages"
            id="de"
            checked={selectedOption === 'de'}
            onChange={handleOptionChange}
          />
        </Form.Group>
      </Form.Row>
      <Card className="p-3 shadow mb-5 bg-white">
        <Card.Body>
          <Card.Title className="mb-4">{t('heading:title', "HOME AND AREA")}</Card.Title>
          <Row>
            <Section data={data} />
          </Row>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default App;
