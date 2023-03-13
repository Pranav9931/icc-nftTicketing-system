import React, { useEffect } from 'react'
import { CarouselImg1, CarouselImg2, CarouselImg3, CarouselImg4, CarouselImg5, TicketCard1, TicketCard2, TicketCard3, TicketCard4, TicketCard5, TicketCard6 } from '../../assets';
import { CarouselSlider, TicketsListing } from '../../components'
import YourTicket from '../yourTickets.component';

import { useStateContext } from '../../context';


import "./home.page.css"
import ticketsData from '../../tickets';
const HomePage = () => {

    const { setActivePage, connect, ticketNumber, address, nftAsset, getTickets } = useStateContext();
    useEffect(() => {
        setActivePage("home");
    }, [])

    const items = [
        {
            image: <img src={CarouselImg5} alt="item 4" />,
            caption: <div className="carousel-caption">Caption for item 0</div>
        },
        {
            image: <img src={CarouselImg1} alt="item 1" />,
            caption: <div className="carousel-caption">Caption for item 1</div>
        },
        {
            image: <img src={CarouselImg2} alt="item 2" />,
            caption: <div className="carousel-caption">Caption for item 2</div>
        },
        {
            image: <img src={CarouselImg3} alt="item 3" />,
            caption: <div className="carousel-caption">Caption for item 3</div>
        },
        {
            image: <img src={CarouselImg4} alt="item 4" />,
            caption: <div className="carousel-caption">Caption for item 4</div>
        },
    ];



    return (
        <div>
            <CarouselSlider items={items} />
            <div className="home-container">
                <div className="page-title" style={{ margin: '20px 0 0 0' }}><center>Book your tickets now</center></div>
                <div style={{ margin: '15px 0', color: '#0090ff' }}>
                    <center>The upcoming ICC events and tickets.</center></div>
                <div className="tickets-navlinks">

                    <ul>
                        <li className="active"><a href="#">Upcoming</a></li>
                        <li><a href="#">Past Events</a></li>
                        <li><a href="#">Tickets</a></li>
                    </ul>
                </div>

                <div className="tickets-listing-container">

                    <TicketsListing
                        tickets={ticketsData}
                    />
                </div>
            </div>
        </div>
    )
}

export default HomePage
