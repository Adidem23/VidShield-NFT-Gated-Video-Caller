import '../CSS/LobbyCopy.css'
import React, { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSocket } from "../context/SocketProvider";
import GoToTop from '../Components/GoToTop';
import { useContract } from '@thirdweb-dev/react';


const LobbyCopy = () => {
    const [email, setEmail] = useState("");
    const [room, setRoom] = useState("");
    const [Account, setAccount] = useState("")
    const [UserNFtBalance, setUserNFtBalance] = useState(0);
    const { contract } = useContract("0x8dFC041Fa157f6AE4cE93BC58f47Df39A3FC2540");

    const socket = useSocket();
    const navigate = useNavigate();

    const SetuserAccount = async () => {

        const { ethereum } = window;

        const account = await ethereum.request({
            method: "eth_requestAccounts",
        });
        setAccount(account[0]);

        ethereum.on('accountsChanged', async (accountnew) => {
            CheckUserNftBalance(accountnew[0])
            setAccount(accountnew[0]);
        })
    }

    SetuserAccount();

    const CheckUserNftBalance = async (account) => {
        const number = await contract.erc721.balanceOf(account);
        setUserNFtBalance(number);
    }
    CheckUserNftBalance(Account);
    
    const handleSubmitForm = useCallback(
        (e) => {
            e.preventDefault();
            alert(UserNFtBalance);
            if (UserNFtBalance > 1) {
                socket.emit("room:join", { email, room });
            } else {
                alert("You are Not  Authenticated Person")
            }
        },
        [email, room, socket]
    );

    const handleJoinRoom = useCallback(
        (data) => {
            const { email, room } = data;
            navigate(`/room/${room}`);
        },
        [navigate]
    );

    useEffect(() => {
        socket.on("room:join", handleJoinRoom);
        return () => {
            socket.off("room:join", handleJoinRoom);
        };
    }, [socket, handleJoinRoom]);

    return (
        <>
            <div style={{ display: 'block', width: "fit-content", margin: "auto", marginTop: "50px", height: "fit-content" }}>
                <h4>Connected Account:{Account}</h4>
                <form className="formopt" onSubmit={handleSubmitForm}>
                    <div className="titleopt">Welcome,<br /><span>Fill Form To Get Connected</span></div>
                    <input type="email" placeholder="Email" className="inputopt" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="text" placeholder="Room To Join" name="password" className="inputopt" value={room} onChange={(e) => setRoom(e.target.value)} />
                    <button className="buttonopt-confirmopt" >Let`s go →</button>
                </form>
            </div>
            <GoToTop />
        </>
    )
}

export default LobbyCopy