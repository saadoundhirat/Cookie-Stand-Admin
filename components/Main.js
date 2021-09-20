import React, { useState } from "react";
import CreateForm from './CreateForm.js';
import ReportTable from './ReportTable.js';
import Footer from './Footer'

export default function Main() {
    const [workingHours, setworkingHours] = useState(['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'])
    const [report, setallstores] = useState([])
    const [totals, setbranchestotals] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])


    function onCreate(event) {

        event.preventDefault();

        let minCustomers = parseInt(event.target.minCustomers.value)
        let maxCustomers = parseInt(event.target.maxCustomers.value)
        let avgCookies = parseInt(event.target.avgCookies.value)

        let sum = 0


        const store = {
            location: event.target.location.value,
            hourlySales: workingHours.map(() => Math.ceil(avgCookies * (Math.ceil(Math.random() * (maxCustomers - minCustomers) + minCustomers)))),
        }

        for (let i = 0; i < store.hourlySales.length; i++) {
            sum = sum + store.hourlySales[i]
        }
        store.total = sum

        setallstores([...report, store])


        let total_sum = totals.map((item, idx) => {
            if (idx === totals.length - 1) {
                return item + store.total
            }
            return item + store.hourlySales[idx]
        })

        setbranchestotals(total_sum)

    }

    return (
        <>
            <main className="">
                
                <CreateForm onCreate={onCreate} />

                <ReportTable report={report} workingHours={workingHours} totals={totals} />

                <Footer report={report} />

            </main>
        </>
    )
}