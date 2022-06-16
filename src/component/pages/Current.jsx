import Statcard from "./Card";
import { Box, Text, Image,Button ,Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Tooltip,
  ModalCloseButton,useDisclosure } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Fetchdata } from "../../Redux/action";
import "./imag.css";
import { AiFillLike,AiOutlinePlus } from "react-icons/ai";
import { Inter } from "./InterImage";

export const Current = () => {
  const red = useSelector((store) => store.imageData.pictures);
  const dispatch = useDispatch();
  const [num,setNum]=useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [address,setAddress]=useState("");
  const [like,setLike]=useState(false);
  const [add,setAdd]=useState(false);
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

  return (
   
    <Box>
      <Box display={"grid"} style={{ gridTemplateColumns: "repeat(2,1fr",paddingTop:"100px",paddingBottom:"50px" }}>
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
       
            <Box onClick={()=>setAddress(e.urls.full)} key={e.id} style={{backgroundImage:`url(${e.urls.regular})`,backgroundSize:"cover"}} margin="5px" height={"370px"}>
              <Tooltip hasArrow  label="click to see full image">
              <Inter onClick={onOpen} className={`a${e.id}`}  >
              <Box  display={"flex"} w={"95%"} margin={"auto"} h={"95%"} justifyContent={"right"}boxShadow= {"rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"}>
              <Tooltip hasArrow  label="like">
              <Button onClick={()=>setLike(true)} background={like?"rgb(241,81,81)":"rgb(237,242,247)"}  margin={"5px"}><AiFillLike/></Button>
              </Tooltip>
              <Tooltip hasArrow  label="add to favourite">
              <Button onClick={()=>setAdd(true)} margin={"5px"}><AiOutlinePlus/></Button>
              </Tooltip>
              </Box>
              </Inter>
              </Tooltip>
             
            </Box>
           
          ))
        )}
      </Box>
      <Modal onClose={onClose} size={"xl"} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
          <Box  display={"flex"} w={"95%"} margin={"auto"} h={"95%"} justifyContent={"right"}>
              <Button   marginRight={"5px"}><AiFillLike/></Button>
              <Button  marginRight={"10px"}><AiOutlinePlus/></Button>
              </Box>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image src={address}/>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};
