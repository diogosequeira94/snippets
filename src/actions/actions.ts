'use server';

import { db } from '@/db';

export async function editSnippet(){
    await db.snippet.update
}