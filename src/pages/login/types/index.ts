export type TLoginRawResponse = Partial<{
    jwt: string,
    user: {
        id: number,
        username: string,
        email: string,
        provider: string,
        confirmed: boolean,
        blocked: boolean,
        createdAt: string,
        updatedAt: string
    }
}>

export type TLoginResponse = {
    message: string,
}