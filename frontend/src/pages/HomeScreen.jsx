import { Box, VStack ,Heading} from '@chakra-ui/react';
import React, { useContext } from 'react';
import CreateQuiz from '../components/CreateQuiz';
import PlayQuiz from '../components/PlayQuiz';
import { UserContext } from '../App';
const HomeScreen = () => {
  const user=useContext(UserContext);
  return (
    <>
    <Box p={4} width="100vw">
      <Heading  as="h1" size="xl">
            Welcome Back , {user.displayName || 'User'}
          </Heading>
      <VStack>
<Box>
<CreateQuiz/>
<PlayQuiz/>
</Box>
      </VStack>
      </Box>
    </>
  );
};

export default HomeScreen;
