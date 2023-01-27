import React from "react";
import { useState, useEffect } from "react";

import Ticker, { FinancialTicker, NewsTicker } from 'nice-react-ticker';


const Tricker = () => {
    const [pkrvalue, Setpkrvalue] = useState(0);
    var pkrval;
    const getPkr = async () => {
        const options = {
            method: "GET",
            headers: {
                "X-RapidAPI-Key": "7112f3057amsh5a555c6f097f2aep1dcc1djsn4c2b6295ec5e",
                "X-RapidAPI-Host": "exchangerate-api.p.rapidapi.com"
            }
        };
        fetch("https://exchangerate-api.p.rapidapi.com/rapid/latest/USD", options)
            .then((response) => response.json())
            .then((response) => pkr(response))
            .catch((err) => console.error(err));
    };
    useEffect(() => {
        getPkr();
    }, []);
    const pkr = (response: any) => {
        pkrval = response.rates.PKR;
        pkrval = JSON.stringify(pkrval);
        // Setpkrvalue(pkrval.match);
    };



    return (
        <>
            <div >
                <Ticker >
                    <FinancialTicker
                        id={1}
                        change={false}
                        symbol="KSE-100"
                        lastPrice="39894"
                        percentage="-0.48%"
                        currentPrice="39704.60"
                    />
                    <FinancialTicker
                        id={2}
                        change={false}
                        symbol="OilPrice-PSO"
                        lastPrice="172.08"
                        percentage="-1.28%"
                        currentPrice="169.89"
                    />
                    <FinancialTicker
                        id={3}
                        change={true}
                        symbol="Interest Rate"
                        lastPrice="13.75%"
                        percentage="1.25%"
                        currentPrice="15%"
                    />
                    <FinancialTicker
                        id={4}
                        change={false}
                        symbol="Gold Price"
                        lastPrice="12680.5"
                        percentage="1.24%"
                        currentPrice="12837.9"
                    />
                    <FinancialTicker
                        id={5}
                        change={false}
                        symbol="PKR-USD"
                        lastPrice="232.85"
                        percentage="1.34%"
                        currentPrice={"1221.6"}
                    />
                </Ticker>
            </div>

        </>
    );
};



export default Tricker;
