export const required = value => 
    value ? undefined : 'Value is required'

export const minLength = value => 
    value.length < 4 ? 'Value must be at least 4 characters' : undefined

export const maxLength = value => 
    value.length > 10 ? 'Value is too long' : undefined

export const passwordMatches = (value, allValues) => 
    value === allValues.password ? undefined : 'Passwords must match'

export async function asyncValidate(values) {
    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
    await sleep(1000)
    if ((['kent', 'andy', 'john', 'joel']).includes(values.username)) {
        return Promise.reject({
            username: 'Username already taken'
        })
    }
}

export const validate = values => {
    const errors = {};
    if (!values.firstname) {
        errors.firstname = 'First name is required';
    }

    if (!values.surname) {
        errors.surname = 'Surname is required'
    }

    if (!values.username) {
        errors.username = 'Usernmae is required'
    } else if (values.username.length < 4) {
        errors.username = 'Username must be at least 4'
    }

    return errors;
}