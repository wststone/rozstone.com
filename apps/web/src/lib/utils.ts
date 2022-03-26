export function randomItem<T>(data: T[]): T {
	return data[Math.floor(Math.random() * data.length)];
}

export function generateId(): string {
	return Math.random().toString(36).substring(2, 9);
}
