import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

const apiKey = process.env.EXPO_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

export const chatSession = model.startChat({
  generationConfig,
  // safetySettings: Adjust safety settings
  // See https://ai.google.dev/gemini-api/docs/safety-settings
  history: [
    {
      role: "user",
      parts: [
        {
          text: "Generate a Comprehensive Travel Plan:\n- Location: Singapore\n- Start Date: 13 Aug 2024\n- End Date: 15 Aug 2024\n- Duration: 3 Days and 2 Nights\n- Travelers: Couple\n- Budget: Moderate\nDetails to Include:\n1. Transportation:\n   - Flight/Train Options:\n     - Provide flight or train details based on the location and budget.\n     - Include ticket prices and booking URLs.\n2. Accommodation:\n   - Hotel Options:\n     - List of hotels with the following details for each:\n       - Hotel name\n       - Address\n       - Price per night\n       - Image URL\n       - Geo coordinates (latitude, longitude)\n       - Rating\n       - Description\n3. Places to Visit:\n   - Nearby Attractions:\n     - List of must-visit places with the following details for each:\n       - Place name\n       - Description\n       - Image URL\n       - Geo coordinates (latitude, longitude)\n       - Ticket pricing\n       - Estimated time required for visiting\n       - Suggested day and time of visit within the itinerary\n4. Itinerary:\n   - Daily Plan:\n     - Create a day-by-day plan covering all activities and visits, including the best time to visit each attraction.  \n5. Seasonal Advice:\n   - Best Time to Visit:\n     - Information about the ideal time to visit the location.\nOutput Format: Provide all the information in JSON format.\n\nDo not return placeholder data",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "location": "Singapore",\n  "startDate": "13 Aug 2024",\n  "endDate": "15 Aug 2024",\n  "duration": "3 Days and 2 Nights",\n  "travelers": "Couple",\n  "budget": "Moderate",\n  "transportation": {\n    "flight": {\n      "details": "Direct flight from your departure city to Singapore Changi Airport (SIN) with budget airlines like Scoot or AirAsia. Flight duration is approximately 6-8 hours.",\n      "ticketPrice": "Around $400-$600 per person (round trip)",\n      "bookingUrl": "https://www.skyscanner.com/"\n    },\n    "train": {\n      "details": "Not applicable for this itinerary. Singapore has an efficient public transport system with MRT and buses.",\n      "ticketPrice": "N/A",\n      "bookingUrl": "N/A"\n    }\n  },\n  "accommodation": {\n    "hotels": [\n      {\n        "hotelName": "The Fullerton Hotel Singapore",\n        "address": "1 Fullerton Square, Singapore 049178",\n        "pricePerNight": "$400-$600",\n        "imageURL": "https://www.fullertonhotels.com/media/images/fullerton-hotel/hero-desktop.jpg",\n        "geoCoordinates": {\n          "latitude": "1.2821",\n          "longitude": "103.8556"\n        },\n        "rating": "4.5",\n        "description": "A luxurious historic hotel located in the heart of Singapore\'s financial district."\n      },\n      {\n        "hotelName": "The Ritz-Carlton, Millenia Singapore",\n        "address": "7 Raffles Avenue, Singapore 039799",\n        "pricePerNight": "$500-$800",\n        "imageURL": "https://www.ritzcarlton.com/en/hotels/singapore/millenia/media/images/hero/millenia-exterior.jpg",\n        "geoCoordinates": {\n          "latitude": "1.2915",\n          "longitude": "103.8621"\n        },\n        "rating": "4.8",\n        "description": "A stylish hotel with exceptional amenities and panoramic city views."\n      },\n      {\n        "hotelName": "The Singapore Marriott Tang Plaza Hotel",\n        "address": "320 Orchard Road, Singapore 238865",\n        "pricePerNight": "$300-$500",\n        "imageURL": "https://marriott.com/content/dam/marriott/brand/marriott/en/marriott-hotels/property-highlights/singapore/singapore-marriott-tang-plaza-hotel/exterior.jpg",\n        "geoCoordinates": {\n          "latitude": "1.3043",\n          "longitude": "103.8338"\n        },\n        "rating": "4.3",\n        "description": "A well-located hotel near the Orchard Road shopping district, known for its dining options."\n      }\n    ]\n  },\n  "placesToVisit": [\n    {\n      "placeName": "Gardens by the Bay",\n      "description": "A futuristic garden with iconic Supertrees, flower domes, and stunning waterfront views.",\n      "imageURL": "https://www.gardensbythebay.com/media/images/hero-banners/gardens-by-the-bay-supertree-grove-lights.jpg",\n      "geoCoordinates": {\n        "latitude": "1.2828",\n        "longitude": "103.8633"\n      },\n      "ticketPricing": "$28 for adult admission to Flower Dome and Cloud Forest",\n      "estimatedTimeRequired": "3-4 hours",\n      "suggestedDayAndTime": "Day 1: Afternoon"\n    },\n    {\n      "placeName": "Marina Bay Sands",\n      "description": "A luxury resort with an iconic infinity pool on the rooftop, offering panoramic city views.",\n      "imageURL": "https://www.marinabaysands.com/content/dam/marinabaysands/en/images/hero-images/mbs-hero-01.jpg",\n      "geoCoordinates": {\n        "latitude": "1.2833",\n        "longitude": "103.8600"\n      },\n      "ticketPricing": "Free entry to the observation deck (with purchase of admission to ArtScience Museum or Skypark)",\n      "estimatedTimeRequired": "2-3 hours",\n      "suggestedDayAndTime": "Day 1: Evening"\n    },\n    {\n      "placeName": "Singapore Botanic Gardens",\n      "description": "A UNESCO World Heritage Site showcasing diverse flora and fauna, with tranquil walking trails and a Jacob Ballas Children\'s Garden.",\n      "imageURL": "https://www.nparks.gov.sg/gardens-by-the-bay/media/images/gardens-by-the-bay-supertree-grove-lights.jpg",\n      "geoCoordinates": {\n        "latitude": "1.3028",\n        "longitude": "103.8154"\n      },\n      "ticketPricing": "Free entry",\n      "estimatedTimeRequired": "2-3 hours",\n      "suggestedDayAndTime": "Day 2: Morning"\n    },\n    {\n      "placeName": "Sentosa Island",\n      "description": "A resort island with beaches, theme parks, and attractions like Universal Studios Singapore and S.E.A Aquarium.",\n      "imageURL": "https://www.sentosa.com.sg/media/13481/sentosa-island-beach-sunset.jpg",\n      "geoCoordinates": {\n        "latitude": "1.2486",\n        "longitude": "103.8235"\n      },\n      "ticketPricing": "Varies based on chosen attractions",\n      "estimatedTimeRequired": "Full day",\n      "suggestedDayAndTime": "Day 2: Afternoon"\n    },\n    {\n      "placeName": "Hawker Centres",\n      "description": "A must-visit for authentic local cuisine. Popular options include Lau Pa Sat, Maxwell Food Centre, and Tiong Bahru Market.",\n      "imageURL": "https://www.visitsingapore.com/sites/default/files/styles/large_800x533/public/2018-09/hawker-centre-food-stalls-singapore.jpg",\n      "geoCoordinates": "Multiple locations",\n      "ticketPricing": "Varies based on food choices",\n      "estimatedTimeRequired": "1-2 hours",\n      "suggestedDayAndTime": "Every day for meals"\n    }\n  ],\n  "itinerary": {\n    "day1": {\n      "morning": "Arrive at Singapore Changi Airport (SIN), pick up your pre-booked luggage, and proceed to your hotel in the city centre. Check in and freshen up.",\n      "afternoon": "Visit Gardens by the Bay for its iconic Supertree Grove, Flower Dome, and Cloud Forest.",\n      "evening": "Explore Marina Bay Sands and enjoy a drink at one of the rooftop bars.",\n      "night": "Enjoy dinner at a hawker centre for authentic local cuisine."\n    },\n    "day2": {\n      "morning": "Explore the Singapore Botanic Gardens, a UNESCO World Heritage Site with beautiful walking trails.",\n      "afternoon": "Head to Sentosa Island to experience the beaches, Universal Studios Singapore, or S.E.A Aquarium.",\n      "evening": "Dinner at a restaurant in the Marina Bay area."\n    },\n    "day3": {\n      "morning": "Enjoy breakfast at your hotel, and do some last-minute shopping at Orchard Road.",\n      "afternoon": "Check out from your hotel and head to Changi Airport for your flight home."\n    }\n  },\n  "seasonalAdvice": {\n    "bestTimeToVisit": "Singapore is a year-round destination. The best time to visit is during the dry season, from February to April, with pleasant weather and less humidity. However, it can get quite warm and humid, so bring light clothing and stay hydrated."\n  }\n}\n```',
        },
      ],
    },
  ],
});

// const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
// console.log(result.response.text());
