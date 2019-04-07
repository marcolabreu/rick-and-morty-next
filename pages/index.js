import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'

const Home = () => (
  <div>
    <Head title="Rick & Morty Characters" />
    <Nav />

    <div className="page">
      <h1 className="title">Rick and Morty Characters</h1>

      <div className="row">
        <Link href="#">
          <a className="card">
            <h3>Rick</h3>
            <p>Some info</p>
          </a>
        </Link>
        <Link href="#">
          <a className="card">
            <h3>Morty</h3>
            <p>Some info</p>
          </a>
        </Link>
        <Link href="#">
          <a className="card">
            <h3>Beth</h3>
            <p>Some info</p>
          </a>
        </Link>
      </div>
    </div>

    <style jsx>{`
      .page {
        width: 100%;
        color: #333;
      }
      .title {
        margin: auto;
        width: 80%;
        padding-top: 1%;
        line-height: 1.15;
        font-size: 48px;
      }
      .row {
        max-width: 1000px;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
      }
      .card {
        padding: 18px 18px 24px;
        width: 240px;
        text-align: left;
        text-decoration: none;
        color: #434343;
        border: 1px solid #9b9b9b;
      }
      .card:hover {
        border-color: #067df7;
      }
      .card h3 {
        margin: 0;
        color: #067df7;
        font-size: 18px;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #333;
      }
    `}</style>
  </div>
)

export default Home
