const APIURL = 'http://51.38.232.174:3002/v1'

const feedbackWrap = document.querySelector(".feedback-wrapper")




async function get() {
    const ans = await fetch(`${APIURL}/feedbacks`, {
        method: "GET"
    })

    const data = await ans.json()
    console.log(data)
}

async function create() {
    const ans = await fetch(`${APIURL}/feedbacks`, {
        method: "GET"
    })

    const data = await ans.json()

    const createItem = document.createElement("div")
    const createVoteDiv = document.createElement("div")

    const createVote = document.createElement("span")

    const createItemTextDiv = document.createElement("div")
    const createTitle = document.createElement("h3")
    const createp = document.createElement("p")
    const createCategory = document.createElement("div")

    const createCommentDiv = document.createElement("div")
    const CreatComment = document.createElement("span")


    for (let i = 0; i < data.length; i++) {
        feedbackWrap.appendChild(createItem)
        createItem.classList.add("feedback-item")

        createItem.appendChild(createVoteDiv)
        createVoteDiv.classList.add("feedback-item-votes")

        createVoteDiv.appendChild(createVote)
        createVote.classList.add("text-regular-3")
        createVote.innerHTML = data[i].votes

        createItem.appendChild(createItemTextDiv)
        createItemTextDiv.cla()




    }
}

create()
get()
