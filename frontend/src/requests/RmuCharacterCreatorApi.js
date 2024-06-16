import axios from "axios";

export const rmuCharacterCreatorApi = {
    getSkillCost,
    getAllCharacters,
    saveCharacter
}

const instance = axios.create({
    baseURL: "http://localhost:8080"
})

function getSkillCost(profession) {
    return instance.get(`/api/skill-costs/${profession}`)
}

function getAllCharacters() {
    return instance.get(`/api/characters/all`)
}

function saveCharacter(character) {
    return instance.post(`/api/characters/`, character)
}