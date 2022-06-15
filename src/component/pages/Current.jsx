import Statcard from "./Card";
import { Box, Text, Image,Button } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Fetchdata } from "../../Redux/action";
import { AiFillLike,AiOutlinePlus } from "react-icons/ai";
import "./imag.css";
import { Inter } from "./InterImage";
export const Current = () => {
  const red = useSelector((store) => store.imageData.pictures);
  const dispatch = useDispatch();
  const [num,setNum]=useState(0);
  console.log(red);
  //console.log(red.results[0].preview_photos)
  useEffect(() => {
    if (red.length === 0) {
      dispatch(Fetchdata("ukraine war"));
    }
    if(num===0){
        dispatch(Fetchdata("ukraine war"))
        setNum((num)=>num+1)
    }
  });
  const stylemouse=(e)=>{
    console.log(e)
    return{
      opacity:1
    }
  }
  return (
   
    <Box>
      <Box display={"grid"} style={{ gridTemplateColumns: "repeat(2,1fr",padding:"100px" }}>
        <Box margin={"50px"}>
          <Text fontSize={"30px"} fontWeight={"bold"} textAlign={"left"}>
            Current Events
          </Text>
          <Text marginLeft={"-5px"}>
            Covering the latest important events, news-worthy moments and
            movements from around the world — from political protests to
            cultural celebrations. When submitting, please provide a photo
            description so we understand the full context of the image.
          </Text>
        </Box>
        <Box>
          <Statcard props={"Submit to Current Events"} />
        </Box>
      </Box>
      <Box className="main">
        {red.map((e) =>
          e.preview_photos.map((e,i) => (
            <Box key={e.id} style={{backgroundImage:`url(${e.urls.regular})`,backgroundSize:"100%"}} margin="5px" height={"370px"}>
              {/* <Image
                width={"100%"}
                height={"100%"}
               
                src={e.urls.regular}
              /> */}
              
              <Inter  className={`a${e.id}`}  >
              <Box  display={"flex"} justifyContent={"right"}>
              <Button   margin={"5px"}><AiFillLike/></Button>
              <Button  margin={"5px"}><AiOutlinePlus/></Button>
              </Box>
              </Inter>
             
            </Box>
          ))
        )}
      </Box>
    </Box>
  );
};
