// src/pages/api/cards.ts
import type { APIRoute } from 'astro';
import { supabase } from '../../utils/supabase';

export const GET: APIRoute = async ({ url }) => {
    const collection = url.searchParams.get('collection');
    if (!collection) {
        return new Response(JSON.stringify({ error: 'No collection provided' }), { status: 400 });
    }
    const { data, error } = await supabase.from('t_card').select('*').eq('collection_code', collection).order('code', { ascending: true });

    if (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
    return new Response(JSON.stringify(data), { status: 200 });
};
