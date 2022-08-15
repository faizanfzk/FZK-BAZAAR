import { Box, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const HNews = () => {
  return (
    <Box>
      <Box w={"100%"}>
        <Box
          w={"80%"}
          backgroundColor="teal"
        
          height="450px"
          margin={"auto"}
          borderRadius="15px"
          marginTop={"60px"}
          lineHeight="1rem"
        >
          <Heading
            as={"h2"}
            fontSize={"40px"}
            pt="60px"
            color="white"
            fontWeight={"bold"}
            textAlign="center"
          >
            Welcome to  <span style={{color:"yellowgreen"}}> FZK BAZAAR</span> {" "}
          </Heading>
          <Heading
            as={"h2"}
            fontSize={"40px"}
            color="white"
            fontWeight={"bold"}
            textAlign="center"
          >
            {" "}
          Enjoy the latest products with upto "50%" discount.
          </Heading>

          <br />
          <Text
            textAlign={"center"}
            color="white"
            fontSize={"22px"}
            lineHeight="1.5em"
          >
          We are here to give the best quality products with a great discount .<br />{" "}
      To make your journey more smooth 
            <br /> SignUp Now
          </Text>
        <Box w="100%" height="50px"  marginTop="45px">
        <Link to="/signup" style={
                        {textDecoration:"none",
                        borderRadius:"50px",
                        marginLeft:"45%",
                      
                        padding:"15px",
                        paddingLeft:"10px",
                     textAlign:"center",
                        backgroundColor:"white" ,
                       fontWeight:"20px",
                        color:"rgb(88,70,246)"}}>Sign up free</Link>
        </Box>
        </Box>
      </Box>
    </Box>
  );
};