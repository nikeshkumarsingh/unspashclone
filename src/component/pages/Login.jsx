import {Box,Button ,Text,FormControl,FormLabel,Input,FormHelperText,FormErrorMessage}from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Postlogin } from "../../Redux/AuthRedux/action";
import { useNavigate,Link } from "react-router-dom";
export const Login=()=>{
    const user=useSelector((store)=>store.userData.isAuth)
    const error=useSelector((store)=>store.userData.error)
    const dispatch = useDispatch();
    const navigate=useNavigate();
    const [input, setInput] = useState('')
    const [pass,setPass]=useState("");
    const handleInputChange = (e) => setInput(e.target.value)
    const isError = input === ''
    const handleSubmit=()=>{
       dispatch(Postlogin({email:input,password:pass}))
         if(user){
            alert("login Success")
          navigate("/",{replace:true})
         }
         else{
            console.log(error)
            alert(`${error}`)
         }
    }
    return(
        <Box paddingTop={"120px"} w={"80%"} margin={"auto"}>
            <Text fontSize={"24px"} fontWeight={"bold"}> Login</Text>
      <FormControl isInvalid={isError} >
        <FormLabel htmlFor='email'>Email</FormLabel>
        <Input
          id='email'
          
          type='email'
          
          onChange={handleInputChange}
        />
        {!isError ? (
          <FormHelperText>
            Enter the email you'd like to receive the newsletter on.
          </FormHelperText>
        ) : (
          <FormErrorMessage>Email is required.</FormErrorMessage>
        )}
        <FormLabel htmlFor='password'>Password</FormLabel>
        <Input id="password" onChange={(e)=>setPass(e.target.value)} type="password" />
        <Button marginBottom={"20px"} w={"50%"} onClick={handleSubmit} background={"rgb(40,116,240)"} marginTop={"35px"}>Submit</Button>
        <br/>
        <Link  to="/register"><Text color={"blue"}>Don't have an account? Join Unsplash</Text></Link>
      </FormControl>
      </Box>
    )

}