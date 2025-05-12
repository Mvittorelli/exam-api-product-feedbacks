const APIURL = 'http://51.38.232.174:3002/v1'

const feedbackitem = document.querySelector("#feedback-item")
if (feedbackitem) {
    feedbackitem.remove();
}

const feedbackWrap = document.querySelector(".feedback-wrapper")
const search = document.querySelector("#search")
const suggestions = document.querySelector("#feedback-counter")


async function create() {
    const ans = await fetch(`${APIURL}/feedbacks`, {
        method: "GET"
    })

    const data = await ans.json()

    console.log(data)

    for (let i = 0; i < data.length; i++) {
        create2(data, i)
        suggestions.innerHTML = i
    }
}

function create2(data, i) {

    const createItem = document.createElement("div")
    const createVoteDiv = document.createElement("div")

    const createVote = document.createElement("span")

    const createItemTextDiv = document.createElement("div")
    const createTitle = document.createElement("h3")
    const createp = document.createElement("p")
    const createCategory = document.createElement("div")

    const createCommentDiv = document.createElement("div")
    const CreateComment = document.createElement("span")


    // for (let i = 0; i < data.length; i++) {
    feedbackWrap.appendChild(createItem)
    createItem.classList.add("feedback-item")

    createItem.appendChild(createVoteDiv)
    createVoteDiv.classList.add("feedback-item-votes")

    createVoteDiv.appendChild(createVote)
    createVote.classList.add("text-regular-3")
    createVote.innerHTML = data[i].votes

    createItem.appendChild(createItemTextDiv)
    createItemTextDiv.classList.add("feedback-item-text")

    createItemTextDiv.appendChild(createTitle)
    createTitle.classList.add("heading-3")
    createTitle.innerHTML = data[i].title

    createItemTextDiv.appendChild(createp)
    createp.innerHTML = data[i].description

    createItemTextDiv.appendChild(createCategory)
    createCategory.classList.add("feedback-chip")
    createCategory.classList.add("text-regular-3")
    createCategory.innerHTML = data[i].category

    createItem.appendChild(createCommentDiv)
    createCommentDiv.classList.add("feedback-item-comments")

    createCommentDiv.appendChild(CreateComment)
    CreateComment.classList.add("bold")
    CreateComment.innerHTML = data[i].comments
    // }
}




addEventListener("load", () => {
    create()
})

search.addEventListener("click", () => {
    create()
})





