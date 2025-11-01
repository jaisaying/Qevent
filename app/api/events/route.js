import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const eventData = await request.json();
    
    // Simulate successful creation
    console.log('🎉 Event created locally:', eventData);
    
    return NextResponse.json(
      { 
        message: 'Event created successfully',
        event: eventData,
        id: eventData.id
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create event' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { message: 'Events API working' },
    { status: 200 }
  );
}