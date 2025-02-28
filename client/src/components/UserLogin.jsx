import React, {useState} from "react";
import api from "../api/api"

//Login page!
//TODO: Does not check for success! Check for it!
const UserLogin = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const HandleLogin = async (e) => {
        try {
            e.preventDefault(); //don't refresh
            const body =
                {
                    username,
                    password,
                }
            api.post("/login", body)
                .then(function (response) {
                console.log(response);
                })
                .catch(function (err) {
                console.log(err);
                });
            //TODO: Login logic
        }
        catch(err) {
            console.error(err.message);
        }

    }

    return (
        <div>
            <form onSubmit={HandleLogin}>
                <label for="username">Username</label><br/>
                <input type="text" id="username" name="username" value={username} onChange={e => setUsername(e.target.value)}></input><br/>
                <label for="password">Password</label><br/>
                <input type="password" id="password" name="password" value={password} onChange={e => setPassword(e.target.value)}></input><br/>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default UserLogin;