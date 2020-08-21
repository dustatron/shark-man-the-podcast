import React, { useState } from 'react';
import s from '../sass/pages/contact.module.scss';
import PageTitle from '../components/PageTitle';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const contact = () => {
  const initialState = { email: '', name: '', message: '' };
  const [data, setData] = useState(initialState);

  const handleChange = (e) => {
    const newData = { ...data, [e.target.name]: e.target.value };
    setData(newData);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const params = {
      user_id: `${process.env.emailJs}`,
      service_id: 'brotherhoodoftheshark',
      template_id: 'sharkman',
      template_params: {
        ...data,
      },
    };

    const options = {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(params),
    };
    await fetch('https://api.emailjs.com/api/v1.0/email/send', options)
      .then((res) => {
        if (res.ok) {
          alert('mail Sent');
          setData(initialState);
        } else {
          return res.text().then((text) => Promise.reject(text));
        }
      })
      .catch((err) => {
        console.error('Error' + err);
      });
  };

  return (
    <>
      <PageTitle title={'Contact Us'} />
      <div className={s.contact}>
        <div className={s['contact-form']}>
          <Form onSubmit={onSubmit}>
            <h2>Submit a comment</h2>
            <Form.Group controlId='formBasicEmail'>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type='email'
                name='email'
                value={data.email}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId='formBasicPassword'>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type='text'
                name='name'
                value={data.name}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId='formBasicPassword'>
              <Form.Label>Comment</Form.Label>
              <Form.Control
                as='textarea'
                rows='7'
                name='message'
                value={data.message}
                onChange={handleChange}
              />
            </Form.Group>

            <Button
              variant='outline-light'
              size='lg'
              size='lg'
              type='submit'
              block>
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default contact;
