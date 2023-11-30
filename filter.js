import React from "react";
import Carousal from "../Carousal/Carousal";
import './Filter.css';
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import { Select } from "@mui/material";
import { useState } from "react";

export default ({title, data, filters, executeFilter }) => {

    const [selectedTab, setSelectedTab] = useState(0);
   
       return <div className='section'>
       <div>
           <h1 className='title'>{title}</h1>
       </div>
        <Tabs 
          value={selectedTab}
          onChange={(e, value) => {
           executeFilter(filters[value].key)
           setSelectedTab(value)
          }}
          TabIndicatorProps={{
           style:{
               backgroundColor: 'var(--color-primary)'
           }
          }}
        >
          {filters.map(f => <Tab  className='tab' key={f.key} label={f.label}/>)}
        </Tabs>
        <Carousal data={data} navId='filter' /> 
   </div>
   }