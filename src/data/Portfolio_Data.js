import dodgeGif from '../images/DTB.gif'
import dodgeImg from '../images/dodge.png'

import animeGif from '../images/AnimeSearch.gif'
import animeImg from '../images/anime_search.jpg'

import blogGif from '../images/MyBlog.gif'
import blogImg from '../images/myblog.png'

import storeGif from '../images/StoreSearch.gif'
import storeImg from '../images/store.png'

// import nextGif from '../images/NextSearch.gif'
import nextimg from '../images/Next.png'

const data_list = [
  {
    'name': 'Dodge The Block',
    'summary': `
    ⋆ Made significant contributions to the successful completion of the project by developing complex frontend game features.
    ⋆ Used Vanilla JavaScript to create a dodge game with a shop that utilized DOM manipulation.
      `,
    'gif': dodgeGif,
    'image': dodgeImg,
    'link': {
      'site': 'https://dodge-the-block.netlify.app',
      'frontend': 'https://github.com/TypeLuis/Dodge-The-Block',
      'backend': ''
    },
    'skills': {
      'frontend': ['Javascript', 'HTML', 'CSS'],
      'backend': [],
      'libraries': [],
    }
  },

  {
    'name': 'Nextjs Store',
    'summary': `
        ⋆ Developed a Full-Stack store web application using Next.js
        ⋆ Implemented an intersection observer which allowed for different blocks of code to be executed when a user scrolled. This improved the user experience by reducing the amount of time required to load new content
        ⋆ Developed component-scoped styles using CSS module and SASS to create consistent, reusable code.
        ⋆ Optimized front-end performance by reducing file size and implementing caching strategies.
      
      `,
    // 'gif': storeGif,
    'image': nextimg,
    'link': {
      'site': 'https://shopify-nextjs-app.netlify.app',
      'frontend': 'https://github.com/TypeLuis/Nextjs-Shopify-Project',
      'backend': ''
    },
    'skills': {
      'frontend': ['Javascript', 'HTML', 'CSS', 'SCSS'],
      'backend': [],
      'libraries': ['Next.js', 'MUI'],
    }
  },

  {
    'name': 'MY BLOG',
    'summary': `
        ⋆ Developed a blog page that allowed users to view and interact with the blog page and YouTube videos.
        ⋆ Worked with a team of 3 to develop the blog page and ensure that it met all the requirements.
        ⋆ Accomplished increased task inefficiency by 40% through the development of the blog page.
        ⋆ Developed a dynamic and responsive web application using vanilla JavaScript, HTML, and CSS
        ⋆ Implemented a PostgreSQL database to store information for the web application and node.js to establish connection between the frontend and backend.
        ⋆ Utilized Express.Js on the backend to develop REST API routes for CRUD operations which interact with Postgres database.
      `,
    'gif': blogGif,
    'image': blogImg,
    'link': {
      'site': 'https://my-page-blog.netlify.app',
      'frontend': 'https://github.com/TypeLuis/unit-two-frontend',
      'backend': 'https://github.com/TypeLuis/unit-two-backend'
    },
    'skills': {
      'frontend': ['Javascript', 'HTML', 'CSS'],
      'backend': ['PostgreSQL', 'Node.js'],
      'libraries': ['Express.js'],
    }
  },

  {
    'name': 'ANIME SEARCH',
    'summary': `
        ⋆ Developed a full stack web application using React that queries anime shows from a third party API.
        ⋆ Significant contribution to increase in user engagement by allowing users to add shows to their watched and favorites list and download images of their shows.
        ⋆ Developed a chart page that displays a graph of all user's favorite shows, detailing what time each show is on and how many episodes there are.
      `,
    'gif': animeGif,
    'image': animeImg,
    'link': {
      'site': 'https://anime-query.netlify.app',
      'frontend': 'https://github.com/TypeLuis/unit-3-solo-projects-frontend',
      'backend': 'https://github.com/TypeLuis/Unit-3-Solo-Projects-Backend'
    },
    'skills': {
      'frontend': ['Javascript', 'HTML', 'CSS'],
      'backend': ['PostgreSQL', 'Node.js'],
      'libraries': ['Express.js', 'React.js', 'Axios', 'ChartJs', 'Dotenv'],
    }
  },

  {
    'name': 'STORE SEARCH',
    'summary': `
      ⋆ Developed a Full-Stack shopping web app.
      ⋆ Implemented features such as search, filter, and sorting functionality.
      ⋆ Created a data structure that allocated items to be manufactured in order to streamline the production
      process.
      ⋆ Streamlined checkouts by implementing Stripe as the primary payment processor on e-commerce
      platforms.
      `,
    'gif': storeGif,
    'image': storeImg,
    'link': {
      'site': 'https://store-search.netlify.app',
      'frontend': 'https://github.com/TypeLuis/Unit-4-project-frontend',
      'backend': 'https://github.com/TypeLuis/Unit-4-project-backend'
    },
    'skills': {
      'frontend': ['Javascript', 'HTML', 'CSS', 'SCSS'],
      'backend': ['PostgreSQL', 'Python'],
      'libraries': ['Flask', 'React.js', 'Axios', 'Stripe', 'Beautiful Soup', 'Dotenv'],
    }
  },


]

export default data_list