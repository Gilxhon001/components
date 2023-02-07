import React, { useState } from "react";

const Login = () => {
    let [username, setUsername] = useState("") ;
    let [password, setPassword] = useState("") ;
    let [remember, setRemember] = useState(false) ;

    const handleUsername = (event) => {
        setUsername(event.target.value)
    }

    const handlePassword = (event) => {
        setPassword(event.target.value)
    }

    const handleRemember = (event) => {
        setRemember(event.target.checked)
    }

    const onLogin = () => {
        console.log({username, password, remember })
        console.log("Submitted")
    }

    return (
                    <div>
                        <input
                            name="name"
                            onChange={handleUsername}
                            value={username}
                        />
        
                        <input
                            name="password"
                            type="password"
                            onChange={handlePassword}
                            value={password}
                        />
        
                        <br/>
        
                        <input
                            name="remember"
                            type="checkbox"
                            checked={remember}
                            onChange={handleRemember}
                        />
        
                        <br/>
                        
                        <button 
                            disabled={!username || !password}  
                            onClick={onLogin} 
                            
                        >
        
                        Log In
        
                        </button>
        
                    </div>
                )
}

export default Login ;
// export default class Login extends React.Component {

//     //input 
//     state = {
//         name: '',
//         password: '',
//         remember: false,
//     }

//     handleInputChange = (event) => {
//         const name = event.target.name;
//         const type = event.target.type;
//         const value = event.target.value; 
//         const checked = event.target.checked;

//         this.setState(
//             { 
//                 [name]: type === 'checkbox' ? checked : value,
//             }
//         )
//     }

//     onLogin = () => {
//         this.props.submitted()
//         console.log(this.state)
//         console.log("Submitted")
//     }

//     render() {
//         return (
//             <div>
//                 <input
//                     name="name"
//                     onChange={this.handleInputChange}
//                     value={this.state.value}
//                 />

//                 <input
//                     name="password"
//                     type="password"
//                     onChange={this.handleInputChange}
//                     value={this.state.value}
//                 />

//                 <br/>

//                 <input
//                     name="remember"
//                     type="checkbox"
//                     checked={this.state.remember}
//                     onChange={this.handleInputChange}
//                 />

//                 <br/>
                
//                 <button 
//                     disabled={!this.state.name || !this.state.password }  
//                     onClick={this.onLogin} 
                    
//                 >

//                 Log In

//                 </button>

//             </div>
//         )
//     }
// }