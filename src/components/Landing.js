import React from 'react'


export default function Landing() {
 return (
  <div className="landing">
      {/* <h1>Koran Agan</h1>
      <h2>Full-Stack Web Developer | Software Engineer</h2> */}
       <div className='badge'>
         <img  className='avatar' src='../assets/avatar2.jpg'/>
         <img className='title' src='../assets/content/KA_title.jpg'/>
       </div>
       
       <h1>
          Current Projects
          </h1>
       
          <div className='project lara'>
         <h2>
             <a href='https://larabello.com'>LaraBello.com</a>
          </h2>
          <h3>Stack: ReactJS, NextJS, API (Prismic CMS), JavaScript, CSS</h3>
          <div className="logos small">
            <img src="../assets/three.png"></img>
            <img src="../assets/reactJS.png"></img>
            <img src="../assets/nextJS.png"></img>
            <img src="../assets/prismic-io.jpg"></img>
          </div>
          <div className='github-logo'>
             <h3>Source:</h3>
            <a href='https://github.com/agan-k/lara'>
               <img src='../assets/github.png' />
            </a>
          </div>

          <div className='screen-shots'>
             <div className='desktop'>
               <img src='../assets/screen_shots/lara_desktop1.jpg'/>
               <img src='../assets/screen_shots/lara_desktop2.jpg'/>
             </div>
          </div>
       </div>

       <div className='project raj'>
         <h2>
             <a href='https://rajivjayaweera.com'>RajivJayaweera.com</a>
          </h2>
          <h3>Stack: ReactJS, CSS</h3>
          <div className="logos small">
            <img src="../assets/three.png"></img>
            <img src="../assets/reactJS.png"></img>
          </div>
          <div className='github-logo'>
             <h3>Source:</h3>
            <a href='https://github.com/agan-k/raj'>
               <img src='../assets/github.png' height='50' />
            </a>
          </div>

          <div className='screen-shots'>
             <div className='desktop'>
               <img src='../assets/screen_shots/raj_desktop.jpg'/>
               <img src='../assets/screen_shots/raj_desktop1.jpg'/>
             </div>
             <div className='mobile'>
               <img src='../assets/screen_shots/raj_mobile.jpg'/>
               <img src='../assets/screen_shots/raj_mobile1.jpg'/>
               <img src='../assets/screen_shots/raj_mobile2.jpg'/>
               <img src='../assets/screen_shots/raj_mobile3.jpg'/>
             </div>
          </div>
       </div>

       <div className='project aic'>
         <h2>
            <a href='https://aic-photography-collection.info'>AIC-Photography-Collection.info</a>
          </h2>
          <h3>Stack: ReactJS, API, CSS</h3>
          <div className="logos small">
            <img src="../assets/three.png"></img>
            <img src="../assets/reactJS.png"></img>
          </div>
          <div className='github-logo'>
             <h3>Source:</h3>
            <a href='https://github.com/agan-k/aic-photography-selection'>
               <img src='../assets/github.png' height='50' />
            </a>
          </div>

          <div className='screen-shots'>
             <div className='desktop'>
               <img src='../assets/screen_shots/aic_desktop.jpg'/>
               <img src='../assets/screen_shots/aic_desktop1.jpg'/>
             </div>
             <div className='mobile'>
             <img id='tablet' src='../assets/screen_shots/aic_tablet.png'/>
               <img src='../assets/screen_shots/aic_mobile.png'/>
               <img src='../assets/screen_shots/aic_mobile2.png'/>
             </div>
          </div>
       </div>
       <div className='project katarina'>
         <h2>
            <a href='https://katarina-olujic.netlify.app'>KatarinaOlujic.com</a>
          </h2>
          <h3>Stack: ReactJS, CSS</h3>
          <div className="logos small">
            <img src="../assets/three.png"></img>
            <img src="../assets/reactJS.png"></img>
          </div>
          <div className='github-logo'>
             <h3>Source:</h3>
            <a href='https://github.com/agan-k/katarinaolujic'>
               <img src='../assets/github.png' height='50' />
            </a>
          </div>
          <div className='screen-shots'>
             <div className='desktop'>
               <img src='../assets/screen_shots/ko1.png'/>
               <img src='../assets/screen_shots/ko2.png'/>
             </div>
             <div className='mobile'>
             </div>
          </div>
       </div>

       <div className='project dom'>
         <h2>
             DominiqueCarre.fr
         </h2>
         <h3>Stack: HTML, CSS, jQuery</h3>
          <div className="logos small">
            <img src="../assets/three.png"></img>
            <img src="../assets/jQuery.png"></img>
          </div>
         <div className='screen-shots'>
            <div className='desktop'>
                <img src='../assets/screen_shots/dom_desktop.jpg'/>
            </div>
            <div className='mobile'>
               <img id='tablet' src='../assets/screen_shots/dom_tablet.jpg'/>
               <img src='../assets/screen_shots/dom_mobile.jpg'/>
               <img src='../assets/screen_shots/dom_mobile1.jpg'/>
            </div>
         </div>
      </div>

       <div className="logos">
         <img src="../assets/three.png"></img>
         <img src="../assets/reactJS.png"></img>
         <img src="../assets/nextJS.png"></img>
         <img src="../assets/prismic-io.jpg"></img>
         <img src="../assets/nodeAndExpress.png"></img>
         <img src="../assets/postgresql.png"></img>
         <img src="../assets/github.png"></img>
      </div>
       
  </div>
 )
}
