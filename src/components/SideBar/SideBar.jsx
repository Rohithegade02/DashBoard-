import React, { useState } from 'react'
import './SideBar.css'
import Logo from '../../imgs/logo.png'
import { SidebarData } from '../../Data/Data'
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import BarChartIcon from '@mui/icons-material/BarChart';
import {motion} from 'framer-motion'
export const SideBar = () => {
const [select,SetSelect]=useState(0);
const [exoanded,SetExoanded]=useState(false);
const sidebarVariants={
    true:{
        left:'0'
    },
    false:{
        left:'-60%'
    }

}
  return (
<div>
    <div  className="Bar" style={exoanded ?
        {left:"60%"}:{left:"5%"}
   
    }
    onClick={()=> SetExoanded(!exoanded)}
    >
        <BarChartIcon />
    </div>
    <motion.div className="SideBar" 
        variants={sidebarVariants}
        animate={window.innerWidth<=768 ?`${exoanded }`:""
    }>
            <div className="logo">
                <img src={Logo} alt="" />
                    <span>
                        Sh<span>o</span>ps
                    </span>
            </div>

            <div className="Menu">
                {SidebarData.map((item,index)=>{
                    return(
                        <div className={select===index?'MenuItem active':'MenuItem'}
                        key={index}
                        onClick={()=>SetSelect(index)}
                        >
                            <item.icon />
                                <span>
                                    {item.heading}
                                </span>
                        </div>
                    )
                })}
                <div className="MenuItem">
                        <ExitToAppIcon />
                        </div>
            
            </div>
    </motion.div>
    </div>
  )
}
