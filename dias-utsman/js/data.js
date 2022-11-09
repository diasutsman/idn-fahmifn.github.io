const certsSlide = new Swiper('.certs-swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    speed: 2000,
    autoplay: {
        delay: 0,
        disableOnInteraction: false
    },
    breakpoints: {
        // when window width is >= 700px
        700: {
            slidesPerView: 2,
            spaceBetween: 20
        },
    },
});

const certsImages = [
    "./img/dicoding/android-pemula.webp",
    "./img/dicoding/architecting-on-aws.webp",
    "./img/dicoding/aws-partitioner.webp",
    "./img/dicoding/back-end-aws.webp",
    "./img/dicoding/back-end-fundamental.webp",
    "./img/dicoding/back-end-google-cloud.webp",
    "./img/dicoding/c.webp",
    "./img/dicoding/flutter.webp",
    "./img/dicoding/front-end-pemula.webp",
    "./img/dicoding/java.webp",
    "./img/dicoding/js-dicoding-cert.webp",
    "./img/dicoding/solid.webp",
];

certsImages.forEach((certsImage) => {
    certsSlide.appendSlide(`
        <div class="swiper-slide">
            <img src="${certsImage}" alt="certs-image">
        </div>
    `);
})

const skillsContent = document.querySelector('#skills .content');

const skills = [
    {
        name: 'Node Js',
        percentage: 90,
        image: './img/skills/nodejs.webp',
        desc: 'A runtime environment for running Javascript outside browser. Node Js is used to build server-side applications.',
    },
    {
        name: 'Website',
        percentage: 95,
        image: './img/skills/website.webp',
        desc: 'I can build a website using HTML, CSS, and Javascript. I can also build a website using a framework like React Js.',
    },
    {
        name: 'React Js',
        percentage: 75,
        image: './img/skills/react.webp',
        desc: 'A Javascript library for building user interfaces. React Js is used to build client-side applications.',
    },
    {
        name: 'Express',
        percentage: 65,
        image: './img/skills/express.webp',
        desc: 'A web framework for Node Js. Express is used to build server-side applications.',
    },
    {
        name: 'Hapi Js',
        percentage: 75,
        image: './img/skills/hapi.webp',
        desc: 'A web framework for Node Js. Hapi Js is used to build server-side applications.',
    },
    {
        name: 'Android',
        percentage: 80,
        image: './img/skills/android.webp',
        desc: 'I can build an Android application using Kotlin. I can also build an Android application using libraries like Retrofit, Glide, and Room.',
    },
    {
        name: 'Flutter',
        percentage: 45,
        image: './img/skills/flutter.webp',
        desc: 'A framework for building cross-platform applications. Flutter is used to build client-side applications.',
    },
    {
        name: 'Firebase',
        percentage: 35,
        image: './img/skills/firebase.webp',
        desc: 'A service from google to provide database and authentication for web and mobile applications.',
    },
    {
        name: 'MongoDB',
        percentage: 50,
        image: './img/skills/mongodb.webp',
        desc: 'A NoSQL database. MongoDB is used to store data in JSON-like documents.',
    }

]

skillsContent.innerHTML = skills.map(skill => {
    return `<div class="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <img src="${skill.image}" alt="${skill.name}">
        <p>${skill.name}</p>
      </div>
      <div class="flip-card-back">
        <h1>${skill.name}</h1>
        <p>${skill.desc}</p>
        <div class="percentage">
          <div class="progress" style="width: ${skill.percentage}%"></div>
        </div>
      </div>
    </div>
  </div>`
}).join('');