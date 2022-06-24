const SUPABASE_URL = 'https://gxwgjhfyrlwiqakdeamc.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNjQxMTMxMiwiZXhwIjoxOTUxOTg3MzEyfQ.PHekiwfLxT73qQsLklp0QFEfNx9NlmkssJFDnlvNIcA';
const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getBeanies(title, animal, astroSign, { start, end }) {
    let query = client
        .from('beanie_babies')
        .select(`
        id,
        link,
        image,
        theme,
        astroSign,
        color,
        title,
        birthday,
        releaseDate,
        releaseYear,
        animal,
        subtheme`,
        { count: 'exact' }
        );

    if (title) {
        query = query.ilike('title', `%${title}%`);
    }

    if (animal) {
        query = query.ilike('animal', `%${animal}%`);
    }

    if (astroSign) {
        query = query.ilike('astroSign', astroSign);
    }
    
    query = query.range(start, end);
    const response = await query;
    return response;
}

export async function getBeanie(id) {
    const response = await client 
        .from('beanie_babies')
        .select()
        .match({ id: id })
        .single();

    return response.data;
}