export function randomItem<T>(data: T[]):T {
    return data[Math.floor(Math.random() * data.length)];
}