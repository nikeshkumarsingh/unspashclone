import { Box, Text, Image } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import "./imag.css";
import { Fetchdata} from "../../Redux/action";
export const Search=()=>{
    const text = useSelector((store) => store.imageData.ser);

    const red = useSelector((store) => store.imageData.pictures);
    const dispatch = useDispatch(); 
    const [num,setNum]=useState(0);
    useEffect(() => {
        if (red.length === 0) {
          dispatch(Fetchdata(text));
        }
        if(num===0){
            dispatch(Fetchdata(text))
            setNum((num)=>num+1)
        }
      });
    return(
        <Box>
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