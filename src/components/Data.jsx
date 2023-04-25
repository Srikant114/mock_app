import React from 'react'
import "./Data.css"
import { useNavigate } from 'react-router-dom'

const Data = () => {
    let navigate=useNavigate()
    let navigateHome=()=>{
        navigate('/')
    }

  return (
    <div className='main'>
        <h1 className='title'>Welcome To Our page</h1>
        <h2 className='username'>User Name</h2>
        <h3 className='id'> ID</h3>
        <button className='logoutBtn' onClick={navigateHome}>Logout</button>
        <table>
            <tr className='tabHead'>
                <td>User Name</td>
                <td>Id</td>
                <td>Number</td>
                <td></td>
                <td></td>
            </tr>
            <tr className='content'>
                <td>Srikant</td>
                <td>JSP001</td>
                <td>9876543210</td>
                <td><button>edit</button></td>
                <td><button>delete</button></td>
            </tr>
            <tr className='content'>
                <td>Jilan</td>
                <td>JSP002</td>
                <td>9875463210</td>
                <td><button>edit</button></td>
                <td><button>delete</button></td>
            </tr>
            <tr className='content'>
                <td>Bunty</td>
                <td>JSP003</td>
                <td>9123453210</td>
                <td><button>edit</button></td>
                <td><button>delete</button></td>
            </tr>
            <tr className='content'>
                <td>Amit</td>
                <td>JSP003</td>
                <td>9689845210</td>
                <td><button>edit</button></td>
                <td><button>delete</button></td>
            </tr>
        </table>
    </div>
  )
}

export default Data