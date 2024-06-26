const BASE_URL = "http://localhost:3004";

export const getTuotteet = async (tuoteNimi) => {
    try {
        let url = `${BASE_URL}/api/tuotteet`;
        if (tuoteNimi) url += "?nimi=" + tuoteNimi;
        const response = await fetch(url);
        return response.json();
    } catch (error) {
        throw error;
    }
}

export const getTuotteenMuutokset = async (tunnus) => {
    try {
        const response = await fetch(`${BASE_URL}/api/tuote/${tunnus}/muutosloki`);
        return response.json();
    } catch (error) {
        throw error;
    }
}

export const getTuote = async (tunnus) => {
    try {
        const response = await fetch(`${BASE_URL}/api/tuote/${tunnus}`);
        return response.json();
    } catch (error) {
        throw error;
    }
}

export const getAllProductNames = async () => {
    try {
        const response = await fetch(`${BASE_URL}/api/tuotenimet`);
        return response.json();
    } catch (error) {
        throw error;
    }
}

export const getAllStates = async () => {
    try {
        const response = await fetch(`${BASE_URL}/api/states`);
        return response.json();
    } catch (error) {
        throw error;
    }
}

export const addChangeLog = async (changedBy, change, quantity, recipeNumber, stateId, doctor, customer, productCode) => {
    try {
        const body = { changedBy, change, quantity, recipeNumber, stateId, doctor, customer, productCode }
        await fetch(`${BASE_URL}/api/add-changelog`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
        });
    } catch (error) {
        throw error;
    }
}

export const addProduct = async (code, strength, size, form, wholesale, productName) => {
    try {
        const body = { code, strength, size, form, wholesale, productName }
        await fetch(`${BASE_URL}/api/uusi-tuote`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
        });
    } catch (error) {
        throw error;
    }
}