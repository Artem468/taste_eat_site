import "./BookTable.css"

function BookTable() {
    return (
        <section className="BookTable">
            <div>
                <p>RESERVATION</p>
                <p>Book Your Table</p>
                <div className="BookInputContainer input2">
                    <input placeholder="Name"/>
                    <input placeholder="Email"/>
                </div>
                <div className="BookInputContainer input3">
                    <input placeholder="Persons"/>
                    <input placeholder="Timing"/>
                    <input placeholder="Date"/>
                </div>
                <button>Book A Table</button>
            </div>
        </section>
    )
}

export default BookTable;