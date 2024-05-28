import React from 'react'
import { useContext,useState } from 'react';
import { DashboardContext } from '../components/DashboardContextProvider';


export const Menu = () => {
    const {dashboardData,setDashboardData} = useContext(DashboardContext);
    const [filter,setFilter] = useState('all');
    const [sort,setSort] = useState('clear');

    let filterdItems =  dashboardData.items;
    if(filter != 'all'){
        filterdItems = filterdItems.filter((item) => item.category === filter)
    }
    if(sort != 'clear'){
        if(sort === 'asc'){
            filterdItems.sort((a,b) => a.revenue - b.revenue);
        }
        if(sort === 'desc'){
            filterdItems.sort((a,b) => b.revenue - a.revenue);
        }
    }

  return (
    <div>
        <h1>Menu</h1>
        <div style={{
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            gap:"50px",
            width:"100%",
            margin:"20px",
    
        }}>
            <div>
            <label htmlFor='category'>Filter By Category: </label>
            <select name="category" id="category" value={filter} onChange={(e) => setFilter(e.target.value)}>
                <option value="all">All</option>
                <option value="veg">Veg</option>
                <option value="non-veg">Non-Veg</option>
            </select>
            </div>
            <div>
            <label htmlFor="sor">Sort By Revenue: </label>
            <select name="sort" id="sort" value={sort} onChange={(e) => setSort(e.target.value)}>
                <option value="clear">Clear</option>
                <option value="asc">Low to High</option>
                <option value="desc">High to Low</option>
            </select>
            </div>
        </div>
        <table style={
            {
                borderCollapse:"collapse",
                width:"100%",
                margin:"20px",
                textAlign:"center",
                padding:"30px",
                borderRadius:"10px",
                backgroundColor:"white",
                color:"black",
                fontSize:"16px",
                fontWeight:"500",
                boxShadow:"2px 2px 2px 2px grey",
                boxSizing:"border-box",

            }
        }>
            <thead>
                <tr>
                    <th>Item</th>
                    <th>Quantity</th>
                    <th>Revenue</th>
                    <th>Category</th>
                </tr>
            </thead>
            <tbody>
                {
                    filterdItems.map((item) => {
                        return (
                            <tr key={item.item}>
                                <td>{item.item}</td>
                                <td>{item.quantity}</td>
                                <td>{item.revenue}</td>
                                <td>{item.category}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
