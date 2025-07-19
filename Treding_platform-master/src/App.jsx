
// import React, { use } from 'react'
// import './App.css'
// import './index.css'
// import Navbar from './page/navbar/Navbar.jsx'
// import Home from './page/Home/Home.jsx'

// import Portfolio from './page/Portfolio/Portfolio'
// import Activity from './page/Activity/Activity'
// import Wallet from './page/Wallet/Wallet' 
// import Withdrawal from './page/WithDraw/Withdrawal'
// import PaymentDetails from './page/PaymentDetails/PaymentDetails'
// import StockDetails from './page/StockDetails/StockDetails'
// import Watchlist from './page/Watchlist/Watchlist'
// import Profile from './page/Profile/Profile'
// import SearchCoin from './page/SearchCoin/SearchCoin'   
// // import NoteFound from './page/NoteFound/NoteFound'
// import NoteFound from './page/NotFound/NoteFound'

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Auth from './page/Auth/Auth'
// import { store } from './State/Store'
// import { useDispatch, useSelector } from 'react-redux';
// import { getUser } from './State/Auth/Action'
// import { useEffect  } from 'react';  


// function App() {
   
//   // const{auth}= useSelector(store=>store);

//   // const dispatch = useDispatch()


//   // console.log("auth", auth);

//   // userEffect(() => {
//   //   dispatch(getUser(localStorage.getItem("jwt")))
//   // },[dispatch])


  
// const { auth } = useSelector((store) => store);
// const dispatch = useDispatch();

// console.log("auth", auth);

// useEffect(() => {
//   dispatch(getUser( auth.jwt || localStorage.getItem("jwt")));
// }, [auth.jwt]);

//   return (
//     <>  

//     <Auth/>
//     {
//       auth.user ? 
//       <div>
//            <Navbar/>
//          <Routes>
//            <Route path="/" element={<Home />} />
//            <Route path="/portfolio" element={<Portfolio/>} />
//            <Route path="/activity" element={<Activity />} />
//            <Route path="/wallet" element={<Wallet />} />
//            <Route path="/withdrawal" element={<Withdrawal />} />
//            <Route path="/paymentdetails" element={<PaymentDetails />} />
//            <Route path="/stockdetails" element={<StockDetails />} />
//            <Route path="/watchlist" element={<Watchlist />} />
//            <Route path="/profile" element={<Profile />} />
//            <Route path="/search" element={<SearchCoin />} />
//            <Route path="*" element={<NoteFound />} />
//            <Route path="/market/bitcoin" element={<StockDetails />} />

//          </Routes>
//       </div> :<Auth />
        
//     }
      

//     </>
//   )
// }

// export default App



import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';

import './App.css';
import './index.css';

import Navbar from './page/navbar/Navbar.jsx';
import Home from './page/Home/Home.jsx';
import Portfolio from './page/Portfolio/Portfolio';
import Activity from './page/Activity/Activity';
import Wallet from './page/Wallet/Wallet';
import Withdrawal from './page/WithDraw/Withdrawal';
import PaymentDetails from './page/PaymentDetails/PaymentDetails';
import StockDetails from './page/StockDetails/StockDetails';
import Watchlist from './page/Watchlist/Watchlist';
import Profile from './page/Profile/Profile';
import SearchCoin from './page/SearchCoin/SearchCoin';
import NoteFound from './page/NotFound/NoteFound';
import Auth from './page/Auth/Auth';

import { getUser } from './State/Auth/Action';


function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token && !auth.user) {
      dispatch(getUser(token));
    }
  }, [dispatch]);

  return (
    <>
      {auth.user ? (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/activity" element={<Activity />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/withdrawal" element={<Withdrawal />} />
            <Route path="/paymentdetails" element={<PaymentDetails />} />
            <Route path="/stockdetails" element={<StockDetails />} />
            <Route path="/watchlist" element={<Watchlist />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/search" element={<SearchCoin />} />
            <Route path="/market/bitcoin" element={<StockDetails />} />
            <Route path="*" element={<NoteFound />} />
          </Routes>
        </>
      ) : (
        <Auth />
      )}
    </>
  );
}

export default App;
