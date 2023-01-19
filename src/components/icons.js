import "./icons.css";

function Logo({ variant, height = 25 }) {
  let logoData = {
    css: { text: "CSS", logo: "css3", logoColor: "61DAFB" },
    html: { text: "HTML", logo: "html5", logoColor: "#E34F26" },
    react: { text: "React", logo: "react", logoColor: "61DAFB" },
    tailwind: {
      text: "Tailwind CSS",
      logo: "tailwind-css",
      logoColor: "06B6D4",
    },
    mui: { text: "MUI", logo: "mui", logoColor: "007FFF" },
    mongodb: { text: "MongoDB", logo: "mongodb", logoColor: "47A248" },
    node: { text: "Node.js", logo: "node.js", logoColor: "339933" },
    javascript: { text: "JavaScript", logo: "javascript", logoColor: "F7DF1E" },
    heroku: { text: "Heroku", logo: "heroku", logoColor: "430098" },
    graphql: { text: "GraphQL", logo: "graphql", logoColor: "E10098" },
    figma: { text: "Figma", logo: "figma", logoColor: "F24E1E" },
    express: { text: "Express.js", logo: "express", logoColor: "61DAFB" },
    bulma: { text: "Bulma", logo: "bulma", logoColor: "00D1B2" },
    mysql: { text: "MySQL", logo: "mysql", logoColor: "4479A1" },
    sequelize: { text: "Sequelize", logo: "sequelize", logoColor: "52B0E7" },
    netlify: { text: "Netlify", logo: "netlify", logoColor: "00C7B7" },
    stripe: { text: "Stripe", logo: "stripe", logoColor: "008CDD" },
    jquery: { text: "jQuery", logo: "jquery", logoColor: "0769AD" },
    handlebars: {
      text: "Handlebars.js",
      logo: "handlebars.js",
      logoColor: "61DAFB",
    },
    mvc: { text: "Model View Controller", logo: "", logoColor: "61DAFB" },
    jest: { text: "Jest", logo: "jest", logoColor: "C21325" },
    githubpages: { text: "GitHub Pages", logo: "", logoColor: "222222" },
  };

  let url = `https://img.shields.io/badge/${logoData[variant].text}-393939?logo=${logoData[variant].logo}&logoColor=${logoData[variant].logoColor}&style=plastic&logoWidth=20`;

  return <img className="mr-5 mt-10 icons_img " height={height} src={url} />;
}

export default Logo;
