export const SelectTravellerList = [
  {
    title: "Solo",
    desc: "A sole travels in exploration.",
    icon: "🚶‍♂️",
    people: "1 person",
  },
  {
    id: 2,
    title: "Couple",
    desc: "Two travels in tandem.",
    icon: "🥂",
    people: "2 people",
  },
  {
    id: 3,
    title: "Family",
    desc: "A family travels together.",
    icon: "🏡",
    people: "3-5 people",
  },
  {
    id: 4,
    title: "Group",
    desc: "A group travels in numbers.",
    icon: "🔥",
    people: "5 - 10 people",
  },
];

export const SelectBudgetOptions = [
  {
    id: 1,
    title: "Cheap",
    desc: "Stay conscious of your costs.",
    icon: "💵",
  },
  {
    id: 2,
    title: "Moderate",
    desc: "Keep cost on the average level.",
    icon: "💰",
  },
  {
    id: 3,
    title: "Expensive",
    desc: "Stay on top of your costs.",
    icon: "💸",
  },
];

export const AI_PROMPT = `Generate a Comprehensive Travel Plan:
- Location: {location}
- Start Date: {startDate}
- End Date: {endDate}
- Duration: {totalDays} Days and {totalNights} Nights
- Travelers: {travellers}
- Budget: {budget}
Details to Include:
1. Transportation:
   - Flight/Train Options: 
     - Provide flight or train details based on the location and budget.
     - Include ticket prices and booking URLs.
2. Accommodation:
   - Hotel Options:
     - List of hotels with the following details for each:
       - Hotel name
       - Address
       - Price per night
       - Image URL
       - Geo coordinates (latitude, longitude)
       - Rating
       - Description
3. Places to Visit:
   - Nearby Attractions: 
     - List of must-visit places with the following details for each:
       - Place name
       - Description
       - Image URL
       - Geo coordinates (latitude, longitude)
       - Ticket pricing
       - Estimated time required for visiting
       - Suggested day and time of visit within the itinerary
4. Itinerary:
   - Daily Plan:
     - Create a day-by-day plan covering all activities and visits, including the best time to visit each attraction. 
5. Seasonal Advice:
   - Best Time to Visit: 
     - Information about the ideal time to visit the location.
Output Format: Provide all the information in JSON format.
`;
