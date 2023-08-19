import React from "react"
import { useParams } from "react-router-dom"
export default function VanDetail() {
    const { id } = useParams()
    return <h1>Van id is: {id}</h1>
}