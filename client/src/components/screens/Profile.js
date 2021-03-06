import React,{useEffect,useState,useContext} from 'react'
import Axios from 'axios'
import {UserContext} from '../../App'
function Profile() {
    const [pics,setPics]=useState([])
    const {state,dispatch} = useContext(UserContext)
    useEffect(()=>{
        Axios.get("http://localhost:3001/myPost",{
            headers:{
                "Authorization":"Bearer "+ localStorage.getItem("jwt")
            }
        })
        .then((result)=>{
            setPics(result.data.mypost)
        })
        .catch((err)=>console.log(err))
    },[])
    return (
        <div style={{maxWidth:"800px",margin:"0px auto"}}>
            <div style={{
                display:"flex",
                justifyContent:"space-around",
                margin:"25px auto",
                borderBottom:"2px solid grey",
                
            }}>
                <div>
                    <img style={{width:"160px",height:"160px",borderRadius:"80px"}} src="https://images.unsplash.com/photo-1547624643-3bf761b09502?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" />
                </div>
                <div>
                    <h4>{state?state.name:null} </h4>
                    <div style={{display:"flex",justifyContent:"space-between",width:"109%"}} >
                        <p>40 Posts</p>
                        <p>30 Follower</p>
                        <p>140 Following</p>
                    </div>
                </div>
            </div>
           <div className="gallery" >
                {
                    pics.map(item=>{
                        return (
                            <img key={item._id} className="item" src={item.photo} alt={item.title}/>
                        )
                    })
                }
            </div>
        </div>
        
    )
}

export default Profile
