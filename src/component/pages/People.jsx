import Statcard from "./Card";
import { Box, Text, Image } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Fetchdata } from "../../Redux/action";
import "./imag.css";

export const People=()=>{
    const red = useSelector((store) => store.imageData.pictures);
    const dispatch = useDispatch();
    const [num,setNum]=useState(0);
    console.log(red);
    //console.log(red.results[0].preview_photos)
    useEffect(() => {
      if (red.length === 0) {
        dispatch(Fetchdata("people"));
      }
      if(num===0){
          dispatch(Fetchdata("people"))
          setNum((num)=>num+1)
      }
    });  
    return(
        <Box>
        <Box display={"grid"} style={{gridTemplateColumns:"repeat(2,1fr",padding:"100px"}}>
            <Box margin={"50px"}>
                <Text fontSize={"30px"} fontWeight={"bold"}  textAlign={"left"}>People</Text>
                <Text marginLeft={"-5px"}>Real people, captured. Photography has the power to reflect the world around us, give voice to individuals and groups within our communities — and most importantly — tell their story.</Text>
            </Box>
            <Box>
               <Statcard props={"Submit to People"}/>
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