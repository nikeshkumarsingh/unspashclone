

export const Onimagecompo=({id})=>{

    return(
        <Box w="100%" opacity={0} className={id} onMouseOver={stylemouse} h={"100%"}>
              <Box  display={"flex"} justifyContent={"right"}>
              <Button   margin={"5px"}><AiFillLike/></Button>
              <Button  margin={"5px"}><AiOutlinePlus/></Button>
              </Box>
        </Box>
    )
}