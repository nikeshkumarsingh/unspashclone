import Statcard from "./Card"
import { Box, Text, Image } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import "./imag.css";
import { Fetchdata } from "../../Redux/action";
export const Renders=()=>{
    const red = useSelector((store) => store.imageData.pictures);
    const dispatch = useDispatch();
    const [num ,setNum]=useState(0);
    useEffect(() => {
      if (red.length === 0) {
        dispatch(Fetchdata("3d renders"));
      }
     if(num===0){
        dispatch(Fetchdata("3drenders"))
          setNum((num)=>num+1);
      }
    });
    return(
        <Box>
        <Box display={"grid"} style={{gridTemplateColumns:"repeat(2,1fr",padding:"100px"}}>
            <Box margin={"50px"}>
                <Text fontSize={"30px"} fontWeight={"bold"}  textAlign={"left"}>3D Renders</Text>
                <Text marginLeft={"-5px"}>For the first time ever, Unsplash is accepting a new category of images outside of photography. Submit your 3-dimensional images, designed in the software of your choice, rendered into JPEG images.</Text>
            </Box>
            <Box>
               <Statcard props={"Submit to #D Renders"}/>
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