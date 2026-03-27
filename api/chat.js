import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export default async function handler(req, res) {
  try {
    console.log("API KEY EXISTS:", !!process.env.GEMINI_API_KEY);

    if (req.method !== "POST") {
      return res.status(405).json({
        error: "Method not allowed",
      });
    }

    const { message } = req.body;
    
    console.log("User message:", message);
    
    if (!message) {
      return res.status(400).json({
        error: "Message is required",
      });
    }

    // Regulatory system prompt
    const systemPrompt = `
You are Ashford University Assistant.

Your role:
Help students with official university information.

Allowed topics:
- Admissions
- Courses
- Attendance
- Fees
- Timetable
- Exams
- Campus services
- Scholarships
- Academic policies

Rules:

1) Be accurate and professional
2) Keep responses short and clear
3) Do NOT provide:
   - Legal advice
   - Medical advice
   - Financial investment advice
   - Personal opinions
4) If the question is unrelated to university services:

Respond exactly:

"I can assist only with university-related queries. Please contact the appropriate department."

5) If unsure about policy:

Respond exactly:

"Please contact the university administration for confirmation."

Tone:
Helpful, polite, concise.
`;

    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
    });

    const result = await model.generateContent(
      `${systemPrompt}\n\nStudent Question: ${message}`
    );

    const response = await result.response;

    const text = response.text();

    res.status(200).json({
      reply: text,
    });

  } catch (error) {
  console.error("FULL ERROR:", error);

  res.status(500).json({
    error: error.message,
  });
}
}