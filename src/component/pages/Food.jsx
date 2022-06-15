import Statcard from "./Card";
import { Box, Text, Image } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Fetchdata } from "../../Redux/action";
import "./imag.css";

export const Food=()=>{
    const red = useSelector((store) => store.imageData.pictures);
  const dispatch = useDispatch();
  const [num,setNum]=useState(0);
  console.log(red);
  //console.log(red.results[0].preview_photos)
  useEffect(() => {
    if (red.length === 0) {
      dispatch(Fetchdata("food"));
    }
    if(num===0){
        dispatch(Fetchdata("food"))
        setNum((num)=>num+1)
    }
  }); 
    return(
        <Box>
        <Box display={"grid"} style={{gridTemplateColumns:"repeat(2,1fr",padding:"100px"}}>
            <Box margin={"50px"}>
                <Text fontSize={"30px"} fontWeight={"bold"}  textAlign={"left"}>Food & Drink</Text>
                <Text marginLeft={"-5px"}>It’s time to indulge, and throw yourself into the world of culinary photography — with shots of elaborate dinner parties, decadent pastries and more.</Text>
            </Box>
            <Box>
               <Statcard props={"Submit to Food & Drink"}/>
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