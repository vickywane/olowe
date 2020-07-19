import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { IoIosFemale, IoIosCamera } from "react-icons/io"
import { Planet } from "react-kawaii"
import { Link } from "gatsby"

import Line from "../images/line.svg"
import { Text, HomeBckg } from "../styles/"

const BgTitle = styled.h1`
  text-align: center;
`

const Button = styled.button`
    padding : 0.5em 1rem;
    border : 1px solid #22263d;
    background : #22263d;
    border-radius : 5px;
    color : #fff;
    transistion : all 500ms;
    font-size : 1rem
    display : flex;
    &: hover {
        background : transparent;
        border : 1px solid #22263d;
    }
`

const ImgCard = styled.div`
  height: ${props => (props.active ? "18vh" : "16vh")};
  width: ${props => (props.active ? "14rem" : "13rem")};
  margin: 0rem 1rem;
  transition: all 500ms;
  background: #f84e06;
  border-radius: 5px;
  &: hover {
    cursor: pointer;
  }
  img {
    display: flex;
    border-radius: 5px;
    flex: 1;
    height: 18vh;
    box-shadow: 0px ${props => (props.active ? "4px 7px" : "2px 4px")} black;
    background-position: center;
    background-size: cover;
  }
`

const imgs = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]

const Home = () => {
  const [currentItem, setCurrentItem] = useState<number>(0)

  const words = ["Photographs", "Photoshoots", "SnapShots", "Random Photos"]

  useEffect(() => {
    setInterval(() => {
      setCurrentItem(currentItem => (currentItem > 2 ? 0 : currentItem + 1))
    }, 3500)

    return clearInterval(3500)
  }, [])

  return (
    <HomeBckg>
      <div>
        <div style={{ padding: "1rem 1rem", textAlign: "right" }}>
          <Button>
            <div style={{ display: "flex" }}>
              Learn About Me
              <div style={{ margin: "0rem 0.7rem" }}>
                <IoIosFemale style={{ fontSize: "1.8rem" }} />
              </div>
            </div>
          </Button>
        </div>
        <br />
        <div>
          <div style={{ textAlign: "center", margin: "0.6rem 0rem" }}>
            <Planet mood="happy" color="#F84E06" />
          </div>

          <BgTitle> Hi , I am Grace Olowe. </BgTitle>

          <BgTitle>
            I take{" "}
            <span
              style={{
                borderBottom: "5px solid #F84E06",
                background: "#401364d4",
                padding: "0.3rem 1.5rem",
              }}
            >
              {words[currentItem]}{" "}
            </span>
          </BgTitle>

          <div style={{ textAlign: "center", margin: "2rem 0rem" }}>
            <Button>
              <div style={{ display: "flex" }}>
                Hire Me
                <div style={{ margin: "0rem 0.7rem" }}>
                  <IoIosCamera style={{ fontSize: "1.8rem" }} />
                </div>
              </div>
            </Button>

            <Link to="/gallery/main">
              <Button style={{ margin: "0rem 1rem" }}>
                <div style={{ display: "flex" }}>
                  View Past Shots
                  <div style={{ margin: "0rem 0.7rem" }}>
                    <IoIosCamera style={{ fontSize: "1.8rem" }} />
                  </div>
                </div>
              </Button>
            </Link>
          </div>

          <br />
          <br />
          <br />
          <img style={{ maxWidth: "50%" }} src={Line} />
          <div style={{ textAlign: "center" }}>
            <div style={{ display: "flex" }}>
              {imgs.map(({ id }) => {
                return (
                  <ImgCard active={id === currentItem} key={id}>
                    <img src={require(`../images/${id}.jpg`)} alt={`${id}`} />
                  </ImgCard>
                )
              })}
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </HomeBckg>
  )
}

export default Home
