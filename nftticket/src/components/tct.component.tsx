import React, { useEffect, useState } from 'react'
import "./tct.component.css";

import { useLocation, useNavigate } from 'react-router-dom';

import Barcode from 'react-barcode';

import { useStateContext } from '../context';

const Ticket = ({ propVal, imgUrl }: any) => {

    const {
        address,
        contract,
        connect,
        nftAsset,
        setNftAsset,
        ticketNumber,
        setTicketNumber,
        addTicket
    } = useStateContext();

    // const [form, setForm] = useState([])
    // const [imgUrl, setImgUrl] = useState("")



    const navigate = useNavigate();

    const handlePayment = async () => {
        const _type = ticketNumber === 0 ? "STANDARD" : "PREMIUM";
        const _amount = ticketNumber === 0 ? `${propVal.price}` : `${propVal.price + 3}`;
        const _imgUrl = imgUrl;
        if (address) {
            const data = await addTicket(_amount, _type, _imgUrl);
            console.log("Transaction Successful", data);
            navigate("../success");
        } else {
            alert("Connect your wallet first")
        }
    }

    const [value, setValue] = useState('');

    useEffect(() => {

        const data = String(Math.random())
        const price = ticketNumber === 0 ? propVal.price + `${data.slice(1, 7)}` : (propVal.price + 3) + `${data.slice(1, 7)}`;

        const val = `${address ? address.slice(1, 10) : "0x0000000000000000"}${address ? address.slice(-10,) : "0000000000"}`
        setValue(() => val);
    }, [address, ticketNumber])


    return (
        <div className="tct">
            <span className='page-title'>
                Your Ticket
            </span>
            <br />

            <div className="ticket" style={{ padding: '10px' }}>
                <img src={imgUrl} style={{ margin: '5px 0 15px 0', borderRadius: '10px' }} className="tct-img" />
                <div className='page-title'>
                    {propVal.title}
                </div>
                <div className='primary' style={{ borderRadius: '5px' }}>
                    Date: {propVal.date}
                    <br />
                    Place: {propVal.country}
                </div>
                <div style={{ opacity: '0.3' }}>
                    Witness two rivals facing each other on {propVal.date}
                </div>
                <div className="wrapper">
                    <div style={{ flex: 1 }}>
                        <div style={{ fontWeight: 500 }}>Address</div>
                        <div className="box-details">
                            {address ? address.slice(0, 3) + "..." + address.slice(-5,) : "0x0"}
                        </div>
                    </div>

                    <div style={{ flex: 1 }}>
                        <div style={{ fontWeight: 500 }}>Price</div>
                        <div className="box-details">
                            {ticketNumber === 0 ? `${propVal.price}` : `${propVal.price + 3}`} FTM
                        </div>
                    </div>
                </div>
                <div style={{ display: "flex", margin: '-30px 0 0 0' }}>
                    <Barcode value={value} />
                </div>
                <div>
                    <button className='btn-connect' style={{ width: '100%' }} onClick={() => handlePayment()}>Book Ticket</button>
                </div>
            </div>

        </div>
    )
}

export default Ticket