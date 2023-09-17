import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/Button/Button'


 const About = () => {
  return (
    <div className={styles.container}>
     <div className={styles.imgContainer}>
      <Image src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600" fill={true} alt='' 
      className={styles.img}
      />
      <div className={styles.imgText}>
        <h1 className={styles.imgTitle}>Digital Storytellers</h1>
        <h2>Handcrafting award winning digital experiences</h2>
      </div>
      </div> 
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
           Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
           Facere cupiditate odio commodi tempore minima consectetur, 
           dicta incidunt in temporibus explicabo asperiores! Sit id 
           perspiciatis cupiditate ea magnam cum error impedit!
           Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
           Neque asperiores iure veniam labore quis maiores.
           <br />
           <br />
           Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
           Similique, eos laborum quia vitae veritatis nesciunt inventore 
           saepe deleniti provident debitis eligendi facere odit dolorem 
           tenetur consequuntur impedit eius officiis possimus?
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Ut vel cum fugiat harum corrupti ex, placeat minima recusandae 
            a ducimus ab, quibusdam, odit architecto sit! Consequatur saepe 
            numquam, consequuntur corporis ex dolorem ipsum ut minus.
            <br />
            <br /> - Creative Illustrations
            <br /> 
            <br /> - Dynamic Websites
            <br /> 
            <br /> - Fast and Handy Mobile
          </p>
          <Button url='contact' text='Contact' />
        </div>
      </div>
    </div>
  )
}

export default About;
