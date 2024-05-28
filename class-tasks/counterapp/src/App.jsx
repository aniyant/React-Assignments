// App.jsx
import { useState } from "react";
import {Navbar} from "./Navbar";
import Main from "./Main";
import Footer from "./Footer";
import "./App.css";
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react";

export function ThemeContextProvider({ children }) {
  const [theme, setTheme] = React.useState("white");
  return (
    <ThemeContext.Provider value={{ theme, setTheme}}>
      {children}
    </ThemeContext.Provider>
  );
}
function BasicUsage() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>This is my text.</Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

const App = () => {
  const isLoggedIn = useState(true);

  return (
    <>
      <Navbar />
      <Main isLoggedIn={isLoggedIn} />
      <Footer />
    </>
  );
}

export default App;
