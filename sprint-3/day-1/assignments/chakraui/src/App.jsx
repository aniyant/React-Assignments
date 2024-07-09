import { useState } from 'react'
import './App.css'
import { Box, Button, Heading,Input,Stack,Text,Card,CardBody,CardFooter,CardHeader,StackDivider, Flex} from '@chakra-ui/react'

function App() {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [allUsers,setAllUsers] = useState([]);

  const handleInput = (e) => {
    if(e.target.name === 'name'){
      setName(e.target.value);
    }
    if(e.target.name === 'email'){
      setEmail(e.target.value);
    }
  }
  const handleAdd = (e) => {
    e.preventDefault();
    setAllUsers((prev)=>{
      return [...prev,{name:name,email:email}]
    });
    setName('');
    setEmail('');
  }
  
  return (
    <>
      <Box width="500px" mx="auto">
      <Heading as="h5"><Text>Welcome To Registration</Text></Heading>
      <h5>Please fill the form</h5>
      <Stack>
      <Input type='text' name='name' value={name} placeholder='Enter Name' onChange={handleInput} ></Input>
      <Input type='email' name='email' value={email} placeholder='Enter Email' onChange={handleInput} ></Input>
      <Button type='submit' onClick={handleAdd}>Add</Button>
      </Stack>
      </Box>
      
      <Box width="100%" mt="auto">
      <Flex width="100%" mt={10} flexDir={["column","column","row"]}  justifyContent="center" gap={6}>
      {
        allUsers.map((user,index)=>{
          return (
              <Card key={index}>
                <CardHeader>
                  <Heading size='md'>Masai Student</Heading>
                </CardHeader>

                <CardBody>
                  <Stack divider={<StackDivider />} spacing='4'>
                    <Box>
                      <Heading size='xs' textTransform='uppercase'>
                        Name
                      </Heading>
                      <Text pt='2' fontSize='sm'>
                        {user.name}
                      </Text>
                    </Box>
                    <Box>
                      <Heading size='xs' textTransform='uppercase'>
                        Email
                      </Heading>
                      <Text pt='2' fontSize='sm'>
                        {user.email}
                      </Text>
                    </Box>
                  </Stack>
                </CardBody>
              </Card>
          )
        })
      }
      </Flex>
      </Box>
    </>
  )
}

export default App
