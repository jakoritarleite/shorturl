import { useState } from 'react';
import { styled } from '../stitches.config';

type NavItem = {
  name: string;
  href: string;
};

export default function Navbar() {
  const navItems: Array<NavItem> = [
    { name: 'Source', href: 'https://github.com/jakoritarleite/shorturl' },
    { name: 'Documentation', href: 'https://docs.aprade.com/shorturl/' },
    { name: 'Twitter', href: 'https://twitter.com/koritarsa' },
    { name: 'Donate', href: 'https://github.com/jakoritarleite/shorturl' }
  ];

  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <Header>
      <LogoContainer>
        <Logo>
          <Icon
            width="41"
            height="42"
            viewBox="0 0 41 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20.3914 0.608643C31.6532 0.608643 40.7827 9.73811 40.7827 20.9999C40.7827 32.2618 31.6532 41.3913 20.3914 41.3913C9.12949 41.3913 0 32.2618 0 20.9999C0 9.73811 9.12949 0.608643 20.3914 0.608643ZM40 20.9999C40 10.1704 31.2209 1.39126 20.3914 1.39126C19.5178 1.39126 18.6577 1.44838 17.8143 1.55909C18.3592 1.51145 18.9106 1.48713 19.4678 1.48713C29.816 1.48713 38.2049 9.87601 38.2049 20.2242C38.2049 30.5723 29.816 38.9612 19.4678 38.9612C9.67081 38.9612 1.62999 31.4423 0.801163 21.8602C1.25141 32.2906 9.84995 40.6086 20.3914 40.6086C31.2209 40.6086 40 31.8295 40 20.9999ZM37.4222 20.2242C37.4222 10.3082 29.3838 2.26976 19.4678 2.26976C18.6627 2.26976 17.8699 2.32276 17.0928 2.42545C17.5713 2.38519 18.0554 2.36465 18.5443 2.36465C27.9789 2.36465 35.6271 10.0129 35.6271 19.4474C35.6271 28.882 27.9789 36.5302 18.5443 36.5302C9.62363 36.5302 2.30002 29.6925 1.52865 20.9723C1.92084 30.5413 9.80245 38.1786 19.4678 38.1786C29.3838 38.1786 37.4222 30.1401 37.4222 20.2242ZM18.5443 3.14728C27.5466 3.14728 34.8445 10.4451 34.8445 19.4474C34.8445 28.4497 27.5466 35.7475 18.5443 35.7475C9.75055 35.7475 2.58317 28.7839 2.25582 20.0702C2.96257 27.9352 9.57186 34.0991 17.6209 34.0991C26.1412 34.0991 33.0484 27.192 33.0484 18.6716C33.0484 10.1512 26.1412 3.24412 17.6209 3.24412C17.1801 3.24412 16.7436 3.26261 16.3122 3.29884C17.042 3.19891 17.7871 3.14728 18.5443 3.14728ZM32.2657 18.6716C32.2657 10.5835 25.709 4.02675 17.6209 4.02675C16.9375 4.02675 16.265 4.07355 15.6066 4.16413C15.9661 4.13599 16.3295 4.12166 16.6963 4.12166C24.3031 4.12166 30.4696 10.2881 30.4696 17.8949C30.4696 25.5016 24.3031 31.6681 16.6963 31.6681C9.53662 31.6681 3.65291 26.2052 2.986 19.2203C3.27453 27.0542 9.71635 33.3165 17.6209 33.3165C25.709 33.3165 32.2657 26.7598 32.2657 18.6716ZM16.6963 4.90428C23.8708 4.90428 29.6869 10.7204 29.6869 17.8949C29.6869 25.0694 23.8708 30.8855 16.6963 30.8855C9.66309 30.8855 3.93535 25.2963 3.71241 18.3173C4.31454 24.4475 9.48433 29.2371 15.7728 29.2371C22.466 29.2371 27.8918 23.8112 27.8918 17.1181C27.8918 10.425 22.466 4.99917 15.7728 4.99917C15.4659 4.99917 15.1616 5.01058 14.8604 5.033C15.4602 4.94816 16.0731 4.90428 16.6963 4.90428ZM27.1092 17.1181C27.1092 10.8572 22.0337 5.7818 15.7728 5.7818C15.2013 5.7818 14.6397 5.82409 14.0909 5.90571C14.3414 5.88777 14.5943 5.87864 14.8494 5.87864C20.6283 5.87864 25.3131 10.5634 25.3131 16.3423C25.3131 22.1213 20.6283 26.806 14.8494 26.806C9.43412 26.806 4.97972 22.6925 4.44039 17.4197C4.60028 23.5412 9.61276 28.4545 15.7728 28.4545C22.0337 28.4545 27.1092 23.379 27.1092 17.1181ZM14.8494 6.66127C20.1961 6.66127 24.5304 10.9956 24.5304 16.3423C24.5304 21.6891 20.1961 26.0234 14.8494 26.0234C9.57063 26.0234 5.27871 21.7987 5.17032 16.546C5.65795 20.9499 9.3919 24.375 13.9259 24.375C18.7912 24.375 22.7353 20.4309 22.7353 15.5656C22.7353 10.7003 18.7912 6.75616 13.9259 6.75616C13.7398 6.75616 13.5551 6.76193 13.3719 6.7733C13.8536 6.69953 14.347 6.66127 14.8494 6.66127ZM21.9527 15.5656C21.9527 11.1325 18.359 7.53879 13.9259 7.53879C13.4807 7.53879 13.044 7.57503 12.6185 7.64472C12.7453 7.63804 12.8729 7.63466 13.0014 7.63466C16.953 7.63466 20.1565 10.8381 20.1565 14.7898C20.1565 18.7415 16.953 21.945 13.0014 21.945C9.34738 21.945 6.33315 19.206 5.89967 15.6692C5.95517 20.0546 9.52735 23.5924 13.9259 23.5924C18.359 23.5924 21.9527 19.9987 21.9527 15.5656ZM13.0014 8.41728C16.5208 8.41728 19.3739 11.2703 19.3739 14.7898C19.3739 18.3093 16.5208 21.1623 13.0014 21.1623C9.48186 21.1623 6.62878 18.3093 6.62878 14.7898C6.62878 14.7814 6.6288 14.7729 6.62883 14.7645C6.99525 17.4465 9.29521 19.513 12.0779 19.513C15.1154 19.513 17.5778 17.0506 17.5778 14.0131C17.5778 10.9755 15.1154 8.51317 12.0779 8.51317C12.0092 8.51317 11.9408 8.51442 11.8727 8.51692C12.239 8.45145 12.6162 8.41728 13.0014 8.41728ZM16.7951 14.0131C16.7951 11.4078 14.6832 9.29579 12.0779 9.29579C9.47255 9.29579 7.36055 11.4078 7.36055 14.0131C7.36055 16.6183 9.47255 18.7303 12.0779 18.7303C14.6832 18.7303 16.7951 16.6183 16.7951 14.0131Z"
              fill="#1A1414"
            />
          </Icon>
          shorturl
        </Logo>

        <MenuButton onClick={() => setShowMenu(state => !state)}>
          <Icon
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            css={{ width: '28px', height: '28px' }}
          >
            <path
              d={
                showMenu
                  ? 'M21 7L7 21M7 7L21 21'
                  : 'M3.5 14H24.5M3.5 7H24.5M10.5 21H24.5'
              }
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Icon>
        </MenuButton>
      </LogoContainer>

      <Nav
        css={
          showMenu
            ? { visibility: 'visible', height: 'calc(100vh - 80px)' }
            : {}
        }
      >
        <List>
          {navItems.map((item, index) => (
            <ListItem key={index}>
              <a href={item.href} target="_blank" rel="noreferrer">
                {item.name}
              </a>
            </ListItem>
          ))}
        </List>
      </Nav>
    </Header>
  );
}

