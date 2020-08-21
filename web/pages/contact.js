import s from '../sass/pages/contact.module.scss';
import PageTitle from '../components/PageTitle';
import { Form, Button } from 'react-bootstrap';

const contact = () => {
  return (
    <div className={s.contact}>
      <PageTitle title={'Contact Us'} />

      <div className={s['contact-form']}>
        <Form>
          <h2>Submit a comment</h2>
          <Form.Group controlId='formBasicEmail'>
            <Form.Label>Email address</Form.Label>
            <Form.Control type='email' placeholder='Enter email' />
          </Form.Group>

          <Form.Group controlId='formBasicPassword'>
            <Form.Label>Name</Form.Label>
            <Form.Control type='text' placeholder='Your Name' />
          </Form.Group>

          <Form.Group controlId='formBasicPassword'>
            <Form.Label>Comment</Form.Label>
            <Form.Control
              as='textarea'
              rows='10'
              placeholder='Leave your message here'
            />
          </Form.Group>

          <Button variant='light' size='lg' type='submit' block>
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default contact;
