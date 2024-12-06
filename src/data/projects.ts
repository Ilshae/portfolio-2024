type HostedProject = NotHostedProject & {
  href: string
}

type NotHostedProject = {
  image: string
  title: string
  description: string
  hrefGithub: string
  stack: string[]
}

export const projects: {
  hosted: HostedProject[]
  notHosted: NotHostedProject[]
} = {
  hosted: [
    {
      image: "assets/images/apps/jachty-pruszynski.jpg",
      title: "Jachty Pruszynski",
      description:
        "A commercial project for a chartering company with detailed descriptions of their products.",
      href: "https://jachtypruszynski.pl/",
      hrefGithub: "https://github.com/Ilshae/jachty-2",
      stack: [
        "TypeScript",
        "Material UI",
        "React",
        "React Router",
        "Cypress",
        "HTML5",
        "CSS3",
      ],
    },
    {
      image: "assets/images/apps/crwn-clothing.jpg",
      title: "Crwn Clothing",
      description:
        "Try out signing in with google or creating a new account and paying with test credit card.",
      href: "https://crwn-clothing-2024.netlify.app/",
      hrefGithub: "https://github.com/Ilshae/crwn-clothing-src-2024",
      stack: [
        "JavaScript",
        "React",
        "Redux",
        "React Router",
        "Firebase",
        "Styled Components",
        "Cypress",
        "HTML5",
        "CSS3",
        "SASS",
      ],
    },
    {
      image: "assets/images/apps/tetris.jpg",
      title: "Tetris",
      description: "Press start and use arrows to play.",
      href: "https://ilshae.github.io/tetris/",
      hrefGithub: "https://github.com/Ilshae/react-tetris",
      stack: ["HTML5", "CSS3", "SASS", "JavaScript", "React"],
    },
  ],
  notHosted: [
    {
      image: "assets/images/apps/hermes-travel-agency.jpg",
      title: "Hermes Travel Agency",
      description:
        "Dynamically sort trips by tags and duration or use a search bar. Ordered trips go to a JSON Server for later use.",
      hrefGithub: "https://github.com/Ilshae/react-travel-agency",
      stack: [
        "JavaScript",
        "React",
        "Redux",
        "Webpack",
        "React Router",
        "Jest",
        "HTML5",
        "CSS3",
        "SASS",
      ],
    },
    {
      image: "assets/images/apps/vivek-university.jpg",
      title: "Vivek University",
      description:
        "Wordpress site with a custom made theme. Register a new user and login. Logged in users have access to Notes subpage.",
      hrefGithub: "https://github.com/Ilshae/vivek-university",
      stack: [
        "JavaScript",
        "Wordpress",
        "Advanced Custom Fields",
        "Webpack",
        "HTML5",
        "CSS3",
        "SASS",
      ],
    },
    {
      image: "assets/images/apps/fullstack.jpg",
      title: "Yacht reservation",
      description:
        "Engineering Project made for my university. React on frontend and Spring on backend.",
      hrefGithub: "https://github.com/Ilshae/fullstack-app",
      stack: [
        "JavaScript",
        "React",
        "React Intl",
        "React Router",
        "Cypress",
        "Styled Components",
        "Material UI",
        "TanStack Query",
        "Spring",
        "Spring Boot",
        "Spring Data JPA",
        "Lombok",
        "Spring Boot Validation",
        "Spring Boot Security",
        "Java JSON WebToken",
        "HTML5",
        "CSS3",
      ],
    },
    {
      image: "assets/images/apps/swapi.jpg",
      title: "SWAPI",
      description:
        "NestJS API with GraphQL endpoints from the SWAPI. Includes Redis and is Dockerized.",
      hrefGithub: "https://github.com/Ilshae/swapi-app",
      stack: [
        "NestJS",
        "GraphQL",
        "Redis",
        "Jest",
        "SpectaQL",
        "TypeScript",
        "Docker",
      ],
    },
    {
      image: "assets/images/apps/node-app.jpg",
      title: "Book Shop",
      description:
        "Simple node app. Add products to card, buy them. Admin page allows edition of products.",
      hrefGithub: "https://github.com/Ilshae/node-app",
      stack: ["Node JS", "JavaScript", "EJS", "HTML5", "CSS3", "SASS"],
    },
    {
      image: "assets/images/apps/mamma-mia-pizeria.jpg",
      title: "Mamma Mia Pizzeria",
      description:
        "Pure JavaScript app. Ordered products from cart go to a JSON Server. Live table booking.",
      hrefGithub: "https://github.com/Ilshae/project-pizzeria",
      stack: [
        "JavaScript",
        "React",
        "Redux",
        "Webpack",
        "React Router",
        "HTML5",
        "CSS3",
        "SASS",
      ],
    },
    {
      image: "assets/images/apps/homes.jpg",
      title: "Homes",
      description: "Simple Angular application.",
      hrefGithub: "https://github.com/Ilshae/homes-app",
      stack: ["TypeScript", "Angular", "HTML5", "CSS3", "SASS"],
    },
  ],
}
