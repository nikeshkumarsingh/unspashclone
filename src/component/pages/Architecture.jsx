import Statcard from "./Card"
import { Box, Text, Image } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import "./imag.css";
import { Fetchdata } from "../../Redux/action";
export const Architecture=()=>{
    const red = useSelector((store) => store.imageData.pictures);
    const dispatch = useDispatch();  
    const [num,setNum]=useState(0);
    useEffect(() => {
      if (red.length === 0) {
        dispatch(Fetchdata("architecture"));
      }
      if(num===0){
        dispatch(Fetchdata("architecture"))
        setNum((num)=>num+1)
    }
    });
    return(
        <Box>
        <Box display={"grid"} style={{gridTemplateColumns:"repeat(2,1fr",padding:"100px"}}>
            <Box margin={"50px"}>
                <Text fontSize={"30px"} fontWeight={"bold"}  textAlign={"left"}>Architecture</Text>
                <Text marginLeft={"-5px"}>Explore exteriors from around the world — from brutalist buildings to minimalist structures that will give you a new appreciation for the art of architecture.</Text>
            </Box>
            <Box>
               <Statcard props={"Submit to Architecture"}/>
            </Box>
        </Box>
        <Box className="main">
        {red.map((e) =>
          e.preview_photos.map((e,i) => (
            <Box key={e.id} margin="5px" height={"370px"}>
              <Image
                width={"100%"}
                height={"100%"}
               
                src={e.urls.regular}
              />
             
            </Box>
          ))
        )}
      </Box>
        </Box>
    )
}