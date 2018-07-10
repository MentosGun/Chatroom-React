/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';


/*
 * Local import
 */
import Connection from 'src/components/Connection';
import Logged from 'src/components/Logged';


/*
 * Code
 */
const Chat = ({ logged }) => (
  <div id="chat">
    {logged
      && <Logged />
    }
    {!logged
      && <Connection />
    }
  </div>
);
/**
 * PropTypes
 */
Chat.propTypes = {
  logged: PropTypes.bool.isRequired,
};


/*
 * Export default
 */
export default Chat;
