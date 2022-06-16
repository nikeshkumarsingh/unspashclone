import Statcard from "./Card";
import { Box, Text, Image,Button } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import "./imag.css";
import { Fetchdata } from "../../Redux/action";
import { AiFillLike,AiOutlinePlus } from "react-icons/ai";
import { Inter } from "./InterImage";
export const Experimental = () => {
  const red = useSelector((store) => store.imageData.pictures);
  const dispatch = useDispatch();
  const [num,setNum]=useState(0);
  useEffect(() => {
    if (red.length === 0) {
      dispatch(Fetchdata("experimental"));
    }
    if(num===0){
        dispatch(Fetchdata("experimental"))
        setNum((num)=>num+1)
    }
  });
  return (
    <Box>
      <Box display={"grid"} style={{ gridTemplateColumns: "repeat(2,1fr",padding:"100px" }}>
        <Box margin={"50px"}>
          <Text fontSize={"30px"} fontWeight={"bold"} textAlign={"left"}>
            Experimental
          </Text>
          <Text marginLeft={"-5px"}>
            Through the use of unlikely textures, intriguing subject matter, and
            new formats — photography has the power to challenge our
            perspectives and push creativity forward.
          </Text>
        </Box>
        <Box>
          <Statcard props={"Submit to Experimental"} />
        </Box>
      </Box>
      <Box className="main">
        {red.map((e) =>
          e.preview_photos.map((e, i) => (
            <Box key={e.id} style={{backgroundImage:`url(${e.urls.regular})`,backgroundSize:"cover"}} margin="5px" height={"370px"}>
              <Inter  className={`a${e.id}`}  >
              <Box  display={"flex"} w={"95%"} margin={"auto"} h={"95%"} justifyContent={"right"}boxShadow= {"rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"}>
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
