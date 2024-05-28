import { useToast,Button } from '@chakra-ui/react'
const Home = () => {
    const toast = useToast()
  return (
    <div>
        <Button
      onClick={() =>
        toast({
          title: 'Account created.',
          description: "We've created your account for you.",
          status: 'success',
          duration: 2000,
        })
      }
    >
      Show Toast
    </Button>
    </div>
  )
}

export default Home