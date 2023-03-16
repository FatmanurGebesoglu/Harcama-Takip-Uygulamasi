import { useEffect, useState } from "react";
import { db } from "../firebase/config";
import { collection,onSnapshot } from "firebase/firestore";
import { ResetTvRounded } from "@mui/icons-material";

export const useCollection=(col)=>{


    const [belgeler,setBelgeler]=useState(null)
    const [hata,setHata]=useState(null)


    useEffect(()=>{
        let ref=collection(db,col);
        const unsubcribe=onSnapshot(ref,snapshot=>{
            let sonuclar=[];
            snapshot.docs.forEach(doc=>{
                sonuclar.push({...doc.data(),id:doc.id})
            })

            setBelgeler(sonuclar);
            setHata(null)
        },error=>{
            console.log(error);
            setHata('veriler getirilemedi');
        })
        return ()=> unsubcribe();
    },[col])

    return {belgeler,hata}

}













