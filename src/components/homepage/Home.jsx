import FeaturedInfo from "../featureInfo/FeaturedInfo"
import ClientList from "./ClientList"
import ClientCreate from "./ClientCreate"
import "./home.css"
import { useState } from "react"


export default function Home() {
  const [rows, setRows] = useState([
    { id:1, name: 'Jill McMasty', transaction: 'February 1, 2022', net: 9, contact: '(610)345-3456' },
    { id:2, name: 'Jill McMasty', transaction: 'February 1, 2022', net: 9, contact: '(610)345-3456' },
    { id:3, name: 'Jill McMasty', transaction: 'February 1, 2022', net: 9, contact: '(610)345-3456' },
    { id:4, name: 'Jill McMasty', transaction: 'February 1, 2022', net: 9, contact: '(610)345-3456' },
    { id:5, name: 'Jill McMasty', transaction: 'February 1, 2022', net: 9, contact: '(610)345-3456' },
    { id:6, name: 'Jill McMasty', transaction: 'February 1, 2022', net: 9, contact: '(610)345-3456' },
    { id:7, name: 'Jill McMasty', transaction: 'February 1, 2022', net: 9, contact: '(610)345-3456' },
  ])
  const addNewClient= (firstName, lastName, contact) => {
    const newClient = {id:0, name: firstName+" "+lastName, transaction:"N/A", net:"N/A", contact: contact}
    const newRows = [newClient, ...rows]
    newRows.forEach((row, index)=>{
      row.id = index
    })
    setRows(newRows)
  }
  return (
    <div className="Home">
      <FeaturedInfo />
      <ClientList rows={rows}/>
      <ClientCreate handleOnClick={addNewClient}/>
    </div>
  )
}
