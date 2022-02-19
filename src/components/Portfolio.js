import React from 'react';
import { useState } from 'react'
import functions from '../Functions/Functions'

import dodge from '../images/DTB.gif'
import dodgeImg from '../images/dodge.png'
import animeImg from '../images/anime.png'
import blogImg from '../images/myblog.png'
import storeImg from '../images/store.png'


const data_list = [
  {
    'name': 'Dodge The Block',
    'summary': 'Dodge the Block is a complex frontend game that uses EventListeners and Animations to move the blocks A user dodges incoming blocks while collecting the green blocks to increase currency for a shop that utilizes dom manipulation.',
    'gif': dodge,
    'image': dodgeImg,
    'link': 'https://pages.git.generalassemb.ly/typeluis/Dodge-the-Block/',
    'skills': {
      'frontend': ['Javascript', 'HTML', 'CSS'],
      'backend': [],
      'libraries': [],
    }
  },

  {
    'name': 'MY BLOG',
    'summary': "A blog page that displays a user's post and youtube videos that uses the database to manipulate the DOM. Utilizes PostgreSQL and node.js for the backend and vanilla Javascript, HTML, CSS for the frontend. My blog is a blog post that allows a user to perform CRUD operation.",
    'gif': dodge,
    'image': blogImg,
    'link': 'https://pages.git.generalassemb.ly/typeluis/Dodge-the-Block/',
    'skills': {
      'frontend': ['Javascript', 'HTML', 'CSS'],
      'backend': ['PostgreSQL', 'Node.js'],
      'libraries': ['Express.js'],
    }
  },

  {
    'name': 'ANIME SEARCH',
    'summary': "Anime Search is a full stack web application that queries anime shows from a third party api. A user can add shows to their watched and favorites list and download images of their show. The chart page displays a graph of all user's favorite shows.",
    'gif': dodge,
    'image': animeImg,
    'link': 'https://anime-database-project.herokuapp.com/search',
    'skills': {
      'frontend': ['Javascript', 'HTML', 'CSS'],
      'backend': ['PostgreSQL', 'Node.js'],
      'libraries': ['Express.js', 'React.js', 'Axios', 'ChartJs', 'Dotenv'],
    }
  },

  {
    'name': 'STORE SEARCH',
    'summary': "Store Search is a full stack web application that queries anime shows from a third party api. A user can add shows to their watched and favorites list and download images of their show. The chart page displays a graph of all user's favorite shows.",
    'gif': dodge,
    'image': storeImg,
    'link': 'https://store-search-project.herokuapp.com',
    'skills': {
      'frontend': ['Javascript', 'HTML', 'CSS', 'SCSS'],
      'backend': ['PostgreSQL', 'Python'],
      'libraries': ['Flask', 'React.js', 'Axios', 'Stripe', 'Beautiful Soup', 'Dotenv'],
    }
  }
]

const Portfolio = (props) => {
  const [modal, setModal] = useState('')


  return (
    <div ref={props.portfolioRef} className='content-page'>
      <h1 className='heading'>Portfolio</h1>

      <div id='portfolio' className='details'>
        {data_list.map((item, i) => {
          return (
            <div key={i} className='project-container'>
              {item.name && <h2>{item.name}</h2>}

              {item.image && <img onClick={() => { setModal(item) }} src={item.image} />}


            </div>

          )
        })}

        {modal && functions.showModal(modal, setModal)}
      </div>
    </div>
  )
};

export default Portfolio;