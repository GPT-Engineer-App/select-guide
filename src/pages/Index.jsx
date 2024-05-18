import { Container, Text, VStack, Heading, Box, IconButton, HStack } from "@chakra-ui/react";
import { FaCheckCircle, FaTimesCircle, FaInfoCircle } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="2xl" textAlign="center">
          Selection Guide
        </Heading>

        <Box>
          <HStack spacing={4}>
            <IconButton aria-label="Step 1" icon={<FaInfoCircle />} size="lg" />
            <Text fontSize="xl">Step 1: Understand your requirements.</Text>
          </HStack>
          <Text mt={2} pl={12}>
            Before making a selection, it's crucial to understand what you need. Consider the features, budget, and other criteria that are important to you.
          </Text>
        </Box>

        <Box>
          <HStack spacing={4}>
            <IconButton aria-label="Step 2" icon={<FaCheckCircle />} size="lg" />
            <Text fontSize="xl">Step 2: Research your options.</Text>
          </HStack>
          <Text mt={2} pl={12}>
            Look into different options available in the market. Compare their features, prices, and reviews to make an informed decision.
          </Text>
        </Box>

        <Box>
          <HStack spacing={4}>
            <IconButton aria-label="Step 3" icon={<FaTimesCircle />} size="lg" />
            <Text fontSize="xl">Step 3: Make a decision.</Text>
          </HStack>
          <Text mt={2} pl={12}>
            After thorough research, choose the option that best fits your requirements. Ensure that it aligns with your budget and needs.
          </Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
