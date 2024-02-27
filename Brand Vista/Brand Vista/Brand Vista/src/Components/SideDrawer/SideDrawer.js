import {
    ChevronRight,
    Facebook,
    HomeOutlined,
    Instagram,
    LinkedIn,
    ReceiptOutlined,
    WhatsApp,
    YouTube
} from "@mui/icons-material";
import {
    Drawer,
    ListItem,
    ListItemIcon,
    ListItemText
} from "@mui/material";
import { useState } from "react";
  
  const data = [
    {
      name: "Home",
      icon: <HomeOutlined />,
    },
    { name: "Instagram", icon: <Instagram /> },
    { name: "LinkedIn", icon: <LinkedIn /> },
    { name: "YouTube", icon: <YouTube /> },
    { name: "Facebook", icon: <Facebook /> },
    {name: "WhatsApp" ,icon:<WhatsApp/>},
    { name: "Trash", icon: <ReceiptOutlined /> },
  ];
  
  function SideDrawer() {
    const [open, setOpen] = useState(false);
  
    const getList = () => (
      <div style={{ width: 250 }} onClick={() => setOpen(false)}>
        {data.map((item, index) => (
          <ListItem button key={index}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
      </div>
    );
    return (
      <div>
        <ChevronRight color="primary" onClick={() => setOpen(true)}/>
        <Drawer open={open} anchor={"left"} onClose={() => setOpen(false)}>
          {getList()}
        </Drawer>
      </div>
    );
  }
  
  export default SideDrawer;