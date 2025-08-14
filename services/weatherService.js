import { GoogleGenAI } from "@google/genai";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

if (!API_KEY) {
  throw new Error("API_KEY environment variable not set.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

const weatherConditionEnum = ["Sunny", "Cloudy", "Partly Cloudy", "Rain", "Snow", "Thunderstorm", "Fog", "Windy"];

const schema = {
  type: 'OBJECT',
  properties: {
    city: { type: 'STRING', description: "The name of the city." },
    country: { type: 'STRING', description: "The country where the city is located." },
    current: {
      type: 'OBJECT',
      description: "The current weather conditions.",
      properties: {
        temperature: { type: 'INTEGER', description: "Current temperature in Celsius." },
        feelsLike: { type: 'INTEGER', description: "What the temperature feels like in Celsius." },
        humidity: { type: 'INTEGER', description: "Humidity percentage." },
        windSpeed: { type: 'INTEGER', description: "Wind speed in km/h." },
        condition: { type: 'STRING', enum: weatherConditionEnum, description: "A single word describing the weather condition." },
        description: { type: 'STRING', description: "A short phrase describing the current weather, e.g., 'Clear skies'." },
      },
      required: ["temperature", "feelsLike", "humidity", "windSpeed", "condition", "description"],
    },
    forecast: {
      type: 'ARRAY',
      description: "A 7-day weather forecast.",
      items: {
        type: 'OBJECT',
        properties: {
          day: { type: 'STRING', description: "Day of the week (e.g., 'Monday')." },
          high: { type: 'INTEGER', description: "Highest temperature for the day in Celsius." },
          low: { type: 'INTEGER', description: "Lowest temperature for the day in Celsius." },
          condition: { type: 'STRING', enum: weatherConditionEnum, description: "A single word describing the weather condition for the day." },
        },
        required: ["day", "high", "low", "condition"],
      },
    },
    advice: {
        type: 'OBJECT',
        description: "Personalized advice based on the weather.",
        properties: {
            summary: { type: 'STRING', description: "A friendly, one-sentence summary of today's weather." },
            whatToWear: { type: 'STRING', description: "A short suggestion on what to wear." },
        },
        required: ["summary", "whatToWear"],
    },
  },
  required: ["city", "country", "current", "forecast", "advice"],
};

export const getWeatherData = async (city) => {
  const prompt = `Generate a realistic weather report for ${city}. Provide the current weather, a 7-day forecast, and some friendly advice. The first day of the forecast should be 'Today'. Use Celsius for temperature and km/h for wind speed.`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: schema,
      },
    });

    const jsonText = response.text.trim();
    const weatherData = JSON.parse(jsonText);
    
    // Validate that the forecast has 7 days, if not, pad it.
    while (weatherData.forecast.length < 7) {
        weatherData.forecast.push({ day: 'N/A', high: 0, low: 0, condition: 'Sunny' });
    }
    weatherData.forecast = weatherData.forecast.slice(0, 7);

    return weatherData;

  } catch (error) {
    console.error("Error fetching weather data from Gemini API:", error);
    if (error instanceof Error && error.message.includes('SAFETY')) {
        throw new Error(`The request for "${city}" was blocked due to safety settings. Please try a different location.`);
    }
    throw new Error("Failed to generate weather data. The AI model might be busy or the location is invalid.");
  }
};
