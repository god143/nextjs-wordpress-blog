// app/api/revalidate/route.js

import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache'; // Import revalidatePath


export async function GET(request) {
 

  try {
    await revalidatePath('/blog');
    return NextResponse.json({ message: 'Revalidated successfully' });
  } catch (err) {
    return NextResponse.json({ message: 'Error revalidating', error: err.message }, { status: 500 });
  }
}
