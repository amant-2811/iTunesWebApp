import React, {useState,useEffect}from "react";
import axios from 'axios';
import ListView from './listView';
import './App.css';



function ItunesApp() {

    const [textInput,settextInput]=useState('');
    const [data,setdata]=useState([]);


    useEffect(()=>{
         axios.get(`https://itunes.apple.com/search?term=${textInput}`)
            .then(res => {
                console.log('res==>>',JSON.stringify(res.data));
                setdata(res.data.results)
                //const persons = res.data;
                //this.setState({ persons });
            })
             .catch(err =>{
                 console.log(err)
                 setdata([])
             })
    },[textInput])

    return (
        <div className={'App-header'}>
            <form>
                <label>Enter artist name</label> <br/><br/>
                <input type="text"  value={textInput} onChange={(e)=>
                {settextInput(e.target.value)}} />
            </form>
            <hr/>
            <ListView data={data}/>
        </div>
    );
}

export default ItunesApp;
