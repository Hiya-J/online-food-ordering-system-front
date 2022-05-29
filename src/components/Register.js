import React,{useState,useEffect} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';
import {useHistory} from 'react-router-dom'

function Register() {
    const [user, setUser]=useState({mail:"", psd:"",addr:""})
    const [msg,setMsg] = useState('');
    const history =useHistory();
    useEffect(()=>{
        //console.log("register rendered");
         if(msg.includes("Success")){
            setTimeout(()=>{ history.push('/login');setMsg(''); },1000);            
         }
},[msg,history])
    
    const changeMe=(e)=>{
        const {name , value} = e.target ;
         setUser({
             ...user, [name]:value
         })
    }
    const success ={padding:"10px 15px", border:"1px solid green", color:"green"}
    const fail ={padding:"10px 15px", border:"1px solid red", color:"red"}
    const registerMe=(e)=>{

        e.preventDefault();
        //api post to server
        axios.post('http://localhost:9000/create-user',user
        // {
        //     headers: {
        //       // 'application/json' is the modern content-type for JSON, but some
        //       // older servers may use 'text/json'.
        //       // See: http://bit.ly/text-json
        //       'content-type': 'text/json'
        //     }
        //   }
          )
        .then(res =>{
            setMsg("Registered Successfully");
            console.log(res)
           //redirect to login page
        })
        .catch((e)=>{
            console.log(e)
            setMsg("Something went wrong. Please try again later");
        })
    }
    return (
        <form className="form1" onSubmit={registerMe}>
                    <h2>Register Form</h2><br/>
                    <div className="d-flex flex-column">
                    <div className="form-group">
             <div className="form-group">
             <label htmlFor="email" className="form-label m-2 h5">Email</label>
            <input type="email" name="mail" placeholder="Email" className="form-control" value={user.mail} onChange={changeMe} required/></div>
             <div className="form-group">
             <label htmlFor="password" className="form-label m-2 h5">Password</label>
            <input type="password" name="psd" placeholder="Password" className="form-control" value={user.psd} onChange={changeMe} required/></div>
            <label htmlFor="address" className="form-label m-2 h5">Address</label>
                 <textarea type="text" name="addr" placeholder="Address" className="form-control" value={user.addr} onChange={changeMe} required/></div>
                <button className="btn btn-primary my-3 h4">Sign Up</button>
                <div className="h5 text-center" style={msg==='' ? {} : (msg.includes("Success") ? success :fail)}>{msg}</div>
                <hr/>
                 <span>Already have an account?  |  <Link to="/login">Sign in</Link></span>              
                 </div>
                 
           </form>
    )
}

export default React.memo(Register)
