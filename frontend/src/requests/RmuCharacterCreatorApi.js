import axios from "axios";

export const rmuCharacterCreatorApi = {
    getSkillCost
}

const instance = axios.create({
    baseURL: "http://localhost:8080"
})

function getSkillCost(profession) {
    return instance.get(`/api/skill-costs/${profession}`)
}