export default function CreateForm(props) {
    return (
        <form className="flex-col w-5/6 mx-auto my-8 bg-green-300 border border-green-300 rounded-md" onSubmit={props.onCreate}>

            <h1 className="p-3 text-2xl font-semibold text-center ">Create Cookie Stand</h1>

            <div className="flex mx-3 my-4">
                <label className="mr-2 font-semibold" for='location'>Location</label>
                <input name="location" className="flex-auto " />
            </div>

            <div className="flex mx-3 my-4 mt-8 justify-evenly w-7/8">
                <div className="flex-col w-1/4 p-1 mr-2 text-sm font-semibold text-center bg-green-100 rounded">
                    <label for="minCustomers" >Minimum Customers per Hour</label>
                    <input name="minCustomers" className="flex-auto " />
                </div>
                <div className="flex-col w-1/4 p-1 mr-2 text-sm font-semibold text-center bg-green-100 rounded">
                    <label for='maxCustomers'>Maximum Customers per Hour</label>
                    <input name="maxCustomers" className="flex-auto " />
                </div>
                <div className="flex-col w-1/4 p-1 mr-2 text-sm font-semibold text-center bg-green-100 rounded">
                    <label for='avgCookies'>Average Cookies per Sale</label>
                    <input name="avgCookies" className="flex-auto " />
                </div>
                <button className="w-1/4 font-semibold bg-green-500 rounded ">Create</button>
            </div>

        </form>
    )
}