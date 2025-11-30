import { GoogleGenAI, GenerateContentResponse, Type } from "@google/genai";
import { TimeEntry } from "../types";

// Initialize the Gemini client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

/**
 * Analyzes a list of time entries and provides productivity insights.
 */
export const analyzeProductivity = async (entries: TimeEntry[]): Promise<string> => {
  try {
    const prompt = `
      Analyze the following time tracking data for a software engineer.
      Provide a concise summary of their week, identify potential bottlenecks (like too much time on one task), 
      and give 3 actionable tips to improve efficiency.
      
      Data:
      ${JSON.stringify(entries, null, 2)}
      
      Output format:
      Use Markdown. Keep it professional but encouraging.
    `;

    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        systemInstruction: "You are an expert productivity coach for tech teams.",
        temperature: 0.7,
      }
    });

    return response.text || "Unable to generate insights at this time.";
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return "AI Service Unavailable: Please check your API key.";
  }
};

/**
 * Generates a mock schedule for demonstration purposes if the user has no data.
 */
export const generateMockSchedule = async (): Promise<TimeEntry[]> => {
    // This is a simulation of AI generating data, but strictly structured via JSON schema
    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: "Generate 5 realistic time tracking entries for a frontend developer's day.",
            config: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: Type.ARRAY,
                    items: {
                        type: Type.OBJECT,
                        properties: {
                            id: { type: Type.STRING },
                            project: { type: Type.STRING },
                            task: { type: Type.STRING },
                            duration: { type: Type.NUMBER, description: "Duration in minutes" },
                            date: { type: Type.STRING },
                            status: { type: Type.STRING, enum: ["Completed", "In Progress", "Blocked"] }
                        },
                        required: ["id", "project", "task", "duration", "date", "status"]
                    }
                }
            }
        });
        
        const jsonText = response.text;
        if (!jsonText) return [];
        return JSON.parse(jsonText) as TimeEntry[];
    } catch (e) {
        console.error("Failed to generate mock data", e);
        return [
            { id: '1', project: 'Website Redesign', task: 'Hero Section', duration: 120, date: '2023-10-27', status: 'Completed' },
            { id: '2', project: 'Mobile App', task: 'Fix Login Bug', duration: 45, date: '2023-10-27', status: 'Completed' },
        ];
    }
}