import React from 'react';
import { PropTypes } from 'prop-types';
import { styled } from '@mui/material/styles';
import { Container, Divider, Typography, Box } from '@mui/material';
import clsx from 'clsx';

import { ReactComponent as Phone } from '../images/iphone_mockup.svg';
import { ReactComponent as StatusBar } from '../images/iPhone_status-bar.svg';
import background from '../images/low-poly-grid-background.png';
import MobileBottomMenu from '../components/Navigation/MobileBottomMenu';

const Root = styled(Box)({
  position: 'absolute',
  right: '20px',
  bottom: '10px',
  height: '800px',
  width: '383px',
  overflow: 'hidden',
  borderRadius: '42px',
  transition: 'all 1s',
  '&.bottomRight': {
    borderBottomRightRadius: '0px',
    borderBottomLeftRadius: '0px',
    bottom: '0px',
    height: '200px',
  },
});

const StyledPhone = styled(Phone)({
  width: '385px',
  height: '800px',
  backgroundImage: `url(${background})`,
});

const StyledStatusBar = styled(StatusBar)({
  position: 'absolute',
  top: '20px',
  left: '35px',
  width: '330px',
  height: '20px',
});

const PhoneContentContainer = styled('div')({
  position: 'absolute',
  top: '45px',
  width: '383px',
  height: '748px',
});

const PhoneContent = styled('div')({
  position: 'absolute',
  overflowY: 'scroll',
  height: '682px',
  width: '100%',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
  scrollbarWidth: 'none',
});

function Mobile(props) {
  const { children, bottomRight, handleBottomRight } = props;

  return (
    <Root className={clsx({ bottomRight })}>
      <StyledPhone />
      <StyledStatusBar />
      <PhoneContentContainer>
        <PhoneContent onClick={() => handleBottomRight(false)}>
          <Typography variant="h5" sx={{ textAlign: 'center' }}>
            Trash Hunter
          </Typography>
          <Divider sx={{ mb: '15px' }} />
          <Container sx={{ maxWidth: '380px' }}>{children}</Container>
        </PhoneContent>
        <MobileBottomMenu handleBottomRight={handleBottomRight} />
      </PhoneContentContainer>
    </Root>
  );
}

Mobile.propTypes = {
  bottomRight: PropTypes.bool,
  handleBottomRight: PropTypes.func.isRequired,
  children: PropTypes.element,
};

Mobile.defaultProps = {
  children: <div>Test</div>,
  bottomRight: false,
};

export default Mobile;
