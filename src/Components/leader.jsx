import React, { useState, useEffect } from "react";
import Header from "./header";
import Footer from "./footer";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import useToken from '../useToken';

function Leader(){
    const { token } = useToken();
    const[nav, setNav] = useState(true);
    const [User, setUser] = useState([]);
    const [sortOrder, setSortOrder] = useState('desc');
    const [ColE, setColE] = useState("mathCol1");
    const [ColM, setColM] = useState("mathCol");
    const [ColR, setColR] = useState("mathCol");
    const [ColG, setColG] = useState("mathCol");

    const sortByColumn = (columnName) => {
        const sortedData = [...User].sort((a, b) => {
        if (sortOrder === 'asc') {
            return a[columnName] - b[columnName];
        } else {
            return b[columnName] - a[columnName];
        }
        });
        setUser(sortedData);
        setSortOrder(sortOrder === 'desc');
    };
    
    useEffect(() => {
        fetch("http://localhost:9000/leader",{
            method:"GET",
            crossDomain: true,
            headers: {
                "Content-Type" : "application/json",
                Accept:"application/json",
                "Access-Control-Allow-Origin":"*",
            },
        }).then((res)=>res.json())
        .then((data)=>{
            console.log(data);
            setUser(data);
        })
    }, []);

    return <div>
        <Header condition={token}/>
            <div onClick={()=> setNav(!nav)} className="mobile_btn">
                {nav ? <MenuIcon fontSize="large"/> : <CloseIcon fontSize="large"/>}
           </div>
            <h1 className="tableHead">Click the Button to know your position in any subject.</h1>
            <button className="nameBtn1" onClick={() => {
                sortByColumn('english');
                setColE("mathCol1");
                setColM("mathCol");
                setColG("mathCol");
                setColR("mathCol");
                }}>English</button>
            <button className="nameBtn2" onClick={() => {
                sortByColumn('mathematic');
                setColM("mathCol1");
                setColE("mathCol");
                setColG("mathCol");
                setColR("mathCol");
            }}>Mathematic</button>
            <button className="nameBtn3" onClick={() => {
                sortByColumn('riddle');
                setColR("mathCol1");
                setColM("mathCol");
                setColE("mathCol");
                setColG("mathCol");
                }}>Riddle</button>
            <button className="nameBtn4" onClick={() => {
                sortByColumn('general');
                setColG("mathCol1");
                setColR("mathCol");
                setColM("mathCol");
                setColE("mathCol");
                }}>General</button>
            <table>
                <thead>
                    <tr>
                    <th className="name">Name</th>
                    <th className={ColE}>English</th>
                    <th className={ColM}>Mathematic</th>
                    <th className={ColR}>Riddle</th>
                    <th className={ColG}>General</th>
                    </tr>
                </thead>
                <tbody className="TableBody">
                    {User.map((item) => {
                        return (
                            <tr key={item._id}>
                                <td>{item.username}</td>
                                <td className={ColE}>{item.english}</td>
                                <td className={ColM}>{item.mathematic}</td>
                                <td className={ColR}>{item.riddle}</td>
                                <td className={ColG}>{item.general}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        <Footer classColor5 = "ftBtn1" condition={nav}/>
    </div>
}

export default Leader;