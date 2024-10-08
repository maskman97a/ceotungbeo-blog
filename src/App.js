import './App.css';
import Main from "./component/main/Main";
import React, {useEffect, useState} from 'react';

function App() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const backendUrl = process.env.REACT_APP_CORE_SERVICE;
    console.log(process.env)

    let mainData = sessionStorage.getItem('main-data')
    sessionStorage.setItem('main-data', "")
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(backendUrl + '/get-main-page');
                if (!response.ok) {
                    throw new Error('Lỗi khi gọi API');
                }
                const result = await response.json();
                setData(result.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {data && <Main mainData={data}/>}
        </div>);
}


export default App;
