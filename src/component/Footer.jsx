import { Box, Text } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <Box  mb="20px" style={{ backgroundColor: "rgb(36,40,47)" }}>
      <Box w="100%" display={"flex"} justifyContent="space-around" paddingTop="50px">
        <Box>
          <h2 style={{color:"yellowgreen" ,fontSize:"40px"}}>
           FZK BAZAAR
          </h2>
        
        </Box>
        <Box display={"flex"} pr="50px">
          <Box pr={"80px"} >
            <Text color="white" fontSize={"13px"} pb={"20px"}>EXPLORE</Text>

            <Text color={"grey"} fontSize="13px"  pb="5px">About</Text>
            <Text color={"grey"} fontSize="13px" pb="5px">Features</Text>
            <Text color={"grey"} fontSize="13px" pb="5px">Careers</Text>
            <Text color={"grey"} fontSize="13px" pb="5px">Linkedin</Text>
            <Text color={"grey"} fontSize="13px" pb="5px">Support</Text>
            <Text color={"grey"} fontSize="13px" pb="5px">Community group</Text>
          </Box>
          <Box pr={"80px"}>
            <Text color="white" fontSize={"13px"} pb={"20px"}>Features</Text>

            <Text color={"grey"} fontSize="13px" pb="5px">Buy</Text>
            <Text color={"grey"} fontSize="13px" pb="5px">Sell</Text>
            <Text color={"grey"} fontSize="13px" pb="5px">Merge </Text>
            <Text color={"grey"} fontSize="13px" pb="5px">Compress </Text>
            <Text color={"grey"} fontSize="13px" pb="5px">Exchange</Text>
            <Text color={"grey"} fontSize="13px" pb="5px">See all</Text>
          </Box>
          <Box pr={"80px"}>
            <Text color="white" fontSize={"13px"} pb={"20px"}>CREATORS</Text>

            <Text color={"grey"} fontSize="13px"  pb="5px">Video Editor</Text>
            <Text color={"grey"} fontSize="13px" pb="5px">Photo Video Maker</Text>
            <Text color={"grey"} fontSize="13px" pb="5px">Facebook Video MAker</Text>
            <Text color={"grey"} fontSize="13px" pb="5px">YouTube Intro Maker</Text>
            <Text color={"grey"} fontSize="13px" pb="5px">Instagram Video Maker</Text>
            <Text color={"grey"} fontSize="13px" pb="5px">See all</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};