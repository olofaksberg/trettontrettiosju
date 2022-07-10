export interface IGET {
    (endpoint: string, signal?: AbortSignal): any
}