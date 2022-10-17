import React from 'react'
import Card from '../components/Card'
import Nav_bar from '../components/Nav_bar'
import styles from '../styles/Home.module.css'


const about = () => {
  return (
    <>
    <Nav_bar/>
    <div className={styles.main}>
    <div>Kaise ho beta</div>
    <Card title="Niharika Ka Bada" sub_title="Boobs" />
    </div>
    </>
  )
}

export default about