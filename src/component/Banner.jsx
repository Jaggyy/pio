import React, { useEffect, useState } from 'react'
import requests from '../requests'
import axios from '../axios'

let i = 0
function Banner() {

    const [banner, setBanner] = useState([])

    async function news() {
        const data = await axios.get(`${requests.search}&q=vehicle`)
        let random = Math.floor(Math.random() * (data.data.articles).length)
        setBanner(data.data.articles[3])
        i=4
        return data
    }

    useEffect(() => {
        news()
    }, [])
    console.log(banner)
    return (
        <div className='banner'
            style={{
                maxWidth: "100vw",
                backgroundImage: `linear-gradient( to bottom , rgb(0,0,0,0) 0% ,rgb(0,0,0,0.3)30% , rgb(0,0,0,0.5) 60%, rgb(0,0,0,0.8) 80%,rgb(0,0,0,1) 100%), url(${banner.urlToImage
})`,
                // background:"red",
                backgroundPosition: "center",
                backgroundRepeat: 'no-repeat',
                backgroundSize: "cover",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                alignItems: "flex-start",
                maxHeight: "100vh"
            }}>
            <div className="banner-container"
                style={{
                    padding: "40px 70px"
                }}>
                <div className="treding" style={{
                    width: "150px",
                    height: "40px",
                    background: "#228854",
                    color: "black",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "18px",
                    borderRadius: "5px"
                }}>
                    <p>#{i} Trending</p>
                </div>
                <div className="text-title" >
                    <h1
                        style={{
                            color: "rgb(255,255,255,0.6)",
                            padding: "15px 0px",
                            fontSize: "29px"
                        }}>{banner.title}</h1>
                </div>
                <div className="publish-text"
                style={{
                    display:"flex",
                    alignItems:"center"
                }}>
                    <div
                    style={{
                        minWidth:"50px",
                        border:"1px solid orange",
                        borderRadius:'5px',
                        color:"orange",
                        padding:"5px 10px"
                    }}>{banner?.source?.name}</div>
                    <p style={{
                        fontSize: "14px",
                        fontWeight: "500",
                        color: "rgb(255,255,255,0.4)",
                        margin:"0px 10px 0px 20px"
                    }}>MON, 24 MAY 2022</p>
                </div>
            </div>
        </div>
    )
}

export default Banner