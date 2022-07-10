import {React,useEffect,useState} from 'react';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import axios from 'axios';

export default function Chartcon(){
const [datas,setDatas]=useState([])


function fetchchartdata(){
    axios('http://localhost:80/fetchchartdata',{withCredentials:true})
    .then(res=>{
        setDatas(res.data.data);
    }).catch(err=>{
        console.log(err);
    })
}



useEffect(()=>{
   // fetchchartdata();
},[])



const options = {
    title: {
      text: 'My chart'
    },
    chart:{
    type:'column'
    },
    xAxis:{
    categories:['January','February','March']
    },
    yAxis:{
    title:{
        text:'Clicks per Sales'
    }
    },
    series: [{
      data: [1, 2, 7,6]
    }]
  }



    return(
        <>
        <div className='body'><h1>Data Analytics</h1></div>
        <div className='body'>
        <div className='chartcon'>
        <HighchartsReact
         highcharts={Highcharts}
         options={options}
        />
        
        </div>
        </div>
        </>
    )



}