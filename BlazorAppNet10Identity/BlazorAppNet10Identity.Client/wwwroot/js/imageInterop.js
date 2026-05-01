export async function fetchImageBytes(url) {
    const response = await fetch(url);
    const buffer = await response.arrayBuffer();
    return new Uint8Array(buffer);
}