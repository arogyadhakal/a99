import { useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../context/AuthUserContext';
import {Container, Row, Col, Button, Form, FormGroup, Label, Input, Alert} from 'reactstrap';
import { addUser } from '../lib/useFirebaseDatabase'

import styles from '../styles/Account.module.css'
import Head from 'next/head'
import Header from '../lib/header'


const SignUp = () => {
  const [email, setEmail] = useState("");
  const [passwordOne, setPasswordOne] = useState("");
  const [passwordTwo, setPasswordTwo] = useState("");
  const [name, setName] = useState("");
  const router = useRouter();
  const [error, setError] = useState(null);
  const { authUser, loading, createUserWithEmailAndPassword } = useAuth();
  const remainder = authUser || loading;

  const onSubmit = event => {
    setError(null)
    //check if passwords match. If they do, create user in Firebase
    // and redirect to your logged in page.
    if(passwordOne === passwordTwo)
      createUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        console.log("Success. The user is created in Firebase");
        addUser(authUser.user.providerData.uid, name, email);
        router.push("/class");
      })
      .catch(error => {
        // An error occurred. Set error message to be displayed to user
        setError(error.message)
      });
    else
      setError("Password do not match")
    event.preventDefault();
  };

  return (
    <div className={styles.html}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
            </Head>
            <div className={styles.body}>
            <Header pageTitle="Register"></Header>

                <Container className={styles.logBox}>
                  <Row className={styles.input}>
                    <Col className={styles.center}>
                      <Form
                        className="custom-form"
                        onSubmit={onSubmit}>
                        { error && <Alert color="danger">{error}</Alert>}
                        <FormGroup row>
                          <Label for="signUpEmail" sm={4} className={styles.text}>Email</Label>
                          <Col sm={8}>
                            <Input
                              className={styles.Email}
                              type="email"
                              value={email}
                              onChange={(event) => setEmail(event.target.value)}
                                       name="email"
                              id="signUpEmail"
                              placeholder="Email" />
                          </Col>
                        </FormGroup>
                        <FormGroup row>
                          <Label for="signUpPassword" sm={4} className={styles.text}>Password</Label>
                          <Col sm={8}>
                            <Input
                              className={styles.Email}
                              type="password"
                              name="passwordOne"
                              value={passwordOne}
                              onChange={(event) => setPasswordOne(event.target.value)}
                              id="signUpPassword"
                              placeholder="Password" />
                          </Col>
                        </FormGroup>
                        <FormGroup row>
                          <Label for="signUpPassword2" sm={4} className={styles.text}>Confirm Password</Label>
                          <Col sm={8}>
                            <Input
                              className={styles.Email}
                              type="password"
                              name="password"
                              value={passwordTwo}
                              onChange={(event) => setPasswordTwo(event.target.value)}
                              id="signUpPassword2"
                              placeholder="Password" />
                          </Col>
                        </FormGroup>
                        <FormGroup row>
                          <Col>
                            <Button className={styles.button}>Sign Up</Button>
                          </Col>
                        </FormGroup>
                      </Form>
                    </Col>
                  </Row>
                </Container>  
            </div>
        </div>
    
  )
}

export default SignUp;