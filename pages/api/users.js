import { NextResponse } from "next/server";
import { user } from "../../db";

export function GET() {
    const data = user;
    return NextResponse.json(data, { status: 200 })
}

// export async function POST(request) {
//     let payload = await request.json();
 
//     if (!payload.firstName || !payload.LastName || !payload.emailAddress || !payload.mobileNumber || !payload.password || !confirmPassword) {
//         return NextResponse.json({ result: 'require field  not found', success: false }, { status: 400 })
//     }
//     retu