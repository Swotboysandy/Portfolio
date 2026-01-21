import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const DATA_FILE_PATH = path.join(process.cwd(), 'views.json');

function getViews() {
    try {
        if (!fs.existsSync(DATA_FILE_PATH)) {
            // Initialize if not exists
            fs.writeFileSync(DATA_FILE_PATH, JSON.stringify({ count: 0 }));
            return 0;
        }
        const fileContent = fs.readFileSync(DATA_FILE_PATH, 'utf-8');
        const data = JSON.parse(fileContent);
        return data.count || 0;
    } catch (error) {
        console.error("Error reading views file:", error);
        return 0;
    }
}

function incrementViews() {
    try {
        let count = getViews();
        count += 1;
        fs.writeFileSync(DATA_FILE_PATH, JSON.stringify({ count }));
        return count;
    } catch (error) {
        console.error("Error writing views file:", error);
        return 0;
    }
}

export async function GET() {
    const count = getViews();
    return NextResponse.json({ count });
}

export async function POST() {
    const count = incrementViews();
    return NextResponse.json({ count });
}
