export type TransformResFn<T, R = unknown> = (res: R) => T;
export type TErrorResponse = {
    message?: string,
}
