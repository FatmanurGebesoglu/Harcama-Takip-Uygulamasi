
import { List, ListItem, ListItemText, Divider, IconButton } from "@mui/material"
import  DeleteIcon  from "@mui/icons-material/Delete"
import React from 'react'
import { Fragment } from "react";
import { useFirestore } from "../../hooks/useFirestore";

export default function Liste({harcamalar}) {

    const {belgeSil}=useFirestore('harcamalar');

  return (
    <List>
        {harcamalar.map(harcama=>(
            <Fragment key={harcama.id}>
                <ListItem secondaryAction={
                    <IconButton edge="end" aria-label="delete" onClick={()=>belgeSil(harcama.id)}>
                        <DeleteIcon/>
                    </IconButton>
                }>
                    <ListItemText primary={harcama.baslik} secondary={harcama.miktar}></ListItemText>
                </ListItem>
                <Divider/>
            </Fragment>
        ))}
    </List>
  )
}




