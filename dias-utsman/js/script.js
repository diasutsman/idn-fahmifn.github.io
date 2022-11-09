const githubApiKey = config.GITHUB_API_KEY

function getProjectsCount() {
    return fetch('https://api.github.com/users/diasutsman', {
        headers: {
            'Accept': 'application/vnd.github+json',
            //'Authorization': `Bearer ${githubApiKey}`
        }
    })
        .then(res => res.json())
        .then(data => {
            return data['public_repos']
        })
}

function getRepoCountByLang(lang) {
    return fetch(`https://api.github.com/search/repositories?q=user:diasutsman%20language:${lang}`, {
        headers: {
            'Accept': 'application/vnd.github+json',
            //'Authorization': `Bearer ${githubApiKey}`
        }
    })
        .then(res => res.json())
        .then(data => {
            return data['total_count']
        })
}


function getWebsCount() {
    return getRepoCountByLang('css')
}

function getMobileAppsCount() {
    return getRepoCountByLang('kotlin')
}

function getFlutterAppsCount() {
    return getRepoCountByLang('dart')
}

function removeLoading() {
    const loading = document.querySelector('.loading-container')
    loading.classList.add('fade-out')

    loading.addEventListener('animationend', () => loading.remove())
}

async function typeAfterResolve(el, promise) {
    new TypeIt(el, {
        speed: 100,
        afterComplete: async (ins) => {
            ins.destroy()
            let instance, data
            try {
                data = await promise
                instance = new TypeIt(el, {
                    speed: 100,
                    afterComplete: ins => ins.destroy(),
                })
                instance.type(data)
            } catch (error) {
                instance.type('Cannot count')
            }
            instance.go()
        }
    })
        .type('counting...')
        .delete()
        .go()
}

function typeIt() {
    // Type it
    new TypeIt('#typeIt', {
        strings: 'Hi! I Am Dias Utsman',
        speed: 100,
        afterComplete: (instance) => {
            instance.destroy()
            new TypeIt('#typeIt1', {
                strings: "Developing Apps and Websites for over <span>2 years</span> as a software developer.",
                speed: 30,
            }).go()
        }
    }).go()
}

function applyAnimations() {
    typeIt()
    typeAfterResolve('#projectDone', getProjectsCount())
    typeAfterResolve('#webCount', getWebsCount())
    typeAfterResolve('#appCount', getMobileAppsCount())
    typeAfterResolve('#flutterCount', getFlutterAppsCount())

    // AOS
    AOS.init()

    new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        spaceBetween: 16,
        slidesPerView: '1',
        autoplay: {
            delay: 1500,
            disableOnInteraction: false
        },
        loop: true,

        breakpoints: {
            // when window width is >= 320px
            700: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            // when window width is >= 480px
            850: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            // when window width is >= 640px
            1000: {
                slidesPerView: 3,
                spaceBetween: 40
            }
        },

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });
}

applyAnimations()

const menuToggle = document.getElementById('menu-toggle')
const navCollapse = document.querySelector('.nav-collapse')

menuToggle.addEventListener('click', () => {
    navCollapse.classList.toggle('show')
})