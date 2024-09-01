import React from "react";
import ReactDOM from "react-dom/client"


const Header = () =>{
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="data:image/png;base64,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" alt="" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>

        </div>
    )
}

const RestaurantCards = () =>{
    return (
        <div className="res-card">
            <img className="res-logo" src="https://tse3.mm.bing.net/th?id=OIP.p0KaOpfzw_8WAXPvNKhmhwHaHa&pid=Api&P=0&h=180" alt="" />
            <h3>Mehandi hotels</h3>
            <h4>Biriyani, Kannur style</h4>
            <h4>4.8 stars</h4>
            <h4>38 minutes</h4>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search"> Search</div>
            <div className="res-container">
                <RestaurantCards/>
                <RestaurantCards/>
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}




const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(<AppLayout />)
