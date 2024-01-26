import React from 'react'
import { UserContext } from '../App';
import { useContext } from 'react';
import { Box } from '@chakra-ui/react';
const JoinChat = () => {
    const user=useContext(UserContext);
    console.log(user['uid'].slice(0,4));
  return (
    <Box>
        <h1>This is chat screen !</h1>
    </Box>
  )
}

export default JoinChat