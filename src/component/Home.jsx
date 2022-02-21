import { useState } from "react"
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { getData, sortDateAsc, sortTitleAsc } from "../redux/action"

export const Home = () => {
    const [text, setText] = useState("");

    const data = useSelector((store) => store.data)

    const dispatch = useDispatch();

    const handleChange = (e) => {
        setText(e.target.value);
    }

    const handleEnter = (e) => {
        if (e.code === "Enter") {
            axios.get(`https://fast-reef-22226.herokuapp.com/data`).then(({ data }) => dispatch(getData(data)));
        }
    }

    return (
        <>
            <div >
                <h1>GOOGLY</h1>
                <input className="search-box"
                    type="text"
                    placeholder=" Search..."
                    onChange={(e) => { handleChange(e) }}
                    onKeyPress={(e) => { handleEnter(e) }}
                    style={{
                        width: "40vw",
                        padding: "12px 10px",
                        border: "1px solid black",
                        borderRadius: "50px",
                        margin: "10px"
                    }} />
            </div>
            <button onClick={(data) => dispatch(sortTitleAsc(data))}>Sort A-Z</button>
            <button>Sort Z-A</button>
            <button>Sort by date (Asc)</button>
            <button>Sort by date (Desc)</button>
            <button>Filter Explicit</button>
            <div style={{ width: "80%", textAlign: "left" }}>
                {
                    data.map((e) => {
                        return (<>
                            <div key={e.id} style={{ padding: "10px", margin: "0 30px" }}>
                                <p style={{ color: "gray" }}>{e.url}</p>
                                <p><a href="#" style={{ fontWeight: "bold" }}>{e.title}</a> | {e.author}</p>
                                <p style={{ color: "gray" }}>{e.description}</p>
                                <p style={{ fontWeight: "bold" }}>Creation Date: {e.creation_date}</p>
                                <p style={{ fontWeight: "bold" }}>Explicit: {e.explicit ? "Yes" : "No"}  Quality %: {e.quality}</p>
                            </div>
                            <hr />
                        </>


                        );
                    })
                }
            </div>
        </>
    )
}