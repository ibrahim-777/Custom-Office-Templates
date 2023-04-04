import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import Home from './Home.js';

function App() {
  return (
    
    <div>
     <body>
  <nav id="navbar">
    <ul id="navbar-link">
    <li className="link"><a href="exchange.html">مبيعات</a></li>
    <li className="link"><a href="exchane-sarf.html">تبديل عملات</a></li>
    <li className="link"><a href="log.html">السجل</a></li>
    </ul>
  </nav>
  <main id="home">
    <div id="client">
      <div id="clientName"><p>إسم الزبون</p> 
        <input type="text" id ="clientName1" className="clientInput"></input>

        </div>
      <div id="currencyType">
        <label for="dollar">$<input type="radio" name="currency" className="crn" value="dollar" id="dollar"></input></label>
        <label for="lira">L.L<input type="radio" name="currency" className="crn" value="lira" id="lira" checked ></input></label>
        <p>قيمة الفاتورة</p>
        <input type="number" id="bill" className="clientInput"></input>
      </div>
      <button id="btn-submit" type="submit">حفظ</button>
    </div>

    <div id="payType">
      <div id="currencyValue">
        <div id="sert">
    <p>سعر الصرف</p>
  </div>
    <input type="number" id="sarfValue" className="clientInput"  placeholder = "110000"></input>
  </div>
  <div id="currencydollar">
    <p>الدفع بالدولار</p>
    <input type="number" id="dollarPayValue" className="clientInput"></input>
    <p className="restvalue">ما يعادل باللبناني  <span id="leb-dollarvalue">0.00</span></p>
  </div>
  <div id="currencyLeb">
    <p>الباقي باللبناني</p>
    <input type="number" id="lebRest" className="clientInput" ></input>
    <p className="restvalue">ما يعادل بالدولار  <span id="rest">0.00</span></p>
  </div>
    </div>
  </main>
</body>
    </div>
   
  );
}
export default App;
