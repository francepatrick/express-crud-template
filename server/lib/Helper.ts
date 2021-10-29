

export const errorMessage = (res, message, errorCode = 422) => {
    return res.status(errorCode).send({ message })
}
