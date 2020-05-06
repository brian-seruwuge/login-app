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
 function MenuBar(props) {
   return(
<Menu>
    <Container>
      <Menu.Item as="a" header>
        <Image
          size="small"
          src="/img/page/logo.svg"
        />
      </Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item as="a" name="login">
          Login
        </Menu.Item>
        <Menu.Item as="a" name="register">
          Register
        </Menu.Item>
      </Menu.Menu>
    </Container>
  </Menu>

)};

export default MenuBar;
