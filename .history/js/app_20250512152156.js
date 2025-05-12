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

    const createItemText = document.createElement("")

    for (let i = 0; i < data.length; i++) {
        console.log(data[i].category)

    }
}

create()
get()
