import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import { Menu } from '../../src/component/Menu'
import { Login } from '../../src/component/Login'
import { MainBanner} from '../../src/component/MainBanner'
import { Model } from '../../src/component/Model'
import { Footer } from '../../src/component/Footer'
import { TradeIn } from '../../src/component/TradeIn'
import { SalesComponent } from '../../src/component/Sales'
import { SelectTest } from '../../src/component/selectTest'
import { Modal } from '../../src/component/Modal'

import { useState } from 'react'
import BarMenu from '../../src/component/BarMenu'
import { RegComponent } from '../../src/component/admin/Reg'

const  regAdmin: NextPage = () => {
    return (
      <>
        <Head>
          <title>OPEL</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Menu />
        <BarMenu />
        <RegComponent />
     
      </>
    )
  }
  
  export default regAdmin
  