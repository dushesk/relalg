import { API_URL } from "api.js";

export const getTable = async(schema, table) => {
    const response = await fetch(`${API_URL}/tables/${schema}/${table}`);
    if (!response.ok) {
        throw new Error('An error occurred while fetching the task');
    }
    return response.json();
};
