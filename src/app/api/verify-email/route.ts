import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  if (!process.env.ABSTRACT_API_KEY) {
    throw new Error('AbstractAPI key not configured');
  }

  try {
    const { email } = await request.json();

    const response = await fetch(
      `https://emailvalidation.abstractapi.com/v1/?api_key=${process.env.ABSTRACT_API_KEY}&email=${encodeURIComponent(email)}`,
    );

    const data = await response.json();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ error: 'Verification failed' }, { status: 500 });
  }
}
