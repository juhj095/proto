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
        const response = await fetch(`${BASE_URL}/api/tuote?tunnus=${tunnus}`);
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