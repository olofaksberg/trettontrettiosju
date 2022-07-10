export interface IGET {
    (endpoint: string, signal?: AbortSignal): {
        success: boolean,
        message: string,
        data: [] | null
    } | Promise<any>
}