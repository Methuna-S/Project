import { Button } from '@mui/material';
import { Sprout } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login1.css';
const Form = ()=>{
    const [form,setForm] = useState({
        name:'',
        phone:'',
        email:'',
        uname:'',
        passwd:''
    })
    const upForm = (e)=>{
        setForm({...form,[e.target.id]:e.target.value})
    }
    const hSub = (e)=>{
        e.preventDefault();
        console.log(form);
    }
    const navi = useNavigate();
    return(
        <div className='box' align = "center">
            <form className='form' onSubmit={hSub}>
                <br/>
                <h1><Sprout/>Welcome Back</h1>
                <input className="inp" id="email" type = "email" placeholder='EMAIL' onChange={upForm} value={form.email} required></input>
                <input className="inp" id="passwd" type = "password" placeholder='PASSWORD' onChange={upForm} value={form.passwd} required></input>
                <br/>
                <Button onClick={()=>{navi('/')}} color='inherit' variant='outlined' sx={{":hover":{backgroundColor:'rgb(237, 232, 232)', color:'purple'} ,color:'white', backgroundColor:'purple'}}>SIGN IN</Button>
                <br/>
                <a href='/'>Forgot Password?</a>
                <br/>
            </form>
        </div>
    )
}
export default Form;