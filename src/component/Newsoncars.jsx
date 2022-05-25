import axios from '../axios'
import React, { useEffect, useState } from 'react'
import requests from '../requests'

function MOre() {
  const [trending, setTrending] = useState([])

  async function trend() {
    const fetch = await axios.get(requests.trending)
    console.log(fetch.data.articles)
    setTrending(fetch.data.articles)
    return fetch
  }

  useEffect(() => {
    trend()
  }, [])

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <div style={{
      maxHeight: "100vh",
      maxWidth: "100vw",
      backgroundColor: "black",
      padding: "40px 80px",
      display: "flex",
      alignItems: "flex-start"

    }}>
      {/*           section top          */}
      <div className="section-title" style={{
        width: "80%",
        maxHeight: "80vh",

        display: "flex",
        justifyContent: "space-between",
        // alignItems: "center",
        flexDirection: "column"
      }}>
        {/* secction bar*/}
        <div className="sectionbar"
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid #228854",
          }}>
          <div className="title"
            style={{
              maxWidth: "150px",
              height: "30px",
              padding: "1px 30px",
              backgroundColor: "#228854",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "black",
              borderTopLeftRadius: "5px",
              borderTopRightRadius: "5px",

            }}>
            <p>Home</p>
          </div>
          <div className="changingtopic"
            style={{
              display: "flex",
              width: "150px",
              justifyContent: "space-between"
            }}>
            <p className='' style={{
              color: "orange"
            }}>Trending</p>
            <p style={{
              color: "rgb(255,255,255,0.5)"
            }}>More</p>
          </div>
        </div>
        {/*     news container      */}
        <div className='newscontent'
          style={{
            padding: "20px 0px 20px 10px",
            display: "flex",
            flexDirection: "column",
            overflowY: "scroll",
            width: "100%"
          }}>
          {trending.map(news => (
            <div className="newscontainer"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                width: "100%",
                padding: "20px 0px"
              }}>
              <img src={news.urlToImage} alt="" width="150px"
                style={{
                  borderRadius: "5px"
                }} />
              <div className="newsinfo"
                style={{
                  width: '70%',
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height:"100%",
                  alignItems:"flex-start"
                }}>
                <p style={{
                  fontSize: "19px",
                  color: "rgb(255,255,255,0.5)",
                  textAlign: "justify",
                  padding:"10px 0px"

                }}>{truncate(news?.title, 60)}</p>

                <div
                  style={{
                    minWidth: "50px",
                    border: "1px solid orange",
                    borderRadius: '5px',
                    color: "orange",
                    padding: "5px 10px",
                    height:"20px",
                    // color:"white",
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center"
                  }}><p>{news?.source?.name}</p></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="sidesection"
        style={{
          width: "30%",
          display: "flex",
          justifyContent: "center"
        }}>
        <div className="popularity"
          style={{
            width: "80%",
            height: "300px",
          }}>
          <div className="title"
            style={{
              maxWidth: "70px",
              height: "30px",
              padding: "1px 30px",
              border: "1px solid orange",

              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "orange",
              borderRadius: "5px",
              borderTopRightRadius: "5px"
            }}>
            <p>Popular</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MOre