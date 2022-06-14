import Statcard from "./Card"
import {Box,Text}from "@chakra-ui/react"

export const Current=()=>{
     
    return(
        <Box display={"grid"} style={{gridTemplateColumns:"repeat(2,1fr"}}>
            <Box margin={"50px"}>
                <Text fontSize={"30px"} fontWeight={"bold"}  textAlign={"left"}>Current Events</Text>
                <Text marginLeft={"-5px"}>Covering the latest important events, news-worthy moments and movements from around the world — from political protests to cultural celebrations. When submitting, please provide a photo description so we understand the full context of the image.</Text>
            </Box>
            <Box>
               <Statcard/>
            </Box>
        </Box>
    )
}