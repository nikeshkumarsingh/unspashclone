import {Flex,Box,Image,Input,Button}from "@chakra-ui/react"
import {HamburgerIcon ,ChevronRightIcon,ChevronLeftIcon}from "@chakra-ui/icons"
import { useState } from "react";
import "./nav.css"
export const Navbar=()=>{
 const navitems=[{title:"Current Events",loc:"/"},
                  {title:"Wallpaper",loc:"/wallpaper"},
                  {title:"3D Renders",loc:"/3drenders"},
                  {title:"Textures & Patterns",loc:"/textures"},
                  {title:"Experimental",loc:"/experimental"},
                  {title:"Architecture",loc:"/architecture"},
                  {title:"Nature",loc:"/nature"},
                  {title:"Business & Work",loc:"/business&work"},
                  {title:"Fashion",loc:"/fashion"},
                  {title:"Film",loc:"/film"},
                  {title:"Food & Drink",loc:"Health & Wellness"},
                  {title:"People",loc:"/people"},
                  {title:"Interiors",loc:"/intrtiors"},

];
const [indexstart,setIndexstart]=useState(0);
const [indexend,setIndexend]=useState(4);
const [text1,setText1]=useState(["Current Events","Wallpaper","3D Renders","Textures & Patterns"]);
// const [text2,setText2]=useState("Wallpaper");
// const [text3,setText3]=useState("3D Renders");
// const [text4,setText4]=useState("Textures & Patterns");

const handlenext=()=>{
    if(indexend==13){
        return
       }
       setIndexend((index)=>index+1)
       setIndexstart((index)=>index+1)
       handledisplay()
       console.log(indexend)
      

}
const handleprev=()=>{
 
   if(indexstart==0){
    return
}
setIndexstart((index)=>index-1);
handledisplay()
console.log(indexstart)
}
const handledisplay=()=>{
    setText1([]);
    let arr=[]
    for(let i=indexstart;i<indexend;i++){
             arr.push(navitems[i].title)
            console.log(navitems[i].title)
    }
    setText1(arr)
    console.log(text1)
}
    return(
        <Box w="100%" border={"2px solid grey"}>
            <Flex border={"2px solid grey"} >
            <Box margin={"5px"}>
               <Image boxSize='50px'objectFit='cover' src="https://img.icons8.com/ios-filled/2x/unsplash.png" alt="logo"/>
            </Box>
            <Box marginTop="5px" w="80%" >
                <Input type="text" w="100%" placeholder="search photos"/>
            </Box>
            <Box margin={"5px"}>
                <Image boxSize='40px'objectFit='cover' src="https://img.icons8.com/ios-glyphs/2x/bell.png" alt="bell icon"/>
            </Box>
            <Box  margin={"5px"} >
                <Image  boxSize='50px'objectFit='cover' src="https://img.icons8.com/external-febrian-hidayat-flat-febrian-hidayat/2x/external-User-user-interface-febrian-hidayat-flat-febrian-hidayat.png"  alt="user icon"/>
            </Box>
            <Box margin={"5px"}>
                <HamburgerIcon w="50px"/>
            </Box>
            </Flex>
            <Flex justifyContent={"space-around"} id="baritm">
              <Button onClick={handleprev}><ChevronLeftIcon/></Button>
                  {text1.map((e,i)=>(
                    <Box className="coll" margin={"5px"} color={"grey"} key={i}>{e}</Box>
                  ))}
              <Button onClick={handlenext}><ChevronRightIcon/></Button>
            </Flex>
        </Box>
    )
}

  