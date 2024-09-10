import { Box, HStack, Heading, Icon, Stack, Text } from "@chakra-ui/react";
import { RxDashboard } from "react-icons/rx";
import { LuArrowUpDown } from "react-icons/lu";
import { BiSupport } from "react-icons/bi";

const Sidenav = () => {
  const navLinks = [
    {
      icon: RxDashboard,
      text: "Dashboard",
      link: "/",
    },
    {
      icon: LuArrowUpDown,
      text: "Transactions",
      link: "/transaction",
    },
  ];

  return (
    <Stack
    bg="white"
      justify="space-between"
      boxShadow={{ base: "none", lg: "lg" }}
      w={{ base: "full", lg: "16rem" }}
      h="100vh"
    >
      <Box>
        <Heading textAlign="center" fontSize="20px" as="h1" pt="3.5rem">
          Prakhar Explores
        </Heading>
        <Box mt="6" mx="3">
          {navLinks.map((nav) => (
            <HStack
              key={nav.text}
              py="3"
              px="4"
              borderRadius="10px"
              _hover={{
                bg: "#f3f3f7",
                color: "#171717",
              }}
              color="#797e82"
            >
              <Icon as={nav.icon}></Icon>
              <Text>{nav.text}</Text>
            </HStack>
          ))}
        </Box>
      </Box>
      <Box mt="6" mx="3" py="4">
        <HStack
          py="3"
          px="4"
          borderRadius="10px"
          _hover={{
            bg: "#f3f3f7",
            color: "#171717",
          }}
          color="#797e82"
        >
          <Icon as={BiSupport}></Icon>
          <Text>Support</Text>
        </HStack>
      </Box>
    </Stack>
  );
};

export default Sidenav;
