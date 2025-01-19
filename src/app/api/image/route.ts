import { checkApiLimit, increaseApiLimit } from "../../../lib/api-limit";
import { checkSubscription } from "../../../lib/subscription";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { userId } = await auth();
    const body = await req.json();
    const { prompt, amount = 1, resolution = "512x512" } = body;

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    if (!openai.apiKey) {
      return NextResponse.json(
        { error: "OpenAI API key not configured" },
        { status: 500 }
      );
    }

    if (!prompt || typeof prompt !== "string") {
      return NextResponse.json({ error: "Invalid prompt" }, { status: 400 });
    }

    if (isNaN(amount) || amount < 1 || amount > 10) {
      return NextResponse.json(
        { error: "Amount must be between 1 and 10" },
        { status: 400 }
      );
    }

    const validResolutions = ["256x256", "512x512", "1024x1024"];
    if (!validResolutions.includes(resolution)) {
      return NextResponse.json(
        { error: "Invalid resolution" },
        { status: 400 }
      );
    }

    const freeTrial = await checkApiLimit();
    const isPro = await checkSubscription();

    if (!freeTrial && !isPro) {
      return new NextResponse("Free trial has expired.", { status: 403 });
    }

    const response = await openai.images.generate({
      prompt,
      n: parseInt(amount, 10),
      size: resolution,
    });

    if(!isPro){
      await increaseApiLimit();
    }

    return NextResponse.json({ content: response.data });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("[IMAGE_GENERATION_ERROR]", error.message);
    } else {
      console.error("[IMAGE_GENERATION_ERROR]", "Unknown error");
    }

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
