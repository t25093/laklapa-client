export function loadJson<T>(key: string, fallback: T): T {
        try {
        const value = localStorage.getItem(key);  
        if (value !== null) {
            return JSON.parse(value) as T;
        } 
    }
    catch {
        return fallback;
    }
    return fallback;
}
    
export function saveJson(key: string, value: unknown) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        }
        catch {
        }
}

export function removeKey(key: string) {
        try {
            localStorage.removeItem(key);
        }
        catch {
        }
}
