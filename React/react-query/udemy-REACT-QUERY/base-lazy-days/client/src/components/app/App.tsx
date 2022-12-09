import { ChakraProvider } from '@chakra-ui/react';
import { ReactElement } from 'react';
import { queryClient } from '../../react-query/queryClient';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { theme } from '../../theme';
import { Loading } from './Loading';
import { Navbar } from './Navbar';
import { Routess } from "../app/Routes"

export function App(): ReactElement {
  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <Loading />
        <Routess />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </ChakraProvider>
  );
}
