import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  SlideFade,
  Text,
} from "@chakra-ui/react";
import "./App.css";
import { useEffect, useState } from "react";
import ConfettiExplosion from "react-confetti-explosion";

function App() {
  const [textPos, setTextPos] = useState({ x: 0, y: 0 });
  const [cardPos, setCardPos] = useState({ x: 0, y: 0 });
  const [explosion, setExplosion] = useState(false);

  useEffect(() => {
    window.addEventListener("mousemove", (event: MouseEvent) => {
      let width = window.innerWidth;
      let height = window.innerHeight;
      let multiplierX = event.clientX - width / 2;
      let multiplierY = event.clientY - height / 2;
      setTextPos({
        y: -0.3 * multiplierY,
        x: -0.3 * multiplierX,
      });
      setCardPos({ x: -0.2 * multiplierX, y: -0.2 * multiplierY });
    });
    return () => window.removeEventListener("mousemove", () => {});
  }, []);

  const handleConfetti = () => {
    if (!explosion) {
      setExplosion(true);
      setTimeout(() => {
        setExplosion(false);
      }, 5000);
    } else {
      // setExplosion(false);
    }
  };

  return (
    <Flex
      width={"100%"}
      height={"100vh"}
      bg={"purple.900"}
      color="white"
      padding={{ base: "4", md: "8", lg: "12" }}
      justifyContent={"center"}
      alignItems={"center"}
      position={"relative"}
    >
      <Text
        fontSize={"700px"}
        position={"absolute"}
        transform={"translate(-50%, -50%)"}
        color={"white"}
        style={{
          top: `calc(51% + ${textPos.y}px)`,
          left: `calc(51% + ${textPos.x}px)`,
        }}
      >
        33
      </Text>
      <Box
        pos={"absolute"}
        zIndex={"2"}
        padding={{ base: "4", md: "8", lg: "12" }}
        paddingX={{ base: "8", md: "16", lg: "32" }}
        alignItems="center"
        bg="#673ab7aa"
        boxShadow="2xl"
        borderRadius="xl"
        backdropFilter={"blur(10px)"}
        transform={"translate(-50%, -50%)"}
        style={{
          top: `calc(51% + ${cardPos.y}px)`,
          left: `calc(51% + ${cardPos.x}px)`,
        }}
      >
        <Flex
          alignItems={"center"}
          justifyContent={"center"}
          direction={"column"}
        >
          <Heading
            mb={"auto"}
            fontSize={{ base: "30px", md: "40px", lg: "50px" }}
            padding={2}
            textAlign="center"
          >
            Happy Birthday
          </Heading>
          <HStack></HStack>
          <Text mb={"12"} fontSize={{ base: "15px", md: "20px", lg: "30px" }}>
            for{" "}
            <Text as={"span"} fontFamily={"Lobster"}>
              Danny
            </Text>
          </Text>
          <Button
            colorScheme="whiteAlpha"
            color={"white"}
            onClick={() => handleConfetti()}
            mb="4"
          >
            Click To Reveal The Message 🎉
          </Button>
          {explosion && (
            <>
              <ConfettiExplosion
                particleCount={250}
                force={0.8}
                width={1000}
                zIndex={4}
              />
              <SlideFade in={explosion}>
                <Text
                  textAlign={"center"}
                  fontSize={{ base: "15px", md: "18px", lg: "25px" }}
                >
                  Happy birthday to the sweetest brother ever 🥳🥳🥳🎊🎉🎉Enkuan
                  teweldkeln😘😘wish you long life full of happiness and love
                  🥂🍾💜💜
                </Text>
              </SlideFade>
            </>
          )}
        </Flex>
      </Box>
    </Flex>
  );
}

export default App;
