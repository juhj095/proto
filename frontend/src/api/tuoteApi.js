const BASE_URL = "http://localhost:3004";

export const getTuotteet = async () => {
    try {
        const response = await fetch(`${BASE_URL}/api/tuotteet`);
        return response.json();
    } catch (error) {
        throw error;
    }
}

export const getTuotteenMuutokset = async (tuote) => {
    try {
        const response = await fetch(`${BASE_URL}/api/tuote?nimi=${tuote}`);
        return response.json();
    } catch (error) {
        throw error;
    }
}