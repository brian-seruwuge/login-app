import React, { Component } from 'react';
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
  Icon,
  Modal,
  Image,
  Menu,
  Container
} from 'semantic-ui-react';
 function LoginSem(props) {
   return(
    <Form>
    <Form.Field>
      <label>Email Address</label>
      <input placeholder="Email Address" />
    </Form.Field>
    <Form.Field>
      <label>Password</label>
      <input placeholder="Password" />
    </Form.Field>
    <Button type="submit">Submit</Button>
  </Form>

)};

export default LoginSem;


