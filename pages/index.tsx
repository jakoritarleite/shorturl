import { styled } from '../stitches.config';
import type { NextPage } from 'next';
import { useState } from 'react';
import copy from 'copy-to-clipboard';
import { createShort } from '../lib/api';
import Navbar from '../components/Navbar';

const MouseIcon = () => (
  <Icon
    width="52"
    height="52"
    viewBox="0 0 52 52"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    css={{
      width: '52px',
      height: '52px',
      position: 'absolute',
      right: '20px',
      bottom: '-10px'
    }}
  >
    <path
      d="M17.7258 17.7258L27.672 48.6398L34.6613 41.6505L43.3979 50.3871L50.3871 43.3979L41.6505 34.6613L48.6398 27.672L17.7258 17.7258Z"
      fill="white"
    />
    <path
      d="M18.9355 5.62903V2M9.40482 9.40482L6.83871 6.83871M9.40482 28.6129L6.83871 31.179M28.6129 9.40482L31.179 6.83871M5.62903 18.9355H2M17.7258 17.7258L27.672 48.6398L34.6613 41.6505L43.3979 50.3871L50.3871 43.3979L41.6505 34.6613L48.6398 27.672L17.7258 17.7258Z"
      stroke="black"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Icon>
);

const Home: NextPage = () => {
  const [url, setUrl] = useState<string>();
  const [status, setStatus] = useState<
    'NORMAL' | 'LOADING' | 'SUCCESS' | 'FAILED'
  >('NORMAL');

  async function handleShortUrl() {
    setStatus('LOADING');

    try {
      const data = await createShort(url!);

      const copied = copy(data.short_url, { debug: true });
      if (!copied) setStatus('FAILED');

      setStatus('SUCCESS');
    } catch (error) {
      console.error(error);

      setStatus('FAILED');
    }

    setTimeout(() => setStatus('NORMAL'), 3000);
  }

  return (
    <>
      <Navbar />
      <Container>
        <PresentationContainer>
          <Presentation>
            Short your urls with the{' '}
            <PresentationDifferentColorText>
              {' '}
              power
              <MouseIcon />
            </PresentationDifferentColorText>{' '}
            of one click.
          </Presentation>
        </PresentationContainer>

        <FormContainer>
          <Input
            placeholder="https://google.com"
            onChange={event => setUrl(event.target.value)}
          />
          <Button onClick={handleShortUrl} disabled={!url}>
            <Icon
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              css={
                status == 'LOADING'
                  ? { animation: 'loading-spinner 2s linear infinite' }
                  : {}
              }
            >
              <path
                strokeWidth="2"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
                d={
                  {
                    NORMAL:
                      'M21 12V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V12M16 7L12 3M12 3L8 7M12 3V15',
                    LOADING:
                      'M12 2V6M12 18V22M6 12H2M22 12H18M19.0784 19.0784L16.25 16.25M19.0784 4.99994L16.25 7.82837M4.92157 19.0784L7.75 16.25M4.92157 4.99994L7.75 7.82837',
                    SUCCESS:
                      'M22 11.0857V12.0057C21.9988 14.1621 21.3005 16.2604 20.0093 17.9875C18.7182 19.7147 16.9033 20.9782 14.8354 21.5896C12.7674 22.201 10.5573 22.1276 8.53447 21.3803C6.51168 20.633 4.78465 19.2518 3.61096 17.4428C2.43727 15.6338 1.87979 13.4938 2.02168 11.342C2.16356 9.19029 2.99721 7.14205 4.39828 5.5028C5.79935 3.86354 7.69279 2.72111 9.79619 2.24587C11.8996 1.77063 14.1003 1.98806 16.07 2.86572M22 4L12 14.01L9 11.01',
                    FAILED:
                      'M12 8V12M12 16H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z'
                  }[status]
                }
              />
            </Icon>
          </Button>
        </FormContainer>
      </Container>
    </>
  );
};

export default Home;

const Container = styled('div', {
  width: '40%',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '80px',
  margin: 'auto',
  '@xl': {
    width: '60%'
  },
  '@lg': {
    width: '70%'
  },
  '@md': {
    width: '80%'
  },
  '@sm': {
    width: '90%'
  }
});

const PresentationContainer = styled('div', {
  width: '100%',
  position: 'relative'
});

const PresentationDifferentColorText = styled('span', {
  color: '#0088FF',
  position: 'relative'
});

const Presentation = styled('h1', {
  fontFamily: 'Inter',
  fontSize: '60px',
  fontWeight: 900,
  textAlign: 'center',
  '@sm': {
    fontSize: '40px'
  }
});

const FormContainer = styled('div', {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  gap: '15px',
  position: 'relative'
});

const Input = styled('input', {
  width: '70%',
  backgroundColor: 'rgba(0, 0, 0, .1)',
  color: 'rgba(0, 0, 0, .4)',
  padding: '20px',
  paddingInline: '30px',
  fontSize: '20px',
  fontWeight: 700,
  outline: 'none',
  border: 'none',
  borderRadius: '100px',
  transition: 'filter $duration ease-in-out',
  '&:hover, :focus': {
    filter: 'drop-shadow(1px 2px 8px #99EEFF);'
  }
});

const Button = styled('button', {
  backgroundColor: '#000000',
  padding: '20px',
  fontSize: '20px',
  outline: 'none',
  border: 'none',
  borderRadius: '100px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  transition: 'filter $duration ease-in-out',
  '&:hover, :focus': {
    filter: 'drop-shadow(1px 2px 4px rgba(0, 0, 0, .5));'
  }
});

const Icon = styled('svg', {
  width: '24px',
  height: '24px'
});
