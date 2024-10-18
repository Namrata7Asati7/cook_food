import cookingData from './data/data';

export const fetchAIResponse = async (query) => {
    // Check if the query exists in the cookingData
    const response = cookingData[query];
    
    if (response) {
        return response; // Return the matched response
    } else {
        return "I'm sorry, I don't have an answer for that. Please ask something else about cooking!";
    }
};
