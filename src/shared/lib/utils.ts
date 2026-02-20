export const extractIdFromUrl = (url: string): string => {
    if (!url) throw new Error('URL is empty');
    const parts = url.split('/').filter(Boolean);
    const id = parts.pop();
    if (!id || isNaN(Number(id))) {
        throw new Error(`Could not extract valid ID from URL: ${url}`);
    }
    return id;
};
