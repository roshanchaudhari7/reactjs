import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../redux/actions/dataActions';

const Data = () => {
    const dispatch = useDispatch()
    const { loading, data, error } = useSelector((state) => state.data)

    useEffect(() => {
        dispatch(fetchData())
    }, [dispatch]);

    if (loading) {
        return <div>Loading...</div>
    }
    if (error) {
        return <div>Error - {error}</div>
    }
    console.log(data)
    return (
        <div>
            {
                data.map(item => (
                    <li key={item.id}>
                        <img style={{width: '200px', height: '120px'}} src={item.download_url} alt="images" />
                    </li>
                ))
            }
        </div>
    )
}

export default Data
