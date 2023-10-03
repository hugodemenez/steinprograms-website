import * as React from 'react';
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Text,
} from '@react-email/components';

interface ContactEmailProps {
  message?: string;
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  email?: string;
}

export const ContactEmailClient = ({
    message,
    firstName,
    lastName,
    phoneNumber,
    email
}: ContactEmailProps) => (
  <Html>
    <Head />
    <Preview>Contact summary</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>Hey {firstName}, we've received your message</Heading>
        <Text style={{ ...text, marginBottom: '14px' }}>
          {message}
        </Text>
        <Text style={footer}>
          <Link
            href="https://steinprograms.com"
            target="_blank"
            style={{ ...link, color: '#898989' }}
          >
            steinprograms.com
          </Link>
          , algorithms
          <br />
          to keep track of news
        </Text>
      </Container>
    </Body>
  </Html>
);


export const ContactEmailTeam = ({
  message,
  firstName,
  lastName,
  phoneNumber,
  email
}: ContactEmailProps) => (
<Html>
  <Head />
  <Preview>Message received from website</Preview>
  <Body style={main}>
    <Container style={container}>
      <Heading style={h1}>{firstName} {lastName} sent a message !</Heading>
      <Text style={{ ...text, marginBottom: '14px' }}>
        {message}
      </Text>
      <Link
          href={`mailto:${email}`}
          target="_blank"
          style={{
            ...link,
            display: 'block',
            marginBottom: '16px',
          }}
        >
          Click here to answer
        </Link>
      <Text style={footer}>
        or call {phoneNumber}
      </Text>

    </Container>
  </Body>
</Html>
);


const main = {
  backgroundColor: '#ffffff',
};

const container = {
  paddingLeft: '12px',
  paddingRight: '12px',
  margin: '0 auto',
};

const h1 = {
  color: '#333',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '24px',
  fontWeight: 'bold',
  margin: '40px 0',
  padding: '0',
};

const link = {
  color: '#2754C5',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '14px',
  textDecoration: 'underline',
};

const text = {
  color: '#333',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '14px',
  margin: '24px 0',
};

const footer = {
  color: '#898989',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '12px',
  lineHeight: '22px',
  marginTop: '12px',
  marginBottom: '24px',
};

const code = {
  display: 'inline-block',
  padding: '16px 4.5%',
  width: '90.5%',
  backgroundColor: '#f4f4f4',
  borderRadius: '5px',
  border: '1px solid #eee',
  color: '#333',
};