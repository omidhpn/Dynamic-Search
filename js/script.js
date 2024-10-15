let suggestions = [
    "Channel",
    "CodingLab",
    "CodingNepal",
    "YouTube",
    "YouTuber",
    "YouTube Channel",
    "Blogger",
    "Bollywood",
    "Vlogger",
    "Vechiles",
    "Facebook",
    "Freelancer",
    "Facebook Page",
    "Designer",
    "Developer",
    "Web Designer",
    "Web Developer",
    "Login Form in HTML & CSS",
    "How to learn HTML & CSS",
    "How to learn JavaScript",
    "How to become Freelancer",
    "How to become Web Designer",
    "How to start Gaming Channel",
    "How to start YouTube Channel",
    "What does HTML stands for?",
    "What does CSS stands for?",
];


let $ = document
let inputElem = $.getElementById ('input')
let divElem = $.querySelector ('.autocom-box')
let serachInputElem = $.querySelector ('.search-input')



inputElem.addEventListener ('keyup', function () {

    divElem.innerHTML = ''
    serachInputElem.className = 'search-input active'
    let filteredItems = suggestions.filter (function (item) {
        return item.toLowerCase().includes (inputElem.value.toLowerCase())
        
    })
    
    if (filteredItems.length === 0) {
        let liElem = $.createElement ('li')
        liElem.innerHTML = inputElem.value
        divElem.append (liElem)

        liElem.addEventListener ('click', function () {
            serachInputElem.className = 'search-input'

        })
    } else if (inputElem.value === '') {
        serachInputElem.className = 'search-input'

    } else {
        filteredItems.forEach (function (item) {
            let liElem = $.createElement ('li')
            liElem.innerHTML = item
            divElem.append (liElem)

            liElem.addEventListener ('click', function () {
                serachInputElem.className = 'search-input'
                inputElem.value = item
            })
        })

    }

    
})