const Header = styled('header', {
  boxSizing: 'border-box',
  background: 'white',
  position: 'fixed',
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingInline: '50px',
  paddingTop: '25px',
  paddingBottom: '25px',
  zIndex: '10',
  '@md': { alignItems: 'flex-start', flexWrap: 'wrap' }
});

const LogoContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  '@md': {
    width: '100%',
    zIndex: '15'
  }
});

const Logo = styled('div', {
  textTransform: 'uppercase',
  fontSize: '24px',
  fontWeight: 900,
  display: 'flex',
  height: 'fit-content',
  gap: '15px',
  alignItems: 'center'
});

const Icon = styled('svg', {
  width: '40px',
  height: '40px'
});

const Nav = styled('nav', {
  backgroundColor: 'white',
  '@md': {
    display: 'flex',
    position: 'absolute',
    visibility: 'hidden',
    top: '80px',
    right: '0',
    width: '100%',
    height: 0,
    zIndex: '10',
    transition: '$duration ease-in-out'
  }
});

const MenuButton = styled('button', {
  display: 'none',
  background: 'transparent',
  border: 0,
  outline: 0,
  '@md': {
    display: 'flex'
  }
});

const List = styled('ul', {
  listStyle: 'none',
  display: 'flex',
  gap: '45px',
  '@md': {
    overflowY: 'hidden',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: '100%',
    right: 0,
    zIndex: 40,
    padding: '0 50px'
  }
});

const ListItem = styled('li', {
  display: 'inline-block',
  fontSize: '18px',
  fontWeight: 700,
  '&:after': {
    display: 'block',
    content: '',
    borderBottom: 'solid 2px #000000',
    transform: 'scaleX(0)',
    transition: 'transform $duration ease-in-out',
    transformOrigin: '0% 50%'
  },
  '&:hover:after': {
    transform: 'scaleX(1)'
  },
  '@md': {
    fontSize: '30px',
    fontWeight: 700
  }
});
