import React, { useEffect } from "react"
import { useParams } from "react-router-dom"
export default function VanDetail() {
    const {id} = useParams()
    useEffect(() => {
        const getVanById = async() => {
            const response = await fetch(`/api/vans/${id}`)
            const data = await response.json()
            console.log(data.vans)
        }
        getVanById()
    },[id])
    return <h1>Van detail page goes here</h1>
}