import { useState } from 'react'
import './App.css'
import { Box, Button, Heading,Input,Stack,Text,Card,CardBody,CardFooter,CardHeader,StackDivider, Flex} from '@chakra-ui/react'
import { useReducer } from 'react'

const reducer = (state, {type,payload}) => {
   switch (type) {
    case 'SET_EMAIL':
      return {...state,email:payload}
    case 'SET_PASSWORD':
      return {...state,password:payload}
    case 'RESET':
      return {email:'',password:''}
    default:
      throw new Error("Invalid type");
   }
}
function App() {
  const [user, dispatch] = useReducer(reducer,{email:'',password:''});
  const [allUsers, setAllUsers] = useState([]);

  const handleAdd = (e) => {
    e.preventDefault();
    setAllUsers((prev)=>{
      return [...prev,user]
    });
    dispatch({type:'RESET'});
  }
  console.log(user);
  return (
    <>
      <Box width="500px" mx="auto">
      <Heading as="h5"><Text>Welcome To Registration</Text></Heading>
      <h5>Please fill the form</h5>
      <Stack>
      <Input type='email' name='email' value={user.email} placeholder='Enter Email' onChange={(e) => dispatch({type:"SET_EMAIL",payload:e.target.value})} ></Input>
      <Input type='password' name='password' value={user.password} placeholder='Enter Password' onChange={(e) => dispatch({type:"SET_PASSWORD",payload:e.target.value})} ></Input>
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
                  <Heading size='md'>Masai Users</Heading>
                </CardHeader>

                <CardBody>
                      <Heading size='xs' textTransform='uppercase'>
                        {user.email}
                      </Heading>
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